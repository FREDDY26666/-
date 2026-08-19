'use strict';
/* 지식전쟁 (가제) — 핫시트 로컬 프로토타입 엔진
 * 데이터는 data.js 의 window.GAME_DATA 를 사용한다.
 * 룰북(game/RULES.md) 6장을 최대한 따르되, 캐릭터 특수능력은
 * game/data/generate_prototype_data.js 의 SKILLS 매핑으로 단순화해 실제로 동작시킨다.
 */

const FACTIONS = GAME_DATA.characters; // [{id,name,color,icon,tagline,characters:[...]}]
const ALL_CARDS = GAME_DATA.cards; // 260장 원본 풀
const SKILLS = GAME_DATA.skills; // characterId -> {kind,cost,uses,magnitude,...}

const SUDDEN_DEATH_ROUND = 15;
const START_HAND_SIZE = 5;
const MAX_HAND_SIZE = 6;

let state = null; // 게임 진행 중 상태
let uiMode = null; // 'main' | 'attack-target' | 'skill-target' | 'defense'
let pendingAttack = null; // {attackerIdx, cardInstance, ...}

// ---------------------------------------------------------------------------
// 유틸
// ---------------------------------------------------------------------------

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function findFaction(name) {
  return FACTIONS.find((f) => f.name === name);
}

function findCharacter(charId) {
  for (const f of FACTIONS) {
    const c = f.characters.find((ch) => ch.id === charId);
    if (c) return c;
  }
  return null;
}

function log(msg) {
  const el = document.getElementById('log');
  const div = document.createElement('div');
  div.className = 'entry';
  div.textContent = msg;
  el.prepend(div);
}

function factionMatches(player, card) {
  return card.subject === player.faction.name;
}

// ---------------------------------------------------------------------------
// 덱 관리
// ---------------------------------------------------------------------------

let drawPile = [];
let instanceCounter = 0;

function refillDrawPileIfNeeded() {
  if (drawPile.length === 0) {
    drawPile = shuffle(ALL_CARDS);
    log('카드 더미를 다시 섞었습니다.');
  }
}

function drawCard() {
  refillDrawPileIfNeeded();
  const base = drawPile.pop();
  instanceCounter += 1;
  return Object.assign({}, base, { instanceId: base.id + '#' + instanceCounter });
}

function drawHand(n) {
  const hand = [];
  for (let i = 0; i < n; i++) hand.push(drawCard());
  return hand;
}

// ---------------------------------------------------------------------------
// 셋업 화면
// ---------------------------------------------------------------------------

const setupState = [
  { factionId: null, charId: null },
  { factionId: null, charId: null },
  { factionId: null, charId: null },
  { factionId: null, charId: null }
];

function renderSetupRows() {
  const container = document.getElementById('setup-rows');
  container.innerHTML = '';
  setupState.forEach((row, idx) => {
    const div = document.createElement('div');
    div.className = 'player-setup-row';

    const label = document.createElement('div');
    label.textContent = `P${idx + 1}`;

    const factionSelect = document.createElement('select');
    factionSelect.innerHTML =
      '<option value="">진영 선택</option>' +
      FACTIONS.map((f) => `<option value="${f.id}" ${f.id === row.factionId ? 'selected' : ''}>${f.icon} ${f.name}</option>`).join('');
    factionSelect.addEventListener('change', () => {
      row.factionId = factionSelect.value || null;
      row.charId = null;
      renderSetupRows();
      checkStartReady();
    });

    const charSelect = document.createElement('select');
    const faction = FACTIONS.find((f) => f.id === row.factionId);
    if (faction) {
      charSelect.innerHTML = faction.characters
        .map((c) => `<option value="${c.id}" ${c.id === row.charId ? 'selected' : ''}>${c.name} (${c.concept})</option>`)
        .join('');
      if (!row.charId) row.charId = faction.characters[0].id;
    } else {
      charSelect.innerHTML = '<option value="">진영을 먼저 선택</option>';
      charSelect.disabled = true;
    }
    charSelect.addEventListener('change', () => {
      row.charId = charSelect.value || null;
      checkStartReady();
    });

    div.appendChild(label);
    div.appendChild(factionSelect);
    div.appendChild(charSelect);
    container.appendChild(div);
  });
}

