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
    "수능출처": "2022학년도 수능 수학 22번",
    "unit": "다항식의 전개·동류항 정리",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "12 × 15 를 계산할 때 15를 10과 5로 나눠서 (12 × 10) + (12 × 5) 로 바꿔 풀었어. 12 × 15 의 값은?",
        "choices": [
          "120",
          "156",
          "180",
          "192"
        ],
        "answer": "180",
        "hint": "12 × 10 을 먼저, 12 × 5 를 그다음. 두 값을 더해봐. 한쪽만 구하고 멈추면 안 돼.",
        "explanation": "12 × 10 = 120, 12 × 5 = 60, 둘을 더하면 180이야. ①120은 앞쪽만 구하고 멈춘 값이라 함정이야. 이렇게 곱셈을 두 조각으로 쪼개 각각 곱하고 더하는 게 '분배법칙'이야. 지금 15를 10과 5로 나눈 것처럼, 중학교에서는 이 나눈 자리를 x라고 부르게 돼. 뼈대는 이미 네 손에 있어.",
        "개념키": "math.poly.distributive"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "(3x² + 5x − 2) + (x² − 3x + 4) 를 계산하면?",
        "choices": [
          "4x² + 2x + 2",
          "4x² + 8x + 2",
          "2x² + 2x + 2",
          "4x² + 2x + 6"
        ],
        "answer": "4x² + 2x + 2",
        "hint": "x²는 x²끼리, x는 x끼리, 숫자는 숫자끼리만 더해. 5x 와 −3x 를 더하면 몇 x 지?",
        "explanation": "x²끼리 3x² + x² = 4x², x끼리 5x + (−3x) = 2x, 숫자끼리 −2 + 4 = 2. 그래서 4x² + 2x + 2야. ②는 5x − 3x 를 5x + 3x 로 잘못 본 함정. 초등에서 12를 10과 5로 나눠 곱했듯, 중학교에선 그 자리에 x가 들어와 차수(제곱·일차)별로 나눠 계산해. 두 개까지 익혔으니 다음은 개수 제한 없이 가는 고등이야.",
        "개념키": "math.poly.addition"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "(x + 2)(x² − 3x + 1) 을 전개했을 때, x² 의 계수는?",
        "choices": [
          "−5",
          "−1",
          "1",
          "5"
        ],
        "answer": "−1",
        "hint": "x 를 뒤 괄호 세 항에 각각, 2 도 각각 곱해. 그중 x² 이 나오는 곱을 모두 찾아 더해.",
        "explanation": "x² 은 x·(−3x) = −3x² 과 2·x² = 2x² 두 군데서 나와. 합치면 −3x² + 2x² = −x², 계수는 −1이야. ③ 1은 −3 + 2 의 부호를 놓친 함정. 분배법칙(초등)을 항이 많은 식으로 넓힌 게 전개야 — 나온 항을 다시 차수끼리 묶는 게 핵심이야.",
        "개념키": "math.poly.like_terms"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "(2x² + 3x) − (2x² − 4x + 9) 를 간단히 하면?",
        "choices": [
          "7x − 9",
          "7x² − 9",
          "−x − 9",
          "7x + 9"
        ],
        "answer": "7x − 9",
        "hint": "빼는 괄호 앞의 − 를 세 항 모두에 나눠 줘. x² 끼리 먼저 맞춰보면 어떻게 되지?",
        "explanation": "− 를 분배하면 2x² + 3x − 2x² + 4x − 9. x²끼리 2x² − 2x² = 0 으로 사라지고, x끼리 3x + 4x = 7x, 상수는 −9. 그래서 7x − 9, 일차식이야. ② 7x² − 9 는 x² 이 남는다고 오해한 함정 — 차수가 같은 항은 계수를 빼서 0이 되면 통째로 없어져. 어제 5x² 로 남겼다가 틀린 게 바로 이 자리야. 차수부터 맞추면 안 흔들려.",
        "개념키": "math.poly.like_terms_linear"
      }
    ],
    "보스전": {
      "진짜수능본문": "최고차항의 계수가 1이고 x=3에서 극댓값 8을 갖는 삼차함수 f(x)가 있다. 실수 t에 대하여 함수 g(x)를 g(x) = f(x) (x ≥ t), g(x) = −f(x) + 2f(t) (x < t) 라 할 때, 방정식 g(x) = 0의 서로 다른 실근의 개수를 h(t)라 하자. 함수 h(t)가 t = a에서 불연속인 a의 값이 두 개일 때, f(8)의 값을 구하시오. [4점]",
      "진짜수능선택지": [
        "435",
        "459",
        "483",
        "507",
        "531"
      ],
      "진짜수능정답": "③",
      "보스전_해설": "f(x)=x³+ax²+bx+c 로 놓고 x=3에서 극대라 f'(3)=0, 극댓값이 8이라 f(3)=8 — 이 식을 세울 때 f를 미분하고 차수별로 정리하는 게 오늘 M·H에서 한 동류항 정리야. g(x)의 아래 조각 −f(x)+2f(t) 는 f 의 모든 항 부호를 바꿔 더하는 다항식 뺄셈 — H(2)에서 x² 이 사라지던 그 계산이지. h(t) 가 불연속인 a 가 두 개라는 조건으로 f 를 확정하면 f(8)=483 이야. 수능은 '다항식을 계산하라'고 대놓고 묻지 않아. 미분·그래프라는 옷 안에 숨겨서 물어봐. 그래서 차수끼리 묶는 손이 흔들리면 4점이 통째로 날아가. 오늘 사다리가 바로 그 손을 만든 거야.",
      "강조구간": [
        "−f(x) + 2f(t)",
        "극댓값 8",
        "f(8)의 값을 구하시오"
      ]
    },
    "통합풀이법": "차수가 같은 항끼리만 더하고 뺀다 — x²는 x²끼리, x는 x끼리, 숫자는 숫자끼리.",
    "이미지_묘사": "직사각형을 세로 12, 가로를 10칸과 5칸으로 나눈 넓이 그림. 12×10 칸과 12×5 칸을 색을 달리해, 둘을 합치면 12×15가 됨을 보이는 분배법칙 도식.",
    "image_url": "./images/2026-09-08_cycle_1.png",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "0.78 ÷ 6 의 몫은 얼마일까요?",
        "choices": [
          "0.13",
          "0.018",
          "1.3",
          "0.23"
        ],
        "answer": "0.13",
        "explanation": "78 ÷ 6 = 13이고 0.78은 78의 1/100이므로 몫은 0.13입니다. 0.018과 1.3은 소수점 위치 오류, 0.23은 계산 오류입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "소수의 나눗셈"
      },
      {
        "type": "mcq",
        "question": "육각뿔의 모서리는 모두 몇 개일까요?",
        "choices": [
          "6개",
          "7개",
          "12개",
          "18개"
        ],
        "answer": "12개",
        "explanation": "n각뿔의 모서리 수는 2n개입니다. 육각뿔은 n=6이므로 2×6=12개. 6개는 밑면 변만 센 것, 7개는 면 수(6+1), 18개는 육각기둥의 모서리(3×6)와 혼동한 오답입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "각기둥과 각뿔"
      },
      {
        "type": "mcq",
        "question": "한 변의 길이가 10 cm인 정사각형 안에 꼭 맞게 들어가는 가장 큰 원을 그렸습니다. 이 원의 넓이는 얼마입니까? (원주율은 3.14로 계산)",
        "choices": [
          "78.5 cm²",
          "314 cm²",
          "31.4 cm²",
          "100 cm²"
        ],
        "answer": "78.5 cm²",
        "explanation": "정사각형 안에 꼭 맞는 원의 지름은 정사각형 한 변과 같은 10 cm이므로 반지름은 5 cm입니다. 넓이 = 5 × 5 × 3.14 = 78.5 cm². 314는 반지름을 10으로 잘못 넣은 값, 31.4는 둘레, 100은 정사각형의 넓이입니다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "원의 넓이"
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "국어",
    "역할": "서브",
    "수능출처": "2022학년도 수능 국어 32번",
    "unit": "문학 감상·독서 사실 확인",
    "통합풀이법": "선택지를 본문 문장과 한 줄씩 맞대 참·거짓을 표시한다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "다음 시조에서 화자의 태도로 가장 적절한 것은?\n\n이 몸이 한가하여 낚싯대 드리우니\n강물에 비친 달이 벗이 되어 오는구나\n세상 시비 다 잊으니 이 아니 즐거운가",
        "choices": [
          "어부의 고된 노동을 사실적으로 그리고 있다",
          "속세를 멀리하고 자연 속의 삶에 만족하고 있다",
          "벗과 헤어진 슬픔을 안타깝게 노래하고 있다",
          "세상에 나아가 뜻을 펴려는 의지를 드러내고 있다"
        ],
        "answer": "속세를 멀리하고 자연 속의 삶에 만족하고 있다",
        "hint": "'세상 시비 다 잊으니', '이 아니 즐거운가' 에 화자의 마음이 그대로 드러나. 낚시가 정말 '일'로 그려졌는지 다시 봐.",
        "explanation": "'세상 시비 다 잊으니 이 아니 즐거운가'에서 화자는 속세를 떠나 자연을 즐기고 있어. 낚싯대는 생계 노동이 아니라 한가로움의 상징이야. ①은 '낚시=고된 일'로 오해한 함정 — 지난번에도 어부 시에서 이렇게 놓쳤지. 시어의 분위기('한가', '벗', '즐거운가')를 근거로 삼으면 태도가 또렷이 보여.",
        "개념키": "kor.literature"
      },
      {
        "type": "mcq",
        "question": "다음 글의 내용과 일치하는 것은?\n\n고양이는 어두운 곳에서도 사물을 잘 본다. 눈 안쪽의 '타페텀'이라는 반사층이 한 번 들어온 빛을 망막으로 다시 되비추기 때문이다. 다만 타페텀은 색을 구별하는 일과는 관계가 없어서, 고양이가 사람보다 색을 더 잘 보는 것은 아니다.",
        "choices": [
          "타페텀은 색을 구별하는 능력을 높여 준다",
          "고양이는 사람보다 색을 더 잘 본다",
          "타페텀은 들어온 빛을 망막으로 다시 되비춘다",
          "고양이는 밝은 곳에서만 사물을 잘 본다"
        ],
        "answer": "타페텀은 들어온 빛을 망막으로 다시 되비춘다",
        "hint": "본문에서 타페텀이 '무엇을 한다'고 했는지 한 문장씩 짚어봐. 색과 관련 있다고 했는지도 확인.",
        "explanation": "본문은 타페텀이 '빛을 망막으로 다시 되비춘다'고 했으니 ③이 일치해. ①②는 '색 구별과는 관계가 없다'는 문장과 정반대라 함정이고, ④는 '어두운 곳에서도 잘 본다'와 어긋나. 선택지마다 본문 문장과 하나씩 맞대보는 게 사실 확인의 기본이야.",
        "개념키": "kor.reading.factcheck"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음 중 밑줄 친 낱말이 '부사어'(꾸며 주는 말)로 쓰인 문장으로 알맞은 것은?",
        "choices": [
          "가을 하늘이 푸르다.",
          "친구가 천천히 걷는다.",
          "나는 빵을 먹었다.",
          "강아지가 잔다."
        ],
        "answer": "친구가 천천히 걷는다.",
        "explanation": "부사어는 주로 서술어를 꾸며 주는 말이다. '천천히'는 '걷는다'를 꾸며 주는 부사어이다. '가을'은 명사 '하늘'을 꾸미는 관형어, '빵을'은 목적어이며, '강아지가 잔다'에는 꾸며 주는 부사어가 없다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "문법 (낱말·문장 성분·높임)"
      },
      {
        "type": "mcq",
        "question": "다음 문장에서 문장 성분의 분석이 바르게 된 것으로 알맞은 것은?  \"누나가 어제 도서관에서 책을 읽었다.\"",
        "choices": [
          "'어제'는 목적어이다.",
          "'누나가'는 서술어이다.",
          "'책을'은 목적어이다.",
          "'읽었다'는 주어이다."
        ],
        "answer": "'책을'은 목적어이다.",
        "explanation": "'책을'은 '무엇을'에 해당하고 '~을'이 붙으므로 목적어가 맞다. '어제'와 '도서관에서'는 부사어, '누나가'는 주어, '읽었다'는 서술어이므로 나머지 설명은 모두 틀렸다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "문법 (낱말·문장 성분·높임)"
      },
      {
        "type": "mcq",
        "question": "다음 중 명사를 대신하여 가리키는 품사인 '대명사'에 해당하는 단어는?",
        "choices": [
          "그것",
          "책상",
          "읽다",
          "아주"
        ],
        "answer": "그것",
        "explanation": "'나, 너, 그것'처럼 명사를 대신하는 품사가 대명사다. '책상'은 명사, '읽다'는 동사, '아주'는 부사다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "문법 (품사·문장 성분)"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "영어",
    "역할": "서브",
    "수능출처": "2022학년도 수능 영어 42번",
    "unit": "주어-동사 수 일치 (Grammar Joy 3)",
    "통합풀이법": "동사를 고르기 전에 '진짜 주어'가 단수인지 복수인지 먼저 표시한다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것을 고르세요.\n\nMy dog ___ in the park every morning.\n(우리 개는 매일 아침 공원에서 달린다.)",
        "choices": [
          "run",
          "runs",
          "running",
          "are running"
        ],
        "answer": "runs",
        "hint": "주어 My dog 는 한 마리(단수). 3인칭 단수 주어 뒤 현재형 동사에는 무엇이 붙지?",
        "explanation": "주어 My dog 는 3인칭 단수라 현재형 동사에 -s 를 붙여 runs 가 맞아. ① run 은 복수·1·2인칭용, ④ are running 은 dog 가 여러 마리일 때 써. 지난번 walk→walks 에서 놓친 그 -s 야. 핵심 단어: every morning=매일 아침.",
        "개념키": "en.grammar.general"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것을 고르세요.\n\nThe cat with two kittens ___ on the sofa.\n(새끼 두 마리를 데리고 있는 그 고양이는 소파 위에 있다.)",
        "choices": [
          "are",
          "is",
          "am",
          "be"
        ],
        "answer": "is",
        "hint": "진짜 주어는 The cat(한 마리). 'with two kittens' 는 꾸며 주는 말일 뿐 주어가 아니야.",
        "explanation": "진짜 주어는 The cat 으로 단수라 is 가 맞아. 'with two kittens(새끼 두 마리와 함께)'는 주어를 꾸미는 곁가지일 뿐이라, 여기에 속아 복수 are 를 쓰면 안 돼 — 지난번 are→is 로 고쳐야 했던 바로 그 함정이야. 핵심 단어: kitten=새끼 고양이, sofa=소파.",
        "개념키": "en.grammar.general"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음 문장 중 어법이 옳은 것은?",
        "choices": [
          "She has many homework.",
          "I want a information.",
          "There is some cheese.",
          "He ate three rices."
        ],
        "answer": "There is some cheese.",
        "explanation": "cheese는 셀 수 없는 명사라 some cheese, is(단수 동사)와 함께 쓰는 것이 옳다. homework는 many(X)→much, information은 a(X), rice는 three rices(X)로 모두 셀 수 없는 명사 규칙을 어겨 틀렸다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 02 셀 수 없는 명사"
      },
      {
        "type": "mcq",
        "question": "다음 중 복수형이 단수형과 모양이 같은(변하지 않는) 명사는? (불규칙 복수형)",
        "choices": [
          "fish",
          "child",
          "tooth",
          "foot"
        ],
        "answer": "fish",
        "explanation": "fish는 단수와 복수의 모양이 같은 불변 명사로 one fish, two fish처럼 쓴다. child → children, tooth → teeth, foot → feet은 모두 모양이 바뀌는 불규칙 복수형이라 오답.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 01 셀 수 있는 명사"
      },
      {
        "type": "mcq",
        "question": "시온이네 반 학생(student)은 모두 28명이고, 모둠 하나에 4명씩 똑같이 나눈다. 모둠은 몇 개 만들어지는가? (단위: 개)",
        "choices": [
          "6개",
          "7개",
          "8개",
          "24개"
        ],
        "answer": "7개",
        "explanation": "학생은 셀 수 있는 명사이므로 전체 인원 ÷ 모둠당 인원으로 모둠 수를 구한다. 28 ÷ 4 = 7개. 6개는 24÷4라 오답, 8개는 32÷4라 오답, 24개는 28-4로 빼기를 한 오답.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 01 셀 수 있는 명사"
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-09-08",
  "week": "2026-W37",
  "weakness_focus": [
    "수능 기출 학습",
    "다항식의 연산·동류항 정리 (2026-09-04 오답, ④ 5x² − 9→① 5x − 9)",
    "다항식의 연산·동류항 정리 (2026-09-04 오답, ② 3→① 2)"
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
  "total_plays": 656,
  "total_correct": 491,
  "accuracy": 75,
  "last_date": "2026-09-07",
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
        0.944,
        0.5,
        0.567
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
        0.5,
        1.0,
        1.0
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
  "xp_total": 5010,
  "xp_in_level": 10,
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
      "date": "2026-09-07",
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
  "title": "고정욱의 인문학 필사수업",
  "book_key": "인문학필사",
  "images": [
    "./copywork/today.jpg"
  ],
  "page": 15,
  "total": 119,
  "image": "./copywork/today.jpg",
  "weekday": "화",
  "date": "2026-09-08",
  "flagged": false
},
  revenge: {
  "date": "2026-09-08",
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
        "question": "비율 0.45를 백분율로 나타내면 얼마입니까?",
        "choices": [
          "4.5%",
          "45%",
          "0.45%",
          "450%"
        ],
        "answer": "45%",
        "explanation": "백분율은 비율에 100을 곱하므로 0.45×100=45%. 오답: 4.5%는 10만 곱한 것, 0.45%는 그대로 둔 것, 450%는 1000을 곱한 것입니다.",
        "hint": "비와 비율 — 88일 밀린 간격 복습"
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
        "question": "삼각형 ABC에서 변 AB 위의 점 D와 변 AC 위의 점 E를 이은 선분 DE가 변 BC와 평행하다. AD=4cm, DB=6cm, AE=6cm일 때 EC의 길이는 몇 cm인가?",
        "choices": [
          "9",
          "4",
          "10",
          "12"
        ],
        "answer": "9",
        "explanation": "DE와 BC가 평행하면 AD:DB = AE:EC가 성립한다. 4:6 = 6:EC이므로 4×EC = 36, 따라서 EC = 9cm다. 평행선이 만드는 선분비는 위쪽 조각끼리, 아래쪽 조각끼리 짝을 맞추는 것이 핵심이다.",
        "hint": "닮음과 선분비 — 82일 밀린 간격 복습"
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
        "question": "공기의 저항을 무시할 때, 처음에 위치 에너지가 40J이고 운동 에너지가 0J인 공을 가만히 떨어뜨렸다. 떨어지는 도중 위치 에너지가 15J이 되었다면 이때 운동 에너지는 몇 J인가?",
        "choices": [
          "25",
          "15",
          "40",
          "55"
        ],
        "answer": "25",
        "explanation": "역학적 에너지가 보존되므로 처음 총 에너지 40J은 계속 유지된다. 위치 에너지가 15J이 되었으므로 운동 에너지는 40 - 15 = 25J다. 줄어든 위치 에너지만큼 운동 에너지가 늘어난 것이다.",
        "hint": "역학적 에너지 보존 — 75일 밀린 간격 복습"
      }
    }
  ],
  "은행결손": []
},
  vocab: {
  "date": "2026-09-08",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "셀피, 자기 사진",
        "친밀함",
        "애쓰다",
        "정확한"
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
        "추상적인",
        "지역",
        "정확한",
        "친밀함"
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
        "어린 시절",
        "가리다, 감추다",
        "~을 이루다",
        "모순되지 않는"
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
        "모순되지 않는",
        "어린 시절"
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
        "친밀함",
        "~을 이루다",
        "셀피, 자기 사진",
        "가리다, 감추다"
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
        "모순되지 않는",
        "정확한",
        "친밀함",
        "~을 이루다"
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
        "추상적인",
        "친밀함",
        "애쓰다",
        "지역"
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
        "추상적인",
        "가리다, 감추다",
        "친밀함"
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
        "애쓰다",
        "가리다, 감추다",
        "모순되지 않는",
        "친밀함"
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
        "정확한",
        "모순되지 않는",
        "친밀함",
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
