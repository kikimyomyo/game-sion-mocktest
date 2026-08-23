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
    "계보id": "L260817-math-simvol",
    "현재스텝": "E",
    "수능출처": "2021학년도 수능 수학 14번",
    "unit": "닮음비·부피비",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "한 모서리가 2 cm인 작은 정육면체와 한 모서리가 6 cm인 큰 정육면체가 있다. 큰 정육면체의 부피는 작은 정육면체 부피의 몇 배인가?",
        "choices": [
          "3배",
          "9배",
          "27배",
          "216배"
        ],
        "answer": "27배",
        "hint": "먼저 모서리끼리 몇 배인지 봐. 6÷2였지? 부피는 그 배수를 세 번 곱해.",
        "explanation": "모서리 닮음비 = 6÷2 = 3. 부피는 가로×세로×높이라 닮음비를 세 번 곱한다 → 3×3×3 = 27배. 9배는 세제곱 대신 제곱(넓이비)을 쓴 실수, 3배는 닮음비를 그대로 쓴 실수다. 부피는 항상 세제곱! 작은 큐브 27개를 쌓아보면 눈으로 확인돼.",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "E",
        "type": "mcq",
        "question": "강아지 사료 상자 두 개가 서로 닮음이다. 작은 상자의 한 모서리는 5 cm, 큰 상자의 한 모서리는 10 cm이다. 큰 상자에 담기는 사료의 부피는 작은 상자의 몇 배인가?",
        "choices": [
          "2배",
          "4배",
          "6배",
          "8배"
        ],
        "answer": "8배",
        "hint": "닮음비부터. 10÷5 = 2. 부피는 이 2를 몇 번 곱할까? 넓이면 두 번, 부피면 세 번.",
        "explanation": "닮음비 = 10÷5 = 2. 부피비 = 2×2×2 = 8배. 4배는 제곱(넓이·겉면적)일 때 값이라 부피에 쓰면 틀린다 — 이게 어제 놓친 함정이다. 부피는 세제곱이라 반드시 한 번 더 곱한다. 사료가 8배나 들어가니 큰 상자가 훨씬 이득!",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "두 정육면체의 닮음비가 1 : 3이다. 두 정육면체의 부피비는?",
        "choices": [
          "1 : 3",
          "1 : 6",
          "1 : 9",
          "1 : 27"
        ],
        "answer": "1 : 27",
        "hint": "부피비 = 닮음비를 세제곱. 3을 세 번 곱하면? 3의 제곱이 아니라 3의 세제곱이야.",
        "explanation": "부피비 = (닮음비)³ = 1³ : 3³ = 1 : 27. 1:9는 제곱(3²)만 해서 나온 넓이비라 부피에는 틀린다 — 지난번 바로 이 1:9로 실수했지. 1:3은 닮음비를 그대로 옮긴 실수. 부피는 세제곱이 규칙, 예외 없다.",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "서로 닮음인 두 원뿔이 있다. 작은 원뿔의 부피는 10 cm³이고, 작은 원뿔과 큰 원뿔의 닮음비는 1 : 2이다. 큰 원뿔의 부피는?",
        "choices": [
          "20 cm³",
          "40 cm³",
          "80 cm³",
          "160 cm³"
        ],
        "answer": "80 cm³",
        "hint": "부피비 = 1 : 2의 세제곱. 작은 부피에 2³을 곱해. 2³은 얼마?",
        "explanation": "닮음비 1:2 → 부피비 1:2³ = 1:8. 큰 원뿔 부피 = 10×8 = 80 cm³. 40은 제곱(2²=4)만 곱한 실수, 20은 닮음비(2)만 곱한 실수, 160은 세제곱을 한 번 더 곱한 과잉이다. 정확히 세제곱 = 8배!",
        "개념키": "math.similarity.volume_cube"
      }
    ],
    "보스전": {
      "진짜수능본문": "그림과 같이 밑면이 정사각형인 사각뿔 P-ABCD가 있다. 이 사각뿔을 밑면에 평행한 평면으로 잘라, 꼭짓점 P를 포함하는 작은 사각뿔과 그 아래의 뿔대로 나눈다. 잘라 낸 작은 사각뿔과 처음 사각뿔 P-ABCD의 닮음비가 1 : 3일 때, 뿔대의 부피는 처음 사각뿔 P-ABCD의 부피의 몇 배인가?",
      "진짜수능선택지": [
        "1/27",
        "1/9",
        "8/27",
        "26/27",
        "2/3"
      ],
      "진짜수능정답": "④",
      "보스전_해설": "작은 사각뿔과 처음 사각뿔의 닮음비 1:3 → 부피비 = 1³ : 3³ = 1 : 27 (E스텝에서 본 세제곱 그대로!). 작은 사각뿔 부피 = 처음의 1/27. 뿔대는 전체에서 작은 뿔을 뺀 부분이니 1 - 1/27 = 26/27배. ②1/9는 M스텝에서 조심한 제곱 함정, ③8/27은 닮음비를 2:3으로 잘못 읽은 값, ①1/27은 뿔대가 아니라 잘라 낸 작은 뿔의 값이다. 부피는 세제곱, 그리고 뿔대는 '전체에서 빼기'까지 한 걸음 더 가야 정답이 나온다.",
      "강조구간": [
        "닮음비가 1 : 3",
        "뿔대의 부피는 처음 사각뿔 P-ABCD의 부피의 몇 배"
      ]
    },
    "통합풀이법": "부피비 = 닮음비 × 닮음비 × 닮음비 (세제곱)",
    "이미지_묘사": "한 모서리 2cm 작은 정육면체 옆에 6cm 큰 정육면체. 큰 것 안에 작은 큐브 27개가 반투명 격자로 채워지는 그림.",
    "book_diagram_url": "./diagrams/book/2026-08-24_cycle_1.jpg",
    "book_diagram_source": "출처: 최소한의 수학지식(EBSMath)",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "그림그래프에서 큰 그림 1개는 100그루, 작은 그림 1개는 10그루를 나타냅니다. 큰 그림 3개와 작은 그림 4개로 표시된 나무는 모두 몇 그루입니까?",
        "choices": [
          "340그루",
          "304그루",
          "70그루",
          "430그루"
        ],
        "answer": "340그루",
        "explanation": "100×3+10×4=300+40=340그루. 304그루는 자릿값을 바꿔 쓴 오답, 70그루는 3+4만 더한 값, 430그루는 큰·작은 그림 개수를 바꿔 계산한 오답입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "여러 가지 그래프"
      },
      {
        "type": "mcq",
        "question": "리본 7/8 m를 7명이 똑같이 나누어 가졌습니다. 한 명이 가진 리본은 몇 m인가요?",
        "choices": [
          "1/8 m",
          "7/8 m",
          "1/7 m",
          "7/15 m"
        ],
        "answer": "1/8 m",
        "explanation": "7/8 ÷ 7 = 7/(8×7) = 1/8 m. 분자와 분모의 7이 약분되어 1/8이 됩니다. '7/8'은 나누기를 안 한 값, '1/7'은 분모를 잘못 고른 오답, '7/15'는 분모에 7을 더한 오답입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "분수의 나눗셈"
      },
      {
        "type": "mcq",
        "question": "8000원짜리 물건을 15% 할인하면 할인되는 금액은 얼마입니까?",
        "choices": [
          "800원",
          "1200원",
          "1500원",
          "6800원"
        ],
        "answer": "1200원",
        "explanation": "할인 금액 = 8000×0.15 = 1200원. 오답: 800원은 10%만 계산한 값, 1500원은 8000의 비율을 잘못 잡은 값, 6800원은 할인 후 내는 금액(할인액이 아님)입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "비와 비율"
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "영어",
    "역할": "서브",
    "수능출처": "2021학년도 수능 영어 어법(주어-동사 수 일치) 유형 변형",
    "unit": "주어-동사 수 일치 (Grammar Joy 3)",
    "통합풀이법": "주어의 진짜 머리(핵심 명사)를 찾아 동사를 맞춰라 — 사이에 낀 수식어구에 속지 마",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? The box of chocolates ___ on the table. (해석: 초콜릿이 든 상자가 탁자 위에 있다.)",
        "choices": [
          "is",
          "are",
          "were",
          "have"
        ],
        "answer": "is",
        "hint": "주어의 핵심은 box(상자) 하나. of chocolates는 꾸며주는 말일 뿐. 단수엔 is.",
        "explanation": "주어의 진짜 머리는 box(단수). 'of chocolates'는 상자를 꾸미는 수식어라 동사를 정하지 않는다. 단수 주어 → is. 바로 앞 chocolates(복수)에 낚여 are를 고르는 게 흔한 함정. 핵심 명사만 보면 안 틀린다. 핵심 단어: box 상자 / chocolate 초콜릿.",
        "개념키": "en.agreement.subject_verb"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? The girl with two dogs ___ in the park every morning. (해석: 개 두 마리를 데리고 있는 소녀가 매일 아침 공원에서 걷는다.)",
        "choices": [
          "walk",
          "walks",
          "walking",
          "are walking"
        ],
        "answer": "walks",
        "hint": "누가 걷지? girl(소녀) 한 명. two dogs는 with로 묶인 딸림 말. 단수 주어 + 현재 → 동사에 -s.",
        "explanation": "주어 머리는 girl(단수 3인칭). 'with two dogs'는 소녀를 꾸미는 부분이라 동사를 바꾸지 못한다. 단수 현재 → walks. dogs(복수)에 이끌려 walk를 고르면 함정. 지난번 이 유형에서 놓쳤으니 이번엔 머리 명사만 보자. 핵심 단어: walk 걷다 / every morning 매일 아침.",
        "개념키": "en.agreement.subject_verb"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 의문대명사는? \"___ is your favorite teacher?\" (누가 너의 가장 좋아하는 선생님이니?)",
        "choices": [
          "Who",
          "What",
          "Which",
          "Whose"
        ],
        "answer": "Who",
        "explanation": "사람에 대해 '누구'를 물을 때는 의문대명사 Who를 쓴다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 3 의문대명사·의문형용사"
      },
      {
        "type": "mcq",
        "question": "다음 중 study의 3인칭 단수 현재형으로 옳은 것은?",
        "choices": [
          "studys",
          "studyes",
          "studies",
          "studied"
        ],
        "answer": "studies",
        "explanation": "자음+y로 끝나는 동사는 y를 i로 바꾸고 -es를 붙입니다(study→studies).",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 2 일반동사"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 접속사를 고르시오: I like apples ___ bananas.",
        "choices": [
          "and",
          "but",
          "because",
          "so"
        ],
        "answer": "and",
        "explanation": "두 가지를 나란히 연결하므로 '그리고'의 뜻인 and가 알맞다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 3 접속사·명령문"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "통합과학",
    "역할": "서브",
    "수능출처": "2026학년도 수능 통합과학 원자·주기율 유형 변형",
    "unit": "물질의 규칙성 — 원자 구조·밀도",
    "통합풀이법": "원소는 양성자 수(원자 번호)가 정한다 · 밀도 = 질량 ÷ 부피",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "원자와 원소에 대한 설명으로 옳은 것은?",
        "choices": [
          "원소의 종류는 중성자 수로 결정된다",
          "양성자 수가 같은 원자는 같은 원소이다",
          "같은 족 원소는 가장 바깥 전자 수가 서로 다르다",
          "원자 번호는 질량수와 같다"
        ],
        "answer": "양성자 수가 같은 원자는 같은 원소이다",
        "hint": "원소의 이름표는 양성자 수 = 원자 번호. 중성자가 달라도 양성자만 같으면 같은 원소.",
        "explanation": "원소의 종류를 정하는 것은 양성자 수(=원자 번호)다. 중성자 수는 같은 원소 안에서도 달라질 수 있어 종류를 정하지 못한다(①X). 같은 족은 가장 바깥 전자 수가 같아서 성질이 닮는다(③X). 원자 번호(양성자 수)는 질량수(양성자+중성자)와 다르다(④X). 지난번 '양성자 수가 원소를 안 정한다'로 틀렸던 부분을 정면으로 보강.",
        "개념키": "sci.atom.structure"
      },
      {
        "type": "mcq",
        "question": "질량이 24 g이고 부피가 8 cm³인 금속 조각의 밀도는?",
        "choices": [
          "2 g/cm³",
          "3 g/cm³",
          "4 g/cm³",
          "16 g/cm³"
        ],
        "answer": "3 g/cm³",
        "hint": "밀도 = 질량 ÷ 부피. 24 ÷ 8을 계산해. 빼기(24-8) 아니야.",
        "explanation": "밀도 = 질량 ÷ 부피 = 24 ÷ 8 = 3 g/cm³. 16은 24-8로 뺀 실수, 4는 부피를 반으로 본 실수, 2는 지난번 잘못 적은 값이다. 밀도는 항상 '질량 나누기 부피'. 단위 g/cm³ 자체가 '그램 ÷ 부피'라는 걸 기억하면 방향이 안 헷갈린다.",
        "개념키": "sci.matter.density"
      }
    ],
    "book_diagram_url": "./diagrams/book/2026-08-24_cycle_3.png",
    "book_diagram_source": "출처: 수학의 구조 p.24",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음은 빛의 밝기에 따른 식물 잎의 개수를 측정한 표이다. 어두운 곳 화분은 잎이 3장, 밝은 곳 화분은 잎이 9장이었다. 밝은 곳 화분의 잎 개수는 어두운 곳 화분의 잎 개수의 몇 배인가?",
        "choices": [
          "3배",
          "2배",
          "6배",
          "9배"
        ],
        "answer": "3배",
        "explanation": "밝은 곳 9장을 어두운 곳 3장으로 나누면 9 ÷ 3 = 3배이다. 2배는 잘못 나눈 값, 6배는 9 - 3의 차이를 배수로 착각한 값, 9배는 밝은 곳의 잎 개수 자체이므로 모두 오답이다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "변인·관찰·실험 입문 (조건 비교)"
      },
      {
        "type": "mcq",
        "question": "관찰 결과를 기록할 때 가장 바람직한 태도로 알맞은 것은?",
        "choices": [
          "본 그대로 사실을 적는다",
          "내가 바라는 결과로 바꾸어 적는다",
          "친구의 기록을 그대로 베껴 적는다",
          "기억나는 대로 대충 적는다"
        ],
        "answer": "본 그대로 사실을 적는다",
        "explanation": "관찰 기록은 실제로 본 사실을 정확하게 적어야 한다. 바라는 대로 바꾸거나, 베끼거나, 대충 적으면 사실과 달라져 올바른 탐구를 할 수 없으므로 모두 틀린 태도이다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "자연·실험 입문 (관찰과 분류)"
      },
      {
        "type": "mcq",
        "question": "수아는 친구 4명과 함께 운동장에서 같은 거리를 달린 시간을 재서 평균을 구하려 한다. 네 명의 기록이 각각 10초, 12초, 9초, 13초였다. 네 명의 평균 기록은 몇 초인가?",
        "choices": [
          "11초",
          "10초",
          "12초",
          "44초"
        ],
        "answer": "11초",
        "explanation": "네 기록의 합은 10 + 12 + 9 + 13 = 44초이고, 사람 수 4로 나누면 44 ÷ 4 = 11초이다. 10초·12초는 개별 기록일 뿐 평균이 아니고, 44초는 평균을 내기 전 합계이므로 모두 오답이다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "변인·관찰·실험 입문 (조건 비교)"
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-08-22",
  "week": "2026-W34",
  "weakness_focus": [
    "수능 기출 학습",
    "닮음비·부피비(부피비=닮음비의 세제곱) (2026-08-07 오답, 160 cm³→10 cm³)",
    "닮음비와 부피비 (2026-08-13 오답, 160 cm³→135 cm³)"
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
  "total_plays": 560,
  "total_correct": 422,
  "accuracy": 75,
  "last_date": "2026-08-24",
  "영역별": [
    {
      "subject": "국어",
      "color": "#ff8fc5",
      "progress": 32,
      "current_unit": "듣기·말하기",
      "weak_count": 6,
      "strong_count": 1,
      "recent_accuracy": [
        0.529,
        1.0,
        1.0
      ],
      "is_master": false
    },
    {
      "subject": "수학",
      "color": "#5ba0ff",
      "progress": 52,
      "current_unit": "6-2 분수의 나눗셈",
      "weak_count": 6,
      "strong_count": 9,
      "recent_accuracy": [
        1.0,
        1.0,
        1.0
      ],
      "is_master": true
    },
    {
      "subject": "영어",
      "color": "#b48dff",
      "progress": 20,
      "current_unit": "Grammar Joy 3 전체",
      "weak_count": 6,
      "strong_count": 2,
      "recent_accuracy": [
        0.556,
        0.556,
        0.556
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
        0.6,
        0.6,
        0.75
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
        1.0,
        0.0,
        0.225
      ],
      "is_master": false
    },
    {
      "subject": "한국사",
      "color": "#ff9d6b",
      "progress": 0,
      "current_unit": "미시작",
      "weak_count": 4,
      "strong_count": 0,
      "recent_accuracy": [
        0.5,
        0.5,
        0.5
      ],
      "is_master": false
    }
  ],
  "level": 44,
  "xp_total": 4320,
  "xp_in_level": 20,
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
      "subject": "수학",
      "color": "#5ba0ff",
      "unit": "6-2 분수의 나눗셈",
      "date": "2026-08-24",
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
        "status": "done"
      },
      {
        "name": "읽기",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-01",
        "status": "done"
      },
      {
        "name": "쓰기",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-02",
        "status": "done"
      },
      {
        "name": "문법",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-03",
        "status": "done"
      },
      {
        "name": "듣기·말하기",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "국어-04",
        "status": "current"
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
  "title": "어린이 사복음서 한 달 쓰기",
  "book_key": "사복음서",
  "images": [
    "./copywork/today.jpg"
  ],
  "page": 27,
  "total": 65,
  "image": "./copywork/today.jpg",
  "weekday": "월",
  "date": "2026-08-24",
  "flagged": false
},
  revenge: {
  "date": "2026-08-24",
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
        "question": "비 6:8과 비율이 같은 비가 9:□일 때, □에 알맞은 수는 얼마입니까?",
        "choices": [
          "10",
          "11",
          "12",
          "14"
        ],
        "answer": "12",
        "explanation": "6:8을 간단히 하면 3:4이고, 9는 3의 3배이므로 □ = 4×3 = 12. 검산: 9:12를 간단히 하면 3:4로 같습니다. 오답: 10·11·14는 9:□를 3:4로 줄일 수 없어 비율이 달라집니다.",
        "hint": "비와 비율 — 73일 밀린 간격 복습"
      }
    },
    {
      "id": "warmfill-수학",
      "kind": "warmup_fill",
      "label": "오늘 단원 워밍업",
      "과목": "수학",
      "단원": "분수의 나눗셈",
      "problem": {
        "type": "mcq",
        "question": "주스 2 1/2 L를 한 병에 1/2 L씩 나누어 담으려고 합니다. 병은 모두 몇 개 필요한가요?",
        "choices": [
          "5개",
          "4개",
          "2개",
          "10개"
        ],
        "answer": "5개",
        "explanation": "2 1/2 = 5/2 이므로 5/2 ÷ 1/2 = 5/2 × 2/1 = 5개. '4'는 정수 부분만 본 오답, '2'는 분모만 본 오답, '10'은 5/2 × 2를 두 번 곱한 오답입니다.",
        "hint": "분수의 나눗셈 — 지금 배우는 단원 워밍업"
      }
    },
    {
      "id": "warmfill-통합과학",
      "kind": "warmup_fill",
      "label": "오늘 단원 워밍업",
      "과목": "통합과학",
      "단원": "기록·자료 정리",
      "problem": {
        "type": "mcq",
        "question": "강낭콩의 키를 5월 1일 3cm, 5월 8일 7cm로 측정해 꺾은선그래프로 그렸다. 일주일 동안 강낭콩이 자란 키는 몇 cm인가?",
        "choices": [
          "4cm",
          "10cm",
          "7cm",
          "3cm"
        ],
        "answer": "4cm",
        "explanation": "나중 값에서 처음 값을 빼면 변화량이 나온다. 7 - 3 = 4cm이다. 10은 두 값을 더한 값, 7은 나중 키만 적은 값, 3은 처음 키만 적은 값이라 자란 정도가 아니므로 모두 틀리다.",
        "hint": "기록·자료 정리 — 지금 배우는 단원 워밍업"
      }
    }
  ]
},
  vocab: {
  "date": "2026-08-24",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "가리다, 감추다",
        "애쓰다",
        "~을 이루다",
        "모순되지 않는"
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
        "애쓰다",
        "모순되지 않는",
        "정확한",
        "~을 이루다"
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
        "지역",
        "가리다, 감추다",
        "~을 이루다",
        "추상적인"
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
        "셀피, 자기 사진",
        "어린 시절",
        "지역"
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
        "어린 시절",
        "가리다, 감추다",
        "셀피, 자기 사진",
        "지역"
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
        "추상적인",
        "모순되지 않는",
        "가리다, 감추다",
        "지역"
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
        "애쓰다",
        "지역",
        "~을 이루다"
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
        "애쓰다",
        "~을 이루다",
        "가리다, 감추다",
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
        "애쓰다",
        "가리다, 감추다",
        "친밀함",
        "모순되지 않는"
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
        "추상적인",
        "~을 이루다",
        "지역",
        "어린 시절"
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
