window.GAME_CONFIG = {
  game: "sion-mocktest",
  title: "시온이 모의시험",
  sheet_tab: "sion-mocktest",
  endpoint: "https://script.google.com/macros/s/AKfycbz5mX9EPnOSmSs6p0YFiNTpqH810emc3ArEKnfusCYXrjH90OcIapwgYjnyP9A_F5ZYOQ/exec",
  problems: [
  {
    "id": 1,
    "cycle": 1,
    "subject": "통합과학",
    "역할": "메인",
    "계보id": "L260814-sci-variables",
    "현재스텝": "E",
    "수능출처": "2026학년도 수능 통합과학 5번",
    "unit": "변인 통제와 대조 실험",
    "module_core": "한 번에 하나의 변인만 (조작 1개, 나머지는 통제)",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "시온이가 강아지 두 마리에게 새로 산 사료가 정말 좋은지 알아보려 한다. A에게는 새 사료, B에게는 원래 사료를 준다. 실험이 공정하려면 두 강아지에게 '똑같이' 맞출 필요가 없는 것은?",
        "choices": [
          "사료의 종류",
          "주는 물의 양",
          "산책 시간",
          "강아지의 나이"
        ],
        "answer": "사료의 종류",
        "hint": "바꿔서 비교하려는 딱 한 가지가 뭐지? 그것만 다르고 나머지는 전부 같아야 공정해.",
        "explanation": "새 사료의 효과를 알고 싶으니 '사료 종류'만 다르게 두고 나머지(물·산책·나이)는 똑같이 맞춰야 해. 일부러 다르게 두는 그 하나가 바로 조작(독립) 변인이야. 물이나 산책 시간까지 다르면 결과가 사료 때문인지 알 수 없게 돼. 정답은 사료의 종류 — 이건 다르게 두는 거라 '똑같이 맞출 필요가 없는' 것이지.",
        "개념키": "sci.method.variables"
      },
      {
        "스텝": "E",
        "type": "mcq",
        "question": "물의 온도가 얼음 녹는 빠르기에 영향을 주는지 알아보려고 컵을 준비했다. A: 물 100mL·20℃ / B: 물 100mL·40℃ / C: 물 200mL·40℃. 온도의 영향만 알아보려면 어느 두 컵을 비교해야 할까?",
        "choices": [
          "A와 B",
          "B와 C",
          "A와 C",
          "세 컵 모두"
        ],
        "answer": "A와 B",
        "hint": "온도만 다르고 물의 양은 같은 두 컵을 찾아봐. 물의 양까지 다르면 무엇 때문인지 헷갈려.",
        "explanation": "온도의 영향만 보려면 '온도'만 다르고 나머지는 같은 두 컵이 필요해. A와 B는 물의 양이 100mL로 같고 온도만 20℃·40℃로 달라 → 정답. B와 C는 온도는 같고 물의 양이 달라서 온도 비교가 안 돼. 지난번 B와 C를 골랐는데, 비교할 두 조건은 '알아보려는 것 하나만' 달라야 한다는 걸 기억하자.",
        "개념키": "sci.method.variables"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "'비료가 상추를 잘 자라게 하는가'를 알아보려고, 한 학생이 비료 준 화분은 햇빛 잘 드는 창가에, 비료 안 준 화분은 그늘에 두었다. 이 실험의 문제점으로 옳은 것은?",
        "choices": [
          "빛이라는 다른 변인이 통제되지 않아 비료 효과를 알 수 없다",
          "화분이 2개뿐이라 어떤 결론도 낼 수 없다",
          "비료의 종류를 바꾸지 않아서 잘못됐다",
          "상추 대신 다른 식물을 써야 한다"
        ],
        "answer": "빛이라는 다른 변인이 통제되지 않아 비료 효과를 알 수 없다",
        "hint": "비료 말고 또 무엇이 달라졌지? 두 가지가 한꺼번에 달라지면 원인을 못 가려.",
        "explanation": "비료 효과를 보려면 '비료 유무'만 다르고 빛·물·온도는 같아야 해. 그런데 창가와 그늘은 '빛'까지 달라져서, 상추가 잘 자라도 비료 덕인지 빛 덕인지 알 수 없어 — 통제 변인이 무너진 경우야. 화분 개수나 식물 종류는 핵심이 아니야. 정답은 빛이 통제되지 않았다는 것.",
        "개념키": "sci.method.variables"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "효소의 작용에 온도가 미치는 영향을 알아보려고 설계했다. [Ⅰ] 효소액 2mL·기질 5mL·10℃ / [Ⅱ] 효소액 2mL·기질 5mL·37℃ / [Ⅲ] 효소액 2mL·기질 5mL·60℃. 이 실험에 대한 설명으로 옳은 것은?",
        "choices": [
          "조작 변인은 온도이고, 효소액·기질의 양은 통제 변인이다",
          "조작 변인은 효소액의 양이다",
          "종속 변인은 온도이다",
          "시험관 Ⅱ 하나만으로 온도의 영향을 알 수 있다"
        ],
        "answer": "조작 변인은 온도이고, 효소액·기질의 양은 통제 변인이다",
        "hint": "일부러 바꾼 것(조작), 같게 맞춘 것(통제), 결과로 재는 것(종속)을 하나씩 짚어봐.",
        "explanation": "세 시험관에서 효소액·기질은 모두 2mL·5mL로 같고 온도만 10·37·60℃로 달라 → 조작 변인은 온도, 통제 변인은 효소액·기질의 양. 결과로 측정하는 반응 속도가 종속 변인이야. 온도는 조작 변인이지 종속 변인이 아니고, 비교하려면 최소 둘 이상이 필요하니 Ⅱ 하나로는 알 수 없어. 정답은 첫 번째.",
        "개념키": "sci.method.variables"
      }
    ],
    "보스전": {
      "진짜수능본문": "철수는 '특정 세제가 기름때 제거에 효과가 있는가'를 알아보기 위해 다음과 같이 실험하였다. [실험 과정] (가) 같은 크기의 기름 묻은 천 조각 4개를 준비한다. (나) 각 천을 같은 온도(30℃), 같은 양(500mL)의 물이 담긴 비커에 넣는다. (다) 비커 A에는 세제를 넣지 않고, 비커 B, C, D에는 세제를 각각 1, 2, 3스푼 넣는다. (라) 같은 시간(10분) 동안 같은 세기로 저은 뒤 남은 기름때의 양을 측정한다. 이 실험에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은? <보기> ㄱ. 이 실험의 조작 변인은 세제의 양이다. ㄴ. 비커 A는 대조군이다. ㄷ. 물의 온도를 30℃로 같게 한 것은 통제 변인에 해당한다.",
      "진짜수능선택지": [
        "ㄱ",
        "ㄷ",
        "ㄱ, ㄴ",
        "ㄴ, ㄷ",
        "ㄱ, ㄴ, ㄷ"
      ],
      "진짜수능정답": "⑤",
      "보스전_해설": "E에서 강아지 사료 실험처럼 '바꾸는 건 딱 하나'였지? 여기서 일부러 바꾼 하나가 세제의 양이라 조작 변인은 세제의 양(ㄱ 참). 세제를 전혀 넣지 않은 비커 A는 비교의 기준, 곧 대조군이야(ㄴ 참). M에서 빛을 통제 안 해 실험이 망가졌던 것 기억해? 여기선 물의 온도(30℃)·양(500mL)·젓는 시간을 모두 같게 해서 통제 변인을 지켰어(ㄷ 참). 그래서 ㄱ·ㄴ·ㄷ 모두 옳아 정답은 ⑤. H에서 조작·통제·종속을 하나씩 짚었던 그 방법을 그대로 쓰면 돼.",
      "강조구간": [
        "비커 A에는 세제를 넣지 않고",
        "같은 온도(30℃)",
        "세제를 각각 1, 2, 3스푼 넣는다"
      ]
    },
    "통합풀이법": "바꾸는 건 하나(조작), 나머지는 전부 같게(통제), 재는 건 결과(종속). 대조군은 아무것도 안 바꾼 기준.",
    "이미지_묘사": "두 컵 그림 — 왼쪽·오른쪽 물의 양은 같고 온도 눈금만 다른 대조 실험 도식, 바뀐 변인 하나에 빨간 동그라미.",
    "image_url": "./images/2026-08-28_cycle_1.png",
    "video_url": "./diagrams/2026-08-28_cycle_1.mp4",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "물 분자(H₂O) 4개에 들어 있는 수소 원자는 모두 몇 개인가?",
        "choices": [
          "4개",
          "6개",
          "8개",
          "12개"
        ],
        "answer": "8개",
        "explanation": "물 분자 1개에 수소 원자가 2개이므로 2×4 = 8개이다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "물질의 구성 (원소·원자·분자) 미리보기"
      },
      {
        "type": "mcq",
        "question": "다음 중 원소에 대한 설명으로 옳은 것은?",
        "choices": [
          "원소는 물질을 이루는 기본 성분이다",
          "원소는 두 종류 이상의 물질이 섞인 것이다",
          "원소는 항상 눈에 보인다",
          "원소는 분해하면 더 작은 원소가 된다"
        ],
        "answer": "원소는 물질을 이루는 기본 성분이다",
        "explanation": "원소는 물질을 이루는 기본 성분으로 더 이상 다른 물질로 분해되지 않는다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "물질의 구성 (원소·원자·분자) 미리보기"
      },
      {
        "type": "mcq",
        "question": "기화 현상에 대한 설명으로 옳은 것은?",
        "choices": [
          "기화가 일어나면 입자 사이의 거리가 멀어진다",
          "기화는 열을 방출하는 변화이다",
          "기화가 일어나면 물질의 종류가 바뀐다",
          "기화는 고체가 기체로 변하는 것이다"
        ],
        "answer": "기화가 일어나면 입자 사이의 거리가 멀어진다",
        "explanation": "기화는 액체가 기체로 변하면서 입자 사이의 거리가 멀어집니다. 열을 흡수하며 물질의 종류는 그대로입니다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "물질의 상태 변화 미리보기"
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "수학",
    "역할": "서브",
    "수능출처": "6-2 연계 · 닮음비·부피비",
    "unit": "닮음비·부피비",
    "통합풀이법": "닮음비 a:b → 넓이비 a²:b², 부피비 a³:b³. 부피는 항상 세 번 곱한다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "닮음비가 1:2인 두 정육면체가 있다. 작은 정육면체의 부피가 5cm³일 때, 큰 정육면체의 부피는?",
        "choices": [
          "40 cm³",
          "20 cm³",
          "10 cm³",
          "80 cm³"
        ],
        "answer": "40 cm³",
        "hint": "길이가 2배면 부피는 2를 세 번 곱한 만큼 커져. 2×2×2는?",
        "explanation": "닮음비가 1:2면 부피비는 1:2³=1:8이야. 그래서 5×8=40cm³. 길이비 그대로 ×2 하면 10, 넓이처럼 ×4 하면 20 — 둘 다 함정이야. 부피는 세 번 곱한다는 걸 기억! 정답은 40cm³.",
        "개념키": "math.similarity.basic"
      },
      {
        "type": "mcq",
        "question": "큰 정육면체와 작은 정육면체의 닮음비가 3:1이다. 작은 정육면체의 부피는 큰 정육면체 부피의 몇 배인가?",
        "choices": [
          "1/27배",
          "1/3배",
          "1/9배",
          "26/27배"
        ],
        "answer": "1/27배",
        "hint": "부피비는 닮음비를 세 번 곱한 거야. 3을 세 번 곱하면 27, 그럼 작은 쪽은?",
        "explanation": "닮음비 3:1 → 부피비 3³:1³=27:1. 작은 쪽은 큰 쪽의 1/27배야. 길이처럼 1/3, 넓이처럼 1/9은 함정이고, 26/27은 '큰 것에서 작은 것을 뺀 나머지' 같은 엉뚱한 값이야. 부피는 세 번 곱셈! 정답은 1/27배.",
        "개념키": "math.similarity.basic"
      }
    ],
    "book_diagram_url": "./diagrams/book/2026-08-28_cycle_2.jpg",
    "book_diagram_source": "출처: 최소한의 수학지식(EBSMath)",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "좋아하는 과일을 조사하니 사과 120명, 전체 400명이었습니다. 사과를 좋아하는 학생은 전체의 몇 %입니까?",
        "choices": [
          "30%",
          "40%",
          "25%",
          "12%"
        ],
        "answer": "30%",
        "explanation": "120÷400×100=30%. 40%는 분모를 300으로 잘못 본 값, 25%는 100÷400, 12%는 백분율로 바꾸지 않고 120/1000으로 본 오답입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "여러 가지 그래프"
      },
      {
        "type": "mcq",
        "question": "삼각기둥의 꼭짓점은 모두 몇 개일까요?",
        "choices": [
          "3개",
          "5개",
          "6개",
          "9개"
        ],
        "answer": "6개",
        "explanation": "n각기둥의 꼭짓점 수는 2n개입니다. 삼각기둥은 n=3이므로 2×3=6개. 3개는 한 밑면만 센 것, 5개는 면 수(3+2), 9개는 모서리 수(3×3)와 혼동한 오답입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "각기둥과 각뿔"
      },
      {
        "type": "mcq",
        "question": "물이 들어 있지 않은 가로 20cm, 세로 10cm인 직육면체 모양 수조에 물을 부었더니 물의 높이가 5cm가 되었습니다. 들어간 물의 부피는 몇 cm³입니까?",
        "choices": [
          "1000cm³",
          "350cm³",
          "200cm³",
          "100cm³"
        ],
        "answer": "1000cm³",
        "explanation": "물도 직육면체 모양이므로 부피 = 가로×세로×물높이 = 20×10×5 = 1000cm³. 350cm³는 모서리 합의 두 배 같은 잘못된 값, 200cm³는 밑면 넓이(20×10), 100cm³는 잘못된 계산 오답.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "직육면체의 부피와 겉넓이"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "영어",
    "역할": "서브",
    "수능출처": "Grammar Joy 3 · 주어-동사 수 일치",
    "unit": "주어-동사 수 일치",
    "통합풀이법": "주어가 하나(단수)면 현재 동사에 -s, be동사는 is. 여럿이면 -s 빼고 are.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? — Sion's puppy ___ every night. (시온이의 강아지 한 마리가 매일 밤 짖는다)",
        "choices": [
          "barks",
          "bark",
          "barking",
          "are bark"
        ],
        "answer": "barks",
        "hint": "주어가 한 마리(단수, 3인칭)면 현재형 동사 끝에 무엇을 붙이지?",
        "explanation": "주어 'Sion's puppy'는 한 마리(3인칭 단수)라서 현재형 동사에 -s를 붙여 barks가 돼. bark는 복수·1·2인칭용이라 여기선 틀려. 지난번 walk를 walks로 못 고쳤던 것 기억나지? '한 명/한 마리 + 현재'면 동사에 -s! 정답은 barks.",
        "개념키": "en.agreement.subject_verb"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? — My cat ___ on the sofa now. (내 고양이 한 마리가 지금 소파에 있다)",
        "choices": [
          "is",
          "are",
          "am",
          "were"
        ],
        "answer": "is",
        "hint": "주어가 한 마리(단수)이고 지금(현재)이면 be동사는 무엇일까?",
        "explanation": "주어 'My cat'은 한 마리(단수)라서 be동사는 is를 써. are는 복수(cats)일 때, am은 I일 때, were는 과거일 때 쓰지. 지난번 is 자리에 are를 넣었던 실수를 뒤집자 — '한 마리 + 현재 = is'. 정답은 is.",
        "개념키": "en.agreement.subject_verb"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음 중 셀 수 있는 명사(countable noun)는 무엇인가?",
        "choices": [
          "sugar",
          "bread",
          "egg",
          "money"
        ],
        "answer": "egg",
        "explanation": "egg(달걀)는 하나, 둘 셀 수 있어 an egg, two eggs처럼 쓰는 셀 수 있는 명사다. sugar(설탕)·bread(빵)·money(돈)는 모양이 일정하지 않거나 추상적이어서 셀 수 없는 명사다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 02 셀 수 없는 명사"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? 'I need ___ cups of coffee. (커피 몇 잔이 필요해)'",
        "choices": [
          "much",
          "a",
          "an",
          "a few"
        ],
        "answer": "a few",
        "explanation": "여기서 세는 대상은 cups(셀 수 있는 복수명사)이므로 '몇 개의'라는 뜻의 a few가 알맞다. much는 셀 수 없는 명사에, a·an은 단수명사에 쓰므로 cups 앞에는 쓸 수 없다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 02 셀 수 없는 명사"
      },
      {
        "type": "mcq",
        "question": "빵 두 조각을 영어로 바르게 나타낸 것은?",
        "choices": [
          "two breads",
          "two pieces of bread",
          "a bread two",
          "two of bread"
        ],
        "answer": "two pieces of bread",
        "explanation": "bread는 셀 수 없는 명사라 직접 숫자를 붙이지 못하고 'two pieces of bread'처럼 단위를 빌려 센다. two breads는 복수형 오류, 나머지 둘은 어순·표현이 틀렸다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 02 셀 수 없는 명사"
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-08-28",
  "week": "2026-W35",
  "weakness_focus": [
    "수능 기출 학습",
    "닮음비·부피비 (2026-08-20 오답, 108 cm³→81 cm³)",
    "닮음비·부피비 (2026-08-20 오답, 72 cm³→54 cm³)"
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
  "total_plays": 595,
  "total_correct": 446,
  "accuracy": 75,
  "last_date": "2026-08-27",
  "영역별": [
    {
      "subject": "국어",
      "color": "#ff8fc5",
      "progress": 32,
      "current_unit": "문학",
      "weak_count": 6,
      "strong_count": 1,
      "recent_accuracy": [
        0.8,
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
        0.75,
        0.5,
        0.556
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
  "level": 45,
  "xp_total": 4460,
  "xp_in_level": 60,
  "master_units": 0,
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
  "trophies": [],
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
  "title": "영어 필사 100일의 기적",
  "book_key": "영어100일",
  "images": [
    "./copywork/today.jpg"
  ],
  "page": 13,
  "total": 100,
  "image": "./copywork/today.jpg",
  "weekday": "금",
  "date": "2026-08-28",
  "flagged": false
},
  revenge: {
  "date": "2026-08-28",
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
        "question": "작년에 5000마리이던 멸종위기 동물이 올해 200마리 줄었어. 감소율은 몇 %일까? (감소율 = 줄어든 수 ÷ 작년 수)",
        "choices": [
          "4%",
          "25%",
          "40%",
          "96%"
        ],
        "answer": "4%",
        "explanation": "기준량(나누는 수)은 작년 5000이야 — 줄어든 200을 작년 수로 나눠! 200÷5000=0.04=4%, 정답 ①. ②25%는 5000÷200으로 거꾸로, ③40%는 0을 잘못 센 것, ④96%는 남은 동물의 비율이야. 핵심: '작년 대비'의 작년이 기준량.",
        "hint": "비와 비율 — 77일 밀린 간격 복습"
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
        "question": "물 5/8 L를 한 컵에 1/8 L씩 담으려고 합니다. 컵은 모두 몇 개 필요한가요?",
        "choices": [
          "5개",
          "4개",
          "8개",
          "40개"
        ],
        "answer": "5개",
        "explanation": "5/8 ÷ 1/8 = 5 ÷ 1 = 5(분모가 같으면 분자끼리 나눕니다). '4'는 5에서 1을 뺀 오답, '8'은 분모를 답으로 쓴 오답, '40'은 분모끼리 곱한 오답입니다.",
        "hint": "분수의 나눗셈 — 지금 배우는 단원 워밍업"
      }
    },
    {
      "id": "warmfill-국어",
      "kind": "warmup_fill",
      "label": "오늘 단원 워밍업",
      "과목": "국어",
      "단원": "문학",
      "problem": {
        "type": "mcq",
        "question": "이야기에서 인물의 마음(성격·기분)을 짐작하는 방법으로 알맞은 것은 무엇인가요?",
        "choices": [
          "인물의 말과 행동, 처한 상황을 함께 살펴본다.",
          "이야기 속 쪽수가 몇 쪽인지 센다.",
          "책의 표지 색깔만 본다.",
          "글자 수가 많은지 적은지만 확인한다."
        ],
        "answer": "인물의 말과 행동, 처한 상황을 함께 살펴본다.",
        "explanation": "인물의 마음은 그 인물이 한 말·행동과 처한 상황을 근거로 짐작한다. 쪽수, 표지 색깔, 글자 수는 인물의 마음과 관련 없는 정보이므로 모두 틀리다.",
        "hint": "문학 — 지금 배우는 단원 워밍업"
      }
    }
  ]
},
  vocab: {
  "date": "2026-08-28",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "애쓰다",
        "모순되지 않는",
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
        "정확한",
        "지역",
        "셀피, 자기 사진",
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
        "정확한",
        "지역",
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
        "지역",
        "어린 시절",
        "~을 이루다",
        "추상적인"
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
        "애쓰다",
        "지역",
        "~을 이루다",
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
        "친밀함",
        "모순되지 않는",
        "가리다, 감추다",
        "추상적인"
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
        "~을 이루다",
        "모순되지 않는",
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
        "셀피, 자기 사진",
        "친밀함",
        "추상적인",
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
        "셀피, 자기 사진",
        "애쓰다",
        "정확한"
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
        "~을 이루다",
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
