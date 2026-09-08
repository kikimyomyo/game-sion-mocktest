window.GAME_CONFIG = {
  game: "sion-mocktest",
  title: "시온이 모의시험",
  sheet_tab: "sion-mocktest",
  endpoint: "https://script.google.com/macros/s/AKfycbz5mX9EPnOSmSs6p0YFiNTpqH810emc3ArEKnfusCYXrjH90OcIapwgYjnyP9A_F5ZYOQ/exec",
  problems: [
  {
    "id": 1,
    "cycle": 1,
    "subject": "수학",
    "역할": "메인",
    "계보id": "L260904-math-poly",
    "현재스텝": "H",
    "수능출처": "2023학년도 수능 수학 5번 (미분)",
    "unit": "다항식 (분배법칙·동류항 정리)",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "사탕을 6묶음 산다. 한 묶음은 20개들이 한 봉지 + 낱개 4개다. 분배법칙 6×(20+4)로 사탕 전체 개수를 구하면?",
        "choices": [
          "① 120",
          "② 124",
          "③ 144",
          "④ 150"
        ],
        "answer": "③ 144",
        "hint": "분배법칙은 6을 20에도 4에도 각각 곱해서 더하는 거야. 6×20은 얼마? 6×4는 얼마? 둘을 더해봐.",
        "explanation": "6×(20+4)=6×20+6×4=120+24=144. 6을 20에만 곱하고 4를 그냥 더하면 124가 나오는데(흔한 실수), 4에도 6을 곱해야 한다. 이 '괄호 안 모든 항에 곱하기'가 다항식 3(x+4)=3x+12로 그대로 이어진다. 지금 20·4처럼 수로 쓴 자리를 중학교에서는 x라고 부른다.",
        "개념키": "math.poly.distributive"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "(2x² + 3x − 1) + (x² − x + 4) 를 간단히 정리하면?",
        "choices": [
          "① 3x² + 2x + 3",
          "② 3x² + 4x + 3",
          "③ x² + 2x + 3",
          "④ 3x² + 2x − 3"
        ],
        "answer": "① 3x² + 2x + 3",
        "hint": "x²는 x²끼리, x는 x끼리, 숫자는 숫자끼리만 모아 더해. 2x²과 x²을 더하면 몇 x²? 3x와 −x를 더하면?",
        "explanation": "동류항(같은 문자·차수)끼리만 더한다. 2x²+x²=3x², 3x−x=2x, −1+4=3 → 3x²+2x+3. 3x−x를 4x로 하면 ②, 2x²+x²을 x²으로 하면 ③가 되는데 계수는 더하는 것이다. 초등에서 20과 4를 각각 6에 곱했듯, 여기선 같은 종류끼리 묶는다. 중학교에서 두 다항식까지 하던 걸 고등학교에선 개수 제한 없이 한다.",
        "개념키": "math.poly.like_terms"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "A = 2x² − x + 1, B = x² + 3x − 4 일 때, 2A − B 를 계산하면?",
        "choices": [
          "① 3x² − 5x + 6",
          "② 3x² + x + 6",
          "③ 5x² − 5x + 6",
          "④ 3x² − 5x − 2"
        ],
        "answer": "① 3x² − 5x + 6",
        "hint": "먼저 A를 2배로 만들어(각 항에 2씩 곱하기 = 분배법칙!). 그다음 B를 빼는데, 빼기는 B의 모든 항 부호를 바꾸는 거야.",
        "explanation": "2A=4x²−2x+2. 2A−B에서 −B는 −x²−3x+4로 모든 부호를 바꾼다. 4x²−x²=3x², −2x−3x=−5x, 2+4=6 → 3x²−5x+6. −B의 −3x를 +3x로 놓치면 ②, x²항 부호를 놓쳐 4x²+x²=5x²로 하면 ③가 된다. 빼기를 만나면 괄호 안 전체 부호를 뒤집는 게 열쇠.",
        "개념키": "math.poly.addition"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "다항식 (2x² + 2x − 3) 에서 (x² − 1) 을 뺀 결과는?",
        "choices": [
          "① x² + 2x − 2",
          "② 3x² + 2x − 2",
          "③ x² + 2x − 4",
          "④ x² + 2x + 2"
        ],
        "answer": "① x² + 2x − 2",
        "hint": "빼기니까 (x²−1)의 부호를 전부 바꿔서 더해: −x²+1. 2x²에서 x²을 빼면 몇 x²이 남을까? 더하는 게 아니야.",
        "explanation": "빼기이므로 −(x²−1)=−x²+1. 2x²−x²=x²(3x²이 아니다!), 2x는 그대로, −3+1=−2 → x²+2x−2. 여기서 뺄셈을 덧셈처럼 봐서 2x²+x²=3x²로 쓰면 지난번(x²을 3x²으로) 실수가 그대로 반복된다. x² 계수는 2−1=1이다. 수능은 이 정리 자체를 묻지 않는다 — 이걸 도구로 쓰는 미분을 묻는다.",
        "개념키": "math.poly.like_terms_linear"
      }
    ],
    "보스전": {
      "진짜수능본문": "다항함수 f(x)에 대하여 함수 g(x)를 g(x)=(x³+1)f(x)라 하자. f(1)=2, f'(1)=3일 때, g'(1)의 값은? [3점]",
      "진짜수능선택지": [
        "① 9",
        "② 10",
        "③ 11",
        "④ 12",
        "⑤ 13"
      ],
      "진짜수능정답": "④",
      "보스전_해설": "곱의 미분법: g'(x)=(x³+1)'f(x)+(x³+1)f'(x)=3x²·f(x)+(x³+1)·f'(x). x=1 대입: 3·1²·f(1)+(1+1)·f'(1)=3·2+2·3=6+6=12. E에서 본 분배법칙(각 항에 곱하기)과 M·H에서 본 동류항 정리(항끼리 더하기)가 여기서 그대로 쓰인다 — 두 곱을 각각 구해 더하는 게 곧 다항식 계산이다. x³의 미분이 3x²(지수를 계수로 내리고 하나 줄임)인 것만 알면, 나머지는 오늘 연습한 정리 그대로다. 정답 ④ 12.",
      "강조구간": [
        "g(x)=(x³+1)f(x)",
        "f(1)=2, f'(1)=3",
        "g'(1)의 값은?"
      ]
    },
    "통합풀이법": "괄호는 분배로 풀고 같은 것끼리(동류항) 모아 더한다 — 빼기는 부호 전부 뒤집기.",
    "이미지_묘사": "",
    "book_diagram_url": "./diagrams/book/2026-09-09_cycle_1.jpg",
    "book_diagram_source": "출처: eomaeomahan suhag_su",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "반지름이 2 cm인 원의 둘레는 얼마입니까? (원주율은 3.14로 계산)",
        "choices": [
          "12.56 cm",
          "6.28 cm",
          "12.56 cm²",
          "25.12 cm"
        ],
        "answer": "12.56 cm",
        "explanation": "원의 둘레 = 지름 × 원주율 = (2 × 2) × 3.14 = 12.56 cm. 둘레는 길이이므로 단위는 cm입니다. 6.28은 반지름×원주율만 한 값, 12.56 cm²는 넓이 단위로 잘못 쓴 것, 25.12는 지름을 두 배로 잘못 넣은 값입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "원의 넓이"
      },
      {
        "type": "mcq",
        "question": "모서리가 24개인 각기둥이 있습니다. 이 각기둥의 면은 모두 몇 개일까요?",
        "choices": [
          "8개",
          "9개",
          "10개",
          "26개"
        ],
        "answer": "10개",
        "explanation": "각기둥의 모서리 수는 3n개이므로 3n=24에서 n=8, 팔각기둥입니다. 면 수는 n+2=8+2=10개. 8개는 밑면의 변 수(n)만 센 것, 9개는 한 개 덜 센 것, 26개는 모서리에 면을 더한 엉뚱한 계산입니다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "각기둥과 각뿔"
      },
      {
        "type": "mcq",
        "question": "비 4 : 6을 가장 간단한 자연수의 비로 나타내면 얼마입니까?",
        "choices": [
          "2 : 3",
          "3 : 4",
          "4 : 6",
          "1 : 2"
        ],
        "answer": "2 : 3",
        "explanation": "4와 6의 최대공약수는 2이므로 두 항을 2로 나누면 2 : 3이 됩니다. '3 : 4'와 '1 : 2'는 비율이 다르고, '4 : 6'은 더 간단히 줄일 수 있어 답이 아닙니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "비례식과 비례배분"
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "영어",
    "역할": "서브",
    "수능출처": "수능 어법 문항(주어-동사 수 일치) 대비 · Grammar Joy 3",
    "unit": "주어-동사 수 일치 · 명사 복수형",
    "통합풀이법": "동사를 정하기 전에 주어가 하나냐 여럿이냐부터 센다 — 물·우유처럼 못 세는 건 하나로.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "The two dogs ___ in the park every morning. (알맞은 동사는?)",
        "choices": [
          "① walks",
          "② walk",
          "③ is walking",
          "④ to walk"
        ],
        "answer": "② walk",
        "hint": "주어가 강아지 몇 마리야? 2마리면 복수. 복수 주어엔 동사에 -s가 붙을까 안 붙을까?",
        "explanation": "주어 the two dogs는 복수(2마리). 복수 주어에는 동사에 -s를 붙이지 않는다 → walk. 단수(one dog)일 때만 walks다. 지난번 walk를 walks로 고친 실수가 여기다 — 주어가 몇 개인지 먼저 세라. 해석: '두 마리 강아지가 매일 아침 공원에서 걷는다.' 핵심단어 dogs(복수) → 동사에 -s 없음.",
        "개념키": "en.grammar.subject_verb_agreement"
      },
      {
        "type": "mcq",
        "question": "The water slowly ___ the empty bowl. (알맞은 동사는?)",
        "choices": [
          "① fill",
          "② fills",
          "③ are filling",
          "④ filling"
        ],
        "answer": "② fills",
        "hint": "물(water)은 셀 수 있어, 없어? 셀 수 없으면 단수로 봐. 단수 주어엔 동사에 -s.",
        "explanation": "water(물)는 셀 수 없는 명사라 단수 취급 → 동사에 -s: fills. are filling은 be동사 are가 복수라 틀리고, filling·fill은 동사 형태가 안 맞는다. 지난번 are filling으로 쓴 실수가 이것 — water는 하나로 보고 fills. 해석: '물이 빈 그릇을 천천히 채운다.' 핵심단어 water=단수, fill=채우다.",
        "개념키": "en.noun.plural"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "명사 'man'(남자)의 복수형은? (불규칙 복수형)",
        "choices": [
          "mans",
          "mens",
          "men",
          "manes"
        ],
        "answer": "men",
        "explanation": "man은 -s를 붙이지 않고 모음이 바뀌는 불규칙 복수형으로 man → men이 된다. 'mans'는 -s를 붙여 오답, 'mens'는 men에 다시 -s를 붙여 오답, 'manes'는 -es 규칙을 잘못 적용해 오답.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 01 셀 수 있는 명사"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? 'I drink ___ milk every morning.'",
        "choices": [
          "a milk",
          "milks",
          "two milk",
          "milk"
        ],
        "answer": "milk",
        "explanation": "milk(우유)는 셀 수 없는 명사라서 a를 붙이거나 복수형(milks)을 만들지 않고 그냥 milk로 쓴다. a milk·milks·two milk는 모두 셀 수 없는 명사에 잘못된 형태를 붙여 틀렸다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 02 셀 수 없는 명사"
      },
      {
        "type": "mcq",
        "question": "다음 문장 중 어법상 옳은 것은? (셀 수 있는 명사의 단수/복수 일치)",
        "choices": [
          "I have a books.",
          "She has two pencil.",
          "He has three apples.",
          "We have a oranges."
        ],
        "answer": "He has three apples.",
        "explanation": "three(셋)는 복수이므로 apples로 써야 하며 'He has three apples.'가 맞다. 'a books'는 a(하나) + 복수형이라 오답, 'two pencil'은 둘인데 단수형이라 오답, 'a oranges'는 a + 복수형이고 모음 앞이라 오답.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 01 셀 수 있는 명사"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "통합과학",
    "역할": "서브",
    "수능출처": "통합과학 탐구(변인 통제·대조 실험) 대비",
    "unit": "변인 통제 · 대조 실험",
    "통합풀이법": "실험은 '하나만 바꾸고(독립) 나머지 고정, 결과를 잰다(종속)' — 바꾼 것과 잰 것을 헷갈리지 마.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "강아지가 사료 A와 B 중 무엇을 더 빨리 먹는지 알아보는 대조 실험을 한다. 오직 하나만 다르게 하고 나머지는 모두 같게 할 때, 다르게 해야 하는 것(독립변인)은?",
        "choices": [
          "① 사료의 종류",
          "② 강아지의 품종",
          "③ 밥그릇의 크기",
          "④ 먹이를 주는 시간"
        ],
        "answer": "① 사료의 종류",
        "hint": "실험에서 '알아보려는 것'이 무엇인지 봐. 그것만 다르게 하고 나머지는 다 똑같이.",
        "explanation": "대조 실험은 알아보려는 것 하나(독립변인)만 다르게 하고 나머지 조건은 똑같이 맞춘다. '어느 사료'를 알아보니 다르게 할 것은 사료의 종류다. 품종·그릇·시간까지 다르게 하면 결과가 사료 때문인지 알 수 없다. 이것이 변인 통제.",
        "개념키": "sci.method.variables"
      },
      {
        "type": "mcq",
        "question": "위 실험에서 우리가 관찰하고 기록해야 하는 결과(종속변인)는?",
        "choices": [
          "① 사료의 종류",
          "② 사료를 다 먹는 데 걸린 시간",
          "③ 밥그릇의 색깔",
          "④ 실험한 날짜"
        ],
        "answer": "② 사료를 다 먹는 데 걸린 시간",
        "hint": "'더 빨리 먹는지' 알려면 무엇을 재야 할까? 우리가 정한 조건 말고, 결과로 나오는 값.",
        "explanation": "독립변인(다르게 한 것)=사료 종류, 종속변인(그 결과로 측정하는 것)=다 먹는 데 걸린 시간이다. '더 빨리 먹는지' 알려면 시간을 재서 기록한다. 사료 종류는 우리가 정한 조건이지 측정 결과가 아니다(지난번 이걸 헷갈렸다). 다르게 한 것과 재는 것을 구분하는 게 핵심.",
        "개념키": "sci.method.variables"
      }
    ],
    "video_url": "./diagrams/2026-09-09_cycle_3.mp4",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음 중 '도구를 사용해야만' 정확히 알 수 있는 관찰은?",
        "choices": [
          "체온계로 잰 몸의 정확한 온도",
          "사과가 빨간색이라는 것",
          "종소리가 들린다는 것",
          "꽃향기가 난다는 것"
        ],
        "answer": "체온계로 잰 몸의 정확한 온도",
        "explanation": "온도의 정확한 값은 손의 느낌만으로는 알 수 없고 체온계 같은 도구가 필요하다. 색(눈)·소리(귀)·향기(코)는 우리 감각 기관으로 바로 알 수 있으므로 도구가 꼭 필요한 관찰이 아니다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "자연·실험 입문 (관찰과 분류)"
      },
      {
        "type": "mcq",
        "question": "온도가 설탕이 녹는 빠르기에 영향을 주는지 알아보는 실험에서, 다음 중 측정 결과로 기록해야 하는 것(다르게 나타나는 결과)은 무엇인가?",
        "choices": [
          "설탕이 완전히 녹는 데 걸린 시간",
          "물의 온도",
          "설탕의 양",
          "물의 양"
        ],
        "answer": "설탕이 완전히 녹는 데 걸린 시간",
        "explanation": "이 실험의 결과는 설탕이 녹는 빠르기, 즉 녹는 데 걸린 시간이므로 이것을 측정해 기록한다. 물의 온도는 일부러 바꾼 조건, 설탕의 양과 물의 양은 같게 맞춰야 하는 조건이므로 측정 결과가 아니어서 오답이다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "변인·관찰·실험 입문 (조건 비교)"
      },
      {
        "type": "mcq",
        "question": "다음 측정 도구와 측정하는 양이 바르게 짝지어진 것은?",
        "choices": [
          "온도계 - 온도",
          "온도계 - 무게",
          "자 - 시간",
          "저울 - 길이"
        ],
        "answer": "온도계 - 온도",
        "explanation": "온도계는 온도를 잰다. 온도계는 무게를 재지 못하고(무게는 저울), 자는 길이를 재며(시간이 아님), 저울은 무게를 잰다(길이가 아님). 따라서 바르게 짝지어진 것은 '온도계 - 온도'뿐이다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "자연·실험 입문 (관찰과 분류)"
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-09-09",
  "week": "2026-W37",
  "weakness_focus": [
    "수능 기출 학습",
    "다항식의 연산·동류항 정리 (2026-09-04 오답, ② 38→④ 46)",
    "간격 문제(직선)에서 나눗셈 결과를 가로등 수로 오인 (2026-09-07 오답, 간격13→14·가로등14→15)"
  ],
  "grade": "초6"
},
  dashboard: {
  "grade": "초6",
  "chapter": 1,
  "chapter_total": 5,
  "overall_progress": 5,
  "streak_days": 1,
  "longest_streak": 3,
  "total_plays": 665,
  "total_correct": 496,
  "accuracy": 75,
  "last_date": "2026-09-08",
  "영역별": [
    {
      "subject": "국어",
      "color": "#ff8fc5",
      "progress": 32,
      "current_unit": "문학",
      "weak_count": 6,
      "strong_count": 1,
      "recent_accuracy": [
        1.0,
        1.0,
        1.0
      ],
      "is_master": true
    },
    {
      "subject": "수학",
      "color": "#5ba0ff",
      "progress": 52,
      "current_unit": "6-2 분수의 나눗셈",
      "weak_count": 6,
      "strong_count": 12,
      "recent_accuracy": [
        0.567,
        0.5,
        0.475
      ],
      "is_master": false
    },
    {
      "subject": "영어",
      "color": "#b48dff",
      "progress": 20,
      "current_unit": "Grammar Joy 3 전체",
      "weak_count": 6,
      "strong_count": 2,
      "recent_accuracy": [
        1.0,
        0.5,
        0.6
      ],
      "is_master": false
    },
    {
      "subject": "통합과학",
      "color": "#5ed5a0",
      "progress": 2,
      "current_unit": "기록·자료 정리",
      "weak_count": 6,
      "strong_count": 1,
      "recent_accuracy": [
        0.5,
        1.0,
        1.0
      ],
      "is_master": false
    },
    {
      "subject": "통합사회",
      "color": "#ffc861",
      "progress": 2,
      "current_unit": "지도와 자료 읽기 (그래프·표)",
      "weak_count": 6,
      "strong_count": 1,
      "recent_accuracy": [
        0.0,
        0.225,
        1.0
      ],
      "is_master": false
    },
    {
      "subject": "한국사",
      "color": "#ff9d6b",
      "progress": 0,
      "current_unit": "미시작",
      "weak_count": 5,
      "strong_count": 0,
      "recent_accuracy": [
        0.5,
        0.5,
        0.5
      ],
      "is_master": false
    }
  ],
  "level": 51,
  "xp_total": 5060,
  "xp_in_level": 60,
  "master_units": 1,
  "roadmap": [
    {
      "grade": "초6",
      "label": "Chapter 1",
      "short": "초6",
      "status": "current",
      "milestone": "🌱 모든 영역 모험 시작"
    },
    {
      "grade": "중1",
      "label": "Chapter 2",
      "short": "중1",
      "status": "locked",
      "milestone": "🌿 기초 스킬 트리 완성"
    },
    {
      "grade": "중2",
      "label": "Chapter 3",
      "short": "중2",
      "status": "locked",
      "milestone": "🌳 응용 챌린지 진입"
    },
    {
      "grade": "중3",
      "label": "Chapter 4",
      "short": "중3",
      "status": "locked",
      "milestone": "⭐ 모든 단원 마스터 도전"
    },
    {
      "grade": "졸업",
      "label": "🎓 엔딩",
      "short": "🎓",
      "status": "locked",
      "milestone": "🏆 5영역 완주 — 엔딩!"
    }
  ],
  "trophies": [
    {
      "subject": "국어",
      "color": "#ff8fc5",
      "unit": "문학",
      "date": "2026-09-08",
      "accuracy": 100,
      "track": "초6"
    }
  ],
  "skill_tree": {
    "국어": [
      {
        "name": "문학",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-00",
        "status": "current"
      },
      {
        "name": "읽기",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-01",
        "status": "locked"
      },
      {
        "name": "쓰기",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-02",
        "status": "locked"
      },
      {
        "name": "문법",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-03",
        "status": "locked"
      },
      {
        "name": "듣기·말하기",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-04",
        "status": "locked"
      },
      {
        "name": "문학",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-05",
        "status": "locked"
      },
      {
        "name": "읽기",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-06",
        "status": "locked"
      },
      {
        "name": "쓰기",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-07",
        "status": "locked"
      },
      {
        "name": "문법",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-08",
        "status": "locked"
      },
      {
        "name": "듣기·말하기",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-09",
        "status": "locked"
      },
      {
        "name": "문학(시·소설·수필)",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-10",
        "status": "locked"
      },
      {
        "name": "비문학 독해",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-11",
        "status": "locked"
      },
      {
        "name": "문법(품사·문장)",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-12",
        "status": "locked"
      },
      {
        "name": "쓰기·말하기",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-13",
        "status": "locked"
      },
      {
        "name": "문학(고전·현대)",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-14",
        "status": "locked"
      },
      {
        "name": "비문학 독해",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-15",
        "status": "locked"
      },
      {
        "name": "문법(어휘·의미)",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-16",
        "status": "locked"
      },
      {
        "name": "매체",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-17",
        "status": "locked"
      },
      {
        "name": "문학(통합)",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-18",
        "status": "locked"
      },
      {
        "name": "비문학 독해",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-19",
        "status": "locked"
      },
      {
        "name": "문법(통합)",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-20",
        "status": "locked"
      },
      {
        "name": "매체",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-21",
        "status": "locked"
      },
      {
        "name": "화법과 작문",
        "grade": "초6",
        "track": "고1",
        "color": "#10b981",
        "id": "국어-22",
        "status": "locked"
      },
      {
        "name": "독서(비문학)",
        "grade": "초6",
        "track": "고1",
        "color": "#10b981",
        "id": "국어-23",
        "status": "locked"
      },
      {
        "name": "문학",
        "grade": "초6",
        "track": "고1",
        "color": "#10b981",
        "id": "국어-24",
        "status": "locked"
      },
      {
        "name": "언어와 매체",
        "grade": "초6",
        "track": "고1",
        "color": "#10b981",
        "id": "국어-25",
        "status": "locked"
      }
    ],
    "수학": [
      {
        "name": "자연수의 혼합 계산",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-00",
        "status": "done"
      },
      {
        "name": "약수와 배수",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-01",
        "status": "done"
      },
      {
        "name": "규칙과 대응",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-02",
        "status": "done"
      },
      {
        "name": "약분과 통분",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-03",
        "status": "done"
      },
      {
        "name": "분수의 덧셈과 뺄셈",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-04",
        "status": "done"
      },
      {
        "name": "다각형의 둘레와 넓이",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-05",
        "status": "done"
      },
      {
        "name": "수의 범위와 어림하기",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-06",
        "status": "done"
      },
      {
        "name": "분수의 곱셈",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-07",
        "status": "done"
      },
      {
        "name": "합동과 대칭",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-08",
        "status": "done"
      },
      {
        "name": "소수의 곱셈",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-09",
        "status": "done"
      },
      {
        "name": "직육면체",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-10",
        "status": "done"
      },
      {
        "name": "평균과 가능성",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-11",
        "status": "done"
      },
      {
        "name": "분수의 나눗셈",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-12",
        "status": "current"
      },
      {
        "name": "각기둥과 각뿔",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-13",
        "status": "locked"
      },
      {
        "name": "소수의 나눗셈",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-14",
        "status": "locked"
      },
      {
        "name": "비와 비율",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-15",
        "status": "locked"
      },
      {
        "name": "여러 가지 그래프",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-16",
        "status": "locked"
      },
      {
        "name": "직육면체의 부피와 겉넓이",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-17",
        "status": "locked"
      },
      {
        "name": "분수의 나눗셈",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-18",
        "status": "locked"
      },
      {
        "name": "소수의 나눗셈",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-19",
        "status": "locked"
      },
      {
        "name": "공간과 입체",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-20",
        "status": "locked"
      },
      {
        "name": "비례식과 비례배분",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-21",
        "status": "locked"
      },
      {
        "name": "원의 넓이",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-22",
        "status": "locked"
      },
      {
        "name": "원기둥·원뿔·구",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-23",
        "status": "locked"
      },
      {
        "name": "소인수분해",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-24",
        "status": "locked"
      },
      {
        "name": "정수와 유리수",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-25",
        "status": "locked"
      },
      {
        "name": "문자와 식",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-26",
        "status": "locked"
      },
      {
        "name": "일차방정식",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-27",
        "status": "locked"
      },
      {
        "name": "좌표평면과 그래프",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-28",
        "status": "locked"
      },
      {
        "name": "기본 도형",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-29",
        "status": "locked"
      },
      {
        "name": "평면도형의 성질",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-30",
        "status": "locked"
      },
      {
        "name": "입체도형의 성질",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-31",
        "status": "locked"
      },
      {
        "name": "통계",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-32",
        "status": "locked"
      },
      {
        "name": "유리수와 순환소수",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-33",
        "status": "locked"
      },
      {
        "name": "식의 계산",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-34",
        "status": "locked"
      },
      {
        "name": "일차부등식",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-35",
        "status": "locked"
      },
      {
        "name": "연립일차방정식",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-36",
        "status": "locked"
      },
      {
        "name": "일차함수와 그래프",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-37",
        "status": "locked"
      },
      {
        "name": "일차함수와 일차방정식의 관계",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-38",
        "status": "locked"
      },
      {
        "name": "도형의 성질 (삼각형·사각형)",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-39",
        "status": "locked"
      },
      {
        "name": "도형의 닮음",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-40",
        "status": "locked"
      },
      {
        "name": "피타고라스 정리",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-41",
        "status": "locked"
      },
      {
        "name": "확률",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-42",
        "status": "locked"
      },
      {
        "name": "제곱근과 실수",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-43",
        "status": "locked"
      },
      {
        "name": "다항식의 곱셈과 인수분해",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-44",
        "status": "locked"
      },
      {
        "name": "이차방정식",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-45",
        "status": "locked"
      },
      {
        "name": "이차함수",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-46",
        "status": "locked"
      },
      {
        "name": "삼각비",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-47",
        "status": "locked"
      },
      {
        "name": "원의 성질",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-48",
        "status": "locked"
      },
      {
        "name": "대푯값과 산포도",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-49",
        "status": "locked"
      },
      {
        "name": "상관관계",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "수학-50",
        "status": "locked"
      },
      {
        "name": "여러 가지 함수의 미분",
        "grade": "초6",
        "track": "고1",
        "color": "#10b981",
        "id": "수학-51",
        "status": "locked"
      },
      {
        "name": "여러 가지 적분",
        "grade": "초6",
        "track": "고1",
        "color": "#10b981",
        "id": "수학-52",
        "status": "locked"
      },
      {
        "name": "이차곡선",
        "grade": "초6",
        "track": "고1",
        "color": "#10b981",
        "id": "수학-53",
        "status": "locked"
      },
      {
        "name": "평면벡터",
        "grade": "초6",
        "track": "고1",
        "color": "#10b981",
        "id": "수학-54",
        "status": "locked"
      },
      {
        "name": "공간도형과 공간좌표",
        "grade": "초6",
        "track": "고1",
        "color": "#10b981",
        "id": "수학-55",
        "status": "locked"
      }
    ],
    "영어": [
      {
        "name": "셀 수 있는 명사 (복수형)",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-00",
        "status": "current"
      },
      {
        "name": "셀 수 없는 명사",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-01",
        "status": "locked"
      },
      {
        "name": "관사 (a/an/the)",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-02",
        "status": "locked"
      },
      {
        "name": "인칭대명사와 지시대명사",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-03",
        "status": "locked"
      },
      {
        "name": "be동사의 긍정문",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-04",
        "status": "locked"
      },
      {
        "name": "be동사의 부정문/의문문",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-05",
        "status": "locked"
      },
      {
        "name": "일반동사의 긍정문",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-06",
        "status": "locked"
      },
      {
        "name": "일반동사의 부정문/의문문",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-07",
        "status": "locked"
      },
      {
        "name": "현재/과거/미래 시제",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-08",
        "status": "locked"
      },
      {
        "name": "의문문 종합",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-09",
        "status": "locked"
      },
      {
        "name": "진행시제",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-10",
        "status": "locked"
      },
      {
        "name": "완료시제",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-11",
        "status": "locked"
      },
      {
        "name": "조동사",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-12",
        "status": "locked"
      },
      {
        "name": "수동태",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-13",
        "status": "locked"
      },
      {
        "name": "관계대명사",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-14",
        "status": "locked"
      },
      {
        "name": "관계부사",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-15",
        "status": "locked"
      },
      {
        "name": "부정사",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-16",
        "status": "locked"
      },
      {
        "name": "동명사",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-17",
        "status": "locked"
      },
      {
        "name": "분사",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-18",
        "status": "locked"
      },
      {
        "name": "분사구문",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-19",
        "status": "locked"
      },
      {
        "name": "비교급/최상급",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-20",
        "status": "locked"
      },
      {
        "name": "가정법",
        "grade": "고1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-21",
        "status": "locked"
      },
      {
        "name": "도치",
        "grade": "고1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-22",
        "status": "locked"
      },
      {
        "name": "강조",
        "grade": "고1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-23",
        "status": "locked"
      },
      {
        "name": "일치",
        "grade": "고1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-24",
        "status": "locked"
      },
      {
        "name": "화법",
        "grade": "고1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-25",
        "status": "locked"
      },
      {
        "name": "특수구문",
        "grade": "고1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-26",
        "status": "locked"
      },
      {
        "name": "Unit 01 셀 수 있는 명사",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-27",
        "status": "locked"
      },
      {
        "name": "Unit 02 셀 수 없는 명사",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-28",
        "status": "locked"
      },
      {
        "name": "Unit 03 관사",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-29",
        "status": "locked"
      },
      {
        "name": "Unit 04 인칭대명사·지시대명사",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-30",
        "status": "locked"
      },
      {
        "name": "Unit 05 be동사 긍정문",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-31",
        "status": "locked"
      },
      {
        "name": "Unit 06 be동사 부정문/의문문",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-32",
        "status": "locked"
      },
      {
        "name": "Unit 07 일반동사 긍정문",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-33",
        "status": "locked"
      },
      {
        "name": "Unit 08 일반동사 부정문/의문문",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-34",
        "status": "locked"
      },
      {
        "name": "Review Test 1·2",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-35",
        "status": "locked"
      },
      {
        "name": "내신대비 1·2",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-36",
        "status": "locked"
      },
      {
        "name": "종합문제",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-37",
        "status": "locked"
      },
      {
        "name": "There is/are",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-38",
        "status": "locked"
      },
      {
        "name": "일반동사",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-39",
        "status": "locked"
      },
      {
        "name": "현재진행형",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-40",
        "status": "locked"
      },
      {
        "name": "형용사",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-41",
        "status": "locked"
      },
      {
        "name": "some/any/many/much",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-42",
        "status": "locked"
      },
      {
        "name": "부사",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-43",
        "status": "locked"
      },
      {
        "name": "비교",
        "grade": "중1",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-44",
        "status": "locked"
      },
      {
        "name": "의문사+일반동사",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-45",
        "status": "locked"
      },
      {
        "name": "의문사+be동사",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-46",
        "status": "locked"
      },
      {
        "name": "의문대명사·의문형용사",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-47",
        "status": "locked"
      },
      {
        "name": "의문부사",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-48",
        "status": "locked"
      },
      {
        "name": "접속사·명령문",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-49",
        "status": "locked"
      },
      {
        "name": "조동사 can/must",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-50",
        "status": "locked"
      },
      {
        "name": "전치사",
        "grade": "중2",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-51",
        "status": "locked"
      },
      {
        "name": "기수·서수",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-52",
        "status": "locked"
      },
      {
        "name": "비인칭주어",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-53",
        "status": "locked"
      },
      {
        "name": "과거형",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-54",
        "status": "locked"
      },
      {
        "name": "과거진행형",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-55",
        "status": "locked"
      },
      {
        "name": "미래형",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-56",
        "status": "locked"
      },
      {
        "name": "감탄문",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-57",
        "status": "locked"
      },
      {
        "name": "부정의문문·부가의문문",
        "grade": "중3",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "영어-58",
        "status": "locked"
      }
    ],
    "통합과학": [
      {
        "name": "초6 자연·실험 입문 (매일 수능 학습 진입)",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "통합과학-00",
        "status": "done"
      },
      {
        "name": "변인·관찰·실험 입문",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "통합과학-01",
        "status": "done"
      },
      {
        "name": "기록·자료 정리",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "통합과학-02",
        "status": "current"
      },
      {
        "name": "지권의 변화 (지구·지각)",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합과학-03",
        "status": "locked"
      },
      {
        "name": "여러 가지 힘 (중력·마찰·탄성)",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합과학-04",
        "status": "locked"
      },
      {
        "name": "생물의 다양성",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합과학-05",
        "status": "locked"
      },
      {
        "name": "기체의 성질 (압력·온도·부피)",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합과학-06",
        "status": "locked"
      },
      {
        "name": "물질의 상태 변화",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합과학-07",
        "status": "locked"
      },
      {
        "name": "빛과 파동",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합과학-08",
        "status": "locked"
      },
      {
        "name": "물질의 구성 (원소·원자·분자)",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합과학-09",
        "status": "locked"
      },
      {
        "name": "전기와 자기 (회로·자기장)",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합과학-10",
        "status": "locked"
      },
      {
        "name": "태양계 (행성·달)",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합과학-11",
        "status": "locked"
      },
      {
        "name": "식물과 에너지 (광합성·호흡)",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합과학-12",
        "status": "locked"
      },
      {
        "name": "동물과 에너지 (소화·호흡·순환·배설)",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합과학-13",
        "status": "locked"
      },
      {
        "name": "물질의 특성 (밀도·녹는점·끓는점)",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합과학-14",
        "status": "locked"
      },
      {
        "name": "수권과 해수의 순환",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합과학-15",
        "status": "locked"
      },
      {
        "name": "화학 반응 (산·염기·중화)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합과학-16",
        "status": "locked"
      },
      {
        "name": "기권과 날씨 (대기·강수·기단)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합과학-17",
        "status": "locked"
      },
      {
        "name": "운동과 에너지 (등속·자유낙하·역학)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합과학-18",
        "status": "locked"
      },
      {
        "name": "자극과 반응 (감각·신경·항상성)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합과학-19",
        "status": "locked"
      },
      {
        "name": "생식과 유전 (세포 분열·멘델 유전)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합과학-20",
        "status": "locked"
      },
      {
        "name": "에너지 전환과 보존 (열·전기·일)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합과학-21",
        "status": "locked"
      },
      {
        "name": "별과 우주 (별의 진화·우주 팽창)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합과학-22",
        "status": "locked"
      },
      {
        "name": "물질과 규칙성 (원자·주기율·결합)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "통합과학-23",
        "status": "locked"
      },
      {
        "name": "시스템과 상호작용 (지구·생명·역학)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "통합과학-24",
        "status": "locked"
      },
      {
        "name": "변화와 다양성 (화학반응·진화·생태)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "통합과학-25",
        "status": "locked"
      },
      {
        "name": "환경과 에너지 (에너지·기후·미래기술)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "통합과학-26",
        "status": "locked"
      }
    ],
    "통합사회": [
      {
        "name": "초6 자료 읽기·비율 입문 (매일 수능 학습 진입)",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "통합사회-00",
        "status": "done"
      },
      {
        "name": "지도와 자료 읽기 (그래프·표)",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "통합사회-01",
        "status": "current"
      },
      {
        "name": "공정 분배·비율 활용",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "통합사회-02",
        "status": "locked"
      },
      {
        "name": "내가 사는 세계 (위치·지도)",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합사회-03",
        "status": "locked"
      },
      {
        "name": "우리와 다른 기후·다른 생활",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합사회-04",
        "status": "locked"
      },
      {
        "name": "자연으로 떠나는 여행",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합사회-05",
        "status": "locked"
      },
      {
        "name": "다양한 세계, 다양한 문화",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합사회-06",
        "status": "locked"
      },
      {
        "name": "지구촌과 더불어 사는 우리",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합사회-07",
        "status": "locked"
      },
      {
        "name": "인권과 헌법 (기본권)",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합사회-08",
        "status": "locked"
      },
      {
        "name": "헌법과 국가기관",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "통합사회-09",
        "status": "locked"
      },
      {
        "name": "민주 정치와 선거",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합사회-10",
        "status": "locked"
      },
      {
        "name": "정치 과정과 시민 참여",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합사회-11",
        "status": "locked"
      },
      {
        "name": "일상생활과 법 (가족·재산)",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합사회-12",
        "status": "locked"
      },
      {
        "name": "사회 변동과 사회 문제",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합사회-13",
        "status": "locked"
      },
      {
        "name": "현대 사회와 시민 (다양성·관용)",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합사회-14",
        "status": "locked"
      },
      {
        "name": "경제생활과 합리적 선택",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합사회-15",
        "status": "locked"
      },
      {
        "name": "시장 경제와 가격",
        "grade": "중2",
        "track": "중2",
        "color": "#3b82f6",
        "id": "통합사회-16",
        "status": "locked"
      },
      {
        "name": "국민 경제와 경제 성장",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합사회-17",
        "status": "locked"
      },
      {
        "name": "국제 경제와 무역",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합사회-18",
        "status": "locked"
      },
      {
        "name": "국제 사회와 국제 정치",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합사회-19",
        "status": "locked"
      },
      {
        "name": "지속 가능한 환경과 자원",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합사회-20",
        "status": "locked"
      },
      {
        "name": "통일 한국의 미래",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합사회-21",
        "status": "locked"
      },
      {
        "name": "더불어 사는 세계 (지역 문제 해결)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "통합사회-22",
        "status": "locked"
      },
      {
        "name": "행복과 정의 (행복·정의의 의미)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "통합사회-23",
        "status": "locked"
      },
      {
        "name": "자연환경과 인간 (자연관·환경 문제)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "통합사회-24",
        "status": "locked"
      },
      {
        "name": "문화와 다양성 (문화 상대주의)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "통합사회-25",
        "status": "locked"
      },
      {
        "name": "인권 보장 (인권의 의미·실현)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "통합사회-26",
        "status": "locked"
      },
      {
        "name": "시장과 자원 (시장·금융·자원 배분)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "통합사회-27",
        "status": "locked"
      },
      {
        "name": "지속가능한 미래 (사회 문제·세계화)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "통합사회-28",
        "status": "locked"
      }
    ],
    "한국사": [
      {
        "name": "고려·조선 시대 기초",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "한국사-00",
        "status": "current"
      },
      {
        "name": "근현대사 입문",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "한국사-01",
        "status": "locked"
      },
      {
        "name": "선사·고대 (구석기·신석기·고조선)",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "한국사-02",
        "status": "locked"
      },
      {
        "name": "삼국 시대 (고구려·백제·신라)",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "한국사-03",
        "status": "locked"
      },
      {
        "name": "통일신라·발해",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "한국사-04",
        "status": "locked"
      },
      {
        "name": "고려 시대 (정치·문화)",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "한국사-05",
        "status": "locked"
      },
      {
        "name": "조선 전기 (건국·세종·임진왜란)",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "한국사-06",
        "status": "locked"
      },
      {
        "name": "조선 후기 (실학·세도정치)",
        "grade": "중1",
        "track": "중1",
        "color": "#5ba0ff",
        "id": "한국사-07",
        "status": "locked"
      },
      {
        "name": "개항기 (강화도조약·갑오개혁)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "한국사-08",
        "status": "locked"
      },
      {
        "name": "일제강점기 (3·1운동·독립운동)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "한국사-09",
        "status": "locked"
      },
      {
        "name": "광복과 대한민국 정부 수립",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "한국사-10",
        "status": "locked"
      },
      {
        "name": "6·25 전쟁과 분단",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "한국사-11",
        "status": "locked"
      },
      {
        "name": "민주화·산업화 (1960~80년대)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "한국사-12",
        "status": "locked"
      },
      {
        "name": "현대 한국 (1990~현재)",
        "grade": "중3",
        "track": "중3",
        "color": "#1d4ed8",
        "id": "한국사-13",
        "status": "locked"
      },
      {
        "name": "전근대 한국사 (선사~조선)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "한국사-14",
        "status": "locked"
      },
      {
        "name": "근대 한국사 (개항~일제강점기)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "한국사-15",
        "status": "locked"
      },
      {
        "name": "현대 한국사 (광복~현재)",
        "grade": "고1",
        "track": "고1",
        "color": "#10b981",
        "id": "한국사-16",
        "status": "locked"
      }
    ]
  }
},
  copywork: {
  "title": "어린 왕자 영어 필사",
  "book_key": "어린왕자영어",
  "images": [
    "./copywork/today.jpg"
  ],
  "page": 20,
  "total": 133,
  "image": "./copywork/today.jpg",
  "weekday": "수",
  "date": "2026-09-09",
  "flagged": false
},
  revenge: {
  "date": "2026-09-09",
  "items": [
    {
      "id": "warm-math.ratio.basic",
      "kind": "warmup",
      "label": "box0 간격 복습",
      "과목": "수학",
      "단원": "비와 비율",
      "개념키": "math.ratio.basic",
      "problem": {
        "type": "mcq",
        "question": "가격이 200원에서 250원으로 올랐습니다. 인상률은 몇 %입니까?",
        "choices": [
          "20%",
          "25%",
          "50%",
          "80%"
        ],
        "answer": "25%",
        "explanation": "오른 금액 50원을 기준량 200원으로 나누면 50/200=0.25 → 25%. 오답: 20%는 250원을 기준으로 잘못 나눈 값, 50%는 50원을 100원으로 나눈 값, 80%는 200/250을 계산한 엉뚱한 값입니다.",
        "hint": "비와 비율 — 89일 밀린 간격 복습"
      }
    },
    {
      "id": "warm-math.similarity.basic",
      "kind": "warmup",
      "label": "box0 간격 복습",
      "과목": "수학",
      "단원": "닮음과 선분비",
      "개념키": "math.similarity.basic",
      "problem": {
        "type": "mcq",
        "question": "서로 닮은 두 삼각형에 대한 설명으로 옳은 것은?",
        "choices": [
          "대응하는 각의 크기는 서로 같다",
          "대응하는 각의 크기도 닮음비만큼 커진다",
          "대응하는 변의 길이는 항상 서로 같다",
          "닮음비가 2:3이면 대응각의 크기도 2:3이다"
        ],
        "answer": "대응하는 각의 크기는 서로 같다",
        "explanation": "닮음은 모양을 그대로 두고 크기만 바꾼 관계이므로 대응각의 크기는 변하지 않고 서로 같다. 길이만 닮음비만큼 늘거나 줄어든다. 각도까지 비율대로 커진다고 생각하면 모양이 달라져 버리므로 닮음이 아니게 된다.",
        "hint": "닮음과 선분비 — 83일 밀린 간격 복습"
      }
    },
    {
      "id": "warm-sci.energy.conservation",
      "kind": "warmup",
      "label": "box0 간격 복습",
      "과목": "통합과학",
      "단원": "역학적 에너지 보존",
      "개념키": "sci.energy.conservation",
      "problem": {
        "type": "mcq",
        "question": "높은 곳에 있는 물체가 가지는 에너지를 무엇이라고 하는가?",
        "choices": [
          "위치 에너지",
          "운동 에너지",
          "열에너지",
          "소리 에너지"
        ],
        "answer": "위치 에너지",
        "explanation": "높이 때문에 생기는 에너지를 위치 에너지라고 한다. 물체가 높이 있을수록, 무거울수록 위치 에너지가 크다. 운동 에너지는 움직이는 빠르기 때문에 생기는 에너지다.",
        "hint": "역학적 에너지 보존 — 76일 밀린 간격 복습"
      }
    }
  ],
  "은행결손": []
},
  vocab: {
  "date": "2026-09-09",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "친밀함",
        "애쓰다",
        "추상적인",
        "가리다, 감추다"
      ],
      "answer": "애쓰다",
      "explanation": "struggle = 애쓰다  (출처: 2019수능 30번)",
      "hint": "수능 핵심 단어 · 박스 1/5",
      "unit": "수능 핵심 어휘",
      "subject": "영어",
      "is_vocab": true
    },
    {
      "type": "mcq",
      "id": "voc-accurate",
      "question": "영어 단어 'accurate'의 뜻은?",
      "choices": [
        "셀피, 자기 사진",
        "추상적인",
        "정확한",
        "어린 시절"
      ],
      "answer": "정확한",
      "explanation": "accurate = 정확한  (출처: 2023수능 42번)",
      "hint": "수능 핵심 단어 · 박스 1/5",
      "unit": "수능 핵심 어휘",
      "subject": "영어",
      "is_vocab": true
    },
    {
      "type": "mcq",
      "id": "voc-veil",
      "question": "영어 단어 'veil'의 뜻은?",
      "choices": [
        "가리다, 감추다",
        "~을 이루다",
        "정확한",
        "셀피, 자기 사진"
      ],
      "answer": "가리다, 감추다",
      "explanation": "veil = 가리다, 감추다  (출처: 2022수능 39번)",
      "hint": "수능 핵심 단어 · 박스 1/5",
      "unit": "수능 핵심 어휘",
      "subject": "영어",
      "is_vocab": true
    },
    {
      "type": "mcq",
      "id": "voc-childhood",
      "question": "영어 단어 'childhood'의 뜻은?",
      "choices": [
        "가리다, 감추다",
        "정확한",
        "어린 시절",
        "~을 이루다"
      ],
      "answer": "어린 시절",
      "explanation": "childhood = 어린 시절  (출처: 2023수능 18번)",
      "hint": "수능 핵심 단어 · 박스 1/5",
      "unit": "수능 핵심 어휘",
      "subject": "영어",
      "is_vocab": true
    },
    {
      "type": "mcq",
      "id": "voc-selfie",
      "question": "영어 단어 'selfie'의 뜻은?",
      "choices": [
        "모순되지 않는",
        "추상적인",
        "정확한",
        "셀피, 자기 사진"
      ],
      "answer": "셀피, 자기 사진",
      "explanation": "selfie = 셀피, 자기 사진  (출처: 2025수능 24번)",
      "hint": "수능 핵심 단어 · 박스 1/5",
      "unit": "수능 핵심 어휘",
      "subject": "영어",
      "is_vocab": true
    },
    {
      "type": "mcq",
      "id": "voc-consistent",
      "question": "영어 단어 'consistent'의 뜻은?",
      "choices": [
        "~을 이루다",
        "가리다, 감추다",
        "애쓰다",
        "모순되지 않는"
      ],
      "answer": "모순되지 않는",
      "explanation": "consistent = 모순되지 않는  (출처: 2020수능 30번)",
      "hint": "수능 핵심 단어 · 박스 1/5",
      "unit": "수능 핵심 어휘",
      "subject": "영어",
      "is_vocab": true
    },
    {
      "type": "mcq",
      "id": "voc-region",
      "question": "영어 단어 'region'의 뜻은?",
      "choices": [
        "셀피, 자기 사진",
        "지역",
        "정확한",
        "추상적인"
      ],
      "answer": "지역",
      "explanation": "region = 지역  (출처: 2022수능 25번)",
      "hint": "수능 핵심 단어 · 박스 1/5",
      "unit": "수능 핵심 어휘",
      "subject": "영어",
      "is_vocab": true
    },
    {
      "type": "mcq",
      "id": "voc-constitute",
      "question": "영어 단어 'constitute'의 뜻은?",
      "choices": [
        "~을 이루다",
        "셀피, 자기 사진",
        "애쓰다",
        "추상적인"
      ],
      "answer": "~을 이루다",
      "explanation": "constitute = ~을 이루다  (출처: 2025수능 36번)",
      "hint": "수능 핵심 단어 · 박스 1/5",
      "unit": "수능 핵심 어휘",
      "subject": "영어",
      "is_vocab": true
    },
    {
      "type": "mcq",
      "id": "voc-intimacy",
      "question": "영어 단어 'intimacy'의 뜻은?",
      "choices": [
        "추상적인",
        "가리다, 감추다",
        "친밀함",
        "어린 시절"
      ],
      "answer": "친밀함",
      "explanation": "intimacy = 친밀함  (출처: 2020수능 40번)",
      "hint": "수능 핵심 단어 · 박스 1/5",
      "unit": "수능 핵심 어휘",
      "subject": "영어",
      "is_vocab": true
    },
    {
      "type": "mcq",
      "id": "voc-abstract",
      "question": "영어 단어 'abstract'의 뜻은?",
      "choices": [
        "모순되지 않는",
        "친밀함",
        "가리다, 감추다",
        "추상적인"
      ],
      "answer": "추상적인",
      "explanation": "abstract = 추상적인  (출처: 2022수능 42번)",
      "hint": "수능 핵심 단어 · 박스 1/5",
      "unit": "수능 핵심 어휘",
      "subject": "영어",
      "is_vocab": true
    }
  ]
},
  reading: {}
};
