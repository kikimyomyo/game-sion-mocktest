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
    "현재스텝": "M",
    "수능출처": "2025학년도 수능 수학 15번",
    "unit": "다항식 (단권화 수학(상) 18쪽)",
    "사다리_문항": [
      {
        "스텝": "E",
        "type": "mcq",
        "question": "3 × ( 20 + 4 )를 \"3 × 20 + 3 × 4\"로 나누어 계산하면? (곱셈의 분배법칙)",
        "choices": [
          "62",
          "72",
          "82",
          "84"
        ],
        "answer": "72",
        "hint": "먼저 3×20을 구해봐. 60이지? 거기에 3×4=12를 더하면 끝.",
        "explanation": "분배법칙은 3×(20+4)=3×20+3×4=60+12=72. 함정은 20+4=24를 먼저 하고 3을 곱해도 72로 같다는 것 — 이 문제에선 두 방법 모두 정답이지만, 문자가 오면 나누는 습관이 필수다. 안심: 분배법칙은 순서를 바꿔도 항상 같은 값이다.",
        "개념키": "math.poly.distributive"
      },
      {
        "스텝": "E",
        "type": "mcq",
        "question": "한 변이 (10 + 2)cm인 정사각형의 넓이를 분배법칙으로 구하면?",
        "choices": [
          "24cm²",
          "100cm²",
          "120cm²",
          "144cm²"
        ],
        "answer": "144cm²",
        "hint": "넓이는 한 변 × 한 변. (10+2)×(10+2)에서 각 조각끼리 곱해봐: 10×10, 10×2, 2×10, 2×2.",
        "explanation": "(10+2)² = 10×10 + 10×2 + 2×10 + 2×2 = 100+20+20+4 = 144cm². 함정: 10+2를 그냥 두고 10+2×2=24로 계산하거나, 한 조각만 계산한 120을 고르는 실수. 겹치는 가운데 조각(10×2가 두 번)을 빠뜨리지 않는 게 핵심이다.",
        "개념키": "math.poly.distributive"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "3x² + 5x − 2x² + x 에서 계수가 같은 문자끼리 묶어 정리한 식은?",
        "choices": [
          "x² + 6x",
          "5x² + 6x",
          "x² + 4x",
          "x⁴ + 6x"
        ],
        "answer": "x² + 6x",
        "hint": "x²끼리: 3−2=1. x끼리: 5+1=6. 지수가 다른 항은 절대 합치지 마.",
        "explanation": "3x²−2x² = x², 5x+x = 6x → x²+6x. 함정: x²과 x를 같은 것으로 보고 합쳐 x³이나 x⁴로 만드는 실수, 또는 3−2를 할 때 부호를 놓쳐 5x²로 만드는 실수. 지수가 다르면 완전히 다른 종류의 항이다. 어제 '계수를 다르게 봤다'는 흐름 — 오늘은 지수까지 같은지 두 번 확인하자.",
        "개념키": "math.poly.like_terms"
      },
      {
        "스텝": "M",
        "type": "mcq",
        "question": "2( x + 3 ) − ( x − 1 ) 을 계산한 결과는? (괄호 앞의 −는 괄호 안 모든 항의 부호를 바꾼다)",
        "choices": [
          "x + 7",
          "x + 5",
          "3x + 5",
          "x + 2"
        ],
        "answer": "x + 7",
        "hint": "먼저 분배로 괄호를 풀어: 2x+6−x+1. −(x−1)는 −x, +1이 된다는 점에 주의.",
        "explanation": "2(x+3)=2x+6, −(x−1)=−x+1. 합하면 2x−x+6+1 = x+7. 함정: −1이 −1로 남아 x+5가 되는 실수 — 괄호 앞 −는 안의 모든 항을 바꾼다. x+2는 6+1을 안 더한 값, 3x+5는 −x를 +x로 잘못 본 값. E에서 분배했던 그 손을 문자에 쓴 것뿐이다.",
        "개념키": "math.poly.like_terms_linear"
      },
      {
        "스텝": "H",
        "type": "mcq",
        "question": "A = 2x² − 3x + 1, B = x² + 5x − 4 일 때, A + B 는?",
        "choices": [
          "3x² + 2x − 3",
          "3x² − 2x + 5",
          "x² + 2x − 3",
          "3x² + 2x + 3"
        ],
        "answer": "3x² + 2x − 3",
        "hint": "세로로 정렬해서 같은 차수끼리 세로줄로 더해봐: x²줄, x줄, 상수줄.",
        "explanation": "x²: 2+1=3, x: −3+5=2, 상수: 1+(−4)=−3 → 3x²+2x−3. 함정: 1−4를 5로 계산한 ②(부호 실수), x²항을 묶지 않은 ③. 다항식 덧셈은 '동류항끼리 세로줄'이면 실수가 사라진다. 중학교에서 두 개까지 하던 묶음을 고등학교에서는 개수 제한 없이 한다.",
        "개념키": "math.poly.addition"
      }
    ],
    "보스전": {
      "진짜수능본문": "상수 a(a≠3√5)와 최고차항의 계수가 음수인 이차함수 f(x)에 대하여 함수 g(x) = { x³ + ax² + 15x + 7 (x ≤ 0), f(x) (x > 0) } 이 다음 조건을 만족시킨다. (가) 함수 g(x)는 실수 전체의 집합에서 미분가능하다. (나) x에 대한 방정식 g′(x) × g′(x−4) = 0의 서로 다른 실근의 개수는 4이다. g(−2) + g(2)의 값은?",
      "진짜수능선택지": [
        "28",
        "30",
        "32",
        "34",
        "36"
      ],
      "진짜수능정답": "③",
      "보스전_해설": "미분가능 조건에서 f′(0)=g′(0)=15이므로 f′(x)=kx+15 (k<0). x≤0에서 g′(x)=3x²+2ax+15. x>0에서 g′의 근은 하나 p=−15/k>0. 조건 (나)는 g′(x)=0의 근과 g′(x−4)=0의 근(=g′의 근을 4만큼 오른쪽으로 옮긴 것)을 합쳐 4개라는 뜻. 이때 '근 차이가 4'와 'p가 근+4'가 동시에 성립해야 겹침이 2개 생겨 6−2=4가 된다. 근차이 4 → (2a/3)²−4·5=16에서 a²=81, a=9 → 근 −5, −1. p=−1+4=3 → k=−5, f(x)=−(5/2)x²+15x+7. g(−2)=−8+36−30+7=5, g(2)=f(2)=−10+30+7=27. 합은 32. 오늘 E의 분배·M의 동류항 정리는 이 문제의 전개와 정리 단계에서, 다항식 덧셈은 근을 비교할 때 그대로 쓰였다 — 단권화 18쪽 '다항식'이 여기 도구로 들어간 것이다.",
      "강조구간": [
        "a(a≠3√5)",
        "서로 다른 실근의 개수는 4이다",
        "미분가능"
      ]
    },
    "통합풀이법": "괄호는 분배로 풀고, 같은 차수끼리만 묶는다 — 지수 다르면 다른 항.",
    "이미지_묘사": "직사각형이 (10+2)×(10+2) 네 조각(100, 20, 20, 4)으로 쪼개진 도식, 각 조각에 넓이 표기",
    "book_diagram_url": "./diagrams/book/2026-09-07_cycle_1.jpg",
    "book_diagram_source": "출처: suhageul jalhago sip",
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "전체 300명을 조사한 띠그래프에서 야구가 25%, 농구가 15%였습니다. 야구와 농구를 좋아하는 학생을 합하면 모두 몇 명입니까?",
        "choices": [
          "120명",
          "40명",
          "75명",
          "45명"
        ],
        "answer": "120명",
        "explanation": "두 항목 비율의 합은 25+15=40%이고, 300×0.40=120명입니다. 40명은 백분율 합을 인원으로 착각한 값, 75명은 야구만(25%)의 인원, 45명은 농구만(15%)의 인원이라 틀립니다.",
        "hint": "응용",
        "_bank": "llm2",
        "_unit": "여러 가지 그래프"
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
    "id": 2,
    "cycle": 2,
    "subject": "국어",
    "역할": "서브",
    "수능출처": "2021학년도 수능 국어 8번",
    "unit": "문학·작문 (발표문 인용 구실)",
    "통합풀이법": "정의가 아니라 따옴표 안 다른 사람의 말이면 '인용'이다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "발표문의 한 부분: \"학문에서 '개념'이라는 말은 생각보다 오래된 뿌리를 가진다. 철학자 ○○는 이를 두고 '사물을 한데 묶어 부르는 이름의 틀'이라 했다.\" 이 글이 '개념'을 다루는 방식은?",
        "choices": [
          "발표자가 직접 정의를 내렸다",
          "전문가의 말을 직접 인용했다",
          "반대 의견을 먼저 제시했다",
          "구체적 사례만 나열했다"
        ],
        "answer": "전문가의 말을 직접 인용했다",
        "explanation": "'철학자 ○○는 이를 두고 ~라 했다'는 발표자 자신의 정의가 아니라 전문가의 말을 그대로 가져온 인용이다. 8번에서 '개념을 정의한다'를 골랐던 실수 — 정의처럼 보여도 누가 말했는지가 기준이다. 안심: 따옴표와 화자 이름이 보이면 일단 인용부터 의심하자.",
        "hint": "'~라 했다'는 누구의 말이지? 발표자 자신의 말인지 확인해봐.",
        "개념키": "kor.writing"
      },
      {
        "type": "mcq",
        "question": "발표자가 이어서 \"그러므로 개념은 언제나 한 사람의 정의로 완성되지 않는다\"고 말했다면, 앞의 인용은 글의 흐름에서 어떤 구실인가?",
        "choices": [
          "주장의 근거를 보강하는 근거",
          "반대 입장을 소개하는 장치",
          "결론을 미리 밝히는 요약",
          "본론과 무관한 덧붙임"
        ],
        "answer": "주장의 근거를 보강하는 근거",
        "explanation": "'그러므로'는 앞 내용이 뒤 주장의 근거였다는 신호다. 전문가의 정의를 인용한 뒤 '한 사람의 정의로 완성되지 않는다'는 주장을 내놓았으므로 인용은 근거 구실을 한다. 안심: 접속어(그러므로, 그러나, 즉)만 찾아도 인용의 구실이 바로 보인다.",
        "hint": "'그러므로' 앞에 온 내용은 글에서 보통 어떤 구실을 할까?",
        "개념키": "kor.writing"
      }
    ],
    "챌린지_추가": [
      {
        "type": "mcq",
        "question": "다음 중 '합성어'(두 낱말이 합쳐진 낱말)로 알맞은 것은?",
        "choices": [
          "하늘",
          "바다",
          "손수건",
          "구름"
        ],
        "answer": "손수건",
        "explanation": "'손수건'은 '손'+'수건'이 합쳐진 합성어로, 각각 뜻을 가진 두 낱말이 결합했다. '하늘', '바다', '구름'은 더 작은 뜻 단위로 나눌 수 없는 하나의 낱말(단일어)이므로 합성어가 아니다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "문법 (낱말·문장 성분·높임)"
      },
      {
        "type": "mcq",
        "question": "다음 문장에서 주어에 해당하는 부분은? '귀여운 강아지가 마당에서 뛴다.'",
        "choices": [
          "귀여운",
          "강아지가",
          "마당에서",
          "뛴다"
        ],
        "answer": "강아지가",
        "explanation": "동작의 주체를 나타내는 '강아지가'가 주어다. '귀여운'은 관형어, '마당에서'는 부사어, '뛴다'는 서술어다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "문법 (품사·문장 성분)"
      },
      {
        "type": "mcq",
        "question": "다음 문장에서 '주어'에 해당하는 부분으로 알맞은 것은?  \"동생이 사과를 맛있게 먹는다.\"",
        "choices": [
          "동생이",
          "사과를",
          "맛있게",
          "먹는다"
        ],
        "answer": "동생이",
        "explanation": "주어는 '누가/무엇이'에 해당하며 '~이/가'가 붙는다. '동생이'가 먹는 동작의 주체이므로 주어이다. '사과를'은 목적어, '맛있게'는 부사어, '먹는다'는 서술어이므로 모두 주어가 아니다.",
        "hint": "기본",
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
    "수능출처": "2020학년도 수능 영어 34번",
    "unit": "주어-동사 수 일치 (음악 소재)",
    "통합풀이법": "주어의 심장부(진짜 주어)를 찾아라 — of 뒤는 함정이다.",
    "변형문제_세트": [
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? \"The pitch of most musical sounds ____ slowly when a singer grows older.\"",
        "choices": [
          "lower",
          "lowers",
          "lowering",
          "to lower"
        ],
        "answer": "lowers",
        "explanation": "진짜 주어는 of 이하가 아닌 The pitch(단수)이므로 동사에 -s를 붙인 lowers. 8월 27일 walk→walks 오답과 같은 유형 — of 뒤의 복수 명사 sounds에 끌리면 틀린다. 핵심 단어: pitch(음높이), musical sound(악음). 안심: 주어 심장부만 잡으면 수 일치는 기계적으로 풀린다.",
        "hint": "of 앞의 진짜 주어가 단수인지 복수인지부터 확인해봐.",
        "개념키": "en.agreement.subject_verb"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? \"A melody, unlike random noises, ____ a series of notes arranged in an understood order.\"",
        "choices": [
          "are",
          "were",
          "is",
          "be"
        ],
        "answer": "is",
        "explanation": "진짜 주어는 A melody(단수)이고 unlike random noises는 삽입구라 동사와 무관하다. 단수 주어 → is. 8월 31일 are→is 오답의 정면 보강. 2020년 34번처럼 멜로디는 '이해된 순서로 배열된 음의 계열'이라는 취지. 핵심 단어: melody(선율), series(계열), note(음). 안심: 콤마 사이 구를 지우고 주어+동사만 읽으면 답이 보인다.",
        "hint": "콤마 사이의 삽입구를 손으로 가리고 주어+동사만 읽어봐.",
        "개념키": "en.agreement.subject_verb"
      }
    ],
    "챌린지_추가": [
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
        "question": "연필(pencil) 한 다스는 12자루다. 시온이가 2다스 사고 3자루를 잃어버렸다면 남은 연필은 몇 자루인가? (단위: 자루)",
        "choices": [
          "9자루",
          "15자루",
          "21자루",
          "24자루"
        ],
        "answer": "21자루",
        "explanation": "연필은 셀 수 있는 명사다. 2다스 = 12 × 2 = 24자루, 여기서 3자루를 빼면 24 - 3 = 21자루. 9자루는 12-3이라 오답, 15자루는 12+3이라 오답, 24자루는 잃어버린 것을 안 뺀 값이라 오답.",
        "hint": "응용",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 01 셀 수 있는 명사"
      },
      {
        "type": "mcq",
        "question": "빈칸에 알맞은 것은? 'I drink ___ milk every morning.'",
        "choices": [
          "a milk",
          "milks",
          "two milk",
          "milk"
        ],
        "answer": "milk",
        "explanation": "milk(우유)는 셀 수 없는 명사라서 a를 붙이거나 복수형(milks)을 만들지 않고 그냥 milk로 쓴다. a milk·milks·two milk는 모두 셀 수 없는 명사에 잘못된 형태를 붙여 틀렸다.",
        "hint": "기본",
        "_bank": "llm",
        "_unit": "Grammar Joy 1 Unit 02 셀 수 없는 명사"
      }
    ]
  }
],
  meta: {
  "generated_at": "2026-09-07",
  "week": "2026-W37",
  "weakness_focus": [
    "수능 기출 학습",
    "6-2 분수의 나눗셈·닮음비·부피비 (2026-08-31 오답, 72cm³→54cm³)",
    "6-2 분수의 나눗셈·닮음비·부피비 (2026-08-31 오답, 260분→270분)"
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
  "total_plays": 648,
  "total_correct": 485,
  "accuracy": 75,
  "last_date": "2026-09-04",
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
        0.917,
        1.0,
        0.25
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
        0.5
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
  "level": 50,
  "xp_total": 4950,
  "xp_in_level": 50,
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
      "date": "2026-09-04",
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
  "page": 31,
  "total": 65,
  "image": "./copywork/today.jpg",
  "weekday": "월",
  "date": "2026-09-07",
  "flagged": false
},
  revenge: {
  "date": "2026-09-07",
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
        "question": "동물병원에 온 강아지 30마리 중 갈색이 12마리야. 갈색 강아지 12마리 중에서 3마리가 곱슬털이야. 갈색 강아지 중에서 곱슬털인 강아지의 비율은? (비율 = 곱슬 ÷ 갈색)",
        "choices": [
          "3%",
          "10%",
          "25%",
          "40%"
        ],
        "answer": "25%",
        "explanation": "기준량(나누는 수)은 '갈색 강아지 중에서'니까 갈색 12야 — 전체 30이 아니라! 3÷12=0.25=25%, 정답 ③. ②10%는 분모를 30으로 잘못(3÷30), ④40%는 갈색 비율(12÷30), ①3%는 마릿수만 본 거야. 핵심: '~중에서' 뒤 숫자가 새 기준량(분모).",
        "hint": "비와 비율 — 87일 밀린 간격 복습"
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
        "hint": "닮음과 선분비 — 81일 밀린 간격 복습"
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
        "question": "어떤 물체의 위치 에너지가 30J이고 운동 에너지가 20J일 때, 이 물체의 역학적 에너지는 몇 J인가?",
        "choices": [
          "50",
          "10",
          "600",
          "25"
        ],
        "answer": "50",
        "explanation": "역학적 에너지는 위치 에너지와 운동 에너지를 더한 값이다. 30J + 20J = 50J다. 두 에너지를 빼거나 곱하는 것이 아니라 더한다는 점이 핵심이다.",
        "hint": "역학적 에너지 보존 — 74일 밀린 간격 복습"
      }
    }
  ],
  "은행결손": []
},
  vocab: {
  "date": "2026-09-07",
  "cards": [
    {
      "type": "mcq",
      "id": "voc-struggle",
      "question": "영어 단어 'struggle'의 뜻은?",
      "choices": [
        "애쓰다",
        "가리다, 감추다",
        "지역",
        "정확한"
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
        "친밀함",
        "정확한",
        "추상적인",
        "애쓰다"
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
        "추상적인",
        "가리다, 감추다",
        "애쓰다",
        "지역"
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
        "모순되지 않는",
        "어린 시절",
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
        "셀피, 자기 사진",
        "친밀함",
        "~을 이루다"
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
        "셀피, 자기 사진",
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
        "애쓰다",
        "지역",
        "셀피, 자기 사진",
        "가리다, 감추다"
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
        "정확한",
        "셀피, 자기 사진",
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
        "모순되지 않는",
        "가리다, 감추다",
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
        "어린 시절",
        "추상적인",
        "가리다, 감추다",
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
