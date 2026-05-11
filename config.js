window.GAME_CONFIG = {
  game: "sion-mocktest",
  title: "시온이 모의시험",
  sheet_tab: "sion-mocktest",
  endpoint: "https://script.google.com/macros/s/AKfycbxTAhLbkb-55MT-UGGnGSvgAobVxiU73YiFJ98OEwPH8SONRqIxevqgSuK1Q6yTjdwRnQ/exec",
  problems: [
  {
    "id": 1,
    "subject": "수학",
    "unit": "6-1 분수의 나눗셈",
    "difficulty": 1,
    "type": "mcq",
    "question": "3/4 ÷ 2의 값은?",
    "choices": [
      "3/8",
      "3/6",
      "6/4",
      "8/3"
    ],
    "answer": "3/8",
    "explanation": "분수를 자연수로 나눌 때는 분모에 그 자연수를 곱해요. 3/4 ÷ 2 = 3/(4×2) = 3/8.",
    "hint": "나누는 수 2를 분모 쪽에 곱해 봐."
  },
  {
    "id": 2,
    "subject": "수학",
    "unit": "6-1 분수의 나눗셈",
    "difficulty": 2,
    "type": "short",
    "question": "5/6 L의 주스를 5명이 똑같이 나누어 마셨다. 한 명이 마신 양은 몇 L인가?",
    "choices": [],
    "answer": "1/6 L",
    "explanation": "5/6 ÷ 5 = 5/(6×5) = 5/30 = 1/6. 한 명은 1/6 L를 마셨어요.",
    "hint": "전체 양을 사람 수로 나눠."
  },
  {
    "id": 3,
    "subject": "수학",
    "unit": "중점 연결 단계 카운트",
    "difficulty": 3,
    "type": "short",
    "question": "AB=64cm. AB의 중점 C, CB의 중점 D, DB의 중점 E, EB의 중점 F일 때 FB의 길이는?",
    "choices": [],
    "answer": "4cm",
    "explanation": "64의 반은 32, 32의 반은 16, 16의 반은 8, 8의 반은 4. 마지막 EB의 중점 F까지 세야 해요. FB=4cm.",
    "hint": "중점이 몇 번 나왔는지 끝까지 세어 봐."
  },
  {
    "id": 4,
    "subject": "수학",
    "unit": "각뿔·각기둥 밑면 둘레",
    "difficulty": 2,
    "type": "mcq",
    "question": "밑면이 정육각형인 각기둥에서 밑면의 한 변이 7cm일 때 밑면의 둘레는?",
    "choices": [
      "13cm",
      "35cm",
      "42cm",
      "49cm"
    ],
    "answer": "42cm",
    "explanation": "정육각형은 변이 6개예요. 밑면 둘레 = 한 변 × 변의 수 = 7×6 = 42cm.",
    "hint": "정육각형은 변이 6개."
  },
  {
    "id": 5,
    "subject": "수학",
    "unit": "5-2 소수의 나눗셈",
    "difficulty": 1,
    "type": "short",
    "question": "6.4 ÷ 0.8의 값은?",
    "choices": [],
    "answer": "8",
    "explanation": "6.4와 0.8에 10을 곱하면 64 ÷ 8이 돼요. 64 ÷ 8 = 8.",
    "hint": "둘 다 10배 해서 자연수 나눗셈으로 바꿔."
  },
  {
    "id": 6,
    "subject": "수학",
    "unit": "6-1 분수의 나눗셈",
    "difficulty": 1,
    "type": "short",
    "question": "x를 3/4로 나누었더니 8이 되었다. x의 값은?",
    "choices": [],
    "answer": "6",
    "explanation": "x ÷ 3/4 = 8이므로 x × 4/3 = 8. 양쪽을 생각하면 x = 8 × 3/4 = 6.",
    "hint": "나눈 뒤 결과가 8이면, 거꾸로 8에 3/4을 곱해 봐.",
    "수능미리보기": true
  }
],
  meta: {
  "generated_at": "2026-05-11",
  "week": "2026-W20",
  "weakness_focus": [
    "중점 연결 단계 카운트 (반복 적용 시 마지막 단계 누락) — 5/10 최상위수학",
    "각뿔·각기둥 밑면 둘레 곱셈 (한 변 × 변의 수 누락) — 5/10 최상위수학",
    "마름모 공식 ÷2 누락 (평행사변형과 혼동)"
  ],
  "grade": "초6"
}
};
