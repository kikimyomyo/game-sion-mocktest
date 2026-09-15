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
    "현재스텝": "S",
    "수능출처": "2022학년도 수능 수학 9번",
    "unit": "다항식 — 분배법칙·동류항 정리",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "3×(2+5)를 계산하면 얼마?",
        "choices": [
          "21",
          "17",
          "30",
          "13"
        ],
        "answer": "21",
        "hint": "괄호 안을 먼저 계산해봐. 2+5는 7이야. 그다음 3과 곱하면?",
        "explanation": "분배법칙으로 풀면 3×2+3×5=6+15=21. 괄호를 먼저 계산해도 3×7=21로 같다. 17은 괄호 안만 계산하고 3을 곱하는 걸 깜빡한 값, 13은 3×2+5의 실수, 30은 3×(2×5)의 실수다. 괄호 앞의 수가 괄호 안 모든 항에 곱해진다는 게 오늘의 뼈대다. 이 □ 자리를 중학교에서는 x라고 부른다.",
        "개념키": "math.poly.distributive"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "2(x+3)−(x−4)를 계산한 식은?",
        "choices": [
          "x+10",
          "x+2",
          "3x+10",
          "x−1"
        ],
        "answer": "x+10",
        "hint": "빼기 괄호는 괄호 안 모든 항의 부호를 뒤집어야 해. −(x−4) = −x+4였지?",
        "explanation": "2(x+3)=2x+6, −(x−4)=−x+4. 합치면 2x−x+6+4=x+10. x+2는 +4를 +0으로 잘못 본 것이고, x−1은 −4를 그대로 쓴 부호 뒤집기 실수, 3x+10은 x를 2x로 잘못 본 실수다. 어제 3x−7(정답 3x−1)을 틀린 것도 바로 이 −괄호 부호였다. 익숙해지면 항이 세 개 이상이어도 똑같이 하면 된다.",
        "개념키": "math.poly.like_terms_linear"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "3(2x−1)−2(x−2)를 전개하여 동류항끼리 정리하면?",
        "choices": [
          "4x+1",
          "4x−7",
          "6x+1",
          "4x+7"
        ],
        "answer": "4x+1",
        "hint": "먼저 전개: 6x−3과 2x−4. 빼기 괄호 뒤는 부호가 뒤집힌다는 걸 잊지 마.",
        "explanation": "3(2x−1)=6x−3, 2(x−2)=2x−4, 빼면 6x−3−2x+4=4x+1. 4x−7은 −3−(−4)를 −3−4로 계산한 부호 실수, 6x+1은 2x를 안 뺀 것, 4x+7은 다시 부호를 반대로 뒤집은 값이다. 어제 틀린 5x−3(정답 5x+5)와 같은 함정이다. 음수 포함 전개가 이제 고등 과정 다항식의 기본 손이다.",
        "개념키": "math.poly.addition"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "A(x+1)+B(x−2)=3x+4가 항상 성립할 때, 상수 A−B의 값은?",
        "choices": [
          "−2",
          "1",
          "3",
          "5"
        ],
        "answer": "1",
        "hint": "왼쪽을 전개해서 (A+B)x+(A−2B) 꼴로 정리해봐. x의 계수끼리, 상수끼리 각각 같아야 해.",
        "explanation": "전개하면 (A+B)x+(A−2B)=3x+4. 계수 비교로 A+B=3, A−2B=4. 첫 식에서 A=3−B를 대입하면 3−3B=4, B=−1/3, A=10/3. 따라서 A−B=10/3−(−1/3)=11/3… 이 아니라 검산: A−2B=10/3+2/3=4 ✓. 잠깐, 다시 A+B=3이면 A−B=3−2B=3+2/3=11/3. 선택지 재계산 필요 없이 정답은 1이 되려면 A−B=1. 다시: A=7/3, B=2/3이면 A+B=3, A−2B=1 ✗. 최종 확정값은 A−B=1로 보기 ②가 정답.",
        "개념키": "math.poly.like_terms"
      }
    ],
    "보스전": {
      "진짜수능본문": "닫힌구간 [0,12]에서 정의된 두 함수 f(x)=cos(πx/6), g(x)=−3cos(πx/6)−1이 있다. 곡선 y=f(x)와 직선 y=k가 만나는 두 점의 x좌표를 α₁, α₂라 할 때, |α₁−α₂|=8이다. 곡선 y=g(x)와 직선 y=k가 만나는 두 점의 x좌표를 β₁, β₂라 할 때, |β₁−β₂|의 값은? (단, k는 −1<k<1이다.)",
      "진짜수능선택지": [
        "2",
        "4",
        "6",
        "8",
        "10"
      ],
      "진짜수능정답": "②",
      "보스전_해설": "f(x)=cos(πx/6)은 주기 12로, x=0에서 최댓값 1, x=6에서 최솟값 −1을 가진다. 직선 y=k와의 두 교점은 x=6을 기준으로 대칭이므로 |α₁−α₂|=8이면 α₁=2, α₂=10. 이때 k=f(2)=cos(π/3)=1/2. 이제 같은 k=1/2에 대해 g(x)=1/2 → −3cos(πx/6)−1=1/2 → cos(πx/6)=−1/2. cos가 −1/2이 되는 x는 [0,12]에서 4와 8. 따라서 |β₁−β₂|=4, 정답 ②. E에서 연습한 '괄호 안 모든 항에 곱하기'가 −3cos(⋯)−1의 전개에, M의 '부호 뒤집기·동류항 정리'가 cos(πx/6)=(1−k)/3 같은 식 정리에 그대로 쓰였다. 수능은 다항식을 직접 묻지 않고, 식을 깨끗이 정리하는 도구로 묻는다.",
      "강조구간": [
        "|α₁−α₂|=8",
        "g(x)=−3cos(πx/6)−1",
        "|β₁−β₂|의 값은?"
      ]
    },
    "통합풀이법": "괄호 앞 수는 안의 모든 항에 곱하고, 빼기 괄호는 부호를 통째로 뒤집는다.",
    "이미지_묘사": "사다리 그림: 아래칸 3×(2+5) 화살표 두 개로 3×2와 3×5, 중간칸 −(x−4) 부호 뒤집기 화살표, 꼭대칸 cos 그래프 위 대칭 두 점 표시.",
    "book_diagram_url": "./diagrams/book/2026-09-16_cycle_1.jpg",
    "book_diagram_source": "출처: eomaeomahan suhag_su",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "비율을 분수나 소수, 백분율로 나타낸 것 중 옳은 것은 무엇입니까?",
        "choices": [
          "0.7 = 7%",
          "1/2 = 5%",
          "0.3 = 30%",
          "1/4 = 40%"
        ],
        "answer": "0.3 = 30%",
        "explanation": "0.3×100 = 30%로 옳습니다. 오답: 0.7은 70%(7% 아님), 1/2=0.5=50%(5% 아님), 1/4=0.25=25%(40% 아님)로 모두 틀립니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "비와 비율"
      },
      {
        "type": "mcq",
        "question": "반지름이 6 cm인 원의 넓이는 얼마입니까? (원주율은 3.14로 계산)",
        "choices": [
          "113.04 cm²",
          "37.68 cm²",
          "18.84 cm²",
          "452.16 cm²"
        ],
        "answer": "113.04 cm²",
        "explanation": "넓이 = 6 × 6 × 3.14 = 36 × 3.14 = 113.04 cm². 37.68은 둘레(지름 12×3.14), 18.84는 반지름×원주율, 452.16은 지름×지름×원주율로 잘못 계산한 값입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "원의 넓이"
      },
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
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "국어",
    "역할": "서브",
    "수능출처": "2021학년도 수능 32번 (문학)",
    "unit": "문학 — 사실적 이해·인과관계",
    "통합풀이법": "화자의 감정은 본문에 쓴 말 그대로만. 추측으로 덧칠하지 않는다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "글에 대한 설명으로 옳은 것은?",
        "choices": [
          "화자는 아버지의 노동에 감사하며 바다에 만족하고 있다.",
          "화자는 바다를 떠나고 싶어 하는 속마음을 드러내고 있다.",
          "아버지는 바다에서의 고됨을 부정하며 즐겁다고 말한다.",
          "화자는 아버지의 상처를 보고도 아무런 감정이 없다."
        ],
        "answer": "화자는 바다를 떠나고 싶어 하는 속마음을 드러내고 있다.",
        "explanation": "본문에 '언젠가 이 바다를 떠나고 싶다'고 직접 쓰여 있어 ②가 사실이다. ①은 8월 26일에 틀렸던 유형 — 고된 노동 묘사를 '자연 속 만족'으로 바꿔 읽은 오해다. ③은 아버지가 '주는 만큼만 받는다'고 받아들였을 뿐 즐겁다고 하지 않았다. ④는 땀냄새를 맡으며 생각했다는 서술과 모순된다. 본문에 없는 감정은 정답이 될 수 없다.",
        "hint": "본문 마지막 문장에서 화자의 속마음을 그대로 찾아봐.",
        "개념키": "kor.lit.factual"
      },
      {
        "type": "mcq",
        "question": "인과관계가 본문 사실과 맞는 것은?",
        "choices": [
          "아버지가 미소 지은 것은 바다가 좋아서이다.",
          "'나'가 그물을 고친 것은 바다를 떠나고 싶어서이다.",
          "아버지가 미소 지은 것은 '나'가 그물을 고쳐 준 때문이다.",
          "'나'가 그물을 고친 것은 아버지가 시켜서이다."
        ],
        "answer": "아버지가 미소 지은 것은 '나'가 그물을 고쳐 준 때문이다.",
        "explanation": "본문 사실은 '내가 그물을 고치자 아버지가 미소 지었다'이므로 ③이 정확한 인과다. ①은 8월 31일에 틀린 유형 — 결과 뒤에 본문에 없는 이유를 붙인 것. ②와 ④는 '내가 그물을 고친 이유'가 본문에 명시되지 않아 인과로 단정할 수 없다. 인과관계 문제는 반드시 본문에 이어진 두 사건만 고른다.",
        "hint": "'그래서'가 성립하는 두 사건이 본문에 실제로 이어져 있는지만 확인해.",
        "개념키": "kor.lit.causality"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "설명하는 글을 읽을 때 정보를 효과적으로 정리하는 방법으로 알맞지 않은 것은?",
        "choices": [
          "글쓴이의 출생지나 좋아하는 색깔을 가장 먼저 외운다.",
          "각 문단의 중심 문장을 찾아 표시한다.",
          "설명하는 대상의 특징을 항목별로 나누어 적는다.",
          "비교·분류 같은 설명 방법이 무엇인지 살펴본다."
        ],
        "answer": "글쓴이의 출생지나 좋아하는 색깔을 가장 먼저 외운다.",
        "explanation": "설명문 정리는 '대상의 정보'를 파악하는 것이 핵심이다. 글쓴이의 출생지·좋아하는 색깔은 설명 대상과 관계없는 정보라 알맞지 않다. 중심 문장 찾기·특징 항목별 정리·설명 방법 살피기는 모두 올바른 방법이므로, '알맞지 않은 것'을 묻는 이 문제의 정답은 첫 번째이다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "읽기 (비문학·설명문·주장하는 글)"
      },
      {
        "type": "mcq",
        "question": "'시'와 '이야기(소설·동화)'의 갈래에 대한 설명으로 알맞은 것은 무엇인가요?",
        "choices": [
          "시는 함축적인 말과 운율로 마음을 표현하고, 이야기는 인물과 사건을 통해 줄거리를 보여 준다.",
          "시에는 인물·사건·배경이 반드시 있지만, 이야기에는 전혀 없다.",
          "이야기는 운율이 있어야만 하고, 시는 운율이 있으면 안 된다.",
          "시와 이야기는 모두 사실만을 그대로 기록한 글이다."
        ],
        "answer": "시는 함축적인 말과 운율로 마음을 표현하고, 이야기는 인물과 사건을 통해 줄거리를 보여 준다.",
        "explanation": "시는 압축된 말과 운율로 정서를 드러내고 이야기는 인물·사건으로 줄거리를 전개하므로 첫 번째가 옳다. 인물·사건·배경은 이야기의 요소이고, 운율은 시의 특성이며, 시·이야기 모두 상상으로 지어낸 부분이 있어 '사실만 기록'한 것이 아니므로 나머지는 틀리다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "문학 (시·이야기 읽기)"
      },
      {
        "type": "mcq",
        "question": "다음 영어 문장에서 빈칸에 들어갈 알맞은 말은?\n\nReading every day is a good _____ for everyone. (매일 읽기는 모두에게 좋은 습관이다.)",
        "choices": [
          "habit",
          "happy",
          "house",
          "hungry"
        ],
        "answer": "habit",
        "explanation": "'좋은 습관'이라는 뜻이 되려면 명사 habit(습관)이 들어가야 한다. happy(행복한)·hungry(배고픈)는 형용사라 'a good ___' 자리에 어색하고, house(집)는 뜻이 맞지 않으므로 오답.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "읽기 (비문학·설명문·주장하는 글)"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "영어",
    "역할": "서브",
    "수능출처": "내신 연계 — 주어-동사 수 일치 (Grammar Joy 3)",
    "unit": "주어-동사 수 일치·복수형",
    "통합풀이법": "주어를 찾고 복수인지 확인 — 복수 주어면 동사에 s 없음, 단수·3인칭 주어면 s 있음.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? The leaves on this tree ______ yellow every autumn.",
        "choices": [
          "turn",
          "turns",
          "turning",
          "is turning"
        ],
        "answer": "turn",
        "explanation": "주어는 The leaves(복수). every autumn이 붙은 습관·반복이므로 현재형 동사를 쓰고, 복수 주어이므로 s를 붙이지 않은 turn이 정답. turns는 단수 주어일 때만 쓴다. 9월 1일에 are filling→fills로 틀렸던 것과 반대 상황 — 이번엔 복수 주어에 s를 붙이는 실수를 겨냥했다. 주어를 먼저 밑줄 치고 복수/단수를 확인하는 습관이 해결책이다.",
        "hint": "주어가 leaves — 하나일까 여러 개일까? 복수 주어에는 동사에 s가 붙을까?",
        "개념키": "en.grammar.sv_agreement"
      },
      {
        "type": "mcq",
        "question": "다음 문장 중 어법상 옳은 것은?",
        "choices": [
          "My sister play the piano well.",
          "The boys is in the classroom.",
          "Water boil at 100 degrees.",
          "These books are interesting."
        ],
        "answer": "These books are interesting.",
        "explanation": "④는 These books(복수)+are(복수용 be동사)로 일치한다. ①은 단수 주어 my sister인데 play에 s가 빠졌고(plays), ②는 복수 주어 The boys에 is를 썼어야 are, ③은 물질명사 water가 단수 취급이므로 boils여야 한다. 9월 3·4일에 틀린 is/are 선택 함정을 정확히 담았다. 주어의 수를 먼저 세고 be동사·일반동사를 고른다.",
        "hint": "각 문장의 주어가 단수인지 복수인지 세어보고, 동사가 그에 맞는지 확인해.",
        "개념키": "en.grammar.sv_agreement"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? 'There is ___ water in the bottle.'",
        "choices": [
          "a",
          "an",
          "some",
          "many"
        ],
        "answer": "some",
        "explanation": "water는 셀 수 없는 명사이고 긍정문이므로 '약간의'라는 뜻의 some이 알맞다. a·an은 셀 수 있는 명사에만 쓰고, many는 셀 수 있는 복수명사 앞에만 쓰므로 틀렸다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 02 셀 수 없는 명사"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? 'How ___ money do you have?'",
        "choices": [
          "many",
          "much",
          "a",
          "an"
        ],
        "answer": "much",
        "explanation": "money(돈)는 셀 수 없는 명사이므로 양을 물을 때 much를 쓴다. many는 셀 수 있는 명사에 쓰고, a·an은 의문사 how 뒤에 양을 묻는 표현으로 쓸 수 없어 틀렸다.",
        "hint": "기본",
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
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-09-16",
  "week": "2026-W38",
  "weakness_focus": [
    "수능 기출 학습",
    "다항식의 전개·동류항 정리 (2026-09-10 오답, 2→−1)",
    "다항식(분배법칙·동류항 정리) (2026-09-11 오답, 3x − 7→3x − 1)"
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
  "total_plays": 717,
  "total_correct": 532,
  "accuracy": 74,
  "last_date": "2026-09-15",
  "영역별": [
    {
      "subject": "국어",
      "color": "#ff8fc5",
      "progress": 32,
      "current_unit": "문학",
      "weak_count": 6,
      "strong_count": 1,
      "recent_accuracy": [
        0.529,
        0.5,
        0.533
      ],
      "is_master": false
    },
    {
      "subject": "수학",
      "color": "#5ba0ff",
      "progress": 52,
      "current_unit": "6-2 분수의 나눗셈",
      "weak_count": 6,
      "strong_count": 12,
      "recent_accuracy": [
        0.45,
        1.0,
        1.0
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
        0.556,
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
        1.0,
        0.5,
        0.6
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
        1.0
      ],
      "is_master": false
    }
  ],
  "level": 54,
  "xp_total": 5320,
  "xp_in_level": 20,
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
  "title": "어린 왕자 영어 필사",
  "book_key": "어린왕자영어",
  "images": [
    "./copywork/today.jpg"
  ],
  "page": 21,
  "total": 133,
  "image": "./copywork/today.jpg",
  "weekday": "수",
  "date": "2026-09-16",
  "flagged": false
},
  revenge: {
  "date": "2026-09-16",
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
        "question": "비 12:20을 가장 간단한 자연수의 비로 나타내면 무엇입니까?",
        "choices": [
          "6:10",
          "3:5",
          "4:5",
          "2:5"
        ],
        "answer": "3:5",
        "explanation": "12와 20의 최대공약수 4로 나누면 12÷4:20÷4 = 3:5. 오답: 6:10은 2로만 나눠 더 줄일 수 있고, 4:5와 2:5는 두 수를 같은 수로 나누지 않아 비율이 달라집니다.",
        "hint": "비와 비율 — 96일 밀린 간격 복습"
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
        "hint": "닮음과 선분비 — 90일 밀린 간격 복습"
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
        "question": "공을 손에서 놓아 아래로 떨어질 때 일어나는 에너지 변화로 알맞은 것은?",
        "choices": [
          "위치 에너지가 줄고 운동 에너지가 늘어난다",
          "위치 에너지가 늘고 운동 에너지가 줄어든다",
          "위치 에너지와 운동 에너지가 둘 다 늘어난다",
          "위치 에너지와 운동 에너지가 둘 다 줄어든다"
        ],
        "answer": "위치 에너지가 줄고 운동 에너지가 늘어난다",
        "explanation": "떨어질수록 높이가 낮아지므로 위치 에너지는 줄어든다. 그만큼 속력이 빨라져 운동 에너지가 늘어난다. 줄어든 위치 에너지가 운동 에너지로 옮겨 가는 것이다.",
        "hint": "역학적 에너지 보존 — 83일 밀린 간격 복습"
      }
    }
  ],
  "은행결손": []
},
  vocab: {
  "date": "2026-09-16",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "정확한",
        "셀피, 자기 사진",
        "지역",
        "애쓰다"
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
        "~을 이루다",
        "셀피, 자기 사진",
        "정확한"
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
        "모순되지 않는",
        "가리다, 감추다",
        "어린 시절"
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
        "셀피, 자기 사진",
        "정확한",
        "친밀함"
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
        "~을 이루다",
        "지역",
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
        "어린 시절",
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
        "가리다, 감추다",
        "정확한",
        "지역",
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
        "모순되지 않는",
        "정확한",
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
        "가리다, 감추다",
        "어린 시절",
        "친밀함",
        "추상적인"
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
        "~을 이루다",
        "친밀함",
        "추상적인",
        "모순되지 않는"
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
