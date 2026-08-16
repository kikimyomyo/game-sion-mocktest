window.GAME_CONFIG = {
  game: "sion-mocktest",
  title: "시온이 모의시험",
  sheet_tab: "sion-mocktest",
  endpoint: "https://script.google.com/macros/s/AKfycbz5mX9EPnOSmSs6p0YFiNTpqH810emc3ArEKnfusCYXrjH90OcIapwgYjnyP9A_F5ZYOQ/exec",
  problems: [
  {
    "id": 1,
    "cycle": 1,
    "subject": "국어",
    "역할": "서브",
    "수능출처": "2023학년도 수능 국어 3번·2025학년도 수능 국어 12번 약점 변형",
    "unit": "듣기·말하기",
    "통합풀이법": "상대의 근거를 확인하고 대화 전후에 달라진 생각을 비교한다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "민서: 나는 고양이가 창가에 앉는 까닭을 햇빛이 좋아서라고 생각했어. 시온: 그런데 둘째 문단은 몸의 열을 유지하려는 행동이라고 설명해. 밤에는 따뜻한 전등 아래에도 앉는대. 민서: 그 근거를 들으니 내 생각에 체온 조절이라는 까닭을 더해야겠네. 이 대화에서 민서의 생각이 달라진 과정으로 가장 적절한 것은?",
        "choices": [
          "친구의 근거를 듣고 처음 해석을 보완했다.",
          "친구의 의견이 달라서 글의 내용을 포기했다.",
          "대화 전부터 체온 조절만이 유일한 까닭이라고 확정했다.",
          "친구의 근거와 상관없이 처음 생각을 그대로 유지했다."
        ],
        "answer": "친구의 근거를 듣고 처음 해석을 보완했다.",
        "hint": "민서가 대화하기 전에 한 생각과 친구의 근거를 들은 뒤에 한 말을 나란히 놓고 달라진 부분을 찾아봐.",
        "explanation": "민서는 처음에는 햇빛을 까닭으로 생각했지만, 시온이 글의 근거를 알려 주자 체온 조절이라는 해석을 더했다. 따라서 다른 사람의 근거를 듣고 처음 생각을 보완한 ①이 맞다. 생각이 바뀌거나 넓어지는 것은 글의 뜻이 사라지는 일이 아니라 이해가 깊어지는 과정이다.",
        "개념키": "kor.writing"
      },
      {
        "type": "mcq",
        "question": "도윤: 강아지 사료는 자주 바꿀수록 건강에 좋다고 생각해. 하늘: 수의사 선생님은 갑자기 자주 바꾸면 배탈이 날 수 있고, 건강한 몸무게에는 정해진 시간과 양의 식사가 중요하다고 했어. 하늘의 말을 들은 도윤의 반응으로 가장 적절한 것은?",
        "choices": [
          "정해진 시간과 양으로 먹이고, 사료를 바꿀 때는 천천히 바꿔야겠어.",
          "끼니마다 다른 사료를 주면 영양이 저절로 균형을 이루겠어.",
          "몸무게를 유지하려면 배고파도 식사를 자주 거르는 편이 좋겠어.",
          "강아지가 좋아하는 맛만 고르면 먹이는 시간과 양은 중요하지 않겠어."
        ],
        "answer": "정해진 시간과 양으로 먹이고, 사료를 바꿀 때는 천천히 바꿔야겠어.",
        "hint": "하늘이 말한 두 근거를 모두 포함해야 해. 사료를 바꾸는 속도와 건강한 몸무게를 위한 식사 습관을 함께 확인해.",
        "explanation": "하늘의 말에는 사료를 갑자기 자주 바꾸지 말라는 내용과 정해진 시간·양으로 먹이라는 내용이 함께 있다. 두 근거를 모두 반영한 ①이 맞다. ②와 ④는 규칙적인 식사의 중요성을 지웠고, ③은 규칙적으로 먹이라는 말과 반대다. 들은 내용을 빠뜨리지 않는 것이 핵심이다.",
        "개념키": "kor.reading.factcheck"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "한 문단을 이루는 글에서, 그 문단이 말하고자 하는 중심 내용을 한 문장으로 나타낸 것을 무엇이라고 하나요?",
        "choices": [
          "중심 문장",
          "뒷받침 문장",
          "이어 주는 말",
          "마무리 인사"
        ],
        "answer": "중심 문장",
        "explanation": "문단에서 가장 중요한 내용을 한 문장으로 나타낸 것이 '중심 문장'이다. '뒷받침 문장'은 중심 문장을 자세히 설명·예시로 받쳐 주는 문장이라 틀리고, '이어 주는 말'은 문장과 문장을 연결하는 접속어라 틀리며, '마무리 인사'는 편지에 쓰는 표현이라 글의 짜임 용어가 아니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "쓰기 (문단·글의 짜임)"
      },
      {
        "type": "mcq",
        "question": "다음 문장에서 사실(객관적 사실)에 해당하는 것은?",
        "choices": [
          "지구는 태양 주위를 한 바퀴 도는 데 약 365일이 걸린다.",
          "겨울은 여름보다 훨씬 더 좋은 계절이다.",
          "축구는 세상에서 가장 재미있는 운동이다.",
          "이 책은 누구나 꼭 읽어야 하는 책이다."
        ],
        "answer": "지구는 태양 주위를 한 바퀴 도는 데 약 365일이 걸린다.",
        "explanation": "사실은 누구나 확인할 수 있고 참·거짓을 가릴 수 있는 내용이다. '지구가 365일에 한 바퀴'는 확인 가능한 사실. 나머지 '더 좋은'·'가장 재미있는'·'꼭 읽어야'는 글쓴이의 생각·평가가 들어간 의견이므로 오답.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "읽기 (비문학·설명문·주장하는 글)"
      },
      {
        "type": "mcq",
        "question": "다음 동시를 읽고 글쓴이가 전하려는 중심 생각(주제)으로 가장 알맞은 것은 무엇인가요?  '비 온 뒤 골목길 / 작은 풀 한 포기 / 시멘트 틈에서도 / 푸르게 일어섰다'",
        "choices": [
          "어려운 환경에서도 굽히지 않는 생명의 힘",
          "비가 오면 우산을 꼭 챙겨야 한다",
          "골목길은 청소를 자주 해야 한다",
          "시멘트로 길을 포장하면 편리하다"
        ],
        "answer": "어려운 환경에서도 굽히지 않는 생명의 힘",
        "explanation": "시멘트 틈처럼 어려운 곳에서도 풀이 '푸르게 일어섰다'고 했으므로 주제는 굽히지 않는 생명의 힘이다. 우산·청소·포장 이야기는 시의 표면 소재일 뿐 글쓴이가 전하려는 중심 생각이 아니므로 틀리다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "문학 (시·이야기 읽기)"
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "수학",
    "역할": "메인",
    "계보id": "L260817-math-simvol",
    "현재스텝": "E",
    "수능출처": "2021학년도 수능 수학 14번",
    "unit": "닮음비·부피비·반복비",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "서로 닮은 두 직육면체 모양의 동물 집이 있다. 작은 집의 높이는 6cm, 너비는 4cm이고 큰 집의 높이는 9cm이다. 큰 집의 너비는 얼마인가?",
        "choices": [
          "5cm",
          "6cm",
          "8cm",
          "9cm"
        ],
        "answer": "6cm",
        "hint": "닮은 도형에서는 대응하는 길이가 모두 같은 배로 변한다. 먼저 큰 집의 높이가 작은 집 높이의 몇 배인지 구해봐.",
        "explanation": "큰 집의 높이는 작은 집의 9÷6=3/2배다. 닮은 입체의 대응하는 길이는 모두 같은 배로 변하므로 너비도 4×3/2=6cm가 된다. 8cm는 높이 차이 3을 더한 값, 9cm는 높이를 그대로 옮긴 값이다. 어떤 변끼리 대응하는지 찾고 같은 비를 적용하면 된다.",
        "개념키": "math.similarity.basic"
      },
      {
        "스텝": "E",
        "type": "mcq",
        "question": "서로 닮은 작은 정육면체와 큰 정육면체의 모서리 길이의 비가 1:2이다. 작은 정육면체의 부피가 20cm³일 때 큰 정육면체의 부피는 얼마인가?",
        "choices": [
          "40cm³",
          "80cm³",
          "160cm³",
          "320cm³"
        ],
        "answer": "160cm³",
        "hint": "모서리가 2배가 되면 가로·세로·높이가 모두 2배가 된다. 세 방향에서 늘어나는 배수를 차례로 곱해봐.",
        "explanation": "모서리비가 1:2이면 가로·세로·높이가 각각 2배이므로 부피는 2×2×2=8배가 된다. 따라서 큰 정육면체의 부피는 20×8=160cm³다. 80cm³는 2²만 계산한 제곱 함정이고, 40cm³는 길이처럼 2배만 한 값이다. 부피에는 세 방향이 있다는 점을 기억하자.",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "서로 닮은 두 입체도형 A, B의 닮음비가 2:3이다. A의 부피가 32cm³일 때 B의 부피는 얼마인가?",
        "choices": [
          "48cm³",
          "72cm³",
          "108cm³",
          "243cm³"
        ],
        "answer": "108cm³",
        "hint": "닮음비 2:3을 먼저 부피비로 바꿔야 한다. 2와 3을 각각 세 번 곱한 뒤 32가 몇 몫에 해당하는지 살펴봐.",
        "explanation": "닮음비 2:3의 세제곱을 취하면 부피비는 8:27이다. A의 부피 32cm³가 8몫이므로 한 몫은 32÷8=4cm³, B는 27몫이어서 4×27=108cm³다. 48은 길이비만 적용한 값, 72는 제곱비를 적용한 값이다. 비의 한 몫을 구하면 계산이 안정된다.",
        "개념키": "math.ratio.basic"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "서로 닮은 고양이 모형을 무한히 늘어놓았다. 첫 모형의 부피는 14cm³이고, 다음 모형의 모든 길이는 바로 앞 모형의 길이의 1/2이다. 모든 모형의 부피의 합은 얼마인가?",
        "choices": [
          "14cm³",
          "16cm³",
          "56/3cm³",
          "28cm³"
        ],
        "answer": "16cm³",
        "hint": "길이비가 1/2이면 부피비는 그 세제곱이다. 첫 부피와 공비를 찾은 뒤 반복되는 등비급수의 합을 구해봐.",
        "explanation": "다음 모형의 길이비가 1/2이므로 부피비는 (1/2)³=1/8이다. 부피들은 14, 14/8, 14/8², …인 등비급수를 이룬다. 합은 14÷(1-1/8)=14×8/7=16cm³다. 28은 길이비 1/2를 그대로 공비로 쓴 값이고, 56/3은 제곱비 1/4를 쓴 함정이다.",
        "개념키": "math.similarity.volume_cube"
      }
    ],
    "보스전": {
      "진짜수능본문": "그림과 같이 AB_1=2, AD_1=4인 직사각형 AB_1C_1D_1이 있다. 선분 AD_1을 3:1로 내분하는 점을 E_1이라 하고, 직사각형 AB_1C_1D_1의 내부에 점 F_1을 F_1E_1=F_1C_1, ∠E_1F_1C_1=π/2가 되도록 잡고 삼각형 E_1F_1C_1을 그린다. 사각형 E_1F_1C_1D_1을 색칠하여 얻은 그림을 R_1이라 하자. 그림 R_1에서 선분 AB_1 위의 점 B_2, 선분 E_1F_1 위의 점 C_2, 선분 AE_1 위의 점 D_2와 점 A를 꼭짓점으로 하고 AB_2:AD_2=1:2인 직사각형 AB_2C_2D_2를 그린다. 그림 R_1을 얻은 것과 같은 방법으로 직사각형 AB_2C_2D_2에 삼각형 E_2F_2C_2를 그리고 사각형 E_2F_2C_2D_2를 색칠하여 얻은 그림을 R_2라 하자. 이와 같은 과정을 계속하여 n번째 얻은 그림 R_n에 색칠되어 있는 부분의 넓이를 S_n이라 할 때, lim_{n→∞} S_n의 값은? [자료: 직사각형 안에 닮은 직사각형과 직각이등변삼각형 및 색칠된 사각형들이 반복되는 그림]",
      "진짜수능선택지": [
        "① 441/103",
        "② 441/109",
        "③ 441/115",
        "④ 441/121",
        "⑤ 441/127"
      ],
      "진짜수능정답": "③",
      "보스전_해설": "A=(0,0), B_1=(2,0), D_1=(0,4)로 두면 E_1=(0,3)이다. 주어진 길이와 직각 조건에서 F_1=(3/2,5/2)이고, 선분 E_1F_1의 식은 y=3-x/3이다. AB_2=x, AD_2=2x라 두면 C_2=(x,2x)가 이 선분 위에 있으므로 2x=3-x/3, x=9/7이다. 따라서 다음 직사각형의 닮음비는 (9/7):2=9:14이다. 첫 색칠 넓이는 9/4이고 다음 색칠 넓이비는 (9/14)²=81/196이다. H에서 반복되는 양을 더한 것처럼 (9/4)÷(1-81/196)=441/115이므로 정답은 ③이다. 부피는 세제곱, 넓이는 제곱이라는 차이를 구분해야 한다.",
      "강조구간": [
        "AB_2:AD_2=1:2",
        "이와 같은 과정을 계속하여",
        "색칠되어 있는 부분의 넓이를 S_n"
      ]
    },
    "통합풀이법": "대응 길이의 비를 먼저 구하고, 넓이는 제곱·부피는 세제곱한 뒤 반복이면 등비로 합한다.",
    "이미지_묘사": "높이 6·9, 너비 4·6인 닮은 동물 집 두 개와 모서리비 1:2가 부피 블록 1:8로 커지는 모습을 연결한 도식.",
    "book_diagram_url": "./diagrams/book/2026-08-17_cycle_2.jpg",
    "book_diagram_source": "출처: 최소한의 수학지식(EBSMath)",
    "챌린지_추가": [
      {
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
        "hint": "중",
        "_bank": "llm2",
        "_unit": "비와 비율 응용·기준량 식별"
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
        "question": "비 6:8과 비율이 같은 비가 9:□일 때, □에 알맞은 수는 얼마입니까?",
        "choices": [
          "10",
          "11",
          "12",
          "14"
        ],
        "answer": "12",
        "explanation": "6:8을 간단히 하면 3:4이고, 9는 3의 3배이므로 □ = 4×3 = 12. 검산: 9:12를 간단히 하면 3:4로 같습니다. 오답: 10·11·14는 9:□를 3:4로 줄일 수 없어 비율이 달라집니다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "비와 비율"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "영어",
    "역할": "서브",
    "수능출처": "2025학년도 수능 영어 40번 [빈칸·요약] 초6 변형",
    "unit": "Grammar Joy 3 전체·주어-동사 수 일치",
    "통합풀이법": "동사 바로 앞말이 아니라 문장의 진짜 주어가 단수인지 복수인지 먼저 찾는다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "사람들은 흔히 합성 성분이 해롭다고 가정한다. People often assume that synthetic ingredients ___ harmful.",
        "choices": [
          "is",
          "are",
          "being",
          "be"
        ],
        "answer": "are",
        "hint": "that 뒤에서 주어는 synthetic ingredients다. ingredient 뒤의 -s를 보고 한 개인지 여러 개인지 판단해봐.",
        "explanation": "People often assume that S+V에서 that절 전체가 assume의 목적어다. that절의 주어 synthetic ingredients는 복수이므로 be동사도 복수형 are가 맞다. is는 단수 주어에 쓰며 being과 be는 이 문장에서 서술어 역할을 완성하지 못한다. synthetic은 합성의, harmful은 해로운이라는 뜻이다.",
        "개념키": "en.agreement.subject_verb"
      },
      {
        "type": "mcq",
        "question": "천연 성분의 구성은 기후와 토양에 따라 달라진다. The composition of natural ingredients ___ with climate and soil.",
        "choices": [
          "vary",
          "varies",
          "varying",
          "are vary"
        ],
        "answer": "varies",
        "hint": "of natural ingredients는 composition을 꾸미는 말이다. of 앞에 있는 중심 명사가 단수인지 먼저 확인해봐.",
        "explanation": "문장의 진짜 주어는 단수 명사 composition이다. of natural ingredients 속 복수형 ingredients에 끌리면 안 된다. 현재시제의 3인칭 단수 주어이므로 동사는 varies가 맞다. vary는 복수 주어에 쓰고 varying은 혼자 서술어가 될 수 없다. composition은 구성, vary는 달라지다라는 뜻이다.",
        "개념키": "en.agreement.subject_verb"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "셀 수 없는 명사 앞에 붙일 수 없는 것은 무엇인가?",
        "choices": [
          "a",
          "some",
          "much",
          "a lot of"
        ],
        "answer": "a",
        "explanation": "a(an)는 '하나'라는 뜻이라 셀 수 있는 명사 앞에만 쓴다. some(약간의)·much(많은)·a lot of(많은)는 모두 셀 수 없는 명사 앞에 쓸 수 있다. 그래서 a milk(X), some milk(O)가 된다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 02 셀 수 없는 명사"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 말은? \"They ___ not my friends.\"",
        "choices": [
          "are",
          "is",
          "am",
          "do"
        ],
        "answer": "are",
        "explanation": "주어 They는 복수이므로 be동사 are를 쓴다. 'They are not~'이 맞다. is는 단수 he/she/it용, am은 I 전용, do는 일반동사 부정문용이라 모두 틀림.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 06 be동사 부정문/의문문"
      },
      {
        "type": "mcq",
        "question": "다음 빈칸에 알맞은 목적격은?\nI like Tom. I often play with ___.",
        "choices": [
          "him",
          "he",
          "his",
          "himself"
        ],
        "answer": "him",
        "explanation": "전치사 with 뒤에는 목적격이 오고, Tom(남자)을 받으므로 him이 정답이다. he는 주격, his는 소유격, himself는 재귀대명사라서 전치사 뒤 목적격 자리에 맞지 않아 오답이다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 04 인칭대명사·지시대명사"
      }
    ]
  },
  {
    "id": 4,
    "cycle": 4,
    "subject": "통합과학",
    "역할": "서브",
    "수능출처": "2028학년도 수능 통합과학 15번 [자료 해석] 형식 변형",
    "unit": "기록·자료 정리",
    "통합풀이법": "표의 각 열이 뜻하는 양을 확인하고, 두 열 사이의 일정한 관계를 계산한다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "같은 고체 P의 측정 결과가 부피 4cm³일 때 질량 12g, 6cm³일 때 18g, 8cm³일 때 24g이다. 측정 결과의 규칙이 유지될 때 부피가 10cm³인 P의 질량은 얼마인가?",
        "choices": [
          "20g",
          "24g",
          "30g",
          "40g"
        ],
        "answer": "30g",
        "hint": "각 측정에서 질량을 부피로 나누어 값이 같은지 확인해봐. 그 값은 부피 1cm³당 질량을 뜻한다.",
        "explanation": "밀도는 질량÷부피다. 세 측정에서 12÷4, 18÷6, 24÷8은 모두 3g/cm³이므로 P의 밀도는 3g/cm³이다. 따라서 부피 10cm³의 질량은 3×10=30g이다. 20g은 밀도를 2로 잘못 읽은 지난 함정이고, 24g은 마지막 측정값을 그대로 옮긴 값이다.",
        "개념키": "sci.matter.density"
      },
      {
        "type": "mcq",
        "question": "P는 양성자 3개·전자 껍질 2개·맨 바깥 전자 1개, Q는 양성자 11개·전자 껍질 3개·맨 바깥 전자 1개, R은 양성자 10개·전자 껍질 2개·맨 바깥 전자 8개이다. 자료를 해석한 내용으로 옳은 것은?",
        "choices": [
          "P와 Q는 맨 바깥 전자 수가 같으므로 같은 족에 속한다.",
          "P와 Q는 맨 바깥 전자 수가 같으므로 같은 원소이다.",
          "Q는 P보다 전자 껍질 수가 적다.",
          "R의 원자 번호는 8이다."
        ],
        "answer": "P와 Q는 맨 바깥 전자 수가 같으므로 같은 족에 속한다.",
        "hint": "원소의 종류는 양성자 수로 정하고, 같은 족의 대표 원소는 맨 바깥 전자 수가 같다. 두 기준을 섞지 마.",
        "explanation": "P와 Q는 양성자 수가 3과 11로 달라 서로 다른 원소지만, 맨 바깥 전자가 각각 1개이므로 같은 족에 속한다. Q의 전자 껍질은 3개로 P의 2개보다 많다. R의 원자 번호는 양성자 수와 같은 10이다. 원소 판별은 양성자 수, 족의 규칙은 맨 바깥 전자 수로 구분해야 한다.",
        "개념키": "sci.atom.structure"
      }
    ],
    "book_diagram_url": "./diagrams/book/2026-08-17_cycle_4.png",
    "book_diagram_source": "출처: 101가지 초등수학 질문사전",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음은 관찰 결과를 표로 정리한 것이다. 빈칸 ㉠에 들어갈 동물 수는 몇 마리인가?\n\n[관찰한 동물 총 12마리] 다리 4개: 7마리 / 다리 2개: ㉠ / 다리 4개도 2개도 아님: 2마리",
        "choices": [
          "3마리",
          "5마리",
          "9마리",
          "2마리"
        ],
        "answer": "3마리",
        "explanation": "전체 12마리에서 다리 4개(7마리)와 그 외(2마리)를 빼면 12 - 7 - 2 = 3마리가 다리 2개이다. 5마리는 2마리를 빼지 않은 값, 9마리는 7과 2를 더한 값, 2마리는 다른 칸 값을 그대로 쓴 것이라 틀렸다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "자연·실험 입문 (관찰과 분류)"
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
      },
      {
        "type": "mcq",
        "question": "어떤 실험을 시작한 시각이 오후 2시 15분이고, 끝난 시각이 오후 2시 50분이었다. 실험에 걸린 시간은 몇 분인가?",
        "choices": [
          "35분",
          "65분",
          "45분",
          "25분"
        ],
        "answer": "35분",
        "explanation": "끝난 시각 50분에서 시작한 시각 15분을 빼면 50 - 15 = 35분이다. 65분은 더한 값, 45분과 25분은 잘못 뺀 값으로 모두 정답이 아니다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "자연·실험 입문 (관찰과 분류)"
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-08-17",
  "week": "2026-W34",
  "weakness_focus": [
    "수능 기출 학습",
    "직육면체의 부피·닮음비와 부피비 (2026-08-03 오답, 90 cm³→135 cm³)",
    "닮음비·부피비(부피비=닮음비의 세제곱) (2026-08-04 오답, 50 cm³→200 cm³)"
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
  "total_plays": 524,
  "total_correct": 400,
  "accuracy": 76,
  "last_date": "2026-08-14",
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
        0.5,
        0.538,
        0.5
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
        0.556,
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
  "level": 42,
  "xp_total": 4100,
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
      "date": "2026-08-14",
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
  "page": 25,
  "total": 65,
  "image": "./copywork/today.jpg",
  "weekday": "월",
  "date": "2026-08-17",
  "flagged": false
},
  revenge: {
  "date": "2026-08-17",
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
        "question": "비 5:8에서 기준량은 얼마입니까?",
        "choices": [
          "5",
          "8",
          "13",
          "40"
        ],
        "answer": "8",
        "explanation": "비 'A:B'에서 기호 ':' 뒤의 수 B가 기준량, 앞의 수 A가 비교하는 양입니다. 5:8이므로 기준량은 8. 오답: 5는 비교하는 양, 13은 두 수의 합, 40은 두 수의 곱이라 모두 기준량이 아닙니다.",
        "hint": "비와 비율 — 66일 밀린 간격 복습"
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
        "question": "분수의 나눗셈에 대한 설명으로 옳은 것은?",
        "choices": [
          "분수의 나눗셈은 나누는 수의 분모와 분자를 바꾸어 곱셈으로 계산할 수 있다",
          "분수를 자연수로 나눌 때는 분모를 그 자연수로 나눈다",
          "(진분수)÷(진분수)는 항상 1보다 작은 수가 나온다",
          "분수의 나눗셈에서는 두 분수를 그냥 분자끼리, 분모끼리 나누면 항상 답이 된다"
        ],
        "answer": "분수의 나눗셈은 나누는 수의 분모와 분자를 바꾸어 곱셈으로 계산할 수 있다",
        "explanation": "나눗셈은 나누는 수의 역수(분모·분자를 바꾼 수)를 곱하는 것과 같아 첫 번째가 옳습니다. '분모를 자연수로 나눈다'는 분모는 그대로 두고 분자를 나누거나 분모에 곱해야 하므로 틀림, '항상 1보다 작다'는 8/9÷4/9=2처럼 1보다 클 수 있어 틀림, '그냥 분자·분모끼리 나눈다'는 분모가 다를 때 나누어떨어지지 않으므로 틀립니다.",
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
        "question": "분식집에서 떡볶이 한 그릇이 3,500원이다. 시온이가 떡볶이 두 그릇을 사고 10,000원을 냈다면, 거스름돈은 얼마인가?",
        "choices": [
          "3,000원",
          "6,500원",
          "7,000원",
          "2,500원"
        ],
        "answer": "3,000원",
        "explanation": "두 그릇 값은 3,500 × 2 = 7,000원이고, 거스름돈은 10,000 - 7,000 = 3,000원이다. 6,500은 한 그릇만 빼서 10,000-3,500한 값, 7,000은 두 그릇 값 자체, 2,500은 더 비싸게 계산한 값이라 모두 틀리다.",
        "hint": "기록·자료 정리 — 지금 배우는 단원 워밍업"
      }
    }
  ]
},
  vocab: {
  "date": "2026-08-17",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "정확한",
        "셀피, 자기 사진",
        "모순되지 않는",
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
        "가리다, 감추다",
        "정확한",
        "셀피, 자기 사진",
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
        "지역",
        "애쓰다",
        "가리다, 감추다",
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
        "애쓰다",
        "가리다, 감추다",
        "어린 시절",
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
        "모순되지 않는",
        "~을 이루다",
        "지역",
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
        "셀피, 자기 사진",
        "모순되지 않는",
        "어린 시절",
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
        "셀피, 자기 사진",
        "어린 시절",
        "~을 이루다",
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
        "친밀함",
        "지역",
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
        "친밀함",
        "정확한",
        "지역"
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
        "추상적인",
        "셀피, 자기 사진",
        "애쓰다"
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
