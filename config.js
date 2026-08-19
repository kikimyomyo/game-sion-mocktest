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
    "수능출처": "2021학년도 수능 수학 30번",
    "unit": "닮음비·부피비",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "작은 정육면체와 큰 정육면체가 닮음이고 닮음비가 1:2이다. 작은 정육면체의 부피가 5 cm³일 때, 큰 정육면체의 부피는 몇 cm³인가?",
        "choices": [
          "10 cm³",
          "20 cm³",
          "40 cm³",
          "15 cm³"
        ],
        "answer": "40 cm³",
        "hint": "닮음비가 1:2면 부피비는 몇 대 몇일까? 부피는 가로·세로·높이 세 방향이 다 커져. 그래서 2를 세 번 곱해봐.",
        "explanation": "닮음비 1:2 → 부피비 1:(2×2×2)=1:8. 작은 부피 5에 8을 곱하면 40 cm³. 함정은 20이야 — 2를 두 번만 곱한(제곱) 값이거든. 부피는 방향이 셋이라 세 번 곱해야 해. 10은 닮음비 2를 한 번만 곱한 값이지. 세제곱이 핵심! 한 번 틀려도 괜찮아, 방향 세 개만 기억하자.",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "E",
        "type": "mcq",
        "question": "큰 공과 작은 공이 닮음이고 닮음비가 3:1이다. 큰 공의 부피가 54 cm³일 때, 작은 공의 부피는 몇 cm³인가?",
        "choices": [
          "27 cm³",
          "2 cm³",
          "18 cm³",
          "6 cm³"
        ],
        "answer": "2 cm³",
        "hint": "닮음비 3:1이니 큰 게 작은 것보다 부피가 얼마나 클까? 3을 세 번 곱한 만큼. 큰 부피를 그 수로 나눠봐.",
        "explanation": "닮음비 3:1 → 부피비 27:1 (3×3×3). 큰 부피 54를 27로 나누면 작은 부피 2 cm³. 함정 6은 54÷9 — 3을 두 번만 곱한(제곱) 값이야. 18은 3으로 한 번만 나눈 것. 부피는 세 번 나눠야 해. 방향 실수만 조심하면 돼, 잘하고 있어.",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "두 원기둥 A, B는 서로 닮음이고 닮음비가 2:3이다. 원기둥 A의 부피가 24 cm³일 때, 원기둥 B의 부피는 몇 cm³인가?",
        "choices": [
          "36 cm³",
          "54 cm³",
          "108 cm³",
          "81 cm³"
        ],
        "answer": "81 cm³",
        "hint": "닮음비 2:3이면 부피비는 2와 3을 각각 세 번 곱해 8:27. A가 24니까 27/8을 곱해봐.",
        "explanation": "닮음비 2:3 → 부피비 2³:3³=8:27. B = 24 × 27/8 = 81 cm³. 함정 54는 (3/2)²=9/4를 곱한 제곱 실수, 36은 닮음비 3/2만 곱한 값이야. 세제곱을 써야 81이 나와. 초6 때 배운 '세 방향'을 떠올리면 절대 안 헷갈려.",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "두 구 A, B가 닮음이고 겉넓이의 비가 4:9이다. 구 A의 부피가 16 cm³일 때, 구 B의 부피는 몇 cm³인가?",
        "choices": [
          "24 cm³",
          "54 cm³",
          "36 cm³",
          "72 cm³"
        ],
        "answer": "54 cm³",
        "hint": "겉넓이비 4:9는 닮음비의 제곱이야. 먼저 닮음비부터 구해(제곱을 풀면 2:3). 그다음 그걸 세제곱해 부피비로 바꿔.",
        "explanation": "겉넓이비 4:9 = 닮음비의 제곱 → 닮음비 2:3. 부피비 = 2³:3³ = 8:27. A 16 × 27/8 = 54 cm³. 함정 36은 겉넓이비 4:9를 부피비로 착각한 값, 24는 닮음비만 쓴 값이야. 겉넓이=제곱, 부피=세제곱을 구분하는 게 열쇠! 이걸 넘기면 수능 도형은 거의 다 잡은 거야.",
        "개념키": "math.similarity.volume_cube"
      }
    ],
    "보스전": {
      "진짜수능본문": "네 명의 학생 A, B, C, D에게 같은 종류의 사인펜 14개를 다음 규칙에 따라 남김없이 나누어 주는 경우의 수를 구하시오. [4점]\n(가) 각 학생은 1개 이상의 사인펜을 받는다.\n(나) 각 학생이 받는 사인펜의 개수는 9 이하이다.\n(다) 적어도 한 학생은 짝수 개의 사인펜을 받는다.",
      "진짜수능선택지": [
        "128",
        "202",
        "218",
        "252",
        "270"
      ],
      "진짜수능정답": "③",
      "보스전_해설": "먼저 (가)(나): 각자 1~9개, 합이 14인 경우를 세면 270가지야. 여기서 (다)를 여집합으로 처리해 '모두 홀수'인 경우 52가지를 빼면 270-52=218. 함정 ⑤270은 (다) 조건을 통째로 잊은 값이야. E·M·H에서 '닮음비 → (제곱) → (세제곱)' 순서로 조건을 한 단계씩 쌓아 올렸지? 보스도 똑같아. 전체를 먼저 구하고, 까다로운 조건은 반대(여집합)로 빼는 거야. 진짜 수능은 이렇게 조건을 차례차례 적용하는 힘을 물어봐.",
      "강조구간": [
        "1개 이상",
        "9 이하",
        "적어도 한 학생은 짝수 개"
      ]
    },
    "통합풀이법": "부피비 = 닮음비의 세제곱(방향이 셋). 겉넓이비 = 제곱. 조건은 한 단계씩.",
    "이미지_묘사": "닮음비 1:2인 작은 정육면체와 큰 정육면체를 나란히 배치. 큰 정육면체 안에 작은 정육면체 8개가 꼭 들어차는 모습으로 부피비 1:8을 눈으로 보이게.",
    "book_diagram_url": "./diagrams/book/2026-08-20_cycle_1.jpg",
    "book_diagram_source": "출처: 최소한의 수학지식(EBSMath)",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "물 22.5L를 0.5L짜리 페트병에 하나도 남김없이 가득 담으려고 합니다. 페트병은 모두 몇 개 필요할까요? (22.5 ÷ 0.5)",
        "choices": [
          "45",
          "44",
          "11",
          "4.5"
        ],
        "answer": "45",
        "explanation": "22.5÷0.5는 225÷5=45와 같으므로 45개 필요합니다. 0.5L씩 담으면 수가 늘어나므로 45개가 맞습니다. 44는 계산 오류, 11은 22.5÷2 혼동 오답, 4.5는 소수점 위치 오류입니다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "소수의 나눗셈"
      },
      {
        "type": "mcq",
        "question": "분수의 나눗셈에 대한 설명으로 옳은 것은?",
        "choices": [
          "분수의 나눗셈은 나누는 수의 분모와 분자를 바꾸어 곱셈으로 계산할 수 있다",
          "분수를 자연수로 나눌 때는 분모를 그 자연수로 나눈다",
          "(진분수)÷(진분수)는 항상 1보다 작은 수가 나온다",
          "분수의 나눗셈에서는 두 분수를 그냥 분자끼리, 분모끼리 나누면 항상 답이 된다"
        ],
        "answer": "분수의 나눗셈은 나누는 수의 분모와 분자를 바꾸어 곱셈으로 계산할 수 있다",
        "explanation": "나눗셈은 나누는 수의 역수(분모·분자를 바꾼 수)를 곱하는 것과 같아 첫 번째가 옳습니다. '분모를 자연수로 나눈다'는 분모는 그대로 두고 분자를 나누거나 분모에 곱해야 하므로 틀림, '항상 1보다 작다'는 8/9÷4/9=2처럼 1보다 클 수 있어 틀림, '그냥 분자·분모끼리 나눈다'는 분모가 다를 때 나누어떨어지지 않으므로 틀립니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "분수의 나눗셈"
      },
      {
        "type": "mcq",
        "question": "길이 25.3cm인 리본을 4cm씩 자르면 4cm짜리 도막을 최대 6개 만들 수 있습니다. 이때 남는 리본의 길이(cm)는 얼마일까요? (25.3 ÷ 4의 나머지)",
        "choices": [
          "1.3",
          "2.3",
          "0.3",
          "6.3"
        ],
        "answer": "1.3",
        "explanation": "4cm짜리 6개는 4×6=24cm이고, 25.3−24=1.3cm가 남습니다. 2.3과 0.3은 잘못 뺀 계산 오류, 6.3은 5개 자르고 남긴 값(25.3−20)으로 문제가 요구한 6개 기준이 아니므로 오답입니다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "소수의 나눗셈"
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "영어",
    "역할": "서브",
    "수능출처": "Grammar Joy 3 (주어-동사 수 일치)",
    "unit": "주어-동사 수 일치",
    "통합풀이법": "전치사구(in~, of~)는 지우고 진짜 주어의 수만 봐라.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "다음 빈칸에 알맞은 것은? The dog in the photos ___ very cute.",
        "choices": [
          "is",
          "are",
          "am",
          "be"
        ],
        "answer": "is",
        "hint": "진짜 주어를 찾아. 'in the photos'는 꾸며주는 말이야. 개가 몇 마리지?",
        "explanation": "주어는 The dog(한 마리, 단수)이라 is가 맞아. 'in the photos'는 주어를 꾸미는 곁가지일 뿐, 주어가 photos(복수)가 아니야. 전치사구에 속지 말고 진짜 주어의 수를 보는 게 핵심. 단수 주어 → is/was, 복수 주어 → are/were. 잘 골랐어!",
        "개념키": "en.agreement.subject_verb"
      },
      {
        "type": "mcq",
        "question": "다음 빈칸에 알맞은 것은? The box of apples ___ on the table.",
        "choices": [
          "is",
          "are",
          "were",
          "have"
        ],
        "answer": "is",
        "hint": "주어는 box일까 apples일까? 'of apples'는 상자를 설명하는 말. 상자는 한 개.",
        "explanation": "주어는 The box(한 개, 단수)이므로 is가 정답. 'of apples'가 붙어 apples가 주어처럼 보이지만, 실제 주어는 box야. 예전에 'The box of apples are'라고 틀렸던 바로 그 부분! of 뒤 명사가 아니라 앞의 진짜 주어를 보면 다시는 안 헷갈려.",
        "개념키": "en.agreement.subject_verb"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음 중 셀 수 없는 명사 표현이 올바른 것은?",
        "choices": [
          "three breads",
          "a love",
          "two waters",
          "much time"
        ],
        "answer": "much time",
        "explanation": "time(시간)은 셀 수 없는 명사라서 much time(많은 시간)이 옳다. bread는 복수형(breads)으로 못 쓰고, love는 a를 못 붙이며, water는 two로 셀 수 없어 모두 틀렸다.",
        "hint": "응용",
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
      },
      {
        "type": "mcq",
        "question": "한 줄에 책(book)이 8권씩 꽂혀 있고 책꽂이에 5줄이 있다. 책은 모두 몇 권인가? (단위: 권)",
        "choices": [
          "13권",
          "35권",
          "40권",
          "45권"
        ],
        "answer": "40권",
        "explanation": "책은 셀 수 있는 명사이므로 한 줄 권수 × 줄 수로 센다. 8 × 5 = 40권. 13권은 8+5로 더하기를 한 오답, 35권은 7×5라 오답, 45권은 9×5라 오답.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 01 셀 수 있는 명사"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "한국사",
    "역할": "서브",
    "수능출처": "선사시대 (구석기·신석기·청동기)",
    "unit": "선사시대",
    "통합풀이법": "도구로 시대 구분 — 뗀석기=구석기, 간석기·토기=신석기, 청동기·계급=청동기.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "다음 설명에 해당하는 시대는? '사람들이 동굴이나 막집에서 살며, 뗀석기를 사용하고 사냥과 채집으로 먹을 것을 구하며 이동 생활을 했다.'",
        "choices": [
          "구석기 시대",
          "신석기 시대",
          "청동기 시대",
          "철기 시대"
        ],
        "answer": "구석기 시대",
        "hint": "뗀석기·이동 생활·동굴/막집이 열쇠야. 아직 농사도 안 짓고 그릇도 안 만든 가장 이른 시대.",
        "explanation": "뗀석기, 이동 생활, 동굴·막집, 사냥과 채집 = 구석기 시대. 신석기는 간석기·농사 시작·빗살무늬토기, 청동기는 청동검·고인돌·계급 발생이야. 예전에 구석기를 청동기로 헷갈렸지? 청동기는 '금속'과 '계급'이 등장하는 훨씬 나중 시대라 이동 생활이 아니야.",
        "개념키": "hist.prehistory.paleolithic"
      },
      {
        "type": "mcq",
        "question": "고인돌, 청동검, 계급의 발생과 가장 관련 있는 시대는?",
        "choices": [
          "청동기 시대",
          "구석기 시대",
          "신석기 시대",
          "철기 시대"
        ],
        "answer": "청동기 시대",
        "hint": "청동검·고인돌·계급 발생은 한 시대를 가리켜. 금속을 처음 쓰기 시작한 때야.",
        "explanation": "고인돌, 청동검, 계급 발생 = 청동기 시대. 농경이 크게 발달해 잉여 생산물이 생기고 지배층이 나타났어. 구석기(뗀석기·이동)와 정반대 특징이야. 이 둘을 나란히 두면 절대 안 헷갈려 — 구석기=이동·뗀석기, 청동기=정착·금속·계급.",
        "개념키": "hist.prehistory.bronze"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "고조선의 8조법 중 '사람을 죽인 자는 사형에 처한다'는 조항을 통해 알 수 있는 사실로 옳은 것은?",
        "choices": [
          "사람의 생명(노동력)을 중요하게 여겼다",
          "화폐를 사용하지 않았다",
          "농사를 짓지 않았다",
          "문자가 없었다"
        ],
        "answer": "사람의 생명(노동력)을 중요하게 여겼다",
        "explanation": "살인자를 사형에 처한다는 조항은 당시 사회가 사람의 생명과 노동력을 중시했음을 보여 준다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "선사·고조선 (구석기·신석기)"
      },
      {
        "type": "mcq",
        "question": "백성을 위해 1446년에 새로운 글자 '훈민정음(한글)'을 만들어 반포한 조선의 왕은 누구인가?",
        "choices": [
          "세종 대왕",
          "고종",
          "태조 이성계",
          "광해군"
        ],
        "answer": "세종 대왕",
        "explanation": "훈민정음을 창제·반포한 왕은 세종 대왕이다. 고종은 대한제국 황제, 태조 이성계는 조선을 세운 첫 왕, 광해군은 임진왜란 이후의 왕이라 한글 창제와 관련이 없어 오답이다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "근현대사 입문"
      },
      {
        "type": "mcq",
        "question": "광복 직후 한반도는 38도선을 경계로 남과 북에 각각 어느 나라 군대가 주둔하게 되었는가?",
        "choices": [
          "남쪽 미국·북쪽 소련",
          "남쪽 소련·북쪽 미국",
          "남쪽 영국·북쪽 중국",
          "남쪽 일본·북쪽 미국"
        ],
        "answer": "남쪽 미국·북쪽 소련",
        "explanation": "광복 후 38도선을 경계로 남쪽에는 미군이, 북쪽에는 소련군이 주둔하였다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "광복과 대한민국 정부 수립"
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-08-20",
  "week": "2026-W34",
  "weakness_focus": [
    "수능 기출 학습",
    "닮음비·부피비(부피비=닮음비의 세제곱) (2026-08-04 오답, 50 cm³→200 cm³)",
    "닮음비·부피비(부피비=닮음비의 세제곱) (2026-08-07 오답, 80 cm³→40 cm³)"
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
  "total_plays": 543,
  "total_correct": 410,
  "accuracy": 76,
  "last_date": "2026-08-19",
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
        0.5,
        0.556
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
        0.318,
        0.0,
        0.4
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
      "weak_count": 2,
      "strong_count": 0,
      "recent_accuracy": [
        1.0,
        1.0,
        1.0
      ],
      "is_master": true
    }
  ],
  "level": 43,
  "xp_total": 4200,
  "xp_in_level": 0,
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
      "subject": "한국사",
      "color": "#ff9d6b",
      "unit": "미시작",
      "date": "2026-08-19",
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
  "page": 26,
  "total": 65,
  "image": "./copywork/today.jpg",
  "weekday": "목",
  "date": "2026-08-20",
  "flagged": false
},
  revenge: {
  "date": "2026-08-20",
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
        "question": "경주마가 4시간 동안 48km를 달렸어. 이 말의 속력은 시속 몇 km일까? (속력 = 거리 ÷ 시간)",
        "choices": [
          "12km",
          "44km",
          "52km",
          "192km"
        ],
        "answer": "12km",
        "explanation": "기준량(나누는 수)은 시간 4야 — 거리 48을 시간 4로 나눠! 48÷4=12, 정답 ①. ④192km는 48×4로 곱한 실수, ②44·③52는 48에서 4를 빼거나 더한 착각이야. 핵심: '시속(=한 시간당)'이니까 시간 4가 기준량.",
        "hint": "비와 비율 — 69일 밀린 간격 복습"
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
        "question": "리본 7/8 m를 7명이 똑같이 나누어 가졌습니다. 한 명이 가진 리본은 몇 m인가요?",
        "choices": [
          "1/8 m",
          "7/8 m",
          "1/7 m",
          "7/15 m"
        ],
        "answer": "1/8 m",
        "explanation": "7/8 ÷ 7 = 7/(8×7) = 1/8 m. 분자와 분모의 7이 약분되어 1/8이 됩니다. '7/8'은 나누기를 안 한 값, '1/7'은 분모를 잘못 고른 오답, '7/15'는 분모에 7을 더한 오답입니다.",
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
        "question": "같은 자료를 그래프로 나타낼 때, 어떤 그래프를 골라야 하는지에 대한 설명으로 알맞은 것은?",
        "choices": [
          "시간에 따른 연속적인 변화는 꺾은선그래프로 나타내는 것이 좋다",
          "항목별 수량 비교는 항상 원그래프로만 나타내야 한다",
          "어떤 자료든 막대그래프 하나로만 나타내야 정확하다",
          "그래프 종류는 자료의 내용과 상관없이 마음대로 정한다"
        ],
        "answer": "시간에 따른 연속적인 변화는 꺾은선그래프로 나타내는 것이 좋다",
        "explanation": "자료의 성격에 맞는 그래프를 골라야 한다. 시간 변화는 꺾은선그래프가 알맞다. 항목 비교는 막대그래프도 쓰고, 모든 자료를 막대 하나로만 쓰지 않으며, 자료 내용에 맞게 골라야 하므로 나머지는 틀리다.",
        "hint": "기록·자료 정리 — 지금 배우는 단원 워밍업"
      }
    }
  ]
},
  vocab: {
  "date": "2026-08-20",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "애쓰다",
        "~을 이루다",
        "셀피, 자기 사진",
        "어린 시절"
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
        "정확한",
        "추상적인",
        "~을 이루다",
        "지역"
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
        "애쓰다",
        "셀피, 자기 사진",
        "친밀함",
        "가리다, 감추다"
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
        "모순되지 않는",
        "추상적인",
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
        "셀피, 자기 사진",
        "정확한",
        "지역",
        "애쓰다"
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
        "셀피, 자기 사진",
        "애쓰다",
        "가리다, 감추다",
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
        "지역",
        "셀피, 자기 사진",
        "~을 이루다",
        "애쓰다"
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
        "친밀함",
        "~을 이루다",
        "추상적인",
        "모순되지 않는"
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
        "지역",
        "친밀함",
        "정확한",
        "~을 이루다"
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
        "가리다, 감추다",
        "지역",
        "셀피, 자기 사진",
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