function checkStartReady() {
  const ready = setupState.every((r) => r.factionId && r.charId);
  document.getElementById('start-btn').disabled = !ready;
}

document.getElementById('assign-btn').addEventListener('click', () => {
  const shuffledFactions = shuffle(FACTIONS).slice(0, 4);
  setupState.forEach((row, idx) => {
    row.factionId = shuffledFactions[idx].id;
    row.charId = shuffledFactions[idx].characters[0].id;
  });
  renderSetupRows();
  checkStartReady();
});

document.getElementById('start-btn').addEventListener('click', startGame);

renderSetupRows();

// ---------------------------------------------------------------------------
// 게임 시작
// ---------------------------------------------------------------------------

function startGame() {
  drawPile = shuffle(ALL_CARDS);
  instanceCounter = 0;

  const players = setupState.map((row, idx) => {
    const faction = FACTIONS.find((f) => f.id === row.factionId);
    const character = faction.characters.find((c) => c.id === row.charId);
    const skill = SKILLS[character.id];
    return {
      idx,
      name: `P${idx + 1}`,
      faction,
      character,
      hp: character.hp,
      maxHp: character.hp,
      mp: character.mp,
      maxMp: character.mp,
      hand: drawHand(START_HAND_SIZE),
      alive: true,
      skill,
      skillUsesLeft: skill.uses,
      // 특수능력 상태
      growthStacks: 0,
      subjectPlayCount: {},
      lastAttackCardName: null,
      shieldFlatNext: 0,
      shieldFractionNext: 0,
      immuneNext: false,
      mpDiscountNext: 0,
      extraActionAvailable: false,
      trueStrikeActive: false,
      doubleNextDamage: false,
      defenseHalvedNext: false,
      totalDamageDealt: 0
    };
  });

  state = {
    players,
    round: 1,
    turnOrder: [0, 1, 2, 3],
    turnPointer: 0,
    suddenDeath: false,
    suddenDeathTriggeredOnce: false
  };

  document.getElementById('setup-screen').classList.add('hidden');
  document.getElementById('round-badge').classList.remove('hidden');
  log(`게임 시작! ${players.map((p) => `${p.name}=${p.faction.name}/${p.character.name}`).join(', ')}`);

  gateTo(state.turnOrder[state.turnPointer], 'turn');
}

// ---------------------------------------------------------------------------
// 화면 전환 (핫시트 프라이버시용 "다음 사람에게 넘기기" 게이트)
// ---------------------------------------------------------------------------

function gateTo(playerIdx, purpose) {
  uiMode = 'main';
  const p = state.players[playerIdx];
  document.getElementById('game-screen').classList.add('hidden');
  document.getElementById('pass-device').classList.remove('hidden');
  const title =
    purpose === 'turn'
      ? `${p.name} (${p.character.name}) 차례입니다`
      : `${p.name}님, 방어 여부를 결정하세요`;
  document.getElementById('pass-title').textContent = title;

  const btn = document.getElementById('pass-continue-btn');
  btn.onclick = () => {
    document.getElementById('pass-device').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    if (purpose === 'turn') {
      uiMode = 'main';
      renderAll();
    } else {
      uiMode = 'defense';
      renderAll();
    }
  };
}

// ---------------------------------------------------------------------------
// 렌더링
// ---------------------------------------------------------------------------

function currentPlayer() {
  return state.players[state.turnOrder[state.turnPointer]];
}

function alivePlayers() {
  return state.players.filter((p) => p.alive);
}

function renderAll() {
  renderRoundBadge();
  renderBoard();
  if (uiMode === 'defense') {
    renderDefensePanel();
  } else {
    renderActionPanel();
  }
}

function renderRoundBadge() {
  const el = document.getElementById('round-badge');
  el.textContent = `라운드 ${state.round}` + (state.suddenDeath ? ' · 서든데스!' : '');
  el.classList.toggle('sudden', state.suddenDeath);
}

function statusTags(p) {
  const tags = [];
  if (p.growthStacks > 0) tags.push(`성장+${p.growthStacks}`);
  if (p.shieldFlatNext > 0) tags.push(`방패+${p.shieldFlatNext}`);
  if (p.shieldFractionNext > 0) tags.push(`감쇄${Math.round(p.shieldFractionNext * 100)}%`);
  if (p.immuneNext) tags.push('무적대기');
  if (p.trueStrikeActive) tags.push('필중대기');
  if (p.doubleNextDamage) tags.push('2배대기');
  if (p.defenseHalvedNext) tags.push('방어반감');
  if (p.mpDiscountNext > 0) tags.push(`MP할인${p.mpDiscountNext}`);
  if (p.extraActionAvailable) tags.push('추가행동');
  return tags.join(' · ');
}

