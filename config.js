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
    "수능출처": "2023학년도 수능 국어 31번 문학 형식 참고",
    "unit": "문학 상징·근거를 통한 해석",
    "통합풀이법": "상징은 반복된 행동과 어조로 판단하고, 다른 해석은 작품 속 근거와 대조한다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "담장 틈 작은 민들레 / 발길에 줄기 굽어도 / 다음 날 노란 꽃을 든다 / 낮은 자리에서 해를 향한다. 민들레가 상징하는 바로 가장 적절한 것은?",
        "choices": [
          "시련을 견디고 다시 일어서는 힘",
          "화려한 자리를 차지하려는 욕심",
          "지나간 시간을 후회하는 마음",
          "다른 존재와 멀어지려는 외로움"
        ],
        "answer": "시련을 견디고 다시 일어서는 힘",
        "hint": "민들레가 굽은 뒤 무엇을 했는지 보자. ‘다음 날’과 ‘꽃을 든다’가 상징의 방향을 알려 준다.",
        "explanation": "발길에 굽었지만 다음 날 다시 꽃을 들고 해를 향하므로 민들레는 시련을 견디고 일어서는 힘을 상징한다. 욕심·후회·외로움은 작품에 근거가 없다. 상징 문제에서는 한 단어보다 대상이 끝내 보인 행동을 확인하면 된다.",
        "개념키": "kor.literature"
      },
      {
        "type": "mcq",
        "question": "민서는 민들레가 포기했다고 해석했지만, 서준이 ‘다음 날 다시 꽃을 들었다’는 근거를 제시하자 해석을 고쳤다. 이에 대한 설명으로 가장 적절한 것은?",
        "choices": [
          "다른 사람의 의견은 작품 이해와 관계없다",
          "근거를 나누면 작품 이해가 넓어질 수 있다",
          "처음의 해석은 근거와 상관없이 유지해야 한다",
          "서로 다른 해석은 모두 틀린 해석이다"
        ],
        "answer": "근거를 나누면 작품 이해가 넓어질 수 있다",
        "hint": "민서의 생각이 언제 바뀌었는지 찾자. 서준은 느낌만 말하지 않고 작품 속 구절을 근거로 제시했다.",
        "explanation": "서준은 작품 속 구절을 근거로 해석을 제시했고, 민서는 놓친 내용을 확인해 생각을 고쳤다. 따라서 의견과 근거를 나누면 이해가 넓어진다는 설명이 맞다. ‘다른 의견은 읽기와 무관하다’는 지난 오답과 같은 정반대 함정이다.",
        "개념키": "kor.reading.nonfiction"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "설명하는 글(설명문)의 특징으로 알맞은 것은?",
        "choices": [
          "어떤 대상이나 사실을 읽는 사람이 이해하기 쉽게 알려 준다.",
          "글쓴이의 주장을 내세워 읽는 사람을 설득한다.",
          "꾸며 낸 이야기로 감동과 재미를 준다.",
          "그날 있었던 일과 느낌을 일기처럼 적는다."
        ],
        "answer": "어떤 대상이나 사실을 읽는 사람이 이해하기 쉽게 알려 준다.",
        "explanation": "설명문은 정보나 사실을 알기 쉽게 전달하는 글이다. '주장을 내세워 설득'은 주장하는 글(논설문), '꾸며 낸 이야기'는 이야기 글(소설), '그날 일과 느낌'은 일기에 해당하므로 모두 오답.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "읽기 (비문학·설명문·주장하는 글)"
      },
      {
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
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "문학 (시·이야기 읽기)"
      },
      {
        "type": "mcq",
        "question": "다음 시의 한 부분이다. '하늘에 둥근 쟁반이 떠 있다'에서 달을 '둥근 쟁반'에 빗대어 표현한 방법을 무엇이라고 하나요?",
        "choices": [
          "비유",
          "반복",
          "운율",
          "주제"
        ],
        "answer": "비유",
        "explanation": "어떤 대상을 비슷한 다른 것에 빗대어 표현하는 방법이 '비유'다. 달을 둥근 쟁반에 빗댔으므로 비유. 반복은 같은 말을 거듭하는 것, 운율은 시의 가락(리듬), 주제는 글쓴이가 전하려는 중심 생각이므로 모두 틀리다.",
        "hint": "기본",
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
    "계보id": "L260827-math-simvol",
    "현재스텝": "M",
    "수능출처": "닮음비·부피비 (도형의 닮음, 수능·학평 빈출 유형)",
    "unit": "6-2 분수의 나눗셈·닮음비·부피비",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "한 모서리가 1cm인 쌓기나무로 큰 정육면체를 만든다. 큰 정육면체의 한 모서리가 쌓기나무의 3배일 때 필요한 쌓기나무는 몇 개인가?",
        "choices": [
          "3개",
          "9개",
          "27개",
          "81개"
        ],
        "answer": "27개",
        "hint": "한 줄이나 한 면만 세면 안 된다. 가로·세로·높이에 각각 쌓기나무가 몇 개씩 놓이는지 곱해 보자.",
        "explanation": "한 모서리에 3개씩 놓이므로 전체 개수는 3×3×3=27개다. 3은 한 줄만 센 값, 9는 한 면만 센 값이다. 부피는 가로·세로·높이 세 방향을 모두 곱하므로 길이가 3배면 부피는 3³=27배가 된다.",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "서로 닮은 두 정육면체의 닮음비가 2:3이다. 작은 정육면체의 부피가 24cm³일 때 큰 정육면체의 부피는?",
        "choices": [
          "36cm³",
          "54cm³",
          "72cm³",
          "81cm³"
        ],
        "answer": "81cm³",
        "hint": "닮음비 2:3을 먼저 세제곱하자. 부피비 8:27에서 24가 8칸이라면 한 칸의 크기는 얼마일까?",
        "explanation": "닮음비 2:3이므로 부피비는 2³:3³=8:27이다. 작은 부피 24가 8칸이므로 한 칸은 24÷8=3, 큰 부피는 3×27=81cm³이다. 36은 길이비, 54는 넓이비만 적용한 함정이다.",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "큰 정육면체와 작은 정육면체의 닮음비가 2:1이다. 큰 정육면체의 부피가 64cm³일 때 작은 정육면체의 부피는?",
        "choices": [
          "8cm³",
          "16cm³",
          "32cm³",
          "48cm³"
        ],
        "answer": "8cm³",
        "hint": "부피비는 2³:1³=8:1이다. 작은 부피는 큰 부피의 절반이 아니라 8분의 1이다. 64를 8로 나눠 보자.",
        "explanation": "닮음비 2:1을 세제곱하면 부피비는 8:1이다. 따라서 작은 부피는 64÷8=8cm³이다. 32는 길이가 절반이니 부피도 절반이라고 본 오개념, 16은 넓이비 4:1을 적용한 값이다. ‘절반’ 대신 세제곱을 확인하자.",
        "개념키": "math.similarity.volume_cube"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "서로 닮은 두 원뿔의 겉넓이의 비가 4:9이다. 작은 원뿔의 부피가 16cm³일 때 큰 원뿔의 부피는?",
        "choices": [
          "36cm³",
          "54cm³",
          "72cm³",
          "108cm³"
        ],
        "answer": "54cm³",
        "hint": "겉넓이비 4:9에서 제곱근을 취해 닮음비를 구하자. 그 닮음비를 다시 세제곱하면 부피비가 된다.",
        "explanation": "겉넓이비 4:9의 제곱근을 취하면 닮음비는 2:3이다. 부피비는 8:27이므로 큰 부피는 16÷8×27=54cm³이다. 36은 겉넓이비를 그대로 적용한 값이다. 제곱을 벗긴 뒤 세제곱하는 순서를 지키면 된다.",
        "개념키": "math.similarity.basic"
      }
    ],
    "보스전": {
      "진짜수능본문": "그림과 같이 꼭짓점이 아래로 향한 원뿔 모양의 그릇에 일정한 속력으로 물을 붓고 있다. 물이 담긴 부분은 항상 그릇 전체와 닮은 원뿔을 이룬다. 물을 붓기 시작한 지 10분 후 수면의 높이는 그릇 높이의 1/3이 되었다. 그릇의 두께는 무시하고, 단위 시간에 들어오는 물의 양은 일정하다. 이 그릇을 가득 채우는 데 걸리는 시간은?",
      "진짜수능선택지": [
        "30분",
        "90분",
        "180분",
        "260분",
        "270분"
      ],
      "진짜수능정답": "⑤",
      "보스전_해설": "물이 담긴 작은 원뿔과 그릇 전체의 닮음비는 높이의 비와 같은 1:3이다. E에서 세 방향을 곱했고, M에서 닮음비를 세제곱했으므로 부피비는 1³:3³=1:27이다. 일정한 속력으로 물을 부으므로 시간의 비도 부피의 비와 같다. 전체 부피의 1/27을 채우는 데 10분이 걸렸으니 전체 시간은 10×27=270분이다. 30분은 높이비만, 90분은 넓이비만 적용한 함정이다. 260분은 남은 시간일 뿐 가득 채우는 전체 시간이 아니다.",
      "강조구간": [
        "수면의 높이는 그릇 높이의 1/3",
        "단위 시간에 들어오는 물의 양은 일정",
        "가득 채우는 데 걸리는 시간"
      ]
    },
    "통합풀이법": "닮음비 a:b → 넓이비 a²:b² → 부피비 a³:b³. 부피는 세제곱.",
    "book_diagram_url": "./diagrams/book/2026-08-31_cycle_2.jpg",
    "book_diagram_source": "출처: eomaeomahan suhag_su",
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
        "question": "육각뿔의 모서리는 모두 몇 개일까요?",
        "choices": [
          "6개",
          "7개",
          "12개",
          "18개"
        ],
        "answer": "12개",
        "explanation": "n각뿔의 모서리 수는 2n개입니다. 육각뿔은 n=6이므로 2×6=12개. 6개는 밑면 변만 센 것, 7개는 면 수(6+1), 18개는 육각기둥의 모서리(3×6)와 혼동한 오답입니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "각기둥과 각뿔"
      },
      {
        "type": "mcq",
        "question": "비례식 5 : 8 = 15 : 24 에서 외항의 곱은 얼마입니까?",
        "choices": [
          "40",
          "75",
          "120",
          "192"
        ],
        "answer": "120",
        "explanation": "외항은 비례식의 바깥쪽 두 수 5와 24이므로 외항의 곱은 5×24=120입니다. (내항의 곱 8×15도 120으로 같습니다) '40'은 5×8, '75'는 5×15, '192'는 8×24로 외항의 곱이 아닙니다.",
        "hint": "기본",
        "_bank": "llm2",
        "_unit": "비례식과 비례배분"
      }
    ]
  },
  {
    "id": 3,
    "cycle": 3,
    "subject": "영어",
    "역할": "서브",
    "수능출처": "2022학년도 수능 영어 26번 인물 소개문 형식 참고",
    "unit": "Grammar Joy 3 전체·주어-동사 수 일치",
    "통합풀이법": "동사와 가까운 명사가 아니라 문장의 진짜 주어를 찾아 단수·복수를 맞춘다.",
    "한국어_해석": "지나는 학생 자원봉사자이다. 매일 아침 동물병원으로 걸어간다. 간식 상자 하나가 문 옆에 있다. 지나는 직원들이 아픈 강아지를 돌보는 일을 돕는다.",
    "핵심_단어": [
      {
        "en": "volunteer",
        "ko": "자원봉사자"
      },
      {
        "en": "clinic",
        "ko": "병원"
      },
      {
        "en": "treat",
        "ko": "간식"
      },
      {
        "en": "care for",
        "ko": "돌보다"
      }
    ],
    "문법_포인트": "she와 a box는 모두 3인칭 단수이므로 현재형 동사는 walks, is를 쓴다.",
    "학년별_활용": "초6: 한국어 해석으로 내용을 먼저 이해하고, 주어에 동그라미를 친 뒤 동사를 고른다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "Every morning, she ___ to an animal clinic. 빈칸에 알맞은 것은?",
        "choices": [
          "walk",
          "walks",
          "walking",
          "walked"
        ],
        "answer": "walks",
        "hint": "Every morning은 반복되는 현재 습관이다. 주어 she가 한 명일 때 현재형 일반동사 끝에 무엇을 붙이는지 생각하자.",
        "explanation": "주어 she는 3인칭 단수이고 every morning은 현재의 반복 습관을 나타내므로 walks가 맞다. walk는 I·you·복수 주어에 쓰는 형태다. 지난번처럼 walk를 고르기 전에 주어가 한 명인지 확인하고 동사에 -s를 붙이자.",
        "개념키": "en.agreement.subject_verb"
      },
      {
        "type": "mcq",
        "question": "A box of treats ___ beside the door. 빈칸에 알맞은 것은?",
        "choices": [
          "am",
          "are",
          "is",
          "were"
        ],
        "answer": "is",
        "hint": "of treats는 box를 꾸미는 말이다. 진짜 주어 A box가 하나인지 여러 개인지 먼저 판단하자.",
        "explanation": "진짜 주어는 treats가 아니라 A box이므로 단수다. 현재 상태를 말하므로 단수 be동사 is가 맞다. 가까이에 있는 복수명사 treats를 보고 are를 고르면 안 된다. 수 일치는 동사 바로 앞 단어가 아니라 주어의 중심 명사와 맞춘다.",
        "개념키": "en.agreement.subject_verb"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음 중 명사의 복수형이 잘못된 것은? (규칙 복수형)",
        "choices": [
          "cats",
          "dogs",
          "books",
          "babys"
        ],
        "answer": "babys",
        "explanation": "'자음 + y'로 끝나는 명사는 y를 i로 바꾸고 -es를 붙여 baby → babies가 된다. 따라서 'babys'는 틀린 복수형이다. cats, dogs, books는 모두 -s만 붙이는 규칙 복수형으로 올바르다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 01 셀 수 있는 명사"
      },
      {
        "type": "mcq",
        "question": "단위 표현이 잘못 짝지어진 것은?",
        "choices": [
          "a piece of paper",
          "a loaf of bread",
          "a glass of juice",
          "a slice of water"
        ],
        "answer": "a slice of water",
        "explanation": "water(물)는 잔에 담아 a glass of water로 세지, slice(얇은 조각)로 셀 수 없어 'a slice of water'가 틀린 짝이다. paper-piece, bread-loaf, juice-glass는 모두 올바른 단위 짝이다.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 02 셀 수 없는 명사"
      },
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
      }
    ]
  },
  {
    "id": 4,
    "cycle": 4,
    "subject": "통합과학",
    "역할": "서브",
    "수능출처": "2026학년도 수능 통합과학 자료·보기 형식 참고",
    "unit": "기록·자료 정리·변인 통제와 대조 실험",
    "통합풀이법": "원인을 확인하려면 비교하려는 조건 하나만 다르게 하고, 직접 측정한 결과를 종속변인으로 찾는다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "A는 건식 사료·물 20mL·42초, B는 습식 사료·물 20mL·29초, C는 습식 사료·물 40mL·25초이다. 사료 종류가 먹는 시간에 미치는 영향을 알아보기 위해 비교해야 할 실험은?",
        "choices": [
          "A와 B",
          "A와 C",
          "B와 C",
          "A, B, C 모두"
        ],
        "answer": "A와 B",
        "hint": "사료 종류만 다르고 물의 양과 그릇은 같은 두 실험을 찾자. 바뀐 조건이 정확히 하나여야 한다.",
        "explanation": "A와 B는 사료 종류만 다르고 물의 양과 그릇은 같다. 따라서 시간 차이를 사료 종류의 영향으로 해석할 수 있다. A와 C는 사료와 물의 양이 함께 달라 원인을 구별할 수 없고, B와 C는 물의 양을 비교하는 실험이다.",
        "개념키": "sci.method.variables"
      },
      {
        "type": "mcq",
        "question": "위 실험에서 ㄱ. A와 B의 조작변인은 사료의 종류이다. ㄴ. 걸린 시간은 종속변인이다. ㄷ. A와 C는 사료의 종류만 다르다. 옳은 것만 고른 것은?",
        "choices": [
          "ㄱ",
          "ㄴ",
          "ㄱ, ㄴ",
          "ㄱ, ㄴ, ㄷ"
        ],
        "answer": "ㄱ, ㄴ",
        "hint": "실험자가 바꾼 것은 조작변인, 그 결과로 직접 잰 것은 종속변인이다. A와 C의 물의 양도 비교하자.",
        "explanation": "A와 B에서 바꾼 조건은 사료 종류이므로 ㄱ이 맞고, 그 결과로 측정한 먹는 시간이 종속변인이므로 ㄴ도 맞다. A와 C는 사료뿐 아니라 물의 양도 20mL와 40mL로 다르므로 ㄷ은 틀리다. 표의 모든 열을 끝까지 비교하자.",
        "개념키": "sci.method.variables"
      }
    ],
    "book_diagram_url": "./diagrams/book/2026-08-31_cycle_4.png",
    "book_diagram_source": "출처: 101가지 초등수학 질문사전",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "공정한 비교 실험에서 바꾼 조건(다르게 한 조건)은 몇 개여야 하는가?",
        "choices": [
          "1개",
          "2개",
          "3개",
          "4개"
        ],
        "answer": "1개",
        "explanation": "공정한 실험에서는 바꾼 조건을 딱 1개만 두고 나머지는 모두 같게 해야, 결과가 그 한 가지 때문에 달라졌다고 말할 수 있다. 바꾼 조건이 2개·3개·4개이면 어떤 조건이 결과를 만들었는지 알 수 없으므로 나머지는 오답이다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "변인·관찰·실험 입문 (조건 비교)"
      },
      {
        "type": "mcq",
        "question": "민지는 식물이 잘 자라는 데 햇빛이 영향을 주는지 알아보려고 한다. 화분 두 개를 준비했는데, 한 화분만 햇빛이 드는 창가에 두고 다른 화분은 어두운 상자 안에 두었다. 이때 두 화분에서 일부러 다르게 한 조건(바꾼 조건)은 무엇인가?",
        "choices": [
          "햇빛의 양",
          "물의 양",
          "흙의 종류",
          "화분의 크기"
        ],
        "answer": "햇빛의 양",
        "explanation": "실험에서 일부러 바꾸는 조건을 '바꾼 조건'(독립변인)이라고 한다. 햇빛이 식물에 미치는 영향을 알아보려면 햇빛만 다르게 하므로 정답은 햇빛의 양이다. 물의 양·흙의 종류·화분의 크기는 결과를 공정하게 비교하려면 똑같이 맞춰야 하는 조건이므로 바꾸면 안 되어 오답이다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "변인·관찰·실험 입문 (조건 비교)"
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
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-08-31",
  "week": "2026-W36",
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
  "total_plays": 604,
  "total_correct": 453,
  "accuracy": 75,
  "last_date": "2026-08-28",
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
        0.5,
        0.567,
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
        0.5,
        0.6,
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
        0.5,
        0.556,
        0.5
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
  "level": 46,
  "xp_total": 4530,
  "xp_in_level": 30,
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
  "title": "어린이 사복음서 한 달 쓰기",
  "book_key": "사복음서",
  "images": [
    "./copywork/today.jpg"
  ],
  "page": 29,
  "total": 65,
  "image": "./copywork/today.jpg",
  "weekday": "월",
  "date": "2026-08-31",
  "flagged": false
},
  revenge: {
  "date": "2026-08-31",
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
        "hint": "비와 비율 — 80일 밀린 간격 복습"
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
        "question": "다음 시에 쓰인 표현 방법과 그 효과에 대한 설명으로 알맞은 것은 무엇인가요?  '졸졸졸 시냇물이 / 산을 내려오며 / 나를 따라온다'",
        "choices": [
          "'졸졸졸'은 소리를 흉내 낸 말이고, '시냇물이 나를 따라온다'는 사물을 사람처럼 나타낸 의인법이다.",
          "'졸졸졸'은 모양을 흉내 낸 말이고, 시 전체에 비유가 전혀 쓰이지 않았다.",
          "이 시에는 운율이 없고 흉내 내는 말도 쓰이지 않았다.",
          "'시냇물이 나를 따라온다'는 직유법으로, '~처럼'이라는 말이 쓰였다."
        ],
        "answer": "'졸졸졸'은 소리를 흉내 낸 말이고, '시냇물이 나를 따라온다'는 사물을 사람처럼 나타낸 의인법이다.",
        "explanation": "'졸졸졸'은 소리를 흉내 낸 의성어이고, 시냇물이 '따라온다'는 사물을 사람처럼 표현한 의인법이다. '졸졸졸'은 모양이 아니라 소리 흉내말이고, 흉내말·운율이 모두 쓰였으며, '~처럼'이 없으므로 직유법도 아니다. 따라서 나머지는 틀리다.",
        "hint": "문학 — 지금 배우는 단원 워밍업"
      }
    }
  ]
},
  vocab: {
  "date": "2026-08-31",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "어린 시절",
        "애쓰다",
        "정확한",
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
        "지역",
        "친밀함",
        "어린 시절",
        "애쓰다"
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
        "애쓰다",
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
        "가리다, 감추다",
        "모순되지 않는",
        "지역",
        "셀피, 자기 사진"
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
        "어린 시절",
        "친밀함",
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
        "모순되지 않는",
        "셀피, 자기 사진",
        "정확한",
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
        "모순되지 않는",
        "친밀함",
        "애쓰다",
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
        "추상적인",
        "가리다, 감추다",
        "애쓰다",
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
