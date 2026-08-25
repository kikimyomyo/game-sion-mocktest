window.GAME_CONFIG = {
  game: "sion-mocktest",
  title: "시온이 모의시험",
  sheet_tab: "sion-mocktest",
  endpoint: "https://script.google.com/macros/s/AKfycbz5mX9EPnOSmSs6p0YFiNTpqH810emc3ArEKnfusCYXrjH90OcIapwgYjnyP9A_F5ZYOQ/exec",
  problems: [
  {
    "id": 1,
    "cycle": 1,
    "subject": "영어",
    "역할": "메인",
    "계보id": "L260818-en-agreement-music",
    "현재스텝": "M",
    "수능출처": "2020학년도 수능 영어 34번",
    "unit": "주어-동사 수 일치·명사 복수형 (음악·음높이 소재)",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? The black cat ____ sleeping on my bed.",
        "choices": [
          "is",
          "are",
          "were",
          "am"
        ],
        "answer": "is",
        "hint": "주어가 무엇인지 먼저 찾아. The black cat = 고양이 한 마리. 한 마리면 동사도 하나짜리 모양이야.",
        "explanation": "주어는 The black cat, 즉 고양이 한 마리(단수)라서 단수 동사 is가 맞아. are는 여럿일 때, am은 I 전용이야. 색깔(black)이 붙어도 마리 수는 하나 그대로. 주어의 수만 보면 바로 풀려. 잘했어, 이게 모든 수 일치의 뼈대야.",
        "개념키": "en.agreement.subject_verb"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "어법상 옳은 문장은?",
        "choices": [
          "Fixed pitches is important in music.",
          "Fixed pitches are important in music.",
          "Fixed pitch are important in music.",
          "A fixed pitches are important in music."
        ],
        "answer": "Fixed pitches are important in music.",
        "hint": "pitches는 -s가 붙은 복수야. 여럿이면 동사는 are. 그리고 A + 복수(pitches)는 함께 못 써.",
        "explanation": "주어 Fixed pitches는 -s가 붙은 복수라서 동사는 are. ①은 복수에 is라 틀리고, ③은 pitch가 단수인데 are라 안 맞아, ④는 A(한 개)와 pitches(여럿)가 충돌해. 복수 주어 → 복수 동사 are 하나로 정리돼.",
        "개념키": "en.noun.plural"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "어법상 옳은 문장은? (어제 A fixed pitch are / they does 로 넘어진 문장)",
        "choices": [
          "A fixed pitch are important, but they does not define all music.",
          "A fixed pitch is important, but they do not define all music.",
          "A fixed pitches is important, but it do not define all music.",
          "A fixed pitch is important, but they does not define all music."
        ],
        "answer": "A fixed pitch is important, but they do not define all music.",
        "hint": "앞 주어 A fixed pitch = 한 개 → is. 뒤 주어 they = 여럿 → do. 어제는 여기서 are와 does로 뒤집혔어.",
        "explanation": "A fixed pitch는 한 개(단수)라 is, they는 여럿(복수)이라 do가 맞아. 어제 고른 are·does는 정확히 반대로 붙인 실수였어. 단수엔 is/does, 복수엔 are/do — 주어의 수를 먼저 찾으면 자동으로 갈려. 이번엔 제대로 뒤집었네, 이게 오늘의 관문이었어.",
        "개념키": "en.agreement.subject_verb"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? The variety of pitches used across different cultures ____ often greater than we expect.",
        "choices": [
          "is",
          "are",
          "were",
          "have been"
        ],
        "answer": "is",
        "hint": "진짜 주어는 The variety(다양함, 한 덩어리). of pitches는 꾸며주는 곁가지일 뿐이야. 곁가지의 -s에 속지 마.",
        "explanation": "핵심 주어는 The variety(단수)이고 of pitches는 앞을 꾸미는 전치사구라 동사는 is. 바로 옆 pitches, cultures의 -s를 보고 are로 끌려가는 게 수능이 파놓은 함정이야. 주어와 동사 사이 곁가지를 손으로 가리고 보면 The variety ... is 하나만 남아. 이게 수능 어법의 단골 트릭이야.",
        "개념키": "en.grammar.general"
      }
    ],
    "보스전": {
      "진짜수능본문": "In most of the Western classical tradition, pitches are treated as a set of fixed and clearly defined points. A piano, for example, offers a finite number of keys, and each key produces a single, unchanging pitch that a performer is trained to strike precisely. In many other musical cultures, however, voices and instruments such as the sitar slide continuously from one note to the next, so that the borders between neighboring pitches blur. To a listener raised only on the piano, such music can sound out of tune. But this reaction mistakes one cultural habit for a law of nature. Fixed pitches are important in many musical cultures, but they do not define all music. What truly makes a system musical is not that its tones are physically produced in one particular way, but that the community of listeners has agreed the sounds are ________.",
      "진짜수능선택지": [
        "randomly generated without any lasting pattern",
        "naturally fluctuating rather than deliberately fixed",
        "meaningful only when written down in notation",
        "identical in every culture across the world",
        "organized into a shared series of understood steps"
      ],
      "진짜수능정답": "⑤",
      "보스전_해설": "빈칸 앞이 열쇠야. 글은 처음부터 끝까지 '음악을 음악답게 만드는 건 소리 자체가 아니라, 사람들이 그 소리를 어떻게 정리하기로 약속했느냐'라고 말해. 그래서 정답은 ⑤ organized into a shared series of understood steps(함께 이해하는 단계로 정리됨). ②는 어제 시온이가 골랐던 함정 — naturally fluctuating(그냥 미끄러진다)은 오히려 글이 반박한 쪽이야. M 스텝에서 본 Fixed pitches are, they do not처럼 여기서도 주어의 수를 보며 문장을 정확히 읽어야 흐름이 잡혀. ①④는 글에 없는 극단, ③은 악보 얘기라 벗어나. '소리가 아니라 약속' — 이 한 줄이 정답으로 가는 사다리였어.",
      "강조구간": [
        "Fixed pitches are important in many musical cultures, but they do not define all music",
        "the community of listeners has agreed the sounds are"
      ]
    },
    "통합풀이법": "동사 고르기 전에 진짜 주어부터 손가락으로 짚어라 — 곁가지 -s는 무시.",
    "이미지_묘사": "왼쪽 피아노 건반은 딱딱 끊긴 점들, 오른쪽 시타르 줄은 부드럽게 미끄러지는 곡선. 가운데 화살표가 '같은 음악'이라 잇는 대비 도식 1장.",
    "image_url": "./images/2026-08-25_cycle_1.png",
    "챌린지_추가": [
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
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "국어",
    "역할": "서브",
    "수능출처": "2023학년도 수능 국어 3번 [독서(비문학)] 변형",
    "unit": "듣기·말하기 (대화를 통한 이해 확장)",
    "통합풀이법": "대화는 '내 생각 지우기'가 아니라 '내 생각에 남의 근거를 더하기'.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "소연이가 「나는 이 책이 슬프기만 했어」라고 하자 준호가 「나는 마지막에 오히려 희망을 봤어. 강아지가 새 주인을 만났잖아」라고 말했다. 준호의 말이 소연이에게 준 것은?",
        "choices": [
          "소연이의 생각을 틀렸다고 지적한 것",
          "같은 장면을 다르게 볼 수 있음을 보여준 것",
          "책 내용을 처음부터 다시 요약한 것",
          "대화를 그만하자고 제안한 것"
        ],
        "answer": "같은 장면을 다르게 볼 수 있음을 보여준 것",
        "hint": "준호는 소연이를 혼내지 않았어. '나는 이렇게 봤어'라며 근거(새 주인)를 하나 보탰지.",
        "explanation": "준호는 소연이가 틀렸다고 하지 않고, 같은 결말을 '희망'으로도 볼 수 있다고 근거를 들어 보여줬어. 그래서 답은 ②. 대화의 힘은 상대를 이기는 게 아니라 시야를 넓히는 데 있어. ①처럼 지적하거나 ④처럼 끊는 건 대화가 주는 확장과 반대야.",
        "개념키": "kor.writing"
      },
      {
        "type": "mcq",
        "question": "친구의 근거를 들은 뒤 나의 이해에 일어나는 일로 가장 알맞은 것은?",
        "choices": [
          "내 처음 생각이 사라지고 아무것도 안 남는다",
          "다른 사람 의견은 읽기와 아무 상관이 없다",
          "새 근거가 더해져 내 이해가 넓어질 수 있다",
          "반드시 친구 말대로 생각을 바꿔야 한다"
        ],
        "answer": "새 근거가 더해져 내 이해가 넓어질 수 있다",
        "hint": "말한다고 처음 생각이 지워지는 게 아니야. 새 근거가 '추가'되는 거야. 지난번엔 여기서 ①·②로 헷갈렸지.",
        "explanation": "다른 사람과 이야기하면 내 처음 생각이 사라지는 게 아니라, 새 근거가 더해져 이해가 넓어질 수 있어. 그래서 답은 ③. 지난번에 골랐던 '사라진다'·'상관없다'는 대화의 역할을 거꾸로 본 거야. 읽기와 대화는 서로 돕는 짝이야.",
        "개념키": "kor.writing"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "시온이가 독서 감상문을 쓰는데, '처음 - 가운데 - 끝' 세 부분으로 나누고 가운데 부분만 4문단으로 썼습니다. 처음과 끝은 각각 1문단씩이라면, 이 글은 모두 몇 문단인가요?",
        "choices": [
          "6문단",
          "4문단",
          "5문단",
          "7문단"
        ],
        "answer": "6문단",
        "explanation": "처음 1문단 + 가운데 4문단 + 끝 1문단 = 1 + 4 + 1 = 6문단이다. 4는 가운데만 센 값, 5는 처음과 끝 중 하나를 빠뜨린 값, 7은 하나를 더 더한 값이라 모두 틀리다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "쓰기 (문단·글의 짜임)"
      },
      {
        "type": "mcq",
        "question": "다음 글의 중심 내용으로 가장 알맞은 것은?\n\n\"꿀벌은 꽃에서 꿀을 모으는 동안 몸에 꽃가루를 묻힌다. 그리고 다른 꽃으로 옮겨 가면서 그 꽃가루를 전해 준다. 이렇게 꿀벌이 꽃가루를 옮겨 주어야 식물은 열매를 맺을 수 있다. 만약 꿀벌이 사라진다면 많은 농작물이 열매를 맺지 못할 것이다.\"",
        "choices": [
          "꿀벌은 꽃가루를 옮겨 식물이 열매를 맺도록 돕는다.",
          "꿀벌은 꿀의 맛이 매우 달콤하다.",
          "꽃은 색깔이 알록달록해서 아름답다.",
          "농부들은 가을에 열매를 거두어들인다."
        ],
        "answer": "꿀벌은 꽃가루를 옮겨 식물이 열매를 맺도록 돕는다.",
        "explanation": "글 전체가 '꿀벌이 꽃가루를 옮겨 주어 식물이 열매를 맺는다'는 한 가지 내용을 설명하므로 이것이 중심 내용이다. '꿀맛이 달콤'·'꽃이 아름답다'·'가을에 거둔다'는 글에 나오지 않거나 글의 핵심이 아닌 곁가지 내용이므로 오답.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "읽기 (비문학·설명문·주장하는 글)"
      },
      {
        "type": "mcq",
        "question": "다음 주장하는 글에서 주장을 뒷받침하는 '근거'로 알맞지 않은 것은?\n\n주장: 학교에 나무를 더 많이 심자.\n\n\"① 나무는 더운 날 그늘을 만들어 준다. ② 나무는 공기를 맑게 해 준다. ③ 나는 빨간색 운동화를 좋아한다. ④ 나무가 많으면 새들이 찾아와 학교가 정겨워진다.\"",
        "choices": [
          "나는 빨간색 운동화를 좋아한다.",
          "나무는 더운 날 그늘을 만들어 준다.",
          "나무는 공기를 맑게 해 준다.",
          "나무가 많으면 새들이 찾아와 학교가 정겨워진다."
        ],
        "answer": "나는 빨간색 운동화를 좋아한다.",
        "explanation": "근거는 주장(나무를 더 심자)과 관련이 있어야 한다. '빨간색 운동화를 좋아한다'는 나무 심기와 아무 관련이 없어 근거가 될 수 없다. 그늘·맑은 공기·새들이 찾아옴은 모두 나무를 심어야 하는 까닭이므로 알맞은 근거이고, '알맞지 않은 것'을 묻는 정답은 첫 번째이다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "읽기 (비문학·설명문·주장하는 글)"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "수학",
    "역할": "서브",
    "수능출처": "초6 2학기 6-2 분수의 나눗셈 + 닮음비·부피비 변형",
    "unit": "6-2 분수의 나눗셈 / 부피비 = 닮음비의 세제곱",
    "통합풀이법": "÷분수는 뒤집어 곱하기, 부피비는 닮음비를 세 번 곱하기(세제곱).",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "5/6 ÷ 1/3 의 값은?",
        "choices": [
          "5/18",
          "2/5",
          "5/2",
          "15/2"
        ],
        "answer": "5/2",
        "hint": "÷1/3 은 ×3 과 같아. 5/6 × 3 을 계산하고 약분해봐.",
        "explanation": "나누는 수 1/3을 뒤집어 곱하면 5/6 × 3 = 15/6 = 5/2. 그래서 답은 ③. ①5/18은 뒤집지 않고 그냥 곱한 실수, ②2/5는 답을 거꾸로 뒤집은 값이야. '뒤집어 곱하기' 한 단계만 기억하면 돼.",
        "개념키": "math.fraction.division"
      },
      {
        "type": "mcq",
        "question": "두 정육면체가 닮음이고 닮음비가 1:2다. 작은 정육면체의 부피가 5cm³일 때, 큰 정육면체의 부피는 몇 cm³?",
        "choices": [
          "10cm³",
          "20cm³",
          "40cm³",
          "25cm³"
        ],
        "answer": "40cm³",
        "hint": "부피비는 닮음비를 세 번 곱해. 1:2 → 1:(2×2×2)=1:8. 그럼 5의 몇 배?",
        "explanation": "부피비 = 닮음비의 세제곱이라 1:2 → 1:8. 작은 부피 5cm³의 8배 = 40cm³, 답은 ③. ①10은 닮음비만 곱한 실수(×2), ②20은 세제곱 대신 제곱을 쓴 실수(×4)야. 지난번 세제곱을 놓쳤던 그 자리 — 이번엔 2를 세 번 곱했네.",
        "개념키": "math.similarity.basic"
      }
    ],
    "book_diagram_url": "./diagrams/book/2026-08-25_cycle_3.jpg",
    "book_diagram_source": "출처: eomaeomahan suhag_su",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "반원 모양의 종이를 지름을 축으로 하여 한 바퀴 돌렸다. 만들어진 입체도형을 위에서 똑바로 내려다본 모양은 무엇인가? 알맞은 것은?",
        "choices": [
          "원",
          "삼각형",
          "직사각형",
          "반원"
        ],
        "answer": "원",
        "explanation": "반원을 지름을 축으로 돌리면 구가 만들어지고, 구를 위에서 본 모양은 원이다. 구를 위에서 봐도 옆에서 봐도 항상 원으로 보이므로 삼각형·직사각형은 오답. 회전 후에는 더 이상 반원 모양이 아니므로 반원도 오답.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "원기둥·원뿔·구"
      },
      {
        "type": "mcq",
        "question": "어느 마을 학생 200명이 좋아하는 운동을 조사한 띠그래프에서 축구가 35%를 차지했습니다. 축구를 좋아하는 학생은 몇 명입니까?",
        "choices": [
          "70명",
          "65명",
          "75명",
          "35명"
        ],
        "answer": "70명",
        "explanation": "전체 200명의 35%이므로 200×0.35=70명. 65명·75명은 계산 실수로 나온 값이고, 35명은 백분율 숫자를 그대로 인원으로 착각한 오답입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "여러 가지 그래프"
      },
      {
        "type": "mcq",
        "question": "사탕 24개를 형과 동생에게 3 : 5로 나누어 줄 때, 형이 받는 사탕은 몇 개입니까?",
        "choices": [
          "8개",
          "9개",
          "15개",
          "12개"
        ],
        "answer": "9개",
        "explanation": "전체 비의 합은 3+5=8이므로 형은 24×(3/8)=9개를 받습니다. '15개'는 동생 몫(5/8), '12개'는 절반, '8개'는 비의 합과 헷갈린 값으로 틀립니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "비례식과 비례배분"
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-08-25",
  "week": "2026-W35",
  "weakness_focus": [
    "수능 기출 학습",
    "닮음비와 부피비 (2026-08-13 오답, 160 cm³→135 cm³)",
    "닮음비·부피비 (부피비 = 닮음비의 세제곱) (2026-08-14 오답, 1:9→1:3)"
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
  "total_plays": 570,
  "total_correct": 428,
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
        0.75,
        0.789
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
        0.0,
        0.333
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
  "level": 43,
  "xp_total": 4280,
  "xp_in_level": 80,
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
  "page": 13,
  "total": 119,
  "image": "./copywork/today.jpg",
  "weekday": "화",
  "date": "2026-08-25",
  "flagged": false
},
  revenge: {
  "date": "2026-08-25",
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
        "hint": "비와 비율 — 74일 밀린 간격 복습"
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
        "question": "길이가 3 1/3 L인 식용유가 있습니다. 이 식용유를 5/6 L들이 병에 모두 나누어 담으면 병은 몇 개가 되나요?",
        "choices": [
          "4개",
          "3개",
          "5개",
          "2개"
        ],
        "answer": "4개",
        "explanation": "3 1/3 = 10/3 이므로 10/3 ÷ 5/6 = 10/3 × 6/5 = 60/15 = 4개. '3'은 정수 부분만 본 오답, '5'는 나누는 수의 분자만 본 오답, '2'는 6/5 대신 5/6을 다시 곱한 오답입니다.",
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
        "question": "막대그래프를 그릴 때 가로축과 세로축 중 한쪽에는 항목(종류)을, 다른 쪽에는 양(수치)을 나타낸다. 막대그래프에 대한 설명으로 알맞은 것은?",
        "choices": [
          "막대의 길이로 수량의 많고 적음을 한눈에 비교할 수 있다",
          "막대그래프는 전체에서 차지하는 비율만 나타낼 수 있다",
          "막대그래프는 항목이 한 개일 때만 그릴 수 있다",
          "막대그래프는 수량을 숫자로 적을 수 없어 표보다 부정확하다"
        ],
        "answer": "막대의 길이로 수량의 많고 적음을 한눈에 비교할 수 있다",
        "explanation": "막대그래프는 막대 길이로 수량을 비교하는 것이 핵심 장점이다. 비율만 나타내는 것은 원그래프이고, 여러 항목을 비교하려고 쓰며, 눈금으로 수량을 읽을 수 있어 부정확하지 않으므로 나머지는 틀리다.",
        "hint": "기록·자료 정리 — 지금 배우는 단원 워밍업"
      }
    }
  ]
},
  vocab: {
  "date": "2026-08-25",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "애쓰다",
        "친밀함",
        "정확한",
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
        "정확한",
        "친밀함",
        "애쓰다",
        "가리다, 감추다"
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
        "친밀함",
        "정확한"
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
        "어린 시절",
        "~을 이루다",
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
        "추상적인"
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
        "가리다, 감추다",
        "친밀함",
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
        "애쓰다",
        "지역",
        "추상적인",
        "친밀함"
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
        "지역",
        "가리다, 감추다",
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
        "~을 이루다",
        "친밀함",
        "애쓰다",
        "가리다, 감추다"
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
        "어린 시절",
        "셀피, 자기 사진",
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