function renderBoard() {
  const board = document.getElementById('players-board');
  board.innerHTML = '';
  state.players.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'player-card' + (!p.alive ? ' dead' : '') + (p === currentPlayer() && uiMode === 'main' ? ' active' : '');
    card.style.borderLeft = `4px solid ${p.faction.color}`;

    const hpPct = Math.max(0, Math.round((p.hp / p.maxHp) * 100));
    const mpPct = Math.max(0, Math.round((p.mp / p.maxMp) * 100));

    card.innerHTML = `
      <div class="faction-tag">${p.name} · ${p.faction.icon} ${p.faction.name}</div>
      <h3>${p.character.name} <span style="font-weight:400;color:var(--muted);font-size:12px">(${p.character.concept})</span></h3>
      <div class="bar-row"><span class="label">HP</span><div class="bar-track"><div class="bar-fill hp" style="width:${hpPct}%"></div></div><span class="bar-num">${Math.max(0, p.hp)}/${p.maxHp}</span></div>
      <div class="bar-row"><span class="label">MP</span><div class="bar-track"><div class="bar-fill mp" style="width:${mpPct}%"></div></div><span class="bar-num">${Math.max(0, p.mp)}/${p.maxMp}</span></div>
      <div class="status-line">${statusTags(p)}</div>
    `;

    if ((uiMode === 'attack-target' || uiMode === 'skill-target') && p.alive && p !== currentPlayer()) {
      const btn = document.createElement('button');
      btn.className = 'target-btn primary';
      btn.textContent = uiMode === 'attack-target' ? '이 대상 공격' : '이 대상 지정';
      btn.onclick = () => {
        if (uiMode === 'attack-target') resolveAttackTarget(p.idx);
        else resolveSkillTarget(p.idx);
      };
      card.appendChild(btn);
    }

    board.appendChild(card);
  });
}

function cardEl(cardInst, { disabled = false, onClick = null } = {}) {
  const el = document.createElement('button');
  el.className = `game-card subject-${cardInst.subject}`;
  el.disabled = disabled;
  const effectText =
    cardInst.type === '공격'
      ? `공격 · 데미지 ${cardInst.damage}`
      : cardInst.type === '방어'
      ? `방어 · 감소 ${cardInst.shield}`
      : `유틸 · 회복 ${cardInst.utility_value}`;
  el.innerHTML = `
    <div class="card-top"><span class="rarity-${cardInst.rarity}">${cardInst.rarity}</span><span>${cardInst.subject} · MP ${cardInst.mp}</span></div>
    <div class="card-name">${cardInst.name}</div>
    <div class="card-effect">${effectText}</div>
    <div class="card-flavor">${cardInst.flavor}</div>
  `;
  if (onClick) el.addEventListener('click', onClick);
  return el;
}

function effectiveCost(player, cardInst) {
  let cost = cardInst.mp;
  if (factionMatches(player, cardInst)) cost = Math.max(1, cost - 1);
  cost = Math.max(0, cost - (player.mpDiscountNext || 0));
  if (player.extraActionAvailable) cost = 0;
  return cost;
}

function renderActionPanel() {
  const p = currentPlayer();
  document.getElementById('action-title').textContent = `${p.name} · ${p.character.name}의 턴`;
  document.getElementById('turn-info').textContent =
    uiMode === 'attack-target'
      ? '공격 대상을 보드에서 선택하세요.'
      : uiMode === 'skill-target'
      ? '특수능력 대상을 보드에서 선택하세요.'
      : `MP ${p.mp}/${p.maxMp} · 손패에서 공격/유틸 카드 1장을 내거나, 특수능력을 쓰거나, 패스하세요.`;

  renderSkillArea(p);

  const cardArea = document.getElementById('card-area');
  cardArea.innerHTML = '';
  const passBtn = document.getElementById('pass-turn-btn');

  if (uiMode !== 'main') {
    passBtn.disabled = true;
    return;
  }
  passBtn.disabled = false;
  passBtn.onclick = () => endTurn();

  p.hand.forEach((cardInst) => {
    if (cardInst.type === '방어') return; // 방어카드는 반응용, 본인 턴에는 낼 수 없음
    const cost = effectiveCost(p, cardInst);
    const affordable = p.mp >= cost;
    const el = cardEl(cardInst, {
      disabled: !affordable,
      onClick: () => {
        if (cardInst.type === '공격') {
          pendingAttack = { cardInst };
          uiMode = 'attack-target';
          renderAll();
        } else {
          playUtilityCard(p, cardInst);
        }
      }
    });
    cardArea.appendChild(el);
  });
}

