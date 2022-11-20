// 프로세스를 만드는 것이 첫번째 덕목, 맨 처음은 단순화를 할 것
// 이업무에서 원하는 것이 뭐지 ..?
// 혼합해서 생각하면 안됨 -> 하나만 생각하고 다음껄 생각하기
// 문제 출력이 중요 내용 -> 포커스맞추기 답항은 받는거니까 문항/ 설문 답항 출력
// 매칭되는 것들이 주가 된다.
//답항 입력 받음 [1,3,2,5,3]

// 문항과 답항을 오브젝트에 담기
const questions_list = [
  {
    questions_uid: "Q1",
    questions: "해당 매장을 방문시 매장은 청결 하였습니까?",
    orders: 1,
  },
  {
    questions_uid: "Q4",
    questions: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    orders: 4,
  },
  {
    questions_uid: "Q2",
    questions: "주문시 직원은 고객님께 친절 하였습니까?",
    orders: 2,
  },
  {
    questions_uid: "Q5",
    questions: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    orders: 5,
  },
  {
    questions_uid: "Q3",
    questions: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    orders: 3,
  },
];

const example_list = [
  { example_uid: "E5", example: "매우 그렇다", orders: 5 },
  { example_uid: "E1", example: "전혀 아니다", orders: 1 },
  { example_uid: "E4", example: "그렇다", orders: 4 },
  { example_uid: "E2", example: "아니다", orders: 2 },
  { example_uid: "E3", example: "보통이다", orders: 3 },
];

const answers = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E4" },
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },
  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];

// 문항uid 찍어내기
let idx;
let compare;
for (idx = 0; idx < answers.length; idx++) {
  //답항 변수에 담기
  let answer_string = "";
  //문항과 그에 맞는 답항 출력
  if (compare != answers[idx]["questions_uid"]) {
    console.log(`!= ${answers[idx]["questions_uid"]}`);
    console.log(`!= ${answers[idx]["example_uid"]}`);
  } else {
    console.log(`== ${answers[idx]["example_uid"]}`);
  }
  compare = answers[idx]["questions_uid"];
}

// 인덱스와 같은 개수로 돌았는지 확인하기
console.log(`answers.length : ${answers.length}, idx : ${idx}`);

//데이터들을 변화시켜보면 제대로 찍히는지 알수 있음
