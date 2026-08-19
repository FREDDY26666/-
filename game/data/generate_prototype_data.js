// 프로토타입(브라우저 플레이용) 데이터 생성 스크립트
// characters.json + cards.json + 캐릭터별 특수능력의 "실제 엔진 매핑(SKILLS)"을 합쳐
// game/prototype/data.js 로 출력한다.
// 실행: node generate_prototype_data.js
'use strict';

const fs = require('fs');
const path = require('path');

const characters = JSON.parse(fs.readFileSync(path.join(__dirname, 'characters.json'), 'utf8'));
const cards = JSON.parse(fs.readFileSync(path.join(__dirname, 'cards.json'), 'utf8'));

// ---------------------------------------------------------------------------
// 캐릭터 특수능력의 엔진 구현 매핑.
// 룰북(RULES.md)의 텍스트 설명은 다양하지만, 프로토타입에서는 소수의 재사용 가능한
// "kind"로 단순화해 실제로 동작하게 만든다. (완전한 원문 재현은 확장판 과제)
// ---------------------------------------------------------------------------
const SKILLS = {
  // 수학
  math_pi: { kind: 'growth', cost: 0, uses: Infinity, magnitude: 1, cap: 5, label: '무한소수' },
  math_root: { kind: 'sunder', cost: 3, uses: 2, magnitude: 0.5, label: '근호분해' },
  math_sigma: { kind: 'combo', cost: 0, uses: Infinity, magnitude: 0.2, threshold: 2, label: '급수합산' },
  math_infinity: { kind: 'extra_action', cost: 6, uses: 1, magnitude: 0, label: '발산' },

  // 영어
  eng_preposition: { kind: 'true_strike', cost: 3, uses: 2, magnitude: 0, label: '포지셔닝' },
  eng_subjunctive: { kind: 'heal_self', cost: 5, uses: 1, magnitude: 10, label: '가정법 과거완료' },
  eng_relative: { kind: 'shield_self', cost: 4, uses: 2, magnitude: 8, label: '절 연결' },
  eng_perfect: { kind: 'shield_self', cost: 4, uses: 2, magnitude: 10, label: '경험의 축적' },

  // 국어
  kor_metaphor: { kind: 'true_strike', cost: 4, uses: 2, magnitude: 0, label: '빗대어 말하기' },
  kor_particle: { kind: 'shield_self', cost: 3, uses: 1, magnitude: 10, label: '격조사 전환' },
  kor_sijo: { kind: 'execute_low', cost: 5, uses: 1, magnitude: 15, threshold: 0.3, label: '종장의 반전' },
  kor_narrator: { kind: 'heal_self', cost: 4, uses: 2, magnitude: 8, label: '시점 전환' },

  // 통합사회
  soc_supply_demand: { kind: 'mp_discount', cost: 4, uses: 2, magnitude: 2, label: '가격균형' },
  soc_constitution: { kind: 'immune', cost: 5, uses: 1, magnitude: 0, label: '최고규범' },
  soc_coordinate: { kind: 'true_strike', cost: 3, uses: 2, magnitude: 0, label: '정밀타격' },
  soc_human_rights: { kind: 'heal_self', cost: 4, uses: 2, magnitude: 15, label: '천부인권' },

  // 통합과학
  sci_inertia: { kind: 'repeat_combo', cost: 0, uses: Infinity, magnitude: 0.5, label: '등속운동' },
  sci_element: { kind: 'mp_discount', cost: 1, uses: 3, magnitude: 1, label: '주기성' },
  sci_cell: { kind: 'hp_shield', cost: 0, uses: 1, magnitude: 0.5, hpCost: 20, label: '세포분열' },
  sci_energy: { kind: 'heal_self', cost: 0, uses: 2, magnitude: 10, label: '형태전환' },

  // 한국사
  hist_hangeul: { kind: 'mp_discount', cost: 4, uses: 1, magnitude: 1, label: '백성을 가르치는 바른 소리' },
  hist_turtleship: { kind: 'aoe', cost: 5, uses: 1, magnitude: 6, label: '학익진' },
  hist_donghak: { kind: 'underdog', cost: 0, uses: Infinity, magnitude: 0.3, threshold: 0.5, label: '보국안민' },
  hist_independence: { kind: 'surge', cost: 5, uses: 1, magnitude: 2, label: '만세운동' }
};

const output = `// 자동 생성 파일입니다. 직접 수정하지 말고 game/data/generate_prototype_data.js 를 고치세요.
window.GAME_DATA = ${JSON.stringify({ characters: characters.factions, cards, skills: SKILLS }, null, 2)};
`;

const outDir = path.join(__dirname, '..', 'prototype');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'data.js'), output, 'utf8');
console.log('written to', path.join(outDir, 'data.js'));
