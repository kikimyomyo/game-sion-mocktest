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
    "unit": "변인 통제·대조 실험·관찰 비교",
    "module_core": "변인 통제 = 하나만 다르게",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "시온이가 강아지 두 마리에게 밥을 준다. 밥그릇도 같고, 사료 양도 같고, 주는 시간도 같은데, 한 마리는 A사료, 다른 한 마리는 B사료를 준다. 이 실험에서 일부러 다르게 한 것은?",
        "choices": [
          "사료 종류",
          "밥그릇",
          "사료 양",
          "주는 시간"
        ],
        "answer": "사료 종류",
        "hint": "실험에서 다르게 한 것은 딱 하나여야 해. 밥그릇·양·시간은 두 마리 모두 똑같지? 그럼 남는 게 뭘까.",
        "explanation": "두 마리에게 밥그릇·사료 양·주는 시간을 똑같이 하고 사료 종류만 A·B로 다르게 했지. 그래서 다르게 한 것은 사료 종류야. 나머지를 같게 해야 나중에 결과가 달라졌을 때 사료 때문이라고 말할 수 있어. 잘 골랐으면 대조 실험의 뼈대를 잡은 거야.",
        "개념키": "sci.method.variables"
      },
      {
        "스텝": "E",
        "type": "mcq",
        "question": "시온이가 설탕이 젓는 것과 관계있나를 알아본다. 한 컵은 젓고, 한 컵은 안 젓고, 물 온도·물 양·설탕 양은 똑같이 했다. 이때 내가 일부러 바꾼 것(조작변인)은?",
        "choices": [
          "젓는지 여부",
          "설탕이 녹는 시간",
          "물의 온도",
          "설탕의 양"
        ],
        "answer": "젓는지 여부",
        "hint": "일부러 바꾼 것과 결과로 잰 것은 달라. 젓기와 녹는 시간 중, 내가 손으로 바꾼 건 어느 쪽일까.",
        "explanation": "여기서 내가 손으로 일부러 바꾼 것(조작변인)은 젓는지 여부야. 설탕이 녹는 시간은 실험이 끝나고 재서 얻은 결과라서 바꾼 게 아니야. 이 둘을 헷갈리면 안 돼 — 바꾼 건 원인 쪽, 시간은 결과 쪽. 물 온도·설탕 양은 똑같이 둔 통제변인이지.",
        "개념키": "sci.method.variables"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "빛의 세기만 다르게 하고 물의 양·화분 크기는 똑같이 해서 식물을 키웠다. 마지막에 자로 재서 비교하는 결과값(종속변인)은?",
        "choices": [
          "빛의 세기",
          "물의 양",
          "화분 크기",
          "식물이 자란 키"
        ],
        "answer": "식물이 자란 키",
        "hint": "빛만 다르게 했으니 빛은 바꾼 것. 그럼 재는 것(결과)은 마지막에 자로 확인하는 무엇일까.",
        "explanation": "빛의 세기만 다르게 했으니 빛은 조작변인. 물·화분은 똑같이 둔 통제변인. 마지막에 자로 재서 비교하는 식물이 자란 키가 바로 결과, 즉 종속변인이야. E에서 본 바꾼 것 하나가 여기서 조작변인이고, 잰 것이 종속변인으로 이름만 바뀐 거야.",
        "개념키": "sci.method.variables"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "물 온도가 높을수록 소금이 빨리 녹는다를 확인하려 한다. ㄱ: 20도 물 200mL 소금 10g 젓지 않음, ㄴ: 60도 물 200mL 소금 10g 젓지 않음, ㄷ: 60도 물 100mL 소금 20g 저음. 올바른 결론을 얻으려면 비교해야 할 두 비커는?",
        "choices": [
          "ㄱ과 ㄴ",
          "ㄱ과 ㄷ",
          "ㄴ과 ㄷ",
          "세 개 모두"
        ],
        "answer": "ㄱ과 ㄴ",
        "hint": "온도만 빼고 물 양·소금 양·젓기가 똑같은 두 비커를 찾아. 하나라도 더 다르면 온도 때문인지 알 수 없어.",
        "explanation": "ㄱ과 ㄴ은 물 200mL·소금 10g·젓기 안 함이 똑같고 온도만 20도/60도로 달라. 그래서 녹는 속도가 달라지면 온도 때문이라 말할 수 있어. ㄷ은 물 양·소금 양·젓기까지 다 달라서 무엇이 원인인지 못 가려. 딱 하나만 다른 짝을 고르는 게 핵심이야.",
        "개념키": "sci.method.variables"
      }
    ],
    "보스전": {
      "진짜수능본문": "그림은 강원도와 제주도에 위치한 국가지질공원의 주요 지질 명소를 조사하여 작성한 답사 보고서의 일부이다. [서낭 바위 — 강원평화 국가지질공원] 암석: (가) 화강암, 특징: ㉠ 구성 알갱이의 크기가 크다. [대포동 주상 절리 — 제주도 국가지질공원] 암석: (나) 현무암, 특징: 육각기둥 모양이 발달해 있고, 구성 알갱이의 크기가 작다. (가)와 (나)에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은? ㄱ. (가)는 마그마가 지하 깊은 곳에서 천천히 식어 만들어졌다. ㄴ. ㉠은 마그마가 빠르게 식었기 때문에 나타난 특징이다. ㄷ. (나)는 화산 활동으로 분출한 용암이 굳어 만들어졌다.",
      "진짜수능선택지": [
        "ㄱ",
        "ㄴ",
        "ㄱ, ㄷ",
        "ㄴ, ㄷ",
        "ㄱ, ㄴ, ㄷ"
      ],
      "진짜수능정답": "③",
      "보스전_해설": "E에서 조건을 하나만 다르게 해 비교, M에서 결과로 원인을 추론을 배웠지. 암석도 똑같아. (가)화강암은 알갱이가 크다 — 이건 마그마가 지하 깊은 곳에서 천천히 식어 결정이 크게 자란 증거야(ㄱ 참). 그래서 ㄴ은 반대라 틀려(빠르게 식으면 알갱이가 작아짐). (나)주상절리 현무암은 용암이 지표로 분출해 굳은 화산암이라 ㄷ 참. 관찰한 알갱이 크기라는 결과로 냉각 속도라는 원인을 되짚는 거야. 정답은 ㄱ, ㄷ.",
      "강조구간": [
        "구성 알갱이의 크기가 크다",
        "천천히 식어",
        "화산 활동으로 분출한 용암"
      ]
    },
    "통합풀이법": "하나만 다르게 하고 나머지는 똑같이 — 그래야 원인을 가릴 수 있다.",
    "이미지_묘사": "두 컵을 나란히 그린 도식. 한 컵은 숟가락으로 젓기 O, 다른 컵은 젓기 X. 물 온도·물 양·설탕 양은 두 컵 모두 같은 값으로 표시해 하나만 다름을 강조.",
    "image_url": "./images/2026-08-14_cycle_1.png",
    "video_url": "./diagrams/2026-08-14_cycle_1.mp4",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "콩나물이 물의 양에 따라 다르게 자라는지 알아보려고 똑같은 컵 4개에 콩나물을 같은 개수로 심었다. 한 가지 조건만 다르게 하여 공정하게 비교하려면, 컵마다 다르게 해야 하는 조건으로 알맞은 것은?",
        "choices": [
          "주는 물의 양",
          "콩나물의 개수",
          "컵의 모양",
          "두는 장소의 밝기"
        ],
        "answer": "주는 물의 양",
        "explanation": "물의 양에 따른 성장을 알아보는 실험이므로 바꿔야 하는 조건은 주는 물의 양이다. 콩나물의 개수·컵의 모양·장소의 밝기는 결과를 공정하게 비교하기 위해 모두 같게 맞춰야 하는 조건이므로 오답이다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "변인·관찰·실험 입문 (조건 비교)"
      },
      {
        "type": "mcq",
        "question": "같은 물 100 mL의 온도를 시온이는 21℃, 친구는 23℃, 다른 친구는 22℃로 읽었다. 측정 결과에 차이가 생긴 까닭으로 가장 알맞은 것은?",
        "choices": [
          "사람마다 눈금을 읽을 때 오차가 생길 수 있기 때문이다",
          "물의 온도가 사람에 따라 실제로 달라지기 때문이다",
          "온도계가 무게도 함께 재기 때문이다",
          "물의 양이 100 mL라서 온도를 잴 수 없기 때문이다"
        ],
        "answer": "사람마다 눈금을 읽을 때 오차가 생길 수 있기 때문이다",
        "explanation": "같은 물의 실제 온도는 하나이지만, 사람마다 눈금을 읽는 위치·순간이 조금씩 달라 측정 오차가 생긴다. 온도가 사람에 따라 변하지도 않고, 온도계가 무게를 재지도 않으며, 물의 양이 100 mL여도 온도는 잴 수 있으므로 나머지는 틀렸다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "자연·실험 입문 (관찰과 분류)"
      },
      {
        "type": "mcq",
        "question": "주스 1.5 L를 200 mL짜리 컵에 가득 채워 따르면 모두 몇 컵을 채울 수 있는가? (1 L = 1000 mL)",
        "choices": [
          "7잔과 1/2잔",
          "7잔",
          "8잔",
          "15잔"
        ],
        "answer": "7잔과 1/2잔",
        "explanation": "1.5 L = 1500 mL이고, 1500 ÷ 200 = 7.5이므로 가득 7잔과 절반 1잔, 즉 '7잔과 1/2잔'이다. 7잔은 남는 양을 뺀 값, 8잔은 올림한 값, 15잔은 100 mL로 잘못 나눈 값이라 틀렸다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "자연·실험 입문 (관찰과 분류)"
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "수학",
    "역할": "서브",
    "수능출처": "2024학년도 수능 수학 (닮음 응용) 변형",
    "unit": "닮음비·부피비 (부피비 = 닮음비의 세제곱)",
    "통합풀이법": "부피비 = 닮음비의 세제곱, 거꾸로는 세제곱근.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "닮음비가 1:2인 두 직육면체가 있다. 작은 것의 부피가 45cm³일 때, 큰 것의 부피는 몇 cm³일까?",
        "choices": [
          "90",
          "180",
          "360",
          "720"
        ],
        "answer": "360",
        "hint": "부피는 닮음비를 몇 번 곱할까? 길이가 가로·세로·높이 세 방향으로 늘어난다는 걸 떠올려.",
        "explanation": "부피비는 닮음비의 세제곱이야. 닮음비 1:2 → 부피비 1:2의 세제곱 = 1:8. 그래서 45×8 = 360cm³. 조심할 함정: 닮음비를 제곱해서 4배(180)나, 그대로 2배(90)로 계산하면 안 돼. 길이는 가로·세로·높이 세 방향 모두 2배라 8배가 되는 거야.",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "type": "mcq",
        "question": "두 정육면체의 부피비가 1:27이다. 두 정육면체의 닮음비(한 변의 길이 비)는?",
        "choices": [
          "1:3",
          "1:9",
          "1:27",
          "1:81"
        ],
        "answer": "1:3",
        "hint": "세제곱해서 27이 되는 수는? 2×2×2, 3×3×3 중 27이 되는 쪽을 찾아봐.",
        "explanation": "부피비 = 닮음비의 세제곱이니까, 거꾸로 세제곱근을 구해. 27 = 3×3×3 → 닮음비 1:3. 함정: 부피비를 그대로 닮음비로 보거나(1:27), 9배로 착각(1:9)하면 안 돼. 세제곱해서 27이 되는 수가 3이라는 걸 찾는 거야.",
        "개념키": "math.similarity.volume_cube"
      }
    ],
    "book_diagram_url": "./diagrams/book/2026-08-14_cycle_2.jpg",
    "book_diagram_source": "출처: 최소한의 수학지식(EBSMath)",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "한 밑면의 둘레가 12cm인 원기둥을 펼쳐 옆면 전개도(직사각형)를 만들었다. 이 직사각형의 가로의 길이는 몇 cm인가?",
        "choices": [
          "12cm",
          "6cm",
          "24cm",
          "3cm"
        ],
        "answer": "12cm",
        "explanation": "원기둥 옆면 전개도에서 직사각형의 가로의 길이는 밑면의 둘레와 같으므로 12cm이다. 6cm는 둘레의 절반이라 오답. 24cm는 둘레의 2배라 오답. 3cm는 근거 없는 값이라 오답.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "원기둥·원뿔·구"
      },
      {
        "type": "mcq",
        "question": "가로와 세로의 비가 5 : 3인 직사각형의 둘레가 32cm입니다. 이 직사각형의 가로는 몇 cm입니까?",
        "choices": [
          "10cm",
          "6cm",
          "20cm",
          "16cm"
        ],
        "answer": "10cm",
        "explanation": "둘레=2×(가로+세로)=32이므로 가로+세로=16cm. 이를 5 : 3으로 나누면 가로는 16×(5/8)=10cm입니다. '6cm'는 세로, '16cm'는 가로+세로의 합, '20cm'는 둘레의 절반 이상으로 틀립니다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "비례식과 비례배분"
      },
      {
        "type": "mcq",
        "question": "8.4 ￦를 4로 나눈 몼은 얼마일까요? (8.4 ÷ 4)",
        "choices": [
          "1.1",
          "2.1",
          "2.4",
          "21"
        ],
        "answer": "2.1",
        "explanation": "84 ÷ 4 = 21이고, 8.4는 84의 1/10이므로 몼도 1/10인 2.1입니다. 1.1은 계산 오류, 2.4는 숨자 바꿈 오류, 21은 소수점 위치를 틀린 값입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "소수의 나눗셈"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "영어",
    "역할": "서브",
    "수능출처": "Grammar Joy 2·3 주어-동사 수 일치 변형",
    "unit": "주어-동사 수 일치 (단수 -s / 복수 무-s)",
    "통합풀이법": "한 명·한 마리 + 현재면 동사에 -s, 여럿이면 -s 없음.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것을 고르세요. My dog Coco ___ to the door when I come home. (Coco는 강아지 한 마리, 지금 늘 그렇다는 뜻)",
        "choices": [
          "run",
          "runs",
          "running",
          "ran"
        ],
        "answer": "runs",
        "hint": "주어가 한 마리(He/She/It 자리)이고 지금 늘 하는 일이면 동사 끝에 무엇이 붙지?",
        "explanation": "주어 Coco는 3인칭 단수(한 마리, I·you가 아님)이고 현재 늘 하는 일이라 동사에 -s를 붙여 runs가 돼. 함정: 그냥 run(원형), ran(과거)을 고르면 안 돼. 한 마리 + 지금·늘이면 동사 끝에 -s. run→runs, walk→walks처럼.",
        "개념키": "en.agreement.subject_verb"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것을 고르세요. The two cats ___ on the sofa every afternoon. (cats = 고양이 두 마리)",
        "choices": [
          "sits",
          "sit",
          "sitting",
          "to sit"
        ],
        "answer": "sit",
        "hint": "고양이가 두 마리(복수)야. 복수 주어일 때 동사에 -s를 붙일까, 말까?",
        "explanation": "주어 two cats는 복수(두 마리)라서 동사에 -s를 붙이지 않고 sit 그대로 써. 함정: 단수처럼 sits로 쓰면 틀려. 한 마리면 sits, 두 마리 이상이면 sit. sitting은 be동사가 있어야 쓸 수 있어. 수 일치는 몇 마리인지 먼저 세는 게 시작이야.",
        "개념키": "en.agreement.subject_verb"
      }
    ],
    "챌린지_추가": [
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
      },
      {
        "type": "mcq",
        "question": "다음 빈칸에 알맞은 것은? \"My father plays ___ piano very well.\"",
        "choices": [
          "a",
          "an",
          "the",
          "x (필요 없음)"
        ],
        "answer": "the",
        "explanation": "악기 이름 앞에는 'play the + 악기'로 쓰므로 'the'가 정답이다. 'a'/'an'은 악기 연주 표현에 쓰지 않으므로 틀림. 악기 앞 관사를 빼면 틀림.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 03 관사 (a/an/the)"
      },
      {
        "type": "mcq",
        "question": "다음 중 형용사와 부사의 형태가 같은 단어는?",
        "choices": [
          "slow",
          "quick",
          "fast",
          "careful"
        ],
        "answer": "fast",
        "explanation": "fast는 형용사와 부사 형태가 같다. He is fast(형용사) / He runs fast(부사).",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 2 부사"
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-08-14",
  "week": "2026-W33",
  "weakness_focus": [
    "수능 기출 학습",
    "직육면체의 부피·닮음비와 세제곱 (2026-07-30 오답, 360㎤→810㎤)",
    "직육면체의 부피·닮음비와 부피비 (2026-08-03 오답, 90 cm³→135 cm³)"
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
  "total_plays": 516,
  "total_correct": 394,
  "accuracy": 76,
  "last_date": "2026-08-13",
  "영역별": [
    {
      "subject": "국어",
      "color": "#ff8fc5",
      "progress": 32,
      "current_unit": "듣기·말하기",
      "weak_count": 6,
      "strong_count": 1,
      "recent_accuracy": [
        0.63,
        0.5,
        0.529
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
        0.538
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
        0.5,
        0.6,
        0.6
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
      "recent_accuracy": [],
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
  "level": 41,
  "xp_total": 4040,
  "xp_in_level": 40,
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
      "date": "2026-08-13",
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
  "title": "영어 필사 100일의 기적",
  "book_key": "영어100일",
  "images": [
    "./copywork/today.jpg"
  ],
  "page": 11,
  "total": 100,
  "image": "./copywork/today.jpg",
  "weekday": "금",
  "date": "2026-08-14",
  "flagged": false
},
  revenge: {
  "date": "2026-08-14",
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
        "question": "어떤 야구 선수가 50번 타석에 들어서 안타를 15번 쳤습니다. 이 선수의 타율(타수에 대한 안타의 비율)을 소수로 나타내면 얼마입니까?",
        "choices": [
          "0.15",
          "0.3",
          "0.35",
          "3.3"
        ],
        "answer": "0.3",
        "explanation": "타율 = 안타÷타수 = 15÷50 = 0.3. 오답: 0.15는 15÷100으로 분모를 잘못 본 값, 0.35는 어림이 틀린 값, 3.3은 50÷15로 분자·분모를 뒤바꾼 값입니다.",
        "hint": "비와 비율 — 63일 밀린 간격 복습"
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
        "question": "반지름이 5cm인 구가 있다. 이 구의 지름은 몇 cm인가?",
        "choices": [
          "10cm",
          "5cm",
          "15cm",
          "25cm"
        ],
        "answer": "10cm",
        "explanation": "구의 지름은 반지름의 2배이므로 5×2=10(cm)이다. 5cm는 반지름 그대로라 오답. 15cm는 5×3으로 잘못 곱한 값이라 오답. 25cm는 5×5로 잘못 계산한 값이라 오답.",
        "hint": "닮음과 선분비 — 57일 밀린 간격 복습"
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
        "question": "다음은 빛의 밝기에 따른 식물 잎의 개수를 측정한 표이다. 어두운 곳 화분은 잎이 3장, 밝은 곳 화분은 잎이 9장이었다. 밝은 곳 화분의 잎 개수는 어두운 곳 화분의 잎 개수의 몇 배인가?",
        "choices": [
          "3배",
          "2배",
          "6배",
          "9배"
        ],
        "answer": "3배",
        "explanation": "밝은 곳 9장을 어두운 곳 3장으로 나누면 9 ÷ 3 = 3배이다. 2배는 잘못 나눈 값, 6배는 9 - 3의 차이를 배수로 착각한 값, 9배는 밝은 곳의 잎 개수 자체이므로 모두 오답이다.",
        "hint": "역학적 에너지 보존 — 50일 밀린 간격 복습"
      }
    }
  ]
},
  vocab: {
  "date": "2026-08-14",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "모순되지 않는",
        "애쓰다",
        "셀피, 자기 사진",
        "~을 이루다"
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
        "~을 이루다",
        "정확한",
        "가리다, 감추다",
        "모순되지 않는"
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
        "셀피, 자기 사진",
        "애쓰다"
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
        "~을 이루다",
        "어린 시절",
        "정확한",
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
        "정확한",
        "셀피, 자기 사진",
        "가리다, 감추다",
        "친밀함"
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
        "지역",
        "추상적인",
        "어린 시절"
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
        "모순되지 않는",
        "정확한",
        "지역",
        "셀피, 자기 사진"
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
        "모순되지 않는",
        "~을 이루다",
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
        "지역",
        "~을 이루다",
        "셀피, 자기 사진",
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
        "모순되지 않는",
        "추상적인",
        "정확한",
        "가리다, 감추다"
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
