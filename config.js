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
    "계보id": "L260827-math-simvol",
    "현재스텝": "M",
    "수능출처": "닮음비·부피비 (도형의 닮음, 수능·학평 빈출 유형)",
    "unit": "닮음비·넓이비·부피비",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "작은 주사위와 큰 주사위가 있어요. 큰 주사위의 한 모서리는 작은 주사위의 2배예요. 큰 주사위의 부피는 작은 주사위의 몇 배일까요?",
        "choices": [
          "2배",
          "4배",
          "8배",
          "16배"
        ],
        "answer": "8배",
        "hint": "부피는 가로·세로·높이 세 방향이 모두 2배가 돼. 2를 세 번 곱하면 몇일까? 2×2×2를 계산해봐.",
        "explanation": "한 모서리가 2배면 가로·세로·높이가 모두 2배야. 부피는 2×2×2=8배. 4배는 넓이(면)만 생각한 함정이고, 2배는 길이만 본 거야. 부피는 '세 번' 곱한다는 걸 기억하면 돼. 잘 골랐어!",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "두 닮은 삼각뿔이 있습니다. 닮음비가 2:3일 때, 두 삼각뿔의 부피비는?",
        "choices": [
          "2:3",
          "4:9",
          "8:27",
          "6:9"
        ],
        "answer": "8:27",
        "hint": "닮음비가 a:b면 부피비는 a³:b³이야. 2와 3을 각각 세제곱해봐. 2³은 8, 그럼 3³은?",
        "explanation": "닮음비 2:3 → 부피비는 각각 세제곱한 2³:3³=8:27이야. 4:9는 넓이비(제곱)라서 함정이고, 2:3은 닮음비를 그대로 쓴 실수야. 부피는 세제곱이라는 걸 붙잡아. 정확했어!",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "큰 컵과 작은 컵이 서로 닮았고, 닮음비는 2:3(작은 컵:큰 컵)입니다. 큰 컵의 부피가 V일 때, 작은 컵의 부피는?",
        "choices": [
          "4/9 V",
          "8/27 V",
          "2/3 V",
          "27/8 V"
        ],
        "answer": "8/27 V",
        "hint": "닮음비가 2:3이면 부피비는 2³:3³. 큰 컵이 27칸이면 작은 컵은 27분의 몇일까? 제곱(넓이) 말고 세제곱(부피)으로 가야 해.",
        "explanation": "닮음비 2:3 → 부피비 8:27. 큰 컵이 27칸이면 작은 컵은 8칸이니 8/27 V야. 4/9 V는 제곱(넓이비)을 쓴 함정 — 지난번에 딱 여기서 미끄러졌지(4/9 V→8/27 V). 부피는 세제곱! 27/8 V는 크기를 뒤집은 거야. 이번엔 정면돌파했어.",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "원뿔을 밑면과 평행하게 잘라 위쪽 작은 원뿔과 아래쪽 원뿔대로 나눕니다. 작은 원뿔과 처음 원뿔의 높이의 비가 1:2일 때, 원뿔대의 부피는 처음 원뿔의 부피의 몇 배인가요?",
        "choices": [
          "1/8배",
          "1/2배",
          "3/4배",
          "7/8배"
        ],
        "answer": "7/8배",
        "hint": "먼저 작은 원뿔의 부피부터 구해봐. 높이비 1:2면 작은 원뿔은 전체의 (1/2)³=1/8. 원뿔대 = 전체 − 작은 원뿔이야.",
        "explanation": "작은 원뿔은 처음 원뿔과 닮았고 닮음비 1:2 → 부피비 1:8, 즉 작은 원뿔=1/8 V. 원뿔대=V−1/8 V=7/8 V야. 1/8은 작은 원뿔 자체를 답한 함정, 3/4는 넓이비(1/4)로 센 실수, 1/2은 높이비 그대로 쓴 거야. 부피는 세제곱임을 끝까지 지켰어. 훌륭해!",
        "개념키": "math.similarity.volume_cube"
      }
    ],
    "보스전": {
      "진짜수능본문": "밑면이 지면과 평행하도록 놓인 원뿔 모양의 빈 그릇이 있다. 이 그릇에 일정한 속도로 물을 부어 그릇을 가득 채우려고 한다. 물의 높이가 그릇 높이의 절반이 되는 순간까지 물을 붓는 데 걸린 시간이 3분이었다. 이때 빈 그릇을 물로 가득 채우는 데 걸리는 시간은? (단, 그릇의 두께는 무시한다.)",
      "진짜수능선택지": [
        "① 6분",
        "② 12분",
        "③ 18분",
        "④ 24분",
        "⑤ 27분"
      ],
      "진짜수능정답": "④",
      "보스전_해설": "물의 높이가 절반이면, 물이 채운 부분은 처음 원뿔과 닮은 작은 원뿔이고 닮음비는 1:2다. E에서 본 정육면체 8배, M에서 본 부피비 8:27처럼 부피비는 닮음비의 세제곱 → 1:8. 즉 절반 높이까지는 전체의 1/8만 채워진다. 속도가 일정하니 1/8을 채우는 데 3분이면 전체(8/8)는 3×8=24분. 여기서 '절반 높이니까 절반 시간(6분)'이나 '제곱해서 4배(12분)'로 새면 함정이다. 부피는 제곱이 아니라 세제곱! H의 원뿔 절단에서 7/8을 구한 원리와 똑같다. 정답 ④ 24분.",
      "강조구간": [
        "물의 높이가 그릇 높이의 절반이 되는 순간",
        "일정한 속도로 물을 부어"
      ]
    },
    "통합풀이법": "닮음비 a:b → 넓이비 a²:b², 부피비 a³:b³ (선 1제곱·면 2제곱·부피 3제곱)",
    "이미지_묘사": "한 변 1과 2인 두 정육면체를 나란히 두고, 작은 정육면체 8개가 큰 정육면체 하나를 꽉 채우는 모습. 옆에 '×2 → 부피 ×8(=2³)' 표시.",
    "book_diagram_url": "./diagrams/book/2026-09-03_cycle_1.jpg",
    "book_diagram_source": "출처: 최소한의 수학지식(EBSMath)",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "식 5/6 ÷ 2/3 을 곱셈으로 바르게 바꾼 것은?",
        "choices": [
          "5/6 × 3/2",
          "5/6 × 2/3",
          "6/5 × 2/3",
          "5/6 ÷ 3/2"
        ],
        "answer": "5/6 × 3/2",
        "explanation": "나누기는 나누는 수 2/3를 뒤집은 3/2를 곱하는 것과 같으므로 5/6 × 3/2가 맞습니다. '5/6 × 2/3'은 뒤집지 않은 오답, '6/5 × 2/3'은 나누는 수가 아니라 나누어지는 수를 뒤집은 오답, '5/6 ÷ 3/2'는 여전히 나눗셈이라 변환이 안 된 오답입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "분수의 나눗셈"
      },
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
        "question": "3/5 ÷ 1/4 을 계산한 값은?",
        "choices": [
          "12/5",
          "3/20",
          "12/20",
          "5/12"
        ],
        "answer": "12/5",
        "explanation": "3/5 ÷ 1/4 = 3/5 × 4/1 = 12/5. '3/20'은 뒤집지 않고 그대로 곱한 오답, '12/20'은 분모를 잘못 곱한 오답, '5/12'는 정답을 거꾸로 뒤집은 오답입니다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "분수의 나눗셈"
      }
    ]
  },
  {
    "id": 2,
    "cycle": 2,
    "subject": "국어",
    "역할": "서브",
    "수능출처": "2023학년도 수능 국어 3번 유형 변형 (문학 화자 태도 + 독서 사실적 이해)",
    "unit": "문학 (화자의 태도) · 본문 대조",
    "통합풀이법": "태도·일치 문제는 '내 느낌'이 아니라 본문 문장에 밑줄 → 보기와 하나씩 O/X 대조",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "다음 시의 화자의 태도로 가장 적절한 것은? / 산속 작은 초가에 홀로 사노라니 / 맑은 바람과 밝은 달이 벗이로다 / 세상 시비 다 잊고 이 강산에 묻혀 살리라",
        "choices": [
          "자연 속에서 속세를 잊고 유유자적하며 만족하고 있다.",
          "고된 농사일의 힘겨움을 사실적으로 그리고 있다.",
          "벼슬길에 나아가지 못한 처지를 한탄하고 있다.",
          "헤어진 임을 그리워하며 슬퍼하고 있다."
        ],
        "answer": "자연 속에서 속세를 잊고 유유자적하며 만족하고 있다.",
        "hint": "화자가 무엇을 '벗' 삼는지, 무엇을 '잊는다'고 했는지 밑줄 그어봐. 자연을 즐기는지, 힘든 일을 그리는지가 갈려.",
        "explanation": "'맑은 바람·밝은 달을 벗 삼고' '세상 시비 다 잊고'라는 표현에서 자연 속에서 속세를 잊고 만족하며 지내는 태도(강호한정)가 드러나. ②는 지난번에 헷갈린 '고된 노동의 사실적 묘사'인데, 이 시엔 힘든 일 얘기가 아예 없어. 본문 근거로 태도를 확인하는 게 핵심이야.",
        "개념키": "kor.literature.speaker_attitude"
      },
      {
        "type": "mcq",
        "question": "윗글의 내용과 일치하는 것은? / 고래는 물속에 살지만 아가미가 아니라 폐로 숨을 쉬는 포유류다. 그래서 일정 시간마다 수면 위로 올라와 숨을 쉬어야 한다. 새끼도 알이 아니라 어미 몸에서 태어나며, 어미의 젖을 먹고 자란다.",
        "choices": [
          "고래는 아가미로 숨을 쉰다.",
          "고래는 알을 낳아 번식한다.",
          "고래는 수면 위로 올라와 숨을 쉰다.",
          "고래는 젖을 먹지 않고 자란다."
        ],
        "answer": "고래는 수면 위로 올라와 숨을 쉰다.",
        "hint": "보기마다 본문에서 그 내용을 말한 문장을 찾아 O/X 표시해봐. '아니라'가 들어간 문장을 특히 조심.",
        "explanation": "본문은 고래가 '폐로 숨을 쉬어' '수면 위로 올라와 숨을 쉬어야 한다'고 했으니 ③이 일치. ①은 '아가미가 아니라 폐', ②는 '알이 아니라 어미 몸에서 태어난다', ④는 '젖을 먹고 자란다'라 모두 본문과 어긋나. 각 보기를 본문 문장과 하나씩 대조하는 습관이 정답을 만든다.",
        "개념키": "kor.reading.factual"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음 중 '서술어'에 해당하는 부분으로 알맞은 것은?  \"파란 바다가 정말 넓다.\"",
        "choices": [
          "파란",
          "바다가",
          "정말",
          "넓다"
        ],
        "answer": "넓다",
        "explanation": "서술어는 '어찌하다/어떠하다/무엇이다'에 해당하며 주어의 상태나 동작을 풀이한다. '넓다'가 바다의 상태를 풀이하는 서술어이다. '파란'은 꾸미는 말(관형어), '바다가'는 주어, '정말'은 부사어이다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "문법 (낱말·문장 성분·높임)"
      },
      {
        "type": "mcq",
        "question": "다음 중 '목적어'를 포함하고 있는 문장으로 알맞은 것은?",
        "choices": [
          "꽃이 활짝 피었다.",
          "하늘이 매우 푸르다.",
          "시온이가 책을 읽는다.",
          "아이가 빠르게 달린다."
        ],
        "answer": "시온이가 책을 읽는다.",
        "explanation": "목적어는 '무엇을/누구를'에 해당하며 '~을/를'이 붙는다. '책을'이 목적어이다. '꽃이 피었다', '하늘이 푸르다', '아이가 달린다'는 모두 목적어 없이 주어와 서술어만 있는 문장이다.",
        "hint": "기본",
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
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "영어",
    "역할": "서브",
    "수능출처": "Grammar Joy 3 (주어-동사 수 일치) 변형",
    "unit": "주어-동사 수 일치 · 명사 복수형",
    "통합풀이법": "동사 고르기 전에 주어의 '진짜 개수'부터. 3인칭 단수 주어→동사에 -s, 복수 주어(-s)→복수동사",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "Every student in the music class ___ to practice the piano every day. (음악 수업의 모든 학생은 매일 피아노를 연습해야 한다.)",
        "choices": [
          "need",
          "needs",
          "are needing",
          "have need"
        ],
        "answer": "needs",
        "hint": "주어가 'Every student'야. Every로 시작하면 단수일까 복수일까? 단수 주어엔 동사에 -s를 붙여.",
        "explanation": "주어 'Every student'는 단수라서 동사도 단수형 'needs'가 맞아. 'Every + 명사'는 항상 단수 취급이야. 'need'는 복수동사, 'are needing/have need'는 수·형태가 어긋나. 지난번 walk→walks처럼 3인칭 단수 주어엔 -s! 핵심어 practice(연습하다)도 챙겨두자.",
        "개념키": "en.grammar.subject_verb_agreement"
      },
      {
        "type": "mcq",
        "question": "The notes on this page ___ organized into a beautiful melody. (이 페이지의 음표들은 아름다운 멜로디로 짜여 있다.)",
        "choices": [
          "is",
          "are",
          "was",
          "has been"
        ],
        "answer": "are",
        "hint": "주어가 'The notes'—끝에 -s가 붙었지? 여러 개의 음표니까 동사도 복수형. is와 are 중 복수는 뭘까?",
        "explanation": "주어 'The notes'가 복수(-s)라서 복수동사 'are'가 맞아. 'is/was/has been'은 단수라 안 돼. 지난번 were→is로 헷갈렸던 부분인데, 주어의 진짜 개수(notes=여러 개)를 먼저 세는 게 핵심. 소리(note)가 여러 개면 are! 핵심어 melody(멜로디)·organized(짜여진)도 기억해.",
        "개념키": "en.grammar.subject_verb_agreement"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "어법상 옳은 문장은?",
        "choices": [
          "Whose is this umbrella?",
          "What is your brothers do?",
          "Who pen is this?",
          "Which is you like?"
        ],
        "answer": "Whose is this umbrella?",
        "explanation": "'이 우산은 누구의 것이니?'를 묻는 Whose is this umbrella?가 올바르다. 나머지는 의문사 선택이나 어순이 틀렸다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 3 의문대명사·의문형용사"
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
      },
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
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-09-03",
  "week": "2026-W36",
  "weakness_focus": [
    "수능 기출 학습",
    "6-2 분수의 나눗셈 / 부피비 = 닮음비의 세제곱 (2026-08-25 오답, 5/18→5/2)",
    "닮음비·넓이비·부피비 (2026-08-27 오답, 100→16)"
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
  "total_plays": 630,
  "total_correct": 474,
  "accuracy": 75,
  "last_date": "2026-09-02",
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
        0.75,
        0.8
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
  "level": 50,
  "xp_total": 4940,
  "xp_in_level": 40,
  "master_units": 2,
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
      "date": "2026-09-02",
      "accuracy": 100,
      "track": "초6"
    },
    {
      "subject": "수학",
      "color": "#5ba0ff",
      "unit": "6-2 분수의 나눗셈",
      "date": "2026-09-02",
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
  "title": "어린이 사복음서 한 달 쓰기",
  "book_key": "사복음서",
  "images": [
    "./copywork/today.jpg"
  ],
  "page": 30,
  "total": 65,
  "image": "./copywork/today.jpg",
  "weekday": "목",
  "date": "2026-09-03",
  "flagged": false
},
  revenge: {
  "date": "2026-09-03",
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
        "question": "다음 네 비율 중 가장 큰 것의 값은 얼마입니까? (7/10, 3/5, 13/20, 1/2)",
        "choices": [
          "0.5",
          "0.6",
          "0.65",
          "0.7"
        ],
        "answer": "0.7",
        "explanation": "분모를 20으로 통일하거나 소수로 바꾸면 7/10=0.7, 3/5=0.6, 13/20=0.65, 1/2=0.5. 가장 큰 값은 0.7입니다. 오답: 0.5·0.6·0.65는 각각 1/2·3/5·13/20의 값으로 더 작습니다.",
        "hint": "비와 비율 — 83일 밀린 간격 복습"
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
      "id": "warmfill-국어",
      "kind": "warmup_fill",
      "label": "오늘 단원 워밍업",
      "과목": "국어",
      "단원": "문학",
      "problem": {
        "type": "mcq",
        "question": "다음 시구에서 사용된 표현 방법은 무엇인가요?  '내 마음은 호수요'",
        "choices": [
          "은유법",
          "직유법",
          "의성법",
          "반어법"
        ],
        "answer": "은유법",
        "explanation": "'~같이/~처럼' 없이 'A는 B다(마음은 호수다)'로 빗댄 것은 은유법이다. 직유법은 연결어를 쓰는 비유, 의성법은 소리를 흉내 낸 표현, 반어법은 속뜻과 반대로 말하는 표현이므로 모두 틀리다.",
        "hint": "문학 — 지금 배우는 단원 워밍업"
      }
    }
  ]
},
  vocab: {
  "date": "2026-09-03",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "셀피, 자기 사진",
        "추상적인",
        "친밀함",
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
        "친밀함",
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
        "모순되지 않는",
        "추상적인",
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
        "추상적인",
        "애쓰다",
        "셀피, 자기 사진",
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
        "애쓰다",
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
        "어린 시절",
        "모순되지 않는",
        "애쓰다",
        "친밀함"
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
        "추상적인",
        "애쓰다",
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
        "지역",
        "~을 이루다",
        "셀피, 자기 사진",
        "가리다, 감추다"
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
        "어린 시절",
        "~을 이루다",
        "친밀함",
        "애쓰다"
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
        "모순되지 않는",
        "~을 이루다",
        "친밀함"
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