function renderSkillArea(p) {
  const area = document.getElementById('skill-area');
  const skill = p.skill;
  const passiveKinds = ['growth', 'combo', 'repeat_combo', 'underdog'];

  if (passiveKinds.includes(skill.kind)) {
    area.innerHTML = `<div class="skill-box"><div class="info"><b>${skill.label}</b> (패시브, 자동 적용) — ${p.character.special.effect}</div></div>`;
    return;
  }

  const box = document.createElement('div');
  box.className = 'skill-box';
  const cost = skill.cost;
  const usesLeft = skill.uses === Infinity ? '∞' : p.skillUsesLeft;
  const affordable = p.mp >= cost && p.skillUsesLeft > 0 && uiMode === 'main';
  box.innerHTML = `<div class="info"><b>${skill.label}</b> (MP ${cost}, 남은 횟수 ${usesLeft}) — ${p.character.special.effect}</div>`;
  const btn = document.createElement('button');
  btn.textContent = '특수능력 사용';
  btn.disabled = !affordable;
  btn.onclick = () => useSkill(p);
  box.appendChild(btn);
  area.appendChild(box);
}

function renderDefensePanel() {
  const defenderIdx = pendingAttack.defenderIdx;
  const defender = state.players[defenderIdx];
  document.getElementById('action-title').textContent = `${defender.name} · 방어 선택`;
  document.getElementById('turn-info').textContent = `${pendingAttack.attackerName}의 [${pendingAttack.cardInst.name}] 공격! (예상 피해 ${pendingAttack.previewDamage})`;
  document.getElementById('skill-area').innerHTML = '';

  const cardArea = document.getElementById('card-area');
  cardArea.innerHTML = '';
  const passBtn = document.getElementById('pass-turn-btn');
  passBtn.disabled = true;

  if (state.suddenDeath) {
    cardArea.innerHTML = '<div class="info" style="color:var(--danger)">서든데스 중에는 방어 카드를 사용할 수 없습니다.</div>';
  } else {
    defender.hand
      .filter((c) => c.type === '방어')
      .forEach((cardInst) => {
        const cost = effectiveCost(defender, cardInst);
        const affordable = defender.mp >= cost;
        const el = cardEl(cardInst, {
          disabled: !affordable,
          onClick: () => resolveDefense(cardInst)
        });
        cardArea.appendChild(el);
      });
  }

  const noDefendBtn = document.createElement('button');
  noDefendBtn.className = 'game-card';
  noDefendBtn.style.minHeight = 'auto';
  noDefendBtn.textContent = '방어하지 않음';
  noDefendBtn.onclick = () => resolveDefense(null);
  cardArea.appendChild(noDefendBtn);
}

// ---------------------------------------------------------------------------
// 액션: 유틸 카드
// ---------------------------------------------------------------------------

function playUtilityCard(p, cardInst) {
  const cost = effectiveCost(p, cardInst);
  if (p.mp < cost) return;
  const wasFree = p.extraActionAvailable;
  p.mp -= cost;
  if (p.mpDiscountNext > 0) p.mpDiscountNext = 0;
  if (wasFree) p.extraActionAvailable = false;

  let heal = cardInst.utility_value;
  if (factionMatches(p, cardInst)) heal = Math.round(heal * 1.2);
  p.hp = Math.min(p.maxHp, p.hp + heal);

  removeFromHandAndDraw(p, cardInst);
  log(`${p.name}이(가) [${cardInst.name}]을 사용해 HP ${heal} 회복. (${p.hp}/${p.maxHp})`);

  if (wasFree) {
    renderAll();
  } else {
    endTurn();
  }
}

