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
    "수능출처": "2023학년도 수능 국어 3번 독서·말하기 유형 변형",
    "unit": "듣기·말하기",
    "통합풀이법": "대화 전 생각과 근거를 들은 뒤의 생각을 비교한다. 바뀐 부분이 곧 대화의 효과다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "민서: 고양이가 지루하지 않도록 사료 브랜드를 자주 바꾸자. 지우: 수의사 인터뷰를 보니 갑자기 사료를 바꾸면 배탈이 날 수 있대. 같은 시간에 알맞은 양을 주는 것이 건강한 몸무게 유지에 더 중요하대. 민서: 그 근거를 들으니 생각이 달라졌어. 규칙적인 급여를 먼저 지키고, 꼭 필요할 때만 천천히 바꾸자. 대화에 대한 이해로 가장 적절한 것은?",
        "choices": [
          "민서는 대화 전후에 같은 생각을 유지했다.",
          "민서는 친구의 근거를 듣고 처음 생각을 고쳐 이해를 넓혔다.",
          "지우의 의견은 사료에 관한 글을 이해하는 일과 관련이 없다.",
          "두 사람은 사료 브랜드를 자주 바꾸어야 한다고 결론 내렸다."
        ],
        "answer": "민서는 친구의 근거를 듣고 처음 생각을 고쳐 이해를 넓혔다.",
        "hint": "민서의 첫 말과 마지막 말을 나란히 놓아 봐. 지우가 제시한 수의사의 근거 뒤에 무엇이 달라졌을까?",
        "explanation": "정답은 친구의 근거를 듣고 처음 생각을 고쳐 이해를 넓혔다는 설명이다. 민서는 처음에는 사료를 자주 바꾸자고 했지만, 지우의 근거를 들은 뒤 규칙적인 급여를 우선하자고 바꿨다. 대화는 책의 뜻을 없애는 것이 아니라 놓친 근거를 보태 이해를 넓힐 수 있다.",
        "개념키": "kor.writing"
      },
      {
        "type": "mcq",
        "question": "도윤: 글을 읽어 보니 길고양이는 모두 다른 장소로 옮겨야 한다는 뜻이야. 하린: 마지막 문장을 다시 봐. 위험한 곳에 있는 고양이만 옮기고, 안전한 쉼터는 그대로 둔다고 했어. 도윤: 그러네. ‘모두’가 아니라 ‘위험한 곳에 있는 고양이’라는 조건을 놓쳤어. 하린의 말이 대화에 한 역할로 가장 적절한 것은?",
        "choices": [
          "글의 의미를 알 수 없게 만들었다.",
          "근거를 들어 도윤의 지나친 일반화를 고치게 했다.",
          "다른 사람의 의견은 읽기와 무관함을 보여 주었다.",
          "도윤의 처음 해석이 옳다고 그대로 인정했다."
        ],
        "answer": "근거를 들어 도윤의 지나친 일반화를 고치게 했다.",
        "hint": "도윤의 ‘모두’와 하린이 찾아낸 ‘위험한 곳에 있는 고양이만’을 비교해 봐.",
        "explanation": "하린은 글의 마지막 문장을 근거로 제시해 도윤이 ‘일부’를 ‘모두’로 넓혀 읽은 오류를 고치게 했다. 도윤도 놓친 조건을 인정하며 해석을 수정했다. 다른 사람의 말은 읽기와 무관한 방해가 아니라, 본문 근거를 다시 확인하게 하는 도구가 될 수 있다.",
        "개념키": "kor.writing"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음 글에서 글쓴이의 주장으로 알맞은 것은?\n\n\"음식을 남기면 그 음식을 버리는 데 돈과 자원이 들고, 쓰레기도 늘어난다. 또 음식을 만드느라 애쓴 분들의 정성도 헛되이 버려진다. 그러므로 우리는 먹을 만큼만 음식을 덜어 먹어야 한다.\"",
        "choices": [
          "먹을 만큼만 음식을 덜어 먹어야 한다.",
          "음식은 무조건 많이 만들어야 한다.",
          "쓰레기는 아무 데나 버려도 된다.",
          "음식을 만드는 일은 쉬운 일이다."
        ],
        "answer": "먹을 만큼만 음식을 덜어 먹어야 한다.",
        "explanation": "'그러므로'로 시작하는 마지막 문장이 글쓴이가 내세우는 주장이다. 앞부분은 그 주장을 뒷받침하는 까닭(근거)이다. '많이 만들어야'·'아무 데나 버려도'·'만드는 일은 쉽다'는 글의 내용과 반대되거나 나오지 않으므로 오답.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "읽기 (비문학·설명문·주장하는 글)"
      },
      {
        "type": "mcq",
        "question": "다음 문단에서 뒷받침 문장에 해당하는 것은 무엇인가요? (중심 문장: \"운동은 우리 몸에 좋다.\")",
        "choices": [
          "운동을 하면 근육이 튼튼해진다.",
          "운동은 우리 몸에 좋다.",
          "오늘은 날씨가 참 맑다.",
          "내일 학교에 일찍 가야겠다."
        ],
        "answer": "운동을 하면 근육이 튼튼해진다.",
        "explanation": "뒷받침 문장은 중심 문장 '운동은 우리 몸에 좋다'를 자세히 설명해 주는 문장이어야 한다. '운동을 하면 근육이 튼튼해진다'는 운동이 몸에 좋은 이유를 설명하므로 정답이다. 두 번째는 중심 문장 그 자체라 틀리고, 나머지 둘은 운동과 관련 없는 내용이라 틀리다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "쓰기 (문단·글의 짜임)"
      },
      {
        "type": "mcq",
        "question": "앞 문장과 뒤 문장을 자연스럽게 이어 주는 '이어 주는 말(접속어)'의 쓰임으로 알맞은 것은 무엇인가요?",
        "choices": [
          "비가 왔다. 그래서 운동회가 미뤄졌다.",
          "비가 왔다. 그래서 운동회를 그대로 했다.",
          "비가 왔다. 그러나 운동회가 미뤄졌다.",
          "비가 왔다. 왜냐하면 운동회가 미뤄졌다."
        ],
        "answer": "비가 왔다. 그래서 운동회가 미뤄졌다.",
        "explanation": "'그래서'는 앞 내용이 원인, 뒤 내용이 결과일 때 쓴다. '비가 와서 운동회가 미뤄졌다'는 원인-결과가 맞아 정답이다. 두 번째는 비가 왔는데 그대로 했다니 결과가 어색하고, 세 번째 '그러나'는 반대 내용을 이을 때 써서 틀리며, 네 번째 '왜냐하면' 뒤에는 까닭이 와야 하는데 결과가 와서 틀리다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "쓰기 (문단·글의 짜임)"
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "수학",
    "역할": "서브",
    "수능출처": "초6 분수의 나눗셈·중3 닮음비와 부피비 통합 변형",
    "unit": "6-2 분수의 나눗셈",
    "통합풀이법": "몇 묶음인지 물으면 나눗셈. 닮은 입체의 길이가 k배면 부피는 k³배다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "주스 3/4 L를 한 컵에 1/8 L씩 똑같이 따른다. 가득 채울 수 있는 컵은 몇 개인가?",
        "choices": [
          "4개",
          "5개",
          "6개",
          "8개"
        ],
        "answer": "6개",
        "hint": "3/4 L 안에 1/8 L가 몇 번 들어가는지 묻는 문제야. 3/4을 분모가 8인 분수로 먼저 바꿔 봐.",
        "explanation": "3/4 L는 6/8 L이다. 여기에 1/8 L짜리 컵이 몇 개 들어가는지 구하면 6/8÷1/8=6이므로 6개다. 분수의 나눗셈은 ‘전체 안에 한 묶음이 몇 번 들어가는가’로 생각하면 된다. 분모가 같아지면 1/8짜리 조각의 개수를 바로 셀 수 있다.",
        "개념키": "math.fraction.division"
      },
      {
        "type": "mcq",
        "question": "닮은 두 정육면체의 한 모서리 길이의 비가 작은 것과 큰 것의 순서로 1:2이다. 큰 정육면체의 부피가 160 cm³일 때 작은 정육면체의 부피는 얼마인가?",
        "choices": [
          "80 cm³",
          "40 cm³",
          "20 cm³",
          "10 cm³"
        ],
        "answer": "20 cm³",
        "hint": "길이비 1:2를 부피비로 바꿀 때 세제곱해. 큰 것의 부피가 주어졌으므로 몇 배로 나눌지도 확인해.",
        "explanation": "길이비가 1:2이므로 부피비는 1³:2³=1:8이다. 큰 정육면체가 160 cm³이므로 작은 것은 160÷8=20 cm³이다. 80은 길이비만 적용한 값, 40은 제곱한 값이다. 부피는 세제곱이며 큰 것에서 작은 것을 구할 때는 8로 나눈다.",
        "개념키": "math.similarity.volume_cube"
      }
    ],
    "book_diagram_url": "./diagrams/book/2026-08-18_cycle_2.jpg",
    "book_diagram_source": "출처: eomaeomahan suhag_su",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "8.4를 4로 나눈 몫은 얼마일까요? (8.4 ÷ 4)",
        "choices": [
          "1.1",
          "2.1",
          "2.4",
          "21"
        ],
        "answer": "2.1",
        "explanation": "84 ÷ 4 = 21이고, 8.4는 84의 1/10이므로 몫도 1/10인 2.1입니다. 1.1은 계산 오류, 2.4는 숫자 바꿈 오류, 21은 소수점 위치를 틀린 값입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "소수의 나눗셈"
      },
      {
        "type": "mcq",
        "question": "높이가 10cm인 원기둥을 펼쳤더니 옆면이 직사각형 모양이었다. 이 직사각형의 세로의 길이는 몇 cm인가?",
        "choices": [
          "10cm",
          "20cm",
          "5cm",
          "31.4cm"
        ],
        "answer": "10cm",
        "explanation": "원기둥 옆면 전개도(직사각형)에서 세로의 길이는 원기둥의 높이와 같으므로 10cm이다. 가로가 밑면의 둘레인데 세로와 헷갈려 20cm·31.4cm를 고르면 오답. 5cm는 높이의 절반이라 오답.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "원기둥·원뿔·구"
      },
      {
        "type": "mcq",
        "question": "반지름이 3 cm인 동전 모양 쿠키의 넓이는 얼마입니까? (원주율은 3으로 계산)",
        "choices": [
          "18 cm²",
          "27 cm²",
          "9 cm²",
          "54 cm²"
        ],
        "answer": "27 cm²",
        "explanation": "넓이 = 반지름 × 반지름 × 원주율 = 3 × 3 × 3 = 27 cm². 18은 둘레(지름×원주율=6×3), 9는 반지름×반지름만 한 값, 54는 지름×지름×원주율로 잘못 계산한 값입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "원의 넓이"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "영어",
    "역할": "메인",
    "계보id": "L260818-en-agreement-music",
    "현재스텝": "E",
    "수능출처": "2020학년도 수능 영어 34번",
    "unit": "Grammar Joy 3 전체 — 주어-동사 수 일치·명사 복수형·빈칸 추론",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "A puppy ___ its head when music starts. 빈칸에 알맞은 것은?",
        "choices": [
          "turn",
          "turns",
          "turning",
          "turned"
        ],
        "answer": "turns",
        "hint": "주어는 puppy 한 마리야. 현재의 반복 행동을 말할 때 3인칭 단수 주어 뒤 동사는 어떤 모양이 될까?",
        "explanation": "A puppy는 강아지 한 마리인 3인칭 단수 주어다. 현재의 반복 행동이므로 동사 turn에 -s를 붙여 turns가 된다. turn은 복수 주어에 쓰고, turning은 앞에 be동사가 필요하며, turned는 과거형이다. 지난번 sitting 대신 sits가 필요했던 이유도 같은 규칙이다.",
        "개념키": "en.agreement.subject_verb"
      },
      {
        "스텝": "E",
        "type": "mcq",
        "question": "Two puppies ___ their heads when music starts. 빈칸에 알맞은 것은?",
        "choices": [
          "turns",
          "turn",
          "is turning",
          "turned"
        ],
        "answer": "turn",
        "hint": "puppies는 puppy가 둘 이상인 복수형이야. 복수 주어의 현재형 동사에서는 -s를 붙일까, 뗄까?",
        "explanation": "Two puppies는 둘 이상의 강아지를 나타내는 복수 주어다. 복수 주어의 현재형 동사는 원형 turn을 쓴다. turns는 단수 주어용이고, is turning은 복수 주어에 맞지 않아 are turning이어야 한다. 단수 명사에는 복수 표시가 없지만 동사에 -s, 복수 명사에는 동사의 -s가 없다는 반대 움직임을 기억하자.",
        "개념키": "en.noun.plural"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "There ___ many attempts to define what music is. 빈칸에 알맞은 것은?",
        "choices": [
          "is",
          "was",
          "has been",
          "have been"
        ],
        "answer": "have been",
        "hint": "There가 주어처럼 보여도 진짜 주어는 뒤의 many attempts야. 복수 주어와 현재완료에 맞는 형태를 찾아봐.",
        "explanation": "There 뒤의 진짜 주어는 many attempts이며 복수다. 과거부터 지금까지 음악을 정의하려는 시도가 이어졌다는 뜻이므로 현재완료 have been이 맞다. has been은 단수 주어용이다. what music is는 질문 어순이 아니라 ‘음악이 무엇인지’라는 명사절이다. 이 문장은 보스전 첫 문장과 같다.",
        "개념키": "en.grammar.general"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "‘고정된 음높이는 많은 음악 문화에서 중요하지만 모든 음악을 정의하지는 않는다.’라는 의미와 어법에 모두 맞는 문장은?",
        "choices": [
          "Fixed pitches is important in many musical cultures, but it do not define all music.",
          "A fixed pitch are important in many musical cultures, but they does not define all music.",
          "Fixed pitches are important in many musical cultures, but they do not define all music.",
          "Fixed pitches are important in many musical cultures, but it does not defines all music."
        ],
        "answer": "Fixed pitches are important in many musical cultures, but they do not define all music.",
        "hint": "Fixed pitches는 복수 주어야. 앞의 be동사와 뒤에서 이를 받는 대명사·일반동사가 모두 복수에 맞는지 확인해.",
        "explanation": "Fixed pitches는 복수이므로 are가 오고, 이를 받는 대명사는 they이며, 부정문은 do not define이 된다. 따라서 세 요소가 모두 일치하는 세 번째 문장만 옳다. 동시에 고정 음높이가 흔한 특징이지만 모든 음악의 정의는 아니라는 글의 핵심도 담고 있다. 어법과 의미를 함께 확인해야 정답에 도달한다.",
        "개념키": "en.agreement.subject_verb"
      }
    ],
    "보스전": {
      "진짜수능본문": "다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오. [3점]\n\nThere have been many attempts to define what music is in terms of the specific attributes of musical sounds. The famous nineteenth-century critic Eduard Hanslick regarded ‘the measurable tone’ as ‘the primary and essential condition of all music’. Musical sounds, he was saying, can be distinguished from those of nature by the fact that they involve the use of fixed pitches, whereas virtually all natural sounds consist of constantly fluctuating frequencies. And a number of twentieth-century writers have assumed, like Hanslick, that fixed pitches are among the defining features of music. Now it is true that in most of the world’s musical cultures, pitches are ______. However, this is a generalization about music and not a definition of it, for it is easy to put forward counter-examples. Japanese shakuhachi music and the sanjo music of Korea, for instance, fluctuate constantly around the notional pitches in terms of which the music is organized.",
      "진짜수능선택지": [
        "not so much artificially fixed as naturally fluctuating",
        "not only fixed, but organized into a series of discrete steps",
        "hardly considered a primary compositional element of music",
        "highly diverse and complicated, and thus are immeasurable",
        "a vehicle for carrying unique and various cultural features"
      ],
      "진짜수능정답": "②",
      "보스전_해설": "정답은 ②다. 글은 먼저 한스리크와 여러 학자가 고정된 음높이를 음악의 핵심 특징으로 보았다고 설명한다. 빈칸 뒤의 However부터는 이것이 일반적 특징일 뿐 모든 음악의 정의는 아니라고 반박하고, 음높이가 계속 흔들리는 샤쿠하치와 산조를 예로 든다. 따라서 빈칸에는 많은 문화에서 음높이가 고정되어 있고 일정한 단계로 조직된다는 내용이 들어가야 한다. ①은 자연스럽게 흔들린다는 뜻이라 뒤의 반례와 충돌한다. E에서 단수·복수 동사를 구별하고, M에서 There have been의 진짜 주어를 찾고, H에서 Fixed pitches are의 문장 뼈대를 잡은 것이 긴 지문의 흐름을 읽는 발판이다.",
      "강조구간": [
        "There have been many attempts to define what music is",
        "fixed pitches are among the defining features of music",
        "this is a generalization about music and not a definition of it"
      ]
    },
    "통합풀이법": "주어의 중심 명사와 동사를 먼저 연결한 뒤, However 앞의 일반 주장과 뒤의 반례가 대조되는지 본다.",
    "한국어_해석": "음악이 무엇인지 정하려는 시도는 많았다. 한 비평가는 음악의 핵심 조건이 측정 가능한 고정된 음이라고 보았다. 자연의 소리는 주파수가 계속 흔들리지만 음악은 고정된 음높이를 쓴다는 생각이다. 실제로 많은 문화에서 음높이는 중요하다. 그러나 이것은 일반적 특징일 뿐 정의는 아니다. 일본 샤쿠하치 음악과 한국 산조처럼 음이 기준 음높이 주변에서 계속 흔들리는 예가 있기 때문이다.",
    "핵심_단어": [
      "attempt=시도",
      "define=정의하다",
      "attribute=속성·특징",
      "measurable=측정할 수 있는",
      "primary=주된",
      "essential=필수적인",
      "distinguish=구별하다",
      "fluctuate=흔들리다·변동하다"
    ],
    "문법_포인트": [
      "There have been many attempts: 과거부터 지금까지 이어진 많은 시도를 나타내는 현재완료",
      "what music is: 의문문이 아니라 음악이 무엇인지라는 뜻의 명사절"
    ],
    "학년별_적정활용": "초6은 한국어 해석으로 글의 대조 구조를 이해하고, 영어 본문에서는 핵심 단어 5개와 주어-동사 연결만 찾는다.",
    "이미지_묘사": "강아지 한 마리 turns와 강아지 두 마리 turn을 나란히 놓고, 단수 동사의 -s와 복수 명사의 -s가 반대로 움직임을 보여 주는 도식.",
    "image_url": "./images/2026-08-18_cycle_3.png",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음 빈칸에 공통으로 들어갈 수 있는 be동사는?\n\nThe cats ____ cute.\nMy parents ____ at home.",
        "choices": [
          "are",
          "am",
          "is",
          "be"
        ],
        "answer": "are",
        "explanation": "The cats(고양이들)와 My parents(부모님)는 모두 복수 주어이므로 두 문장 다 are가 들어간다. am은 I에만, is는 단수에 쓰므로 두 문장에 공통으로 맞지 않아 틀리고, be는 원형이라 그대로 쓸 수 없어 틀리다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 05 be동사 긍정문"
      },
      {
        "type": "mcq",
        "question": "다음 중 빈칸에 'There is'가 들어갈 수 없는 문장은?",
        "choices": [
          "___ many cars on the road.",
          "___ a pencil in my bag.",
          "___ some bread on the plate.",
          "___ a girl in the park."
        ],
        "answer": "___ many cars on the road.",
        "explanation": "many cars는 복수라서 'There are'를 써야 합니다. 나머지는 단수/셀 수 없는 명사라 'There is'가 맞습니다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 2 There is/are"
      },
      {
        "type": "mcq",
        "question": "밑줄 친 의문사의 뜻이 바르게 짝지어진 것은?",
        "choices": [
          "When — 어디서",
          "Where — 언제",
          "Why — 왜",
          "How — 누구"
        ],
        "answer": "Why — 왜",
        "explanation": "When=언제, Where=어디서, Why=왜, How=어떻게. 따라서 'Why — 왜'만 옳다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 3 의문부사"
      }
    ]
  },
  {
    "id": 4,
    "cycle": 4,
    "subject": "통합사회",
    "역할": "서브",
    "수능출처": "2028학년도 수능 통합사회 예시문항 12번 자료 해석 톤 변형",
    "unit": "지도와 자료 읽기 (그래프·표)",
    "통합풀이법": "금액은 전체×비율. 나머지 항목은 먼저 100%에서 알려진 비율의 합을 뺀다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "어느 지역의 동물 복지 예산은 모두 240만 원이다. 이 중 35%를 유기 동물 진료에 배정했다. 유기 동물 진료 예산은 얼마인가?",
        "choices": [
          "35만 원",
          "72만 원",
          "84만 원",
          "156만 원"
        ],
        "answer": "84만 원",
        "hint": "35%를 0.35로 바꾼 뒤 전체 예산 240만 원에 곱해. 35라는 비율을 금액으로 바로 읽지 마.",
        "explanation": "35%=0.35이므로 240만 원×0.35=84만 원이다. 35만 원은 비율을 그대로 금액으로 읽은 값이고, 72만 원은 30%만 계산한 값이다. 자료의 비율을 실제 금액으로 바꿀 때는 언제나 ‘전체×비율’을 쓴다. 전체가 무엇인지 먼저 표시하면 환산 방향을 놓치지 않는다.",
        "개념키": "soc.data.reading"
      },
      {
        "type": "mcq",
        "question": "동물 보호 예산 400만 원 중 A 진료 지원이 25%, B 보호소 개선이 35%, C 입양 교육이 나머지일 때 C 입양 교육 예산은 얼마인가?",
        "choices": [
          "100만 원",
          "140만 원",
          "160만 원",
          "240만 원"
        ],
        "answer": "160만 원",
        "hint": "A와 B의 비율을 먼저 더한 뒤 100%에서 빼 C의 비율을 구해. 그다음 전체 400만 원에 곱해.",
        "explanation": "A와 B의 비율은 25%+35%=60%다. 따라서 C는 100%-60%=40%이고, 400만 원×0.4=160만 원이다. 100만 원과 140만 원은 A와 B의 금액이며, 240만 원은 사용된 60%의 금액이다. 표에서는 먼저 항목별 비율을 구분한 뒤 묻는 항목만 금액으로 바꾼다.",
        "개념키": "soc.data.reading"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "한 도시의 출생아 수가 작년 1500명에서 올해 1200명으로 줄었다. 줄어든 출생아 수는 몇 명인가?",
        "choices": [
          "300명",
          "200명",
          "400명",
          "250명"
        ],
        "answer": "300명",
        "explanation": "1500 - 1200 = 300명이 줄어들었다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "사회 변동과 사회 문제 미리보기"
      },
      {
        "type": "mcq",
        "question": "사회 변동의 의미로 가장 알맞은 것은?",
        "choices": [
          "사회의 모습과 구조가 시간이 지나면서 바뀌는 것",
          "개인의 키와 몸무게가 자라는 것",
          "계절이 봄에서 여름으로 바뀌는 것",
          "하루 동안 날씨가 변하는 것"
        ],
        "answer": "사회의 모습과 구조가 시간이 지나면서 바뀌는 것",
        "explanation": "사회 변동은 정치·경제·문화 등 사회 전반의 구조와 생활 모습이 시간에 따라 변화하는 것을 뜻한다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "사회 변동과 사회 문제 미리보기"
      },
      {
        "type": "mcq",
        "question": "세계화에 대한 설명으로 가장 알맞은 것은?",
        "choices": [
          "나라 간 교류가 활발해져 하나의 생활권처럼 되는 것",
          "한 나라 안에서만 물건을 사고파는 것",
          "외국과의 교류를 완전히 끊는 것",
          "사람들이 이사를 가지 않는 것"
        ],
        "answer": "나라 간 교류가 활발해져 하나의 생활권처럼 되는 것",
        "explanation": "세계화는 교통·통신 발달로 국가 간 교류가 늘어 전 세계가 긴밀하게 연결되는 현상이다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "사회 변동과 사회 문제 미리보기"
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-08-18",
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
  "last_date": "2026-08-17",
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
      "date": "2026-08-17",
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
  "title": "고정욱의 인문학 필사수업",
  "book_key": "인문학필사",
  "images": [
    "./copywork/today.jpg"
  ],
  "page": 12,
  "total": 119,
  "image": "./copywork/today.jpg",
  "weekday": "화",
  "date": "2026-08-18",
  "flagged": false
},
  revenge: {
  "date": "2026-08-18",
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
        "question": "강아지 사료 한 포대 정가가 20000원인데 5000원을 깎아서 팔아. 할인율은 몇 %일까? (할인율 = 할인액 ÷ 정가)",
        "choices": [
          "4%",
          "25%",
          "75%",
          "400%"
        ],
        "answer": "25%",
        "explanation": "기준량(나누는 수)은 정가 20000이야 — 할인액 5000을 정가로 나눠! 5000÷20000=0.25=25%, 정답 ②. ①4%는 20000÷5000으로 거꾸로, ③75%는 깎고 남은 가격의 비율, ④400%는 정가÷할인액이야. 핵심: '정가 대비'의 정가가 기준량.",
        "hint": "비와 비율 — 67일 밀린 간격 복습"
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
        "question": "3/5 ÷ 1/4 을 계산한 값은?",
        "choices": [
          "12/5",
          "3/20",
          "12/20",
          "5/12"
        ],
        "answer": "12/5",
        "explanation": "3/5 ÷ 1/4 = 3/5 × 4/1 = 12/5. '3/20'은 뒤집지 않고 그대로 곱한 오답, '12/20'은 분모를 잘못 곱한 오답, '5/12'는 정답을 거꾸로 뒤집은 오답입니다.",
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
        "question": "시온이가 일주일 동안 읽은 책 쪽수를 표로 정리했다. 월요일 12쪽, 화요일 8쪽, 수요일 15쪽이다. 세 날 동안 읽은 쪽수의 합계는 몇 쪽인가?",
        "choices": [
          "33쪽",
          "35쪽",
          "30쪽",
          "27쪽"
        ],
        "answer": "35쪽",
        "explanation": "12 + 8 + 15 = 35쪽이다. 표의 자료를 더해 합계를 구한다. 33은 12+15+6처럼 화요일을 잘못 본 값, 30은 12+8+10처럼 수요일을 잘못 본 값, 27은 12+15만 더한 값이라 모두 틀리다.",
        "hint": "기록·자료 정리 — 지금 배우는 단원 워밍업"
      }
    }
  ]
},
  vocab: {
  "date": "2026-08-18",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "~을 이루다",
        "애쓰다",
        "정확한",
        "셀피, 자기 사진"
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
        "지역",
        "정확한",
        "모순되지 않는",
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
        "애쓰다",
        "친밀함",
        "정확한",
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
        "친밀함",
        "셀피, 자기 사진",
        "추상적인",
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
        "가리다, 감추다",
        "정확한",
        "추상적인",
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
        "모순되지 않는",
        "어린 시절",
        "정확한",
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
        "지역",
        "가리다, 감추다",
        "어린 시절"
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
        "지역",
        "어린 시절",
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
        "지역",
        "어린 시절",
        "~을 이루다",
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
        "셀피, 자기 사진",
        "추상적인",
        "모순되지 않는",
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
