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
    "수능출처": "2022학년도 수능 수학 29번",
    "unit": "다항식의 전개·동류항 정리",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "7 × 13을 13 = 10 + 3으로 쪼개, 7×10과 7×3을 각각 구해 더하면 얼마?",
        "choices": [
          "91",
          "73",
          "70",
          "84"
        ],
        "answer": "91",
        "hint": "13을 10과 3 두 칸으로 나눴지. 7×10부터 구하고, 다음 7×3도 꼭 구해서 두 개를 더해봐.",
        "explanation": "7×13은 13을 10과 3으로 쪼개 7×10=70, 7×3=21로 나눠 구하고 더하면 91이야. 73은 7×3을 안 하고 3만 더한 실수, 70은 뒤 칸을 빠뜨린 거야. 쪼개서 각각 곱하고 다 더한다 — 이게 분배법칙이야. 지금 10+3으로 쪼갠 이 자리를 중학교에서는 문자로 묶어 (a+b)라고 쓴단다. 잘하고 있어.",
        "개념키": "math.poly.distributive"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "5x + 3 − 2x + 4 를 동류항끼리 모아 정리하면?",
        "choices": [
          "3x+7",
          "7x+7",
          "3x−1",
          "7x−1"
        ],
        "answer": "3x+7",
        "hint": "x가 붙은 것끼리(5x, −2x), 숫자끼리(3, 4) 따로 모아. −2x의 빼기 부호를 꼭 데려가.",
        "explanation": "5x, −2x는 x끼리(동류항), 3과 4는 숫자끼리 모아. x는 5−2=3x, 숫자는 3+4=7 → 3x+7이야. 7x가 나왔다면 −2x의 빼기를 놓친 거고, 3x−1이면 3−4로 잘못 뺀 거야. 부호까지 데리고 모으는 게 핵심. 중학교에선 x 한 종류만 모으지만, 고등학교에선 x², x, 상수를 한꺼번에 개수 제한 없이 모은다.",
        "개념키": "math.poly.like_terms_linear"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "(x + 3)(x − 1)을 전개해 x² + ax + b 꼴로 쓸 때, a + b는?",
        "choices": [
          "−1",
          "5",
          "−6",
          "2"
        ],
        "answer": "−1",
        "hint": "먼저 다 전개해봐: x·x, x·(−1), 3·x, 3·(−1). 상수 b가 양수인지 음수인지가 함정이야.",
        "explanation": "(x+3)(x−1)=x²−x+3x−3=x²+2x−3. 그래서 a=2, b=−3, a+b=−1이야. 5가 나왔다면 b를 +3으로 착각한 것 — 어제 네가 걸린 바로 그 함정이야. −3의 마이너스를 꼭 데려와야 해. 부호 하나가 답을 5에서 −1로 바꾼다. 이번엔 놓치지 않았지?",
        "개념키": "math.poly.like_terms"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "(2x − 1)²을 전개하면?",
        "choices": [
          "4x²−4x+1",
          "4x²+1",
          "4x²−4x−1",
          "2x²−4x+1"
        ],
        "answer": "4x²−4x+1",
        "hint": "(2x−1)²은 (2x−1)(2x−1)이야. 같은 걸 두 번 곱하는 거지 각각 제곱이 아냐. 가운데 항을 잊지 마.",
        "explanation": "(2x−1)²=(2x−1)(2x−1)=4x²−2x−2x+1=4x²−4x+1. 4x²+1이면 가운데 −4x를 빠뜨린 거(제곱은 두 개를 곱하는 것이지 각각 제곱이 아냐), 2x²이면 계수 2를 제곱 안 한 거야. 중간항 −4x가 생명이야. 수능은 이 전개 자체를 묻지 않아 — 이걸 도구로 쓰는 확률·미분을 묻지. 보스전에서 확인하자.",
        "개념키": "math.poly.distributive"
      }
    ],
    "보스전": {
      "진짜수능본문": "1부터 6까지의 자연수가 하나씩 적힌 6장의 카드가 들어 있는 주머니가 있다. 이 주머니에서 임의로 한 장의 카드를 꺼내어 카드에 적힌 수를 확인한 후 다시 넣는 시행을 한다. 이 시행을 4번 반복하여 확인한 네 개의 수의 평균을 X_bar라 할 때, P(X_bar=11/4)=q/p이다. p+q의 값을 구하시오. (단, p와 q는 서로소인 자연수이다.) [4점]",
      "진짜수능선택지": [
        "59",
        "91",
        "137",
        "175",
        "349"
      ],
      "진짜수능정답": "④",
      "보스전_해설": "평균이 11/4 → 네 수의 합이 11이야. 주사위 넷으로 합 11을 만드는 경우의 수를 세면 돼. 지름길: (x+x²+…+x⁶)⁴를 전개해서 x¹¹의 계수를 찾는 것 — 오늘 배운 동류항 정리(같은 차수끼리 계수 모으기)가 바로 이 계수 세기야! 경우의 수는 104가지, 전체는 6⁴=1296. P=104/1296=13/162. p=162, q=13, 서로소라 p+q=175. 59는 6 넘는 경우를 안 빼서 120가지로 센 실수야(포함배제 빠뜨림). E의 분배법칙으로 식을 쪼개고, H의 전개로 계수를 모은 그 손놀림이 여기서 그대로 쓰였다.",
      "강조구간": [
        "네 개의 수의 평균",
        "P(X_bar=11/4)=q/p"
      ]
    },
    "통합풀이법": "쪼개서 곱하고, 부호까지 데려와 같은 것끼리 모은다.",
    "이미지_묘사": "직사각형을 7×10칸과 7×3칸 둘로 나눈 넓이 그림 — 쪼개 곱하고 더하는 분배법칙을 눈으로 보게.",
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
        "question": "비 12:20을 가장 간단한 자연수의 비로 나타내면 무엇입니까?",
        "choices": [
          "6:10",
          "3:5",
          "4:5",
          "2:5"
        ],
        "answer": "3:5",
        "explanation": "12와 20의 최대공약수 4로 나누면 12÷4:20÷4 = 3:5. 오답: 6:10은 2로만 나눠 더 줄일 수 있고, 4:5와 2:5는 두 수를 같은 수로 나누지 않아 비율이 달라집니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "비와 비율"
      },
      {
        "type": "mcq",
        "question": "비례식 8 : □ = 24 : 15 에서 □에 알맞은 수는 얼마입니까?",
        "choices": [
          "3",
          "5",
          "9",
          "45"
        ],
        "answer": "5",
        "explanation": "외항의 곱 8×15=120, 내항의 곱 □×24이므로 □=120÷24=5입니다. (8에 3을 곱해 24가 되므로 □×3=15, □=5로도 풀립니다) '3','9','45'는 □×24=120을 만족하지 않습니다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "비례식과 비례배분"
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "통합사회",
    "역할": "서브",
    "수능출처": "2028학년도 수능 통합사회 예시문항 19번",
    "unit": "자료·그래프 읽기",
    "통합풀이법": "숫자 계산 전에 '어느 칸/어느 해'인지 손가락으로 먼저 짚는다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "표(2020년 232·2021년 278·2022년 302·2023년 328, 만 마리)에서 2021년과 2023년의 등록 마릿수 차이는 몇 만 마리?",
        "choices": [
          "50",
          "46",
          "96",
          "26"
        ],
        "answer": "50",
        "hint": "묻는 건 2021년과 2023년 딱 두 칸. 표에서 그 두 숫자만 짚어서 큰 수−작은 수 해봐.",
        "explanation": "표에서 두 해를 정확히 짚는 게 먼저야. 2023년 328, 2021년 278 → 328−278=50만이야. 46은 302−278로 엉뚱한 해를 뺀 것, 96은 처음과 끝을 뺀 거야. 묻는 두 해가 어디인지 손가락으로 짚고 빼면 실수가 준다. 자료 읽기는 계산보다 '어느 칸'을 먼저 확인하는 습관이 반이야.",
        "개념키": "soc.data.reading"
      },
      {
        "type": "mcq",
        "question": "표(2020년 232·2021년 278·2022년 302·2023년 328, 만 마리)에 대한 설명으로 옳은 것은?",
        "choices": [
          "2020년부터 2023년까지 매년 증가했다",
          "2022년에는 전년보다 감소했다",
          "가장 크게 늘어난 해는 2022→2023이다",
          "2023년은 2020년의 두 배를 넘는다"
        ],
        "answer": "2020년부터 2023년까지 매년 증가했다",
        "hint": "보기 하나하나를 표 숫자로 직접 대조해. 특히 '늘었다/줄었다'와 '얼마나 늘었다(폭)'를 구분해.",
        "explanation": "①만 옳아. 232<278<302<328이라 매년 늘었지. ②는 반대(2022년도 늘었음), ④는 328이 464(=232×2)에 못 미쳐 틀려. ③은 늘어난 폭이 46→24→26이라 가장 큰 해는 2020→2021이야. 그래프·표 문제는 '증가/감소'와 '늘어난 폭'을 헷갈리면 함정에 걸려. 각 보기를 표 숫자로 하나씩 대조하면 확실해.",
        "개념키": "soc.data.reading"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "사계절이 뚜렷하고 우리나라가 속해 있는 기후로 알맞은 것은?",
        "choices": [
          "온대 기후",
          "열대 기후",
          "건조 기후",
          "한대 기후"
        ],
        "answer": "온대 기후",
        "explanation": "우리나라는 사계절의 변화가 뚜렷한 온대 기후에 속한다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "우리와 다른 기후·다른 생활 미리보기"
      },
      {
        "type": "mcq",
        "question": "다음 사례에 해당하는 기본권으로 옳은 것은? '경찰이 정당한 이유 없이 시민을 함부로 가두지 못한다.'",
        "choices": [
          "신체의 자유(자유권)",
          "참정권",
          "사회권",
          "청구권"
        ],
        "answer": "신체의 자유(자유권)",
        "explanation": "국가의 부당한 구속으로부터 보호받는 신체의 자유는 자유권에 속합니다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "인권과 헌법 (기본권) 미리보기"
      },
      {
        "type": "mcq",
        "question": "기후를 결정하는 가장 중요한 두 가지 요소로 알맞은 것은?",
        "choices": [
          "기온과 강수량",
          "인구와 도시",
          "산업과 교통",
          "언어와 종교"
        ],
        "answer": "기온과 강수량",
        "explanation": "기후는 오랜 기간 나타나는 대기 상태로, 기온과 강수량이 가장 기본적인 결정 요소다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "우리와 다른 기후·다른 생활 미리보기"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "영어",
    "역할": "서브",
    "수능출처": "Grammar Joy 3 · 주어-동사 수 일치",
    "unit": "주어-동사 수 일치 · 명사 복수형",
    "통합풀이법": "동사 고르기 전에 주어가 몇 명(몇 개)인지부터 센다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? My sister and her friends ___ to school together. (핵심단어 together=함께)",
        "choices": [
          "walk",
          "walks",
          "walking",
          "is walking"
        ],
        "answer": "walk",
        "hint": "주어가 몇 명이야? 'A and B'는 둘 이상이야. 동사에 −s를 붙일까 뺄까?",
        "explanation": "주어가 'My sister and her friends'로 여러 명(복수)이라 동사도 복수형 walk를 써. walks는 한 명(3인칭 단수)일 때만 −s가 붙는데, 네가 자주 걸리던 자리야. and로 묶인 주어는 둘 이상 → −s 없는 walk. walking·is walking은 앞 be동사 짝이 안 맞아 틀려. 주어가 몇 명인지 먼저 세는 습관!",
        "개념키": "en.grammar.general"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? The children in the classroom ___ very excited. (핵심단어 children=child의 복수, excited=신난)",
        "choices": [
          "is",
          "are",
          "was",
          "has"
        ],
        "answer": "are",
        "hint": "children은 child의 복수야. 여럿일 때 be동사는 is일까 are일까?",
        "explanation": "'The children'은 child의 복수라 복수 취급 → are를 써. is·was는 한 명일 때, has는 소유라 어색해. children처럼 −s가 안 붙어도 복수인 단어(man→men, child→children)를 조심해. '주어가 여럿이면 are'라고 먼저 판단하고 동사를 골라. are/is 헷갈리던 것, 이번엔 잡았지?",
        "개념키": "en.noun.plural"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음 중 셀 수 없는 명사(uncountable noun)는 무엇인가?",
        "choices": [
          "apple",
          "book",
          "water",
          "pencil"
        ],
        "answer": "water",
        "explanation": "water(물)는 일정한 모양이 없는 물질명사로 셀 수 없는 명사다. apple(사과)·book(책)·pencil(연필)은 하나, 둘 셀 수 있어 a/an을 붙이거나 복수형(-s)을 만들 수 있는 셀 수 있는 명사다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 02 셀 수 없는 명사"
      },
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
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-09-10",
  "week": "2026-W37",
  "weakness_focus": [
    "수능 기출 학습",
    "다항식 (단권화 수학(상) 18쪽) (2026-09-07 오답, x² + 2x − 3→3x² + 2x − 3)",
    "다항식 (단권화 수학(상) 18쪽) (2026-09-07 오답, 30→32)"
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
  "total_plays": 674,
  "total_correct": 503,
  "accuracy": 75,
  "last_date": "2026-09-09",
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
        0.475,
        0.5,
        0.65
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
        0.6,
        1.0,
        1.0
      ],
      "is_master": false
    },
    {
      "subject": "통합과학",
      "color": "#5ed5a0",
      "progress": 2,
      "current_unit": "1단원 물질의 규칙성: 원자·분자",
      "weak_count": 6,
      "strong_count": 1,
      "recent_accuracy": [],
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
  "level": 52,
  "xp_total": 5130,
  "xp_in_level": 30,
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
      "date": "2026-09-09",
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
        "status": "current"
      },
      {
        "name": "변인·관찰·실험 입문",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "통합과학-01",
        "status": "locked"
      },
      {
        "name": "기록·자료 정리",
        "grade": "초6",
        "track": "초6",
        "color": "#ff8fc5",
        "id": "통합과학-02",
        "status": "locked"
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
  "page": 32,
  "total": 65,
  "image": "./copywork/today.jpg",
  "weekday": "목",
  "date": "2026-09-10",
  "flagged": false
},
  revenge: {
  "date": "2026-09-10",
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
        "question": "8000원짜리 물건을 15% 할인하면 할인되는 금액은 얼마입니까?",
        "choices": [
          "800원",
          "1200원",
          "1500원",
          "6800원"
        ],
        "answer": "1200원",
        "explanation": "할인 금액 = 8000×0.15 = 1200원. 오답: 800원은 10%만 계산한 값, 1500원은 8000의 비율을 잘못 잡은 값, 6800원은 할인 후 내는 금액(할인액이 아님)입니다.",
        "hint": "비와 비율 — 90일 밀린 간격 복습"
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
        "question": "서로 닮은 두 삼각형의 닮음비가 2:3이다. 작은 삼각형의 한 변의 길이가 8cm일 때, 이에 대응하는 큰 삼각형의 변의 길이는 몇 cm인가?",
        "choices": [
          "12",
          "10",
          "16",
          "24"
        ],
        "answer": "12",
        "explanation": "닮음비가 2:3이므로 작은 쪽 변과 큰 쪽 변의 비도 2:3이다. 8:x = 2:3에서 2x = 24, 따라서 x = 12cm다. 대응변끼리 짝을 지어 같은 비를 쓰는 것이 핵심이다.",
        "hint": "닮음과 선분비 — 84일 밀린 간격 복습"
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
        "question": "미끄럼틀을 타고 내려올 때 마찰이 있으면 나타나는 현상으로 알맞은 것은?",
        "choices": [
          "역학적 에너지의 일부가 열에너지로 바뀌어 역학적 에너지가 줄어든다",
          "역학적 에너지가 늘어난다",
          "위치 에너지가 그대로 남아 있다",
          "운동 에너지가 0이 된다"
        ],
        "answer": "역학적 에너지의 일부가 열에너지로 바뀌어 역학적 에너지가 줄어든다",
        "explanation": "마찰이 있으면 에너지의 일부가 열이나 소리로 빠져나가므로 위치 에너지와 운동 에너지를 더한 역학적 에너지가 줄어든다. 역학적 에너지 보존은 마찰이나 공기 저항을 무시할 때 성립하는 규칙이다. 다만 열까지 포함한 전체 에너지는 사라지지 않는다.",
        "hint": "역학적 에너지 보존 — 77일 밀린 간격 복습"
      }
    }
  ],
  "은행결손": []
},
  vocab: {
  "date": "2026-09-10",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "추상적인",
        "애쓰다",
        "지역",
        "친밀함"
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
        "친밀함",
        "애쓰다",
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
        "가리다, 감추다",
        "모순되지 않는",
        "지역",
        "~을 이루다"
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
        "어린 시절",
        "애쓰다",
        "셀피, 자기 사진",
        "모순되지 않는"
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
        "~을 이루다",
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
        "추상적인",
        "모순되지 않는",
        "정확한",
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
        "지역",
        "애쓰다",
        "~을 이루다",
        "모순되지 않는"
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
        "어린 시절",
        "추상적인",
        "모순되지 않는",
        "~을 이루다"
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
        "친밀함",
        "추상적인",
        "정확한",
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
        "모순되지 않는",
        "정확한",
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