function removeFromHandAndDraw(p, cardInst) {
  const i = p.hand.findIndex((c) => c.instanceId === cardInst.instanceId);
  if (i >= 0) p.hand.splice(i, 1);
  if (p.hand.length < MAX_HAND_SIZE) p.hand.push(drawCard());
}

// ---------------------------------------------------------------------------
// 액션: 공격
// ---------------------------------------------------------------------------

function resolveAttackTarget(targetIdx) {
  const p = currentPlayer();
  const cardInst = pendingAttack.cardInst;
  const cost = effectiveCost(p, cardInst);
  if (p.mp < cost) {
    uiMode = 'main';
    pendingAttack = null;
    renderAll();
    return;
  }

  const wasFree = p.extraActionAvailable;
  p.mp -= cost;
  if (p.mpDiscountNext > 0) p.mpDiscountNext = 0;
  if (wasFree) p.extraActionAvailable = false;

  let dmg = cardInst.damage;
  if (factionMatches(p, cardInst)) dmg = Math.round(dmg * 1.2);

  let multiplier = 1;
  if (p.skill.kind === 'combo') {
    const subj = p.faction.name;
    p.subjectPlayCount[subj] = (p.subjectPlayCount[subj] || 0) + (cardInst.subject === subj ? 1 : 0);
    if (p.subjectPlayCount[subj] >= p.skill.threshold) multiplier += p.skill.magnitude;
  }
  if (p.skill.kind === 'repeat_combo') {
    if (p.lastAttackCardName === cardInst.name) multiplier += p.skill.magnitude;
  }
  if (p.skill.kind === 'underdog') {
    if (p.hp / p.maxHp <= p.skill.threshold) multiplier += p.skill.magnitude;
  }
  dmg = Math.round(dmg * multiplier);
  if (p.skill.kind === 'growth') dmg += p.growthStacks;
  if (p.doubleNextDamage) {
    dmg *= 2;
    p.doubleNextDamage = false;
  }

  p.lastAttackCardName = cardInst.name;
  removeFromHandAndDraw(p, cardInst);

  pendingAttack = {
    attackerIdx: p.idx,
    attackerName: p.name,
    defenderIdx: targetIdx,
    cardInst,
    baseDamage: dmg,
    previewDamage: dmg,
    ignoreDefense: p.trueStrikeActive
  };
  if (p.trueStrikeActive) p.trueStrikeActive = false;

  uiMode = 'main';
  const defender = state.players[targetIdx];

  if (defender.immuneNext) {
    defender.immuneNext = false;
    log(`${p.name}의 [${cardInst.name}] 공격을 ${defender.name}이(가) 무적 상태로 완전히 막았습니다!`);
    pendingAttack = null;
    if (wasFree) renderAll();
    else endTurn();
    return;
  }

  if (pendingAttack.ignoreDefense) {
    applyFinalDamage(pendingAttack, 0);
    if (wasFree) renderAll();
    else endTurn();
    return;
  }

  // 자동 방패(shieldFlatNext / shieldFractionNext) 선적용
  let dmgAfterAuto = dmg;
  if (defender.shieldFlatNext > 0) {
    dmgAfterAuto = Math.max(0, dmgAfterAuto - defender.shieldFlatNext);
    defender.shieldFlatNext = 0;
  }
  if (defender.shieldFractionNext > 0) {
    dmgAfterAuto = Math.round(dmgAfterAuto * (1 - defender.shieldFractionNext));
    defender.shieldFractionNext = 0;
  }
  pendingAttack.previewDamage = dmgAfterAuto;
  pendingAttack.baseDamage = dmgAfterAuto;
  pendingAttack.pendingFreeAction = wasFree;

  const hasDefenseCard = !state.suddenDeath && defender.hand.some((c) => c.type === '방어');
  if (!hasDefenseCard) {
    // 방어카드가 없어도 화면은 보여주고 바로 "방어하지 않음"으로 넘어가되, 상대에게 넘기지 않고 즉시 처리
    applyFinalDamage(pendingAttack, 0);
    if (wasFree) renderAll();
    else endTurn();
    return;
  }

  gateTo(targetIdx, 'defense');
}

