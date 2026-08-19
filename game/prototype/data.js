// 자동 생성 파일입니다. 직접 수정하지 말고 game/data/generate_prototype_data.js 를 고치세요.
window.GAME_DATA = {
  "characters": [
    {
      "id": "math",
      "name": "수학",
      "color": "#2E5AAC",
      "icon": "△",
      "tagline": "증명되지 않은 것은 존재하지 않는다",
      "characters": [
        {
          "id": "math_pi",
          "name": "파이",
          "concept": "원주율 (π)",
          "hp": 90,
          "mp": 60,
          "personality": "느긋하지만 한번 논리에 꽂히면 끝을 봐야 직성이 풀리는 완벽주의자. 소수점 아래를 끝없이 읊는 버릇이 있다.",
          "special": {
            "name": "무한소수",
            "cost": 4,
            "effect": "라운드마다 이 카드의 데미지가 1씩 누적 증가(최대 +5). 게임이 길어질수록 강해진다.",
            "cooldown": "게임당 1회 발동, 이후 지속 효과"
          },
          "flavor": "원의 둘레와 지름의 비율. 끝나지 않는 소수이기에, 파이는 스스로를 '완결되지 않은 존재'라 부른다."
        },
        {
          "id": "math_root",
          "name": "루트",
          "concept": "제곱근 (√)",
          "hp": 85,
          "mp": 55,
          "personality": "매사에 근본(=뿌리)을 따지는 깐깐한 성격. 겉만 보고 판단하는 걸 극도로 싫어한다.",
          "special": {
            "name": "근호분해",
            "cost": 3,
            "effect": "상대 방어카드 효과를 절반으로 감소시킨다.",
            "cooldown": "게임당 2회"
          },
          "flavor": "제곱하여 어떤 수가 되는 값. 겉으로 드러난 숫자 뒤의 '진짜 크기'를 찾아내는 연산이다."
        },
        {
          "id": "math_sigma",
          "name": "시그마",
          "concept": "합 (Σ, 수열의 합)",
          "hp": 80,
          "mp": 70,
          "personality": "혼자보다 여럿이 모였을 때 힘을 발휘한다고 믿는 팀 플레이어. 아군 버프에 특화.",
          "special": {
            "name": "급수합산",
            "cost": 5,
            "effect": "자신을 포함해 같은 진영 카드를 2장 이상 사용했을 때, 그 턴의 총 데미지를 20% 추가.",
            "cooldown": "제한 없음(조건부)"
          },
          "flavor": "흩어진 항들을 하나로 모으는 기호. 개별로는 작아도 합치면 거대해진다."
        },
        {
          "id": "math_infinity",
          "name": "무한",
          "concept": "무한대 (∞)",
          "hp": 100,
          "mp": 50,
          "personality": "정해진 한계를 부정하는 몽상가. 끝을 모르기에 두려움도 없다.",
          "special": {
            "name": "발산",
            "cost": 6,
            "effect": "이번 턴 자신의 MP 소모를 무시하고 카드 1장을 추가로 낸다.",
            "cooldown": "게임당 1회"
          },
          "flavor": "한계가 없는 값. 어떤 수를 더해도, 곱해도 무한은 무한으로 남는다."
        }
      ]
    },
    {
      "id": "english",
      "name": "영어",
      "color": "#C23B3B",
      "icon": "A",
      "tagline": "문법은 규칙이 아니라 약속이다",
      "characters": [
        {
          "id": "eng_preposition",
          "name": "프렙",
          "concept": "전치사 (Preposition)",
          "hp": 80,
          "mp": 55,
          "personality": "위치와 관계를 정확히 짚어주는 안내자 기질. 방향치인 친구들을 못 그냥 못 지나친다.",
          "special": {
            "name": "포지셔닝",
            "cost": 3,
            "effect": "다음 공격의 타겟을 재지정할 수 있다(체인지 타겟).",
            "cooldown": "게임당 2회"
          },
          "flavor": "명사 앞에 붙어 시간·장소·방향 관계를 나타내는 품사. in, on, at처럼 아주 작지만 의미를 완전히 바꾼다."
        },
        {
          "id": "eng_subjunctive",
          "name": "이프",
          "concept": "가정법 (Subjunctive)",
          "hp": 75,
          "mp": 65,
          "personality": "'만약에'를 입에 달고 사는 몽상가형. 현실보다 가능성을 더 신뢰한다.",
          "special": {
            "name": "가정법 과거완료",
            "cost": 5,
            "effect": "이번 턴에 한해 사용한 카드가 실패(무효)했을 경우, 즉시 1회 재시도한다.",
            "cooldown": "게임당 1회"
          },
          "flavor": "사실과 반대되는 상황을 가정해 말하는 문법. If I were you처럼, 현실에 없는 세계를 문장 안에 만든다."
        },
        {
          "id": "eng_relative",
          "name": "후치",
          "concept": "관계대명사 (Relative Pronoun)",
          "hp": 85,
          "mp": 55,
          "personality": "두 문장을 이어붙이듯, 사람들 사이를 연결하는 걸 좋아하는 중재자.",
          "special": {
            "name": "절 연결",
            "cost": 4,
            "effect": "아군 캐릭터 1명과 이번 턴 효과를 공유(같은 방어카드를 함께 적용).",
            "cooldown": "게임당 2회"
          },
          "flavor": "who, which, that처럼 앞 명사를 수식하는 절을 이끄는 대명사. 두 문장을 하나로 묶는다."
        },
        {
          "id": "eng_perfect",
          "name": "해브",
          "concept": "완료시제 (Perfect Tense)",
          "hp": 95,
          "mp": 50,
          "personality": "과거의 경험이 현재까지 이어진다고 믿는 신중파. 쉽게 잊지 않는다.",
          "special": {
            "name": "경험의 축적",
            "cost": 4,
            "effect": "이전 턴에 받은 피해량의 30%를 이번 턴 방어력으로 전환.",
            "cooldown": "게임당 2회"
          },
          "flavor": "have + 과거분사. 과거의 동작이 현재까지 영향을 미친다는 것을 나타내는 시제."
        }
      ]
    },
    {
      "id": "korean",
      "name": "국어",
      "color": "#B0863A",
      "icon": "글",
      "tagline": "말에는 뜻보다 결이 있다",
      "characters": [
        {
          "id": "kor_metaphor",
          "name": "은유",
          "concept": "은유법 (Metaphor)",
          "hp": 80,
          "mp": 60,
          "personality": "직접 말하는 법이 없다. '그건 곧 이거야'라는 식으로 돌려 말하지만 핵심은 정확히 찌른다.",
          "special": {
            "name": "빗대어 말하기",
            "cost": 4,
            "effect": "공격 카드 하나를 다른 진영 공격 카드처럼 위장(상대는 방어 전까지 원래 효과를 모름).",
            "cooldown": "게임당 2회"
          },
          "flavor": "'A는 B다'처럼 원관념을 보조관념에 빗대어 직접 표현하는 수사법."
        },
        {
          "id": "kor_particle",
          "name": "조사",
          "concept": "조사 (Postposition)",
          "hp": 75,
          "mp": 55,
          "personality": "작고 눈에 안 띄지만 없으면 문장이 무너진다는 걸 아는 자존감 낮은 완벽주의자.",
          "special": {
            "name": "격조사 전환",
            "cost": 3,
            "effect": "상대 카드의 대상(주어/목적어)을 뒤바꿔 자신에게 오는 효과를 아군에게 전가.",
            "cooldown": "게임당 1회"
          },
          "flavor": "체언 뒤에 붙어 문법적 관계를 표시하는 품사. '이/가', '을/를'처럼 작지만 문장의 구조를 결정한다."
        },
        {
          "id": "kor_sijo",
          "name": "시조",
          "concept": "시조 (Sijo)",
          "hp": 90,
          "mp": 50,
          "personality": "3장 6구의 정형을 지키는 걸 자랑스러워하는 전통주의자. 격식을 중시한다.",
          "special": {
            "name": "종장의 반전",
            "cost": 5,
            "effect": "체력이 30% 이하일 때만 사용 가능. 발동 시 상대에게 큰 피해(고정 15).",
            "cooldown": "게임당 1회"
          },
          "flavor": "초장·중장·종장 3장으로 이루어진 한국 전통 정형시. 종장 첫 구에서 흐름이 극적으로 전환된다."
        },
        {
          "id": "kor_narrator",
          "name": "화자",
          "concept": "시적 화자 (Narrator/Speaker)",
          "hp": 85,
          "mp": 55,
          "personality": "자신의 진짜 감정을 잘 숨긴다. 작품 속 인물 뒤에 늘 숨어있는 관찰자.",
          "special": {
            "name": "시점 전환",
            "cost": 4,
            "effect": "상대 캐릭터의 특수능력을 이번 턴만 복사해 사용.",
            "cooldown": "게임당 1회"
          },
          "flavor": "작품 속에서 이야기를 전달하는 목소리. 작가와 동일 인물이 아닐 수 있다는 것이 핵심 개념."
        }
      ]
    },
    {
      "id": "social",
      "name": "통합사회",
      "color": "#3A8F5B",
      "icon": "☯",
      "tagline": "모든 개인은 사회 속에서 존재한다",
      "characters": [
        {
          "id": "soc_supply_demand",
          "name": "수요공급",
          "concept": "수요와 공급 법칙",
          "hp": 85,
          "mp": 55,
          "personality": "균형을 최우선으로 여기는 협상가. 한쪽으로 쏠리는 걸 못 견딘다.",
          "special": {
            "name": "가격균형",
            "cost": 4,
            "effect": "이번 턴, 자신과 상대의 MP 차이를 절반으로 좁힌다(많은 쪽에서 적은 쪽으로 이동).",
            "cooldown": "게임당 2회"
          },
          "flavor": "가격이 오르면 수요는 줄고 공급은 늘어 결국 균형점에서 만난다는 시장의 기본 원리."
        },
        {
          "id": "soc_constitution",
          "name": "헌법",
          "concept": "헌법 (Constitution)",
          "hp": 100,
          "mp": 45,
          "personality": "최상위 원칙주의자. 어떤 예외도 근거 없이는 인정하지 않는다.",
          "special": {
            "name": "최고규범",
            "cost": 5,
            "effect": "상대의 특수능력 발동을 이번 턴 무효화(1회).",
            "cooldown": "게임당 1회"
          },
          "flavor": "한 국가의 근본이 되는 최상위 법. 다른 모든 법률은 헌법에 어긋날 수 없다."
        },
        {
          "id": "soc_coordinate",
          "name": "좌표",
          "concept": "위도와 경도 (지도/좌표)",
          "hp": 80,
          "mp": 60,
          "personality": "정확한 위치와 방향 없이는 움직이지 않는 길잡이형. 즉흥을 싫어한다.",
          "special": {
            "name": "정밀타격",
            "cost": 3,
            "effect": "공격 성공 확률(카드 판정)과 무관하게 이번 공격은 반드시 명중.",
            "cooldown": "게임당 2회"
          },
          "flavor": "지구상의 위치를 위도·경도로 표시하는 체계. 좌표만 있으면 지구 어디든 정확히 짚을 수 있다."
        },
        {
          "id": "soc_human_rights",
          "name": "인권",
          "concept": "인권 (Human Rights)",
          "hp": 95,
          "mp": 50,
          "personality": "약자 편에 서는 걸 주저하지 않는 정의파. 방어와 보호에 특화.",
          "special": {
            "name": "천부인권",
            "cost": 4,
            "effect": "HP가 20 이하인 아군을 대상으로 사용 시, 해당 아군 HP 15 회복.",
            "cooldown": "게임당 2회"
          },
          "flavor": "인간이라면 누구나 태어날 때부터 가지는, 빼앗을 수 없는 권리."
        }
      ]
    },
    {
      "id": "science",
      "name": "통합과학",
      "color": "#4A6FA5",
      "icon": "⚛",
      "tagline": "세상은 법칙으로 설명된다",
      "characters": [
        {
          "id": "sci_inertia",
          "name": "관성",
          "concept": "관성의 법칙",
          "hp": 100,
          "mp": 45,
          "personality": "한번 정한 방향은 잘 안 바꾼다. 고집이 세지만 그만큼 안정적이다.",
          "special": {
            "name": "등속운동",
            "cost": 3,
            "effect": "직전 턴과 같은 카드를 다시 낼 경우 효과 +50%.",
            "cooldown": "제한 없음(조건부)"
          },
          "flavor": "외부 힘이 작용하지 않는 한 물체는 원래의 운동 상태를 유지하려 한다는 뉴턴의 제1법칙."
        },
        {
          "id": "sci_element",
          "name": "원소",
          "concept": "원소와 주기율표",
          "hp": 80,
          "mp": 60,
          "personality": "성질이 비슷한 것끼리 모이는 걸 좋아하는 분류광. 규칙적인 걸 편안해한다.",
          "special": {
            "name": "주기성",
            "cost": 4,
            "effect": "같은 유형(공격/방어/유틸)의 카드를 연속 사용 시 MP 소모 -1.",
            "cooldown": "제한 없음(조건부)"
          },
          "flavor": "물질을 이루는 기본 성분. 원자번호 순서로 배열하면 성질이 주기적으로 반복된다."
        },
        {
          "id": "sci_cell",
          "name": "세포",
          "concept": "세포 (Cell)",
          "hp": 70,
          "mp": 65,
          "personality": "작지만 스스로 분열해서 늘어나는 걸 좋아하는 성장형. 재생력이 강하다.",
          "special": {
            "name": "세포분열",
            "cost": 5,
            "effect": "자신의 HP를 20 소모해 임시 분신을 생성, 이번 턴 받는 피해를 절반으로.",
            "cooldown": "게임당 1회"
          },
          "flavor": "생명체를 이루는 가장 작은 단위. 분열을 통해 스스로를 복제하고 늘어난다."
        },
        {
          "id": "sci_energy",
          "name": "에너지",
          "concept": "에너지 보존 법칙",
          "hp": 90,
          "mp": 55,
          "personality": "손해 보는 걸 못 참는 계산적인 성격. 뭐든 형태만 바뀔 뿐 사라지지 않는다고 믿는다.",
          "special": {
            "name": "형태전환",
            "cost": 4,
            "effect": "이번 턴 사용하지 않은 MP를 다음 턴 HP 회복으로 전환(MP 1당 HP 1).",
            "cooldown": "제한 없음(조건부)"
          },
          "flavor": "에너지는 새로 생기거나 없어지지 않고, 형태만 바뀌며 총량이 보존된다는 법칙."
        }
      ]
    },
    {
      "id": "history",
      "name": "한국사",
      "color": "#8B3A3A",
      "icon": "史",
      "tagline": "지나간 것은 사라지지 않는다, 기록될 뿐",
      "characters": [
        {
          "id": "hist_hangeul",
          "name": "훈민정음",
          "concept": "훈민정음 창제",
          "hp": 90,
          "mp": 55,
          "personality": "누구나 이해할 수 있어야 한다고 믿는 실용주의자. 어려운 걸 쉽게 푸는 재주가 있다.",
          "special": {
            "name": "백성을 가르치는 바른 소리",
            "cost": 4,
            "effect": "모든 아군의 다음 카드 사용 MP 비용 -1 (1턴간).",
            "cooldown": "게임당 1회"
          },
          "flavor": "1443년 세종이 창제한 문자 체계. 백성이 쉽게 익혀 쓸 수 있도록 만들어졌다."
        },
        {
          "id": "hist_turtleship",
          "name": "거북선",
          "concept": "거북선 전술",
          "hp": 110,
          "mp": 40,
          "personality": "정면 승부를 두려워하지 않는 돌격형. 방어와 공격을 동시에 갖췄다는 자부심.",
          "special": {
            "name": "학익진",
            "cost": 5,
            "effect": "한 번에 상대 전체(2명 이상 참전 시)에게 소량 피해를 동시에 입힌다.",
            "cooldown": "게임당 1회"
          },
          "flavor": "이순신 장군이 활용한 철갑 전선. 사방에 화포를 갖춰 포위 전술에 강했다."
        },
        {
          "id": "hist_donghak",
          "name": "동학",
          "concept": "동학농민운동",
          "hp": 85,
          "mp": 55,
          "personality": "부당함을 보면 참지 못하는 저항형. 혼자보다 함께 일어서는 걸 믿는다.",
          "special": {
            "name": "보국안민",
            "cost": 4,
            "effect": "자신의 HP가 상대보다 낮을 때, 공격력 +30%.",
            "cooldown": "제한 없음(조건부)"
          },
          "flavor": "1894년 부패한 관리와 외세에 맞서 농민들이 일으킨 대규모 봉기."
        },
        {
          "id": "hist_independence",
          "name": "삼일운동",
          "concept": "3·1운동",
          "hp": 80,
          "mp": 60,
          "personality": "혼자서는 약하지만 함께 모이면 걷잡을 수 없이 강해진다고 믿는 연대주의자.",
          "special": {
            "name": "만세운동",
            "cost": 5,
            "effect": "같은 진영 카드가 3장 이상 사용된 판에서, 이번 공격 데미지 두 배.",
            "cooldown": "게임당 1회"
          },
          "flavor": "1919년 3월 1일, 전국적으로 일어난 비폭력 독립 만세 운동."
        }
      ]
    }
  ],
  "cards": [
    {
      "id": "수학_공격_001",
      "subject": "수학",
      "type": "공격",
      "name": "방정식의 일격",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "좌변과 우변을 같게 만드는 등식. 미지수를 구하기 위한 가장 기본적인 도구다.",
      "damage": 5
    },
    {
      "id": "수학_공격_002",
      "subject": "수학",
      "type": "공격",
      "name": "함수 사출",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 10.",
      "flavor": "한 값을 다른 값에 대응시키는 규칙. 입력 하나에 출력은 반드시 하나다.",
      "damage": 10
    },
    {
      "id": "수학_공격_003",
      "subject": "수학",
      "type": "공격",
      "name": "미분 베기",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "순간의 변화율을 구하는 연산. 그래프 위 한 점에서의 기울기를 알려준다.",
      "damage": 7
    },
    {
      "id": "수학_공격_004",
      "subject": "수학",
      "type": "공격",
      "name": "적분 파동",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 17.",
      "flavor": "작은 조각들을 무한히 더해 넓이나 총량을 구하는 연산. 미분의 역과정이다.",
      "damage": 17
    },
    {
      "id": "수학_공격_005",
      "subject": "수학",
      "type": "공격",
      "name": "확률 주사위",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 13.",
      "flavor": "어떤 사건이 일어날 가능성을 0과 1 사이의 수로 나타낸 것.",
      "damage": 13
    },
    {
      "id": "수학_공격_006",
      "subject": "수학",
      "type": "공격",
      "name": "통계 일격",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "자료를 수집·정리·분석해 경향을 파악하는 방법.",
      "damage": 5
    },
    {
      "id": "수학_공격_007",
      "subject": "수학",
      "type": "공격",
      "name": "삼각비 사격",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 9.",
      "flavor": "직각삼각형에서 각과 변의 비율 관계(sin, cos, tan).",
      "damage": 9
    },
    {
      "id": "수학_공격_008",
      "subject": "수학",
      "type": "공격",
      "name": "벡터 관통",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "크기와 방향을 함께 가지는 양. 화살표로 표현된다.",
      "damage": 7
    },
    {
      "id": "수학_공격_009",
      "subject": "수학",
      "type": "공격",
      "name": "행렬 압축",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "수를 직사각형 모양으로 배열한 것. 여러 데이터를 한 번에 다룰 수 있다.",
      "damage": 8
    },
    {
      "id": "수학_공격_010",
      "subject": "수학",
      "type": "공격",
      "name": "수열의 연쇄",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "일정한 규칙에 따라 나열된 수의 열.",
      "damage": 4
    },
    {
      "id": "수학_공격_011",
      "subject": "수학",
      "type": "공격",
      "name": "좌표평면 낙하",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "가로축과 세로축으로 위치를 정확히 표시하는 평면.",
      "damage": 5
    },
    {
      "id": "수학_공격_012",
      "subject": "수학",
      "type": "공격",
      "name": "로그 폭발",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 8.",
      "flavor": "지수의 역연산. 아주 큰 수를 다루기 쉽게 압축한다.",
      "damage": 8
    },
    {
      "id": "수학_공격_013",
      "subject": "수학",
      "type": "공격",
      "name": "지수 상승",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "같은 수를 여러 번 곱한 것을 나타내는 표현.",
      "damage": 7
    },
    {
      "id": "수학_공격_014",
      "subject": "수학",
      "type": "공격",
      "name": "인수분해 절단",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 19.",
      "flavor": "다항식을 여러 개의 곱으로 쪼개는 과정.",
      "damage": 19
    },
    {
      "id": "수학_공격_015",
      "subject": "수학",
      "type": "공격",
      "name": "이차방정식 강타",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 11.",
      "flavor": "차수가 2인 방정식. 근의 공식으로 항상 풀 수 있다.",
      "damage": 11
    },
    {
      "id": "수학_공격_016",
      "subject": "수학",
      "type": "공격",
      "name": "피타고라스 창",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "직각삼각형에서 빗변의 제곱은 다른 두 변의 제곱의 합과 같다.",
      "damage": 5
    },
    {
      "id": "수학_공격_017",
      "subject": "수학",
      "type": "공격",
      "name": "원의 방정식",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 13.",
      "flavor": "평면 위 한 점에서 일정한 거리(반지름)에 있는 점들의 집합.",
      "damage": 13
    },
    {
      "id": "수학_공격_018",
      "subject": "수학",
      "type": "공격",
      "name": "극한 저격",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "어떤 값에 한없이 가까워질 때의 상태를 다루는 개념.",
      "damage": 7
    },
    {
      "id": "수학_공격_019",
      "subject": "수학",
      "type": "공격",
      "name": "경우의 수 폭격",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "어떤 사건이 일어날 수 있는 모든 가짓수.",
      "damage": 8
    },
    {
      "id": "수학_공격_020",
      "subject": "수학",
      "type": "공격",
      "name": "부등식 압박",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "두 값의 크기 관계를 부등호로 나타낸 식.",
      "damage": 4
    },
    {
      "id": "수학_방어_021",
      "subject": "수학",
      "type": "방어",
      "name": "항등원 방패",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "연산을 해도 원래 값을 바꾸지 않는 수(덧셈의 0, 곱셈의 1).",
      "shield": 4
    },
    {
      "id": "수학_방어_022",
      "subject": "수학",
      "type": "방어",
      "name": "절댓값 보호막",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "수직선 위에서 원점으로부터의 거리. 항상 0 이상이다.",
      "shield": 8
    },
    {
      "id": "수학_방어_023",
      "subject": "수학",
      "type": "방어",
      "name": "정의역 결계",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "함수에 넣을 수 있는 입력값들의 집합.",
      "shield": 6
    },
    {
      "id": "수학_방어_024",
      "subject": "수학",
      "type": "방어",
      "name": "공집합 회피",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 받는 데미지 10만큼 감소(1회).",
      "flavor": "원소가 하나도 없는 집합. 모든 집합의 부분집합이다.",
      "shield": 10
    },
    {
      "id": "수학_방어_025",
      "subject": "수학",
      "type": "방어",
      "name": "여집합 반사",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "전체집합에서 어떤 집합을 뺀 나머지 부분.",
      "shield": 6
    },
    {
      "id": "수학_방어_026",
      "subject": "수학",
      "type": "방어",
      "name": "대칭 방벽",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "어떤 축이나 점을 기준으로 모양이 같아지는 성질.",
      "shield": 5
    },
    {
      "id": "수학_방어_027",
      "subject": "수학",
      "type": "방어",
      "name": "역함수 반전",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "입력과 출력을 서로 뒤바꾼 함수.",
      "shield": 8
    },
    {
      "id": "수학_방어_028",
      "subject": "수학",
      "type": "방어",
      "name": "검산 보정",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 3만큼 감소(1회).",
      "flavor": "계산 결과가 맞는지 다시 확인하는 절차.",
      "shield": 3
    },
    {
      "id": "수학_방어_029",
      "subject": "수학",
      "type": "방어",
      "name": "근의 공식 방어",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "이차방정식의 해를 구하는 일반 공식.",
      "shield": 4
    },
    {
      "id": "수학_방어_030",
      "subject": "수학",
      "type": "방어",
      "name": "공배수 결합",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "두 수 이상의 공통된 배수.",
      "shield": 5
    },
    {
      "id": "수학_유틸_031",
      "subject": "수학",
      "type": "유틸",
      "name": "치환 위장",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "식의 일부를 다른 문자로 바꿔 계산을 간단히 하는 방법.",
      "utility_value": 2
    },
    {
      "id": "수학_유틸_032",
      "subject": "수학",
      "type": "유틸",
      "name": "대입 전환",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 진영 특성에 맞는 특수 효과(보정치 3) 1회 적용.",
      "flavor": "문자에 특정한 값을 넣는 것.",
      "utility_value": 3
    },
    {
      "id": "수학_유틸_033",
      "subject": "수학",
      "type": "유틸",
      "name": "소인수분해 분해",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "어떤 수를 소수들의 곱으로 나타내는 것.",
      "utility_value": 2
    },
    {
      "id": "수학_유틸_034",
      "subject": "수학",
      "type": "유틸",
      "name": "최대공약수 탐색",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 진영 특성에 맞는 특수 효과(보정치 5) 1회 적용.",
      "flavor": "두 수 이상의 공통된 약수 중 가장 큰 수.",
      "utility_value": 5
    },
    {
      "id": "수학_유틸_035",
      "subject": "수학",
      "type": "유틸",
      "name": "최소공배수 연결",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "두 수 이상의 공통된 배수 중 가장 작은 수.",
      "utility_value": 4
    },
    {
      "id": "수학_유틸_036",
      "subject": "수학",
      "type": "유틸",
      "name": "순열 정렬",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "서로 다른 것들을 순서를 고려해 나열하는 경우의 수.",
      "utility_value": 1
    },
    {
      "id": "수학_유틸_037",
      "subject": "수학",
      "type": "유틸",
      "name": "조합 선택",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "순서를 고려하지 않고 몇 개를 골라내는 경우의 수.",
      "utility_value": 4
    },
    {
      "id": "수학_유틸_038",
      "subject": "수학",
      "type": "유틸",
      "name": "그래프 개형 스캔",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "함수의 대략적인 모양을 파악하는 것.",
      "utility_value": 1
    },
    {
      "id": "수학_유틸_039",
      "subject": "수학",
      "type": "유틸",
      "name": "좌표 변환",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "한 좌표계의 점을 다른 좌표계로 옮겨 나타내는 것.",
      "utility_value": 2
    },
    {
      "id": "수학_유틸_040",
      "subject": "수학",
      "type": "유틸",
      "name": "근사값 추정",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "정확한 값 대신 오차 범위 안의 값을 구하는 것.",
      "utility_value": 1
    },
    {
      "id": "영어_공격_041",
      "subject": "영어",
      "type": "공격",
      "name": "현재완료 스트라이크",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "have/has + 과거분사. 과거의 일이 현재까지 영향을 미침을 나타낸다.",
      "damage": 5
    },
    {
      "id": "영어_공격_042",
      "subject": "영어",
      "type": "공격",
      "name": "과거완료 브레이크",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 8.",
      "flavor": "had + 과거분사. 과거의 한 시점보다 더 이전에 일어난 일을 나타낸다.",
      "damage": 8
    },
    {
      "id": "영어_공격_043",
      "subject": "영어",
      "type": "공격",
      "name": "수동태 반격",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "주어가 동작을 받는 문장 구조(be + 과거분사).",
      "damage": 7
    },
    {
      "id": "영어_공격_044",
      "subject": "영어",
      "type": "공격",
      "name": "가정법과거 일격",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 17.",
      "flavor": "현재 사실과 반대되는 상황을 가정하는 문법(If + 과거형).",
      "damage": 17
    },
    {
      "id": "영어_공격_045",
      "subject": "영어",
      "type": "공격",
      "name": "가정법과거완료",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 11.",
      "flavor": "과거 사실과 반대되는 상황을 가정하는 문법(If + had p.p.).",
      "damage": 11
    },
    {
      "id": "영어_공격_046",
      "subject": "영어",
      "type": "공격",
      "name": "관계대명사 연쇄",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "who, which, that처럼 두 문장을 연결하며 명사를 수식하는 대명사.",
      "damage": 5
    },
    {
      "id": "영어_공격_047",
      "subject": "영어",
      "type": "공격",
      "name": "분사구문 습격",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 13.",
      "flavor": "접속사와 주어를 생략해 문장을 간결하게 만드는 구문.",
      "damage": 13
    },
    {
      "id": "영어_공격_048",
      "subject": "영어",
      "type": "공격",
      "name": "동명사 포격",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "동사에 -ing를 붙여 명사처럼 쓰는 형태.",
      "damage": 7
    },
    {
      "id": "영어_공격_049",
      "subject": "영어",
      "type": "공격",
      "name": "부정사 관통",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "to + 동사원형. 명사·형용사·부사 역할을 모두 할 수 있다.",
      "damage": 8
    },
    {
      "id": "영어_공격_050",
      "subject": "영어",
      "type": "공격",
      "name": "비교급 강타",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "두 대상을 비교할 때 쓰는 형태(-er, more).",
      "damage": 4
    },
    {
      "id": "영어_공격_051",
      "subject": "영어",
      "type": "공격",
      "name": "최상급 일격",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "셋 이상 중 가장 두드러짐을 나타내는 형태(-est, most).",
      "damage": 5
    },
    {
      "id": "영어_공격_052",
      "subject": "영어",
      "type": "공격",
      "name": "도치구문 기습",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 12.",
      "flavor": "강조를 위해 어순을 바꾸는 구문.",
      "damage": 12
    },
    {
      "id": "영어_공격_053",
      "subject": "영어",
      "type": "공격",
      "name": "강조구문 폭발",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "It is ~ that 구문처럼 특정 요소를 강조하는 구조.",
      "damage": 7
    },
    {
      "id": "영어_공격_054",
      "subject": "영어",
      "type": "공격",
      "name": "접속사 연격",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 19.",
      "flavor": "단어·구·절을 이어주는 품사.",
      "damage": 19
    },
    {
      "id": "영어_공격_055",
      "subject": "영어",
      "type": "공격",
      "name": "전치사구 사격",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 9.",
      "flavor": "전치사 + 명사로 이루어진 수식어구.",
      "damage": 9
    },
    {
      "id": "영어_공격_056",
      "subject": "영어",
      "type": "공격",
      "name": "조동사 압박",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "동사를 도와 의미를 더하는 품사(can, must, should).",
      "damage": 5
    },
    {
      "id": "영어_공격_057",
      "subject": "영어",
      "type": "공격",
      "name": "사역동사 강제",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 11.",
      "flavor": "다른 대상에게 어떤 행동을 시키는 동사(make, have, let).",
      "damage": 11
    },
    {
      "id": "영어_공격_058",
      "subject": "영어",
      "type": "공격",
      "name": "지각동사 감지",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "보고 듣고 느끼는 것을 나타내는 동사(see, hear, feel).",
      "damage": 7
    },
    {
      "id": "영어_공격_059",
      "subject": "영어",
      "type": "공격",
      "name": "간접화법 전환",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "남의 말을 자신의 문장 구조로 바꿔 전달하는 방식.",
      "damage": 8
    },
    {
      "id": "영어_공격_060",
      "subject": "영어",
      "type": "공격",
      "name": "시제일치 낙인",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "주절과 종속절의 시제를 맞추는 문법 규칙.",
      "damage": 4
    },
    {
      "id": "영어_방어_061",
      "subject": "영어",
      "type": "방어",
      "name": "관사 방패",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "명사 앞에 붙어 특정/불특정을 나타내는 a, an, the.",
      "shield": 4
    },
    {
      "id": "영어_방어_062",
      "subject": "영어",
      "type": "방어",
      "name": "수일치 보호막",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "주어의 단수·복수에 맞춰 동사 형태를 맞추는 규칙.",
      "shield": 8
    },
    {
      "id": "영어_방어_063",
      "subject": "영어",
      "type": "방어",
      "name": "인칭대명사 결계",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "사람이나 사물을 대신 가리키는 대명사(I, you, he...).",
      "shield": 6
    },
    {
      "id": "영어_방어_064",
      "subject": "영어",
      "type": "방어",
      "name": "재귀대명사 반사",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 받는 데미지 14만큼 감소(1회).",
      "flavor": "주어와 목적어가 같을 때 쓰는 대명사(myself, yourself...).",
      "shield": 14
    },
    {
      "id": "영어_방어_065",
      "subject": "영어",
      "type": "방어",
      "name": "접속법 방어",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "사실이 아닌 것을 표현하는 동사 형태.",
      "shield": 6
    },
    {
      "id": "영어_방어_066",
      "subject": "영어",
      "type": "방어",
      "name": "병렬구조 정렬",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "같은 문법 형태를 나란히 배치하는 구조.",
      "shield": 5
    },
    {
      "id": "영어_방어_067",
      "subject": "영어",
      "type": "방어",
      "name": "문장부호 결속",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "쉼표, 마침표 등 문장의 의미를 명확히 하는 기호.",
      "shield": 8
    },
    {
      "id": "영어_방어_068",
      "subject": "영어",
      "type": "방어",
      "name": "철자규칙 방벽",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 3만큼 감소(1회).",
      "flavor": "단어를 올바르게 표기하는 규칙.",
      "shield": 3
    },
    {
      "id": "영어_방어_069",
      "subject": "영어",
      "type": "방어",
      "name": "발음기호 차단",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "단어의 소리를 기호로 나타낸 것(IPA).",
      "shield": 4
    },
    {
      "id": "영어_방어_070",
      "subject": "영어",
      "type": "방어",
      "name": "억양 반사",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "말할 때의 음의 높낮이 변화.",
      "shield": 5
    },
    {
      "id": "영어_유틸_071",
      "subject": "영어",
      "type": "유틸",
      "name": "어원 분석",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "단어가 어디서 유래했는지 추적하는 것.",
      "utility_value": 2
    },
    {
      "id": "영어_유틸_072",
      "subject": "영어",
      "type": "유틸",
      "name": "접두사 부착",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 진영 특성에 맞는 특수 효과(보정치 3) 1회 적용.",
      "flavor": "단어 앞에 붙어 의미를 바꾸는 요소(un-, re-, pre-).",
      "utility_value": 3
    },
    {
      "id": "영어_유틸_073",
      "subject": "영어",
      "type": "유틸",
      "name": "접미사 부착",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "단어 뒤에 붙어 품사나 의미를 바꾸는 요소(-tion, -able).",
      "utility_value": 2
    },
    {
      "id": "영어_유틸_074",
      "subject": "영어",
      "type": "유틸",
      "name": "동의어 치환",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 진영 특성에 맞는 특수 효과(보정치 5) 1회 적용.",
      "flavor": "뜻이 비슷한 다른 단어로 바꾸는 것.",
      "utility_value": 5
    },
    {
      "id": "영어_유틸_075",
      "subject": "영어",
      "type": "유틸",
      "name": "반의어 역전",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "뜻이 반대되는 단어.",
      "utility_value": 4
    },
    {
      "id": "영어_유틸_076",
      "subject": "영어",
      "type": "유틸",
      "name": "관용구 활용",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "단어 그대로의 뜻과 다른 의미로 굳어진 표현.",
      "utility_value": 1
    },
    {
      "id": "영어_유틸_077",
      "subject": "영어",
      "type": "유틸",
      "name": "연어(콜로케이션) 결합",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "자연스럽게 함께 쓰이는 단어의 조합.",
      "utility_value": 4
    },
    {
      "id": "영어_유틸_078",
      "subject": "영어",
      "type": "유틸",
      "name": "문맥 추론",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "앞뒤 내용을 보고 단어나 문장의 의미를 유추하는 것.",
      "utility_value": 1
    },
    {
      "id": "영어_유틸_079",
      "subject": "영어",
      "type": "유틸",
      "name": "요약 압축",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "글의 핵심만 간추려 정리하는 것.",
      "utility_value": 2
    },
    {
      "id": "영어_유틸_080",
      "subject": "영어",
      "type": "유틸",
      "name": "스키밍 탐색",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "글 전체를 빠르게 훑어 대의를 파악하는 읽기 방법.",
      "utility_value": 1
    },
    {
      "id": "국어_공격_081",
      "subject": "국어",
      "type": "공격",
      "name": "은유법 일격",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "'A는 B다'처럼 원관념을 보조관념에 빗대어 표현하는 수사법.",
      "damage": 5
    },
    {
      "id": "국어_공격_082",
      "subject": "국어",
      "type": "공격",
      "name": "직유법 사격",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 12.",
      "flavor": "'~처럼', '~같이'를 써서 직접 비유하는 수사법.",
      "damage": 12
    },
    {
      "id": "국어_공격_083",
      "subject": "국어",
      "type": "공격",
      "name": "의인법 강타",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "사람이 아닌 것을 사람처럼 표현하는 수사법.",
      "damage": 7
    },
    {
      "id": "국어_공격_084",
      "subject": "국어",
      "type": "공격",
      "name": "반어법 반격",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 17.",
      "flavor": "속마음과 반대로 표현해 효과를 높이는 수사법.",
      "damage": 17
    },
    {
      "id": "국어_공격_085",
      "subject": "국어",
      "type": "공격",
      "name": "역설법 폭발",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 9.",
      "flavor": "모순되어 보이지만 그 안에 진실을 담은 표현.",
      "damage": 9
    },
    {
      "id": "국어_공격_086",
      "subject": "국어",
      "type": "공격",
      "name": "풍자 저격",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "현실의 부정적인 면을 빗대어 비판하는 표현 방식.",
      "damage": 5
    },
    {
      "id": "국어_공격_087",
      "subject": "국어",
      "type": "공격",
      "name": "대구법 연격",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 11.",
      "flavor": "비슷한 구조의 어구를 나란히 배치하는 수사법.",
      "damage": 11
    },
    {
      "id": "국어_공격_088",
      "subject": "국어",
      "type": "공격",
      "name": "점층법 상승",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "뜻을 점점 강하고 크게 확대하는 수사법.",
      "damage": 7
    },
    {
      "id": "국어_공격_089",
      "subject": "국어",
      "type": "공격",
      "name": "도치법 기습",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "문장의 정상적인 어순을 바꿔 강조하는 수사법.",
      "damage": 8
    },
    {
      "id": "국어_공격_090",
      "subject": "국어",
      "type": "공격",
      "name": "설의법 일격",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "답이 뻔한 것을 질문 형식으로 표현해 강조하는 수사법.",
      "damage": 4
    },
    {
      "id": "국어_공격_091",
      "subject": "국어",
      "type": "공격",
      "name": "활유법 침투",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "무생물을 생물처럼 표현하는 수사법.",
      "damage": 5
    },
    {
      "id": "국어_공격_092",
      "subject": "국어",
      "type": "공격",
      "name": "중의법 함정",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 10.",
      "flavor": "한 표현이 두 가지 이상의 뜻으로 해석되는 수사법.",
      "damage": 10
    },
    {
      "id": "국어_공격_093",
      "subject": "국어",
      "type": "공격",
      "name": "과장법 강타",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "실제보다 크거나 작게 표현하는 수사법.",
      "damage": 7
    },
    {
      "id": "국어_공격_094",
      "subject": "국어",
      "type": "공격",
      "name": "열거법 연타",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 19.",
      "flavor": "여러 대상을 나란히 늘어놓는 수사법.",
      "damage": 19
    },
    {
      "id": "국어_공격_095",
      "subject": "국어",
      "type": "공격",
      "name": "대유법 관통",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 13.",
      "flavor": "일부로 전체를, 또는 특징으로 대상을 나타내는 수사법.",
      "damage": 13
    },
    {
      "id": "국어_공격_096",
      "subject": "국어",
      "type": "공격",
      "name": "문답법 유도",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "스스로 묻고 답하는 형식으로 서술하는 방법.",
      "damage": 5
    },
    {
      "id": "국어_공격_097",
      "subject": "국어",
      "type": "공격",
      "name": "영탄법 폭발",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 9.",
      "flavor": "감탄사나 감탄형 어미로 감정을 강하게 드러내는 수사법.",
      "damage": 9
    },
    {
      "id": "국어_공격_098",
      "subject": "국어",
      "type": "공격",
      "name": "돈호법 호출",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "사물이나 사람을 불러 주의를 환기하는 수사법.",
      "damage": 7
    },
    {
      "id": "국어_공격_099",
      "subject": "국어",
      "type": "공격",
      "name": "상징 저격",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "구체적인 사물로 추상적인 의미를 나타내는 표현.",
      "damage": 8
    },
    {
      "id": "국어_공격_100",
      "subject": "국어",
      "type": "공격",
      "name": "우의 일격",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "동식물이나 사물에 빗대어 인간사를 풍자하는 이야기 방식.",
      "damage": 4
    },
    {
      "id": "국어_방어_101",
      "subject": "국어",
      "type": "방어",
      "name": "맞춤법 방패",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "한글을 소리대로 적되 어법에 맞게 표기하는 규정.",
      "shield": 4
    },
    {
      "id": "국어_방어_102",
      "subject": "국어",
      "type": "방어",
      "name": "띄어쓰기 결계",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "단어와 단어 사이를 띄어 쓰는 규칙.",
      "shield": 8
    },
    {
      "id": "국어_방어_103",
      "subject": "국어",
      "type": "방어",
      "name": "표준어 방벽",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "한 나라에서 공용어로 정한 규범적인 말.",
      "shield": 6
    },
    {
      "id": "국어_방어_104",
      "subject": "국어",
      "type": "방어",
      "name": "두음법칙 반사",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 받는 데미지 12만큼 감소(1회).",
      "flavor": "단어 첫머리에서 소리가 변하는 규칙(여자, 노인 등).",
      "shield": 12
    },
    {
      "id": "국어_방어_105",
      "subject": "국어",
      "type": "방어",
      "name": "사이시옷 차단",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "합성어에서 발음을 매끄럽게 하기 위해 넣는 시옷.",
      "shield": 6
    },
    {
      "id": "국어_방어_106",
      "subject": "국어",
      "type": "방어",
      "name": "조사활용 방어",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "체언 뒤에 붙는 조사('이/가', '을/를')의 올바른 쓰임.",
      "shield": 5
    },
    {
      "id": "국어_방어_107",
      "subject": "국어",
      "type": "방어",
      "name": "어미활용 결속",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "용언의 어간에 붙어 문법적 의미를 더하는 부분.",
      "shield": 8
    },
    {
      "id": "국어_방어_108",
      "subject": "국어",
      "type": "방어",
      "name": "존댓말 보호막",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 3만큼 감소(1회).",
      "flavor": "상대를 높이기 위해 사용하는 말.",
      "shield": 3
    },
    {
      "id": "국어_방어_109",
      "subject": "국어",
      "type": "방어",
      "name": "높임법 결계",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "대상에 따라 말을 높이거나 낮추는 문법 체계.",
      "shield": 4
    },
    {
      "id": "국어_방어_110",
      "subject": "국어",
      "type": "방어",
      "name": "호응관계 정렬",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "문장 성분끼리 서로 자연스럽게 맞아떨어지는 관계.",
      "shield": 5
    },
    {
      "id": "국어_유틸_111",
      "subject": "국어",
      "type": "유틸",
      "name": "형태소 분석",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "뜻을 가진 가장 작은 말의 단위로 나누는 것.",
      "utility_value": 2
    },
    {
      "id": "국어_유틸_112",
      "subject": "국어",
      "type": "유틸",
      "name": "품사 구분",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 진영 특성에 맞는 특수 효과(보정치 3) 1회 적용.",
      "flavor": "단어를 성질에 따라 분류하는 것(명사, 동사...).",
      "utility_value": 3
    },
    {
      "id": "국어_유틸_113",
      "subject": "국어",
      "type": "유틸",
      "name": "문장성분 파악",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "문장을 이루는 주어, 서술어, 목적어 등을 분석하는 것.",
      "utility_value": 2
    },
    {
      "id": "국어_유틸_114",
      "subject": "국어",
      "type": "유틸",
      "name": "주제 파악",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 진영 특성에 맞는 특수 효과(보정치 5) 1회 적용.",
      "flavor": "글이 전하려는 중심 생각을 찾아내는 것.",
      "utility_value": 5
    },
    {
      "id": "국어_유틸_115",
      "subject": "국어",
      "type": "유틸",
      "name": "문단 요약",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "문단의 핵심 내용을 간추리는 것.",
      "utility_value": 4
    },
    {
      "id": "국어_유틸_116",
      "subject": "국어",
      "type": "유틸",
      "name": "화자시점 전환",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "이야기를 전달하는 시점을 바꾸는 것(1인칭/3인칭).",
      "utility_value": 1
    },
    {
      "id": "국어_유틸_117",
      "subject": "국어",
      "type": "유틸",
      "name": "서술방식 분석",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "글쓴이가 내용을 전달하는 방법을 파악하는 것.",
      "utility_value": 4
    },
    {
      "id": "국어_유틸_118",
      "subject": "국어",
      "type": "유틸",
      "name": "갈래 구분",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "문학 작품을 시, 소설, 수필, 희곡 등으로 나누는 것.",
      "utility_value": 1
    },
    {
      "id": "국어_유틸_119",
      "subject": "국어",
      "type": "유틸",
      "name": "시대배경 탐색",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "작품이 쓰인 시대적 상황을 파악하는 것.",
      "utility_value": 2
    },
    {
      "id": "국어_유틸_120",
      "subject": "국어",
      "type": "유틸",
      "name": "작가의도 추론",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "작가가 작품을 통해 전달하려는 의도를 유추하는 것.",
      "utility_value": 1
    },
    {
      "id": "통합사회_공격_121",
      "subject": "통합사회",
      "type": "공격",
      "name": "수요공급 강타",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "가격에 따라 사고 싶은 양(수요)과 팔고 싶은 양(공급)이 달라지는 원리.",
      "damage": 5
    },
    {
      "id": "통합사회_공격_122",
      "subject": "통합사회",
      "type": "공격",
      "name": "시장실패 폭격",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 10.",
      "flavor": "시장이 자원을 효율적으로 배분하지 못하는 상황.",
      "damage": 10
    },
    {
      "id": "통합사회_공격_123",
      "subject": "통합사회",
      "type": "공격",
      "name": "인플레이션 압박",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "물가가 지속적으로 오르는 현상.",
      "damage": 7
    },
    {
      "id": "통합사회_공격_124",
      "subject": "통합사회",
      "type": "공격",
      "name": "헌법소원 일격",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 17.",
      "flavor": "기본권을 침해당한 국민이 헌법재판소에 구제를 요청하는 제도.",
      "damage": 17
    },
    {
      "id": "통합사회_공격_125",
      "subject": "통합사회",
      "type": "공격",
      "name": "삼권분립 연격",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 13.",
      "flavor": "입법·행정·사법 권력을 나누어 서로 견제하게 하는 원리.",
      "damage": 13
    },
    {
      "id": "통합사회_공격_126",
      "subject": "통합사회",
      "type": "공격",
      "name": "국제법 저격",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "국가 간의 관계를 규율하는 법.",
      "damage": 5
    },
    {
      "id": "통합사회_공격_127",
      "subject": "통합사회",
      "type": "공격",
      "name": "무역장벽 차단",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 9.",
      "flavor": "자국 산업 보호를 위해 수입을 제한하는 조치.",
      "damage": 9
    },
    {
      "id": "통합사회_공격_128",
      "subject": "통합사회",
      "type": "공격",
      "name": "여론 재판",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "다수 시민의 의견이 정책에 영향을 미치는 현상.",
      "damage": 7
    },
    {
      "id": "통합사회_공격_129",
      "subject": "통합사회",
      "type": "공격",
      "name": "다수결원칙 강타",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "많은 사람이 찬성하는 의견을 채택하는 의사결정 방식.",
      "damage": 8
    },
    {
      "id": "통합사회_공격_130",
      "subject": "통합사회",
      "type": "공격",
      "name": "지방자치 연타",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "지역 주민 스스로 지역 일을 결정하고 처리하는 제도.",
      "damage": 4
    },
    {
      "id": "통합사회_공격_131",
      "subject": "통합사회",
      "type": "공격",
      "name": "세계화 파동",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "국가 간 교류가 늘어 세계가 하나의 생활권으로 통합되는 현상.",
      "damage": 5
    },
    {
      "id": "통합사회_공격_132",
      "subject": "통합사회",
      "type": "공격",
      "name": "문화상대주의 관점",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 8.",
      "flavor": "각 문화를 그 사회의 맥락에서 이해해야 한다는 태도.",
      "damage": 8
    },
    {
      "id": "통합사회_공격_133",
      "subject": "통합사회",
      "type": "공격",
      "name": "사회계약론 일격",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "국가는 개인 간의 합의(계약)로 성립했다는 사상.",
      "damage": 7
    },
    {
      "id": "통합사회_공격_134",
      "subject": "통합사회",
      "type": "공격",
      "name": "시민불복종 저항",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 19.",
      "flavor": "부당한 법에 대해 공개적·비폭력적으로 저항하는 행위.",
      "damage": 19
    },
    {
      "id": "통합사회_공격_135",
      "subject": "통합사회",
      "type": "공격",
      "name": "공정거래 규제",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 11.",
      "flavor": "기업 간 불공정한 거래를 막기 위한 제도.",
      "damage": 11
    },
    {
      "id": "통합사회_공격_136",
      "subject": "통합사회",
      "type": "공격",
      "name": "노동3권 발동",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "단결권·단체교섭권·단체행동권 등 노동자의 기본 권리.",
      "damage": 5
    },
    {
      "id": "통합사회_공격_137",
      "subject": "통합사회",
      "type": "공격",
      "name": "복지국가 지원",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 13.",
      "flavor": "국민의 최소한의 삶을 국가가 보장하려는 이념.",
      "damage": 13
    },
    {
      "id": "통합사회_공격_138",
      "subject": "통합사회",
      "type": "공격",
      "name": "재정정책 조정",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "정부가 세금과 지출로 경제를 조절하는 정책.",
      "damage": 7
    },
    {
      "id": "통합사회_공격_139",
      "subject": "통합사회",
      "type": "공격",
      "name": "통화정책 조율",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "중앙은행이 통화량과 금리로 경제를 조절하는 정책.",
      "damage": 8
    },
    {
      "id": "통합사회_공격_140",
      "subject": "통합사회",
      "type": "공격",
      "name": "환율변동 파동",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "한 나라 화폐와 다른 나라 화폐의 교환 비율 변화.",
      "damage": 4
    },
    {
      "id": "통합사회_방어_141",
      "subject": "통합사회",
      "type": "방어",
      "name": "기본권 방패",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "헌법이 보장하는 국민의 기본적인 권리.",
      "shield": 4
    },
    {
      "id": "통합사회_방어_142",
      "subject": "통합사회",
      "type": "방어",
      "name": "적법절차 결계",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "국가 권력 행사는 반드시 정당한 절차를 따라야 한다는 원칙.",
      "shield": 8
    },
    {
      "id": "통합사회_방어_143",
      "subject": "통합사회",
      "type": "방어",
      "name": "평등권 보호막",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "누구나 차별받지 않고 동등하게 대우받을 권리.",
      "shield": 6
    },
    {
      "id": "통합사회_방어_144",
      "subject": "통합사회",
      "type": "방어",
      "name": "인간존엄성 방벽",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 받는 데미지 10만큼 감소(1회).",
      "flavor": "모든 인간은 그 자체로 존중받아야 한다는 헌법적 가치.",
      "shield": 10
    },
    {
      "id": "통합사회_방어_145",
      "subject": "통합사회",
      "type": "방어",
      "name": "사회보장제도 방어",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "국민의 최소 생활을 보장하기 위한 제도.",
      "shield": 6
    },
    {
      "id": "통합사회_방어_146",
      "subject": "통합사회",
      "type": "방어",
      "name": "소비자보호 결계",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "소비자의 권익을 지키기 위한 제도적 장치.",
      "shield": 5
    },
    {
      "id": "통합사회_방어_147",
      "subject": "통합사회",
      "type": "방어",
      "name": "국민주권 반사",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "국가의 최종 권력이 국민에게 있다는 원리.",
      "shield": 8
    },
    {
      "id": "통합사회_방어_148",
      "subject": "통합사회",
      "type": "방어",
      "name": "법치주의 방벽",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 3만큼 감소(1회).",
      "flavor": "국가 권력이 법에 근거해 행사되어야 한다는 원리.",
      "shield": 3
    },
    {
      "id": "통합사회_방어_149",
      "subject": "통합사회",
      "type": "방어",
      "name": "권력분립 결속",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "권력을 나누어 서로 견제·균형을 이루게 하는 원리.",
      "shield": 4
    },
    {
      "id": "통합사회_방어_150",
      "subject": "통합사회",
      "type": "방어",
      "name": "표현의자유 보호",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "자신의 생각을 자유롭게 밝힐 수 있는 권리.",
      "shield": 5
    },
    {
      "id": "통합사회_유틸_151",
      "subject": "통합사회",
      "type": "유틸",
      "name": "지도 해석",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "지도에 담긴 정보를 읽고 분석하는 것.",
      "utility_value": 2
    },
    {
      "id": "통합사회_유틸_152",
      "subject": "통합사회",
      "type": "유틸",
      "name": "통계자료 분석",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 진영 특성에 맞는 특수 효과(보정치 3) 1회 적용.",
      "flavor": "수치 자료를 통해 사회 현상을 파악하는 것.",
      "utility_value": 3
    },
    {
      "id": "통합사회_유틸_153",
      "subject": "통합사회",
      "type": "유틸",
      "name": "여론조사 활용",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "많은 사람의 의견을 수집해 경향을 파악하는 방법.",
      "utility_value": 2
    },
    {
      "id": "통합사회_유틸_154",
      "subject": "통합사회",
      "type": "유틸",
      "name": "위도경도 측정",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 진영 특성에 맞는 특수 효과(보정치 5) 1회 적용.",
      "flavor": "지구상의 위치를 나타내는 가로선과 세로선.",
      "utility_value": 5
    },
    {
      "id": "통합사회_유틸_155",
      "subject": "통합사회",
      "type": "유틸",
      "name": "기후그래프 판독",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "기온과 강수량을 함께 나타낸 그래프를 읽는 것.",
      "utility_value": 4
    },
    {
      "id": "통합사회_유틸_156",
      "subject": "통합사회",
      "type": "유틸",
      "name": "인구피라미드 분석",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "연령별·성별 인구 구성을 나타낸 그래프.",
      "utility_value": 1
    },
    {
      "id": "통합사회_유틸_157",
      "subject": "통합사회",
      "type": "유틸",
      "name": "산업구조 분석",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "한 나라의 산업이 1·2·3차로 어떻게 구성되는지 파악하는 것.",
      "utility_value": 4
    },
    {
      "id": "통합사회_유틸_158",
      "subject": "통합사회",
      "type": "유틸",
      "name": "자원분포 탐색",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "자원이 지역별로 어떻게 분포하는지 파악하는 것.",
      "utility_value": 1
    },
    {
      "id": "통합사회_유틸_159",
      "subject": "통합사회",
      "type": "유틸",
      "name": "시사이슈 파악",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "현재 사회에서 논의되는 쟁점을 이해하는 것.",
      "utility_value": 2
    },
    {
      "id": "통합사회_유틸_160",
      "subject": "통합사회",
      "type": "유틸",
      "name": "정책비교 분석",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "여러 정책의 장단점을 비교해 평가하는 것.",
      "utility_value": 1
    },
    {
      "id": "통합과학_공격_161",
      "subject": "통합과학",
      "type": "공격",
      "name": "관성의법칙 충돌",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "외력이 없으면 물체는 운동 상태를 유지한다는 뉴턴 제1법칙.",
      "damage": 5
    },
    {
      "id": "통합과학_공격_162",
      "subject": "통합과학",
      "type": "공격",
      "name": "작용반작용 반격",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 8.",
      "flavor": "힘을 가하면 크기가 같고 방향이 반대인 힘이 되돌아온다는 법칙.",
      "damage": 8
    },
    {
      "id": "통합과학_공격_163",
      "subject": "통합과학",
      "type": "공격",
      "name": "만유인력 견인",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "질량을 가진 모든 물체는 서로 끌어당긴다는 법칙.",
      "damage": 7
    },
    {
      "id": "통합과학_공격_164",
      "subject": "통합과학",
      "type": "공격",
      "name": "자유낙하 강타",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 17.",
      "flavor": "중력만 받아 아래로 떨어지는 운동.",
      "damage": 17
    },
    {
      "id": "통합과학_공격_165",
      "subject": "통합과학",
      "type": "공격",
      "name": "운동량보존 충격",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 11.",
      "flavor": "외부 힘이 없으면 전체 운동량의 합이 변하지 않는다는 법칙.",
      "damage": 11
    },
    {
      "id": "통합과학_공격_166",
      "subject": "통합과학",
      "type": "공격",
      "name": "에너지보존 폭발",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "에너지는 형태만 바뀔 뿐 총량은 변하지 않는다는 법칙.",
      "damage": 5
    },
    {
      "id": "통합과학_공격_167",
      "subject": "통합과학",
      "type": "공격",
      "name": "화학반응 폭격",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 13.",
      "flavor": "물질이 다른 물질로 변하는 과정과 그 식.",
      "damage": 13
    },
    {
      "id": "통합과학_공격_168",
      "subject": "통합과학",
      "type": "공격",
      "name": "산화환원 반응",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "전자를 잃고(산화) 얻는(환원) 반응.",
      "damage": 7
    },
    {
      "id": "통합과학_공격_169",
      "subject": "통합과학",
      "type": "공격",
      "name": "산염기반응 중화",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "산과 염기가 만나 서로의 성질을 없애는 반응.",
      "damage": 8
    },
    {
      "id": "통합과학_공격_170",
      "subject": "통합과학",
      "type": "공격",
      "name": "전자기유도 방전",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "자기장의 변화가 전류를 만들어내는 현상.",
      "damage": 4
    },
    {
      "id": "통합과학_공격_171",
      "subject": "통합과학",
      "type": "공격",
      "name": "파동간섭 충격파",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "두 파동이 겹쳐 세기가 커지거나 작아지는 현상.",
      "damage": 5
    },
    {
      "id": "통합과학_공격_172",
      "subject": "통합과학",
      "type": "공격",
      "name": "굴절법칙 저격",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 12.",
      "flavor": "빛이 매질을 지날 때 경로가 꺾이는 현상.",
      "damage": 12
    },
    {
      "id": "통합과학_공격_173",
      "subject": "통합과학",
      "type": "공격",
      "name": "방사성붕괴 폭발",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "불안정한 원자핵이 방사선을 내며 안정한 상태로 변하는 현상.",
      "damage": 7
    },
    {
      "id": "통합과학_공격_174",
      "subject": "통합과학",
      "type": "공격",
      "name": "유전법칙 발현",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 19.",
      "flavor": "부모의 형질이 자손에게 전달되는 규칙(멘델의 법칙).",
      "damage": 19
    },
    {
      "id": "통합과학_공격_175",
      "subject": "통합과학",
      "type": "공격",
      "name": "자연선택 도태",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 9.",
      "flavor": "환경에 적합한 개체가 살아남아 번식한다는 원리.",
      "damage": 9
    },
    {
      "id": "통합과학_공격_176",
      "subject": "통합과학",
      "type": "공격",
      "name": "광합성 폭발",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "식물이 빛에너지로 포도당을 만드는 과정.",
      "damage": 5
    },
    {
      "id": "통합과학_공격_177",
      "subject": "통합과학",
      "type": "공격",
      "name": "세포호흡 연소",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 11.",
      "flavor": "세포가 영양소를 분해해 에너지를 얻는 과정.",
      "damage": 11
    },
    {
      "id": "통합과학_공격_178",
      "subject": "통합과학",
      "type": "공격",
      "name": "삼투압 압박",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "농도가 다른 두 용액 사이에서 물이 이동하는 현상의 압력.",
      "damage": 7
    },
    {
      "id": "통합과학_공격_179",
      "subject": "통합과학",
      "type": "공격",
      "name": "전류법칙 방전",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "전압, 전류, 저항 사이의 관계(옴의 법칙).",
      "damage": 8
    },
    {
      "id": "통합과학_공격_180",
      "subject": "통합과학",
      "type": "공격",
      "name": "마찰력 제동",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "접촉면 사이에서 운동을 방해하는 힘.",
      "damage": 4
    },
    {
      "id": "통합과학_방어_181",
      "subject": "통합과학",
      "type": "방어",
      "name": "원소주기율 방패",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "원자번호 순서로 배열하면 성질이 주기적으로 반복되는 규칙.",
      "shield": 4
    },
    {
      "id": "통합과학_방어_182",
      "subject": "통합과학",
      "type": "방어",
      "name": "화학결합 결계",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "원자들이 서로 연결되어 분자를 이루는 방식.",
      "shield": 8
    },
    {
      "id": "통합과학_방어_183",
      "subject": "통합과학",
      "type": "방어",
      "name": "세포막 보호막",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "세포 내부와 외부를 구분하고 물질 출입을 조절하는 막.",
      "shield": 6
    },
    {
      "id": "통합과학_방어_184",
      "subject": "통합과학",
      "type": "방어",
      "name": "항상성 방벽",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 받는 데미지 14만큼 감소(1회).",
      "flavor": "생명체가 내부 환경을 일정하게 유지하려는 성질.",
      "shield": 14
    },
    {
      "id": "통합과학_방어_185",
      "subject": "통합과학",
      "type": "방어",
      "name": "면역반응 방어",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "몸속에 들어온 병원체에 맞서 싸우는 신체 반응.",
      "shield": 6
    },
    {
      "id": "통합과학_방어_186",
      "subject": "통합과학",
      "type": "방어",
      "name": "완충작용 결속",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "pH 변화를 최소화하는 화학적 작용.",
      "shield": 5
    },
    {
      "id": "통합과학_방어_187",
      "subject": "통합과학",
      "type": "방어",
      "name": "밀도 방벽",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "단위 부피당 질량. 물질마다 고유한 값을 가진다.",
      "shield": 8
    },
    {
      "id": "통합과학_방어_188",
      "subject": "통합과학",
      "type": "방어",
      "name": "표면장력 결계",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 3만큼 감소(1회).",
      "flavor": "액체 표면이 스스로 수축하려는 힘.",
      "shield": 3
    },
    {
      "id": "통합과학_방어_189",
      "subject": "통합과학",
      "type": "방어",
      "name": "열평형 반사",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "온도가 다른 두 물체가 접촉하면 결국 같은 온도가 되는 현상.",
      "shield": 4
    },
    {
      "id": "통합과학_방어_190",
      "subject": "통합과학",
      "type": "방어",
      "name": "관성모멘트 저항",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "회전 운동에서 물체가 회전 상태를 유지하려는 성질.",
      "shield": 5
    },
    {
      "id": "통합과학_유틸_191",
      "subject": "통합과학",
      "type": "유틸",
      "name": "현미경 관찰",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "작은 대상을 확대해서 관찰하는 도구와 방법.",
      "utility_value": 2
    },
    {
      "id": "통합과학_유틸_192",
      "subject": "통합과학",
      "type": "유틸",
      "name": "실험설계 구성",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 진영 특성에 맞는 특수 효과(보정치 3) 1회 적용.",
      "flavor": "가설을 검증하기 위한 실험 절차를 짜는 것.",
      "utility_value": 3
    },
    {
      "id": "통합과학_유틸_193",
      "subject": "통합과학",
      "type": "유틸",
      "name": "변인통제 조율",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "실험에서 조작 변인 외 나머지를 동일하게 유지하는 것.",
      "utility_value": 2
    },
    {
      "id": "통합과학_유틸_194",
      "subject": "통합과학",
      "type": "유틸",
      "name": "그래프 해석",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 진영 특성에 맞는 특수 효과(보정치 5) 1회 적용.",
      "flavor": "실험 결과를 그래프로 나타내고 분석하는 것.",
      "utility_value": 5
    },
    {
      "id": "통합과학_유틸_195",
      "subject": "통합과학",
      "type": "유틸",
      "name": "단위환산 계산",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "서로 다른 단위를 같은 기준으로 바꾸는 것.",
      "utility_value": 4
    },
    {
      "id": "통합과학_유틸_196",
      "subject": "통합과학",
      "type": "유틸",
      "name": "화학식 작성",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "물질의 조성을 원소기호로 나타내는 것.",
      "utility_value": 1
    },
    {
      "id": "통합과학_유틸_197",
      "subject": "통합과학",
      "type": "유틸",
      "name": "원소기호 표기",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "각 원소를 알파벳 기호로 나타내는 것.",
      "utility_value": 4
    },
    {
      "id": "통합과학_유틸_198",
      "subject": "통합과학",
      "type": "유틸",
      "name": "주기율표 판독",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "원소들을 원자번호와 성질에 따라 배열한 표를 읽는 것.",
      "utility_value": 1
    },
    {
      "id": "통합과학_유틸_199",
      "subject": "통합과학",
      "type": "유틸",
      "name": "생태계 분석",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "생물과 환경이 상호작용하는 체계를 파악하는 것.",
      "utility_value": 2
    },
    {
      "id": "통합과학_유틸_200",
      "subject": "통합과학",
      "type": "유틸",
      "name": "지층 해석",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "암석층의 순서와 특징으로 과거 환경을 추론하는 것.",
      "utility_value": 1
    },
    {
      "id": "한국사_공격_201",
      "subject": "한국사",
      "type": "공격",
      "name": "훈민정음 창제",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "1443년 세종이 백성을 위해 만든 우리 고유의 문자 체계.",
      "damage": 5
    },
    {
      "id": "한국사_공격_202",
      "subject": "한국사",
      "type": "공격",
      "name": "거북선 전술",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 12.",
      "flavor": "이순신 장군이 활용한 철갑 전선의 포위·돌격 전술.",
      "damage": 12
    },
    {
      "id": "한국사_공격_203",
      "subject": "한국사",
      "type": "공격",
      "name": "임진왜란 의병",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "왜군의 침입에 맞서 자발적으로 일어난 백성들의 군대.",
      "damage": 7
    },
    {
      "id": "한국사_공격_204",
      "subject": "한국사",
      "type": "공격",
      "name": "동학농민운동 봉기",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 17.",
      "flavor": "1894년 부패한 관리와 외세에 맞선 농민들의 대규모 봉기.",
      "damage": 17
    },
    {
      "id": "한국사_공격_205",
      "subject": "한국사",
      "type": "공격",
      "name": "갑오개혁 단행",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 9.",
      "flavor": "1894년 신분제 폐지 등 근대적 개혁을 추진한 사건.",
      "damage": 9
    },
    {
      "id": "한국사_공격_206",
      "subject": "한국사",
      "type": "공격",
      "name": "3.1운동 함성",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "1919년 전국적으로 일어난 비폭력 독립 만세 운동.",
      "damage": 5
    },
    {
      "id": "한국사_공격_207",
      "subject": "한국사",
      "type": "공격",
      "name": "광주학생운동 궐기",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 11.",
      "flavor": "1929년 학생들이 중심이 된 항일 민족운동.",
      "damage": 11
    },
    {
      "id": "한국사_공격_208",
      "subject": "한국사",
      "type": "공격",
      "name": "독립군 무장투쟁",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "만주·연해주 등지에서 무력으로 독립을 쟁취하려 한 투쟁.",
      "damage": 7
    },
    {
      "id": "한국사_공격_209",
      "subject": "한국사",
      "type": "공격",
      "name": "4.19혁명 함성",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "1960년 부정선거에 항거해 일어난 민주주의 혁명.",
      "damage": 8
    },
    {
      "id": "한국사_공격_210",
      "subject": "한국사",
      "type": "공격",
      "name": "5.18민주화운동 항쟁",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "1980년 광주에서 일어난 민주화를 위한 시민 항쟁.",
      "damage": 4
    },
    {
      "id": "한국사_공격_211",
      "subject": "한국사",
      "type": "공격",
      "name": "병자호란 항쟁",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 5.",
      "flavor": "1636년 청의 침입에 맞선 조선의 저항.",
      "damage": 5
    },
    {
      "id": "한국사_공격_212",
      "subject": "한국사",
      "type": "공격",
      "name": "살수대첩 승전",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 대상에게 데미지 10.",
      "flavor": "고구려 을지문덕이 수나라 대군을 물리친 전투.",
      "damage": 10
    },
    {
      "id": "한국사_공격_213",
      "subject": "한국사",
      "type": "공격",
      "name": "귀주대첩 승전",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 7.",
      "flavor": "고려 강감찬이 거란군을 크게 물리친 전투.",
      "damage": 7
    },
    {
      "id": "한국사_공격_214",
      "subject": "한국사",
      "type": "공격",
      "name": "한산도대첩 승전",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 대상에게 데미지 19.",
      "flavor": "이순신이 학익진으로 왜 수군을 대파한 전투.",
      "damage": 19
    },
    {
      "id": "한국사_공격_215",
      "subject": "한국사",
      "type": "공격",
      "name": "을미의병 봉기",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 13.",
      "flavor": "명성황후 시해와 단발령에 반발해 일어난 의병 운동.",
      "damage": 13
    },
    {
      "id": "한국사_공격_216",
      "subject": "한국사",
      "type": "공격",
      "name": "신미양요 항쟁",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 5.",
      "flavor": "1871년 미국 함대의 침입에 맞선 조선의 항전.",
      "damage": 5
    },
    {
      "id": "한국사_공격_217",
      "subject": "한국사",
      "type": "공격",
      "name": "강화도조약 체결",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 대상에게 데미지 9.",
      "flavor": "1876년 조선이 일본과 맺은 최초의 근대적 조약(불평등 조약).",
      "damage": 9
    },
    {
      "id": "한국사_공격_218",
      "subject": "한국사",
      "type": "공격",
      "name": "갑신정변 단행",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 7.",
      "flavor": "1884년 급진 개화파가 일으킨 근대화 정변.",
      "damage": 7
    },
    {
      "id": "한국사_공격_219",
      "subject": "한국사",
      "type": "공격",
      "name": "위정척사 저항",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 대상에게 데미지 8.",
      "flavor": "전통 질서를 지키고 외세를 배척하자는 사상.",
      "damage": 8
    },
    {
      "id": "한국사_공격_220",
      "subject": "한국사",
      "type": "공격",
      "name": "동북공정 대응",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 대상에게 데미지 4.",
      "flavor": "중국의 역사 왜곡 시도에 맞선 역사적 대응.",
      "damage": 4
    },
    {
      "id": "한국사_방어_221",
      "subject": "한국사",
      "type": "방어",
      "name": "성곽 축조 방패",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "외적의 침입을 막기 위해 흙과 돌로 쌓은 방어시설.",
      "shield": 4
    },
    {
      "id": "한국사_방어_222",
      "subject": "한국사",
      "type": "방어",
      "name": "봉수제도 경계",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "불과 연기로 위급한 소식을 빠르게 전하던 통신 제도.",
      "shield": 8
    },
    {
      "id": "한국사_방어_223",
      "subject": "한국사",
      "type": "방어",
      "name": "실학사상 방벽",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "조선 후기 현실 문제 해결을 중시한 새로운 학풍.",
      "shield": 6
    },
    {
      "id": "한국사_방어_224",
      "subject": "한국사",
      "type": "방어",
      "name": "대동법 시행",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 받는 데미지 12만큼 감소(1회).",
      "flavor": "공납을 쌀·베·돈으로 통일해 걷던 조선의 조세 제도.",
      "shield": 12
    },
    {
      "id": "한국사_방어_225",
      "subject": "한국사",
      "type": "방어",
      "name": "균역법 시행",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 6만큼 감소(1회).",
      "flavor": "군포 부담을 절반으로 줄여준 조선의 세금 제도.",
      "shield": 6
    },
    {
      "id": "한국사_방어_226",
      "subject": "한국사",
      "type": "방어",
      "name": "탕평책 조율",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "붕당 간 대립을 완화하려 한 영·정조의 정책.",
      "shield": 5
    },
    {
      "id": "한국사_방어_227",
      "subject": "한국사",
      "type": "방어",
      "name": "집현전 연구",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 받는 데미지 8만큼 감소(1회).",
      "flavor": "세종이 학문 연구를 위해 설치한 왕립 학술 기관.",
      "shield": 8
    },
    {
      "id": "한국사_방어_228",
      "subject": "한국사",
      "type": "방어",
      "name": "사고 보관",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 3만큼 감소(1회).",
      "flavor": "조선왕조실록 등 중요 기록을 보관하던 서고.",
      "shield": 3
    },
    {
      "id": "한국사_방어_229",
      "subject": "한국사",
      "type": "방어",
      "name": "향약 결속",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 받는 데미지 4만큼 감소(1회).",
      "flavor": "조선시대 마을 단위의 자치 규약.",
      "shield": 4
    },
    {
      "id": "한국사_방어_230",
      "subject": "한국사",
      "type": "방어",
      "name": "서원 교육",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 받는 데미지 5만큼 감소(1회).",
      "flavor": "조선시대 유생들이 학문을 닦던 사설 교육기관.",
      "shield": 5
    },
    {
      "id": "한국사_유틸_231",
      "subject": "한국사",
      "type": "유틸",
      "name": "사료 해석",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "옛 문헌이나 기록을 통해 역사적 사실을 파악하는 것.",
      "utility_value": 2
    },
    {
      "id": "한국사_유틸_232",
      "subject": "한국사",
      "type": "유틸",
      "name": "유물 감정",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 진영 특성에 맞는 특수 효과(보정치 3) 1회 적용.",
      "flavor": "출토된 유물의 시대와 용도를 판별하는 것.",
      "utility_value": 3
    },
    {
      "id": "한국사_유틸_233",
      "subject": "한국사",
      "type": "유틸",
      "name": "연표 작성",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "역사적 사건을 시간 순서로 정리하는 것.",
      "utility_value": 2
    },
    {
      "id": "한국사_유틸_234",
      "subject": "한국사",
      "type": "유틸",
      "name": "역사지도 판독",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 진영 특성에 맞는 특수 효과(보정치 5) 1회 적용.",
      "flavor": "옛 지도를 통해 영토와 지리 변화를 파악하는 것.",
      "utility_value": 5
    },
    {
      "id": "한국사_유틸_235",
      "subject": "한국사",
      "type": "유틸",
      "name": "계보 파악",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "왕이나 인물 간의 혈연·계승 관계를 정리하는 것.",
      "utility_value": 4
    },
    {
      "id": "한국사_유틸_236",
      "subject": "한국사",
      "type": "유틸",
      "name": "시대구분 정리",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "역사를 고대·중세·근대 등으로 나누는 기준을 파악하는 것.",
      "utility_value": 1
    },
    {
      "id": "한국사_유틸_237",
      "subject": "한국사",
      "type": "유틸",
      "name": "인물관계 분석",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "역사적 인물 간의 관계를 파악하는 것.",
      "utility_value": 4
    },
    {
      "id": "한국사_유틸_238",
      "subject": "한국사",
      "type": "유틸",
      "name": "사건인과 분석",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "역사적 사건의 원인과 결과를 연결해 분석하는 것.",
      "utility_value": 1
    },
    {
      "id": "한국사_유틸_239",
      "subject": "한국사",
      "type": "유틸",
      "name": "유적 답사",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "역사적 장소를 직접 방문해 조사하는 활동.",
      "utility_value": 2
    },
    {
      "id": "한국사_유틸_240",
      "subject": "한국사",
      "type": "유틸",
      "name": "고문서 해독",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "옛 한자·한글 문서를 읽고 뜻을 파악하는 것.",
      "utility_value": 1
    },
    {
      "id": "공용_유틸_241",
      "subject": "공용",
      "type": "유틸",
      "name": "엎어치기",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "[체육] 유도에서 상대를 등 뒤로 넘겨 매치는 기술.",
      "utility_value": 2
    },
    {
      "id": "공용_유틸_242",
      "subject": "공용",
      "type": "유틸",
      "name": "배면치기",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 진영 특성에 맞는 특수 효과(보정치 3) 1회 적용.",
      "flavor": "[체육] 몸을 돌려 등 쪽으로 상대를 넘기는 기술.",
      "utility_value": 3
    },
    {
      "id": "공용_유틸_243",
      "subject": "공용",
      "type": "유틸",
      "name": "페인트모션",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "[체육] 상대를 속이기 위한 가짜 동작.",
      "utility_value": 2
    },
    {
      "id": "공용_유틸_244",
      "subject": "공용",
      "type": "유틸",
      "name": "스퍼트",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 진영 특성에 맞는 특수 효과(보정치 5) 1회 적용.",
      "flavor": "[체육] 순간적으로 속도를 크게 높이는 동작.",
      "utility_value": 5
    },
    {
      "id": "공용_유틸_245",
      "subject": "공용",
      "type": "유틸",
      "name": "지구력훈련",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "[체육] 오랜 시간 운동을 지속할 수 있는 능력을 기르는 훈련.",
      "utility_value": 4
    },
    {
      "id": "공용_유틸_246",
      "subject": "공용",
      "type": "유틸",
      "name": "순발력강화",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "[체육] 짧은 시간에 최대 힘을 내는 능력을 기르는 훈련.",
      "utility_value": 1
    },
    {
      "id": "공용_유틸_247",
      "subject": "공용",
      "type": "유틸",
      "name": "팀워크플레이",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "[체육] 팀원과 협력해 목표를 달성하는 전술.",
      "utility_value": 4
    },
    {
      "id": "공용_유틸_248",
      "subject": "공용",
      "type": "유틸",
      "name": "심폐지구력",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "[체육] 심장과 폐가 오래 운동을 지속하게 하는 능력.",
      "utility_value": 1
    },
    {
      "id": "공용_유틸_249",
      "subject": "공용",
      "type": "유틸",
      "name": "유연성훈련",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "[체육] 관절과 근육의 가동 범위를 넓히는 훈련.",
      "utility_value": 2
    },
    {
      "id": "공용_유틸_250",
      "subject": "공용",
      "type": "유틸",
      "name": "근력강화",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "[체육] 근육이 낼 수 있는 힘을 키우는 훈련.",
      "utility_value": 1
    },
    {
      "id": "공용_유틸_251",
      "subject": "공용",
      "type": "유틸",
      "name": "자기소개서작성",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "[진로] 자신의 강점과 경험을 정리해 알리는 글쓰기.",
      "utility_value": 2
    },
    {
      "id": "공용_유틸_252",
      "subject": "공용",
      "type": "유틸",
      "name": "포트폴리오정리",
      "rarity": "희귀",
      "mp": 3,
      "front_text": "MP 3 소모, 진영 특성에 맞는 특수 효과(보정치 3) 1회 적용.",
      "flavor": "[진로] 자신의 활동과 결과물을 체계적으로 모은 자료.",
      "utility_value": 3
    },
    {
      "id": "공용_유틸_253",
      "subject": "공용",
      "type": "유틸",
      "name": "인턴십경험",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "[진로] 실제 현장에서 미리 일을 경험해보는 활동.",
      "utility_value": 2
    },
    {
      "id": "공용_유틸_254",
      "subject": "공용",
      "type": "유틸",
      "name": "네트워킹",
      "rarity": "전설",
      "mp": 5,
      "front_text": "MP 5 소모, 진영 특성에 맞는 특수 효과(보정치 5) 1회 적용.",
      "flavor": "[진로] 진로에 도움이 될 인적 관계를 넓히는 활동.",
      "utility_value": 5
    },
    {
      "id": "공용_유틸_255",
      "subject": "공용",
      "type": "유틸",
      "name": "목표설정",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "[진로] 이루고자 하는 바를 구체적으로 정하는 것.",
      "utility_value": 4
    },
    {
      "id": "공용_유틸_256",
      "subject": "공용",
      "type": "유틸",
      "name": "시간관리",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "[진로] 한정된 시간을 효율적으로 배분해 쓰는 능력.",
      "utility_value": 1
    },
    {
      "id": "공용_유틸_257",
      "subject": "공용",
      "type": "유틸",
      "name": "강점분석",
      "rarity": "희귀",
      "mp": 4,
      "front_text": "MP 4 소모, 진영 특성에 맞는 특수 효과(보정치 4) 1회 적용.",
      "flavor": "[진로] 자신이 잘하는 것을 파악하는 것.",
      "utility_value": 4
    },
    {
      "id": "공용_유틸_258",
      "subject": "공용",
      "type": "유틸",
      "name": "롤모델탐색",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "[진로] 본받고 싶은 인물을 찾아 진로에 참고하는 것.",
      "utility_value": 1
    },
    {
      "id": "공용_유틸_259",
      "subject": "공용",
      "type": "유틸",
      "name": "자격증취득",
      "rarity": "일반",
      "mp": 2,
      "front_text": "MP 2 소모, 진영 특성에 맞는 특수 효과(보정치 2) 1회 적용.",
      "flavor": "[진로] 특정 분야의 능력을 공식적으로 인정받는 것.",
      "utility_value": 2
    },
    {
      "id": "공용_유틸_260",
      "subject": "공용",
      "type": "유틸",
      "name": "진로상담",
      "rarity": "일반",
      "mp": 1,
      "front_text": "MP 1 소모, 진영 특성에 맞는 특수 효과(보정치 1) 1회 적용.",
      "flavor": "[진로] 전문가와의 대화를 통해 진로를 설계하는 것.",
      "utility_value": 1
    }
  ],
  "skills": {
    "math_pi": {
      "kind": "growth",
      "cost": 0,
      "uses": null,
      "magnitude": 1,
      "cap": 5,
      "label": "무한소수"
    },
    "math_root": {
      "kind": "sunder",
      "cost": 3,
      "uses": 2,
      "magnitude": 0.5,
      "label": "근호분해"
    },
    "math_sigma": {
      "kind": "combo",
      "cost": 0,
      "uses": null,
      "magnitude": 0.2,
      "threshold": 2,
      "label": "급수합산"
    },
    "math_infinity": {
      "kind": "extra_action",
      "cost": 6,
      "uses": 1,
      "magnitude": 0,
      "label": "발산"
    },
    "eng_preposition": {
      "kind": "true_strike",
      "cost": 3,
      "uses": 2,
      "magnitude": 0,
      "label": "포지셔닝"
    },
    "eng_subjunctive": {
      "kind": "heal_self",
      "cost": 5,
      "uses": 1,
      "magnitude": 10,
      "label": "가정법 과거완료"
    },
    "eng_relative": {
      "kind": "shield_self",
      "cost": 4,
      "uses": 2,
      "magnitude": 8,
      "label": "절 연결"
    },
    "eng_perfect": {
      "kind": "shield_self",
      "cost": 4,
      "uses": 2,
      "magnitude": 10,
      "label": "경험의 축적"
    },
    "kor_metaphor": {
      "kind": "true_strike",
      "cost": 4,
      "uses": 2,
      "magnitude": 0,
      "label": "빗대어 말하기"
    },
    "kor_particle": {
      "kind": "shield_self",
      "cost": 3,
      "uses": 1,
      "magnitude": 10,
      "label": "격조사 전환"
    },
    "kor_sijo": {
      "kind": "execute_low",
      "cost": 5,
      "uses": 1,
      "magnitude": 15,
      "threshold": 0.3,
      "label": "종장의 반전"
    },
    "kor_narrator": {
      "kind": "heal_self",
      "cost": 4,
      "uses": 2,
      "magnitude": 8,
      "label": "시점 전환"
    },
    "soc_supply_demand": {
      "kind": "mp_discount",
      "cost": 4,
      "uses": 2,
      "magnitude": 2,
      "label": "가격균형"
    },
    "soc_constitution": {
      "kind": "immune",
      "cost": 5,
      "uses": 1,
      "magnitude": 0,
      "label": "최고규범"
    },
    "soc_coordinate": {
      "kind": "true_strike",
      "cost": 3,
      "uses": 2,
      "magnitude": 0,
      "label": "정밀타격"
    },
    "soc_human_rights": {
      "kind": "heal_self",
      "cost": 4,
      "uses": 2,
      "magnitude": 15,
      "label": "천부인권"
    },
    "sci_inertia": {
      "kind": "repeat_combo",
      "cost": 0,
      "uses": null,
      "magnitude": 0.5,
      "label": "등속운동"
    },
    "sci_element": {
      "kind": "mp_discount",
      "cost": 1,
      "uses": 3,
      "magnitude": 1,
      "label": "주기성"
    },
    "sci_cell": {
      "kind": "hp_shield",
      "cost": 0,
      "uses": 1,
      "magnitude": 0.5,
      "hpCost": 20,
      "label": "세포분열"
    },
    "sci_energy": {
      "kind": "heal_self",
      "cost": 0,
      "uses": 2,
      "magnitude": 10,
      "label": "형태전환"
    },
    "hist_hangeul": {
      "kind": "mp_discount",
      "cost": 4,
      "uses": 1,
      "magnitude": 1,
      "label": "백성을 가르치는 바른 소리"
    },
    "hist_turtleship": {
      "kind": "aoe",
      "cost": 5,
      "uses": 1,
      "magnitude": 6,
      "label": "학익진"
    },
    "hist_donghak": {
      "kind": "underdog",
      "cost": 0,
      "uses": null,
      "magnitude": 0.3,
      "threshold": 0.5,
      "label": "보국안민"
    },
    "hist_independence": {
      "kind": "surge",
      "cost": 5,
      "uses": 1,
      "magnitude": 2,
      "label": "만세운동"
    }
  }
};