function resolveDefense(cardInst) {
  const defender = state.players[pendingAttack.defenderIdx];
  let reduction = 0;
  if (cardInst) {
    const cost = effectiveCost(defender, cardInst);
    if (defender.mp >= cost) {
      defender.mp -= cost;
      if (defender.mpDiscountNext > 0) defender.mpDiscountNext = 0;
      reduction = cardInst.shield;
      if (factionMatches(defender, cardInst)) reduction = Math.round(reduction * 1.2);
      if (defender.defenseHalvedNext) {
        reduction = Math.round(reduction * 0.5);
        defender.defenseHalvedNext = false;
      }
      removeFromHandAndDraw(defender, cardInst);
      log(`${defender.name}이(가) [${cardInst.name}]로 방어! 피해 ${reduction} 감소.`);
    }
  } else {
    log(`${defender.name}은(는) 방어하지 않았습니다.`);
  }
  applyFinalDamage(pendingAttack, reduction);

  const attacker = state.players[pendingAttack.attackerIdx];
  const wasFree = pendingAttack.pendingFreeAction;
  pendingAttack = null;

  if (!checkWin()) {
    if (wasFree) {
      // 무료 추가행동이었다면 턴을 끝내지 않고 공격자에게 다시 넘겨 정규 행동을 이어가게 한다.
      gateTo(attacker.idx, 'turn');
    } else {
      // 공격자의 턴을 종료하고 다음 생존 플레이어로 넘긴다.
      endTurn();
    }
  }
}

function applyFinalDamage(atk, extraReduction) {
  const defender = state.players[atk.defenderIdx];
  const attacker = state.players[atk.attackerIdx];
  const finalDmg = Math.max(0, atk.baseDamage - extraReduction);
  defender.hp = Math.max(0, defender.hp - finalDmg);
  attacker.totalDamageDealt += finalDmg;
  log(`${attacker.name}의 [${atk.cardInst.name}] → ${defender.name}에게 ${finalDmg} 피해! (${defender.hp}/${defender.maxHp})`);
  if (defender.hp <= 0 && defender.alive) {
    defender.alive = false;
    log(`💀 ${defender.name} (${defender.character.name}) 탈락!`);
  }
}

// ---------------------------------------------------------------------------
// 특수능력
// ---------------------------------------------------------------------------

function useSkill(p) {
  const skill = p.skill;
  if (p.mp < skill.cost || p.skillUsesLeft <= 0) return;

  if (skill.kind === 'sunder') {
    uiMode = 'skill-target';
    renderAll();
    return;
  }

  p.mp -= skill.cost;
  p.skillUsesLeft -= 1;

  switch (skill.kind) {
    case 'extra_action':
      p.extraActionAvailable = true;
      log(`${p.name}이(가) [${skill.label}] 발동! 이번 턴 추가 행동을 얻었습니다(비용 무시).`);
      break;
    case 'true_strike':
      p.trueStrikeActive = true;
      log(`${p.name}이(가) [${skill.label}] 발동! 다음 공격은 방어를 무시합니다.`);
      break;
    case 'heal_self': {
      p.hp = Math.min(p.maxHp, p.hp + skill.magnitude);
      log(`${p.name}이(가) [${skill.label}] 발동! HP ${skill.magnitude} 회복. (${p.hp}/${p.maxHp})`);
      break;
    }
    case 'shield_self':
      p.shieldFlatNext += skill.magnitude;
      log(`${p.name}이(가) [${skill.label}] 발동! 다음 피해 ${skill.magnitude} 감소 예정.`);
      break;
    case 'immune':
      p.immuneNext = true;
      log(`${p.name}이(가) [${skill.label}] 발동! 다음 공격을 완전히 무효화합니다.`);
      break;
    case 'hp_shield':
      p.hp = Math.max(1, p.hp - skill.hpCost);
      p.shieldFractionNext = Math.max(p.shieldFractionNext, skill.magnitude);
      log(`${p.name}이(가) [${skill.label}] 발동! HP ${skill.hpCost} 소모, 다음 피해 ${Math.round(skill.magnitude * 100)}% 감소.`);
      break;
    case 'mp_discount':
      p.mpDiscountNext += skill.magnitude;
      log(`${p.name}이(가) [${skill.label}] 발동! 다음 카드 MP ${skill.magnitude} 추가 할인.`);
      break;
    case 'aoe': {
      const others = alivePlayers().filter((o) => o.idx !== p.idx);
      others.forEach((o) => {
        o.hp = Math.max(0, o.hp - skill.magnitude);
        p.totalDamageDealt += skill.magnitude;
        if (o.hp <= 0 && o.alive) {
          o.alive = false;
          log(`💀 ${o.name} (${o.character.name}) 탈락!`);
        }
      });
      log(`${p.name}이(가) [${skill.label}] 발동! 생존자 전원에게 ${skill.magnitude} 피해.`);
      break;
    }
    case 'surge':
      p.doubleNextDamage = true;
      log(`${p.name}이(가) [${skill.label}] 발동! 다음 공격 데미지가 2배가 됩니다.`);
      break;
    default:
      break;
  }

  if (checkWin()) return;
  renderAll();
}

function resolveSkillTarget(targetIdx) {
  const p = currentPlayer();
  const skill = p.skill;
  p.mp -= skill.cost;
  p.skillUsesLeft -= 1;
  const target = state.players[targetIdx];
  target.defenseHalvedNext = true;
  log(`${p.name}이(가) [${skill.label}] 발동! ${target.name}의 다음 방어 효과가 절반이 됩니다.`);
  uiMode = 'main';
  renderAll();
}

// ---------------------------------------------------------------------------
// 턴 / 라운드 진행
// ---------------------------------------------------------------------------

function endTurn() {
  pendingAttack = null;
  uiMode = 'main';

  if (checkWin()) return;

  let nextPointer = state.turnPointer;
  let wrapped = false;
  do {
    nextPointer += 1;
    if (nextPointer >= state.turnOrder.length) {
      nextPointer = 0;
      wrapped = true;
    }
  } while (!state.players[state.turnOrder[nextPointer]].alive);

  state.turnPointer = nextPointer;

  if (wrapped) {
    endRound();
    if (checkWin()) return;
  }

  gateTo(state.turnOrder[state.turnPointer], 'turn');
}

function endRound() {
  state.round += 1;
  log(`— 라운드 ${state.round} 시작 —`);

  alivePlayers().forEach((p) => {
    if (p.skill.kind === 'growth') {
      p.growthStacks = Math.min(p.skill.cap, p.growthStacks + p.skill.magnitude);
    }
  });

  if (!state.suddenDeath && state.round > SUDDEN_DEATH_ROUND) {
    state.suddenDeath = true;
    log('⚠ 서든데스 발동! 생존자 HP가 절반으로, 방어카드 사용이 금지됩니다.');
    alivePlayers().forEach((p) => {
      p.hp = Math.max(1, Math.round(p.hp * 0.5));
      p.skillUsesLeft = p.skill.uses; // 쿨다운 초기화
    });
  } else if (state.suddenDeath) {
    alivePlayers().forEach((p) => {
      p.hp = Math.max(0, Math.round(p.hp * 0.9));
      if (p.hp <= 0) {
        p.alive = false;
        log(`💀 ${p.name} (${p.character.name}) 서든데스 피해로 탈락!`);
      }
    });
  }
}

function checkWin() {
  const alive = alivePlayers();
  if (alive.length <= 1) {
    let winner = alive[0] || null;
    if (!winner) {
      // 동시 전멸: MP 합 -> 총 데미지 순으로 타이브레이크(참고용, 실제로는 발생 드묾)
      winner = state.players.slice().sort((a, b) => b.totalDamageDealt - a.totalDamageDealt)[0];
    }
    showWinner(winner, alive.length === 0);
    return true;
  }
  return false;
}

function showWinner(winner, wasDraw) {
  document.getElementById('game-screen').classList.add('hidden');
  document.getElementById('pass-device').classList.add('hidden');
  document.getElementById('winner-screen').classList.remove('hidden');
  document.getElementById('winner-title').textContent = wasDraw
    ? `동시 전멸! 기록상 승자: ${winner.name} (${winner.character.name})`
    : `🏆 승리: ${winner.name} (${winner.character.name} / ${winner.faction.name})`;
}

document.getElementById('restart-btn').addEventListener('click', () => {
  document.getElementById('winner-screen').classList.add('hidden');
  document.getElementById('round-badge').classList.add('hidden');
  document.getElementById('setup-screen').classList.remove('hidden');
  document.getElementById('log').innerHTML = '';
  state = null;
});
