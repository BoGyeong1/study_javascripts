//답항 입력 받음 [1,3,2,5,3]
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

// 문항과 답항을 오브젝트에 담기
let questions_list = [
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

let example_list = [
  { example_uid: "E5", example: "매우 그렇다", orders: 5 },
  { example_uid: "E1", example: "전혀 아니다", orders: 1 },
  { example_uid: "E4", example: "그렇다", orders: 4 },
  { example_uid: "E2", example: "아니다", orders: 2 },
  { example_uid: "E3", example: "보통이다", orders: 3 },
];

// order 순으로 재배치
questions_list = questions_list.sort((a, b) => {
  return a.orders - b.orders;
});
example_list = example_list.sort((a, b) => {
  return a.orders - b.orders;
});

// 문항과 답항 출력하는 function
function printsurvey(questions_list, example_list) {
  //문항 출력
  questions_list.forEach((question) => {
    console.log(`${question["orders"]}. ${question["questions"]}`);
    // 문항에 따른 답항 출력
    if (`${question["questions_uid"]}` === "Q1") {
      for (let i = 0; i < 3; i++) {
        console.log(
          `(${example_list[i]["orders"]}) ${example_list[i]["example"]}`
        );
      }
      console.log(`답 : (${inputs[0]})`);
    } else if (`${question["questions_uid"]}` === "Q2") {
      for (let i = 0; i < 4; i++) {
        console.log(
          `(${example_list[i]["orders"]}) ${example_list[i]["example"]}`
        );
      }
      console.log(`답 : (${inputs[1]})`);
    } else if (`${question["questions_uid"]}` === "Q3") {
      for (let i = 0; i < 2; i++) {
        console.log(
          `(${example_list[i]["orders"]}) ${example_list[i]["example"]}`
        );
      }
      console.log(`답 : (${inputs[2]})`);
    } else if (`${question["questions_uid"]}` === "Q4") {
      for (let i = 0; i < 5; i++) {
        console.log(
          `(${example_list[i]["orders"]}) ${example_list[i]["example"]}`
        );
      }
      console.log(`답 : (${inputs[3]})`);
    } else if (`${question["questions_uid"]}` === "Q5") {
      for (let i = 0; i < 3; i++) {
        console.log(
          `(${example_list[i]["orders"]}) ${example_list[i]["example"]}`
        );
      }
      console.log(`답 : (${inputs[4]})`);
    }
  });
}
//문항과 답항 출력
printsurvey(questions_list, example_list);

console.log("--------------------------설문자 선택--------------------------");

// 설문자가 답한 문항과 답항 출력하는 function
function printAnswer(questions_list, example_list, inputs) {
  for (let i = 0; i < questions_list.length; i++) {
    //문항 출력
    console.log(
      `${questions_list[i]["orders"]}. ${questions_list[i]["questions"]}`
    );
    // 설문자가 입력한 답항과 예시 답항 맞추어 출력하는 function
    let answer_match = (inputs, example_list) => {
      if (
        parseInt(`${inputs[i]}`) === parseInt(`${example_list[0]["orders"]}`)
      ) {
        console.log(
          `(${example_list[0]["orders"]}) ${example_list[0]["example"]}`
        );
      } else if (
        parseInt(`${inputs[i]}`) === parseInt(`${example_list[1]["orders"]}`)
      ) {
        console.log(
          `(${example_list[1]["orders"]}) ${example_list[1]["example"]}`
        );
      } else if (
        parseInt(`${inputs[i]}`) === parseInt(`${example_list[2]["orders"]}`)
      ) {
        console.log(
          `(${example_list[2]["orders"]}) ${example_list[2]["example"]}`
        );
      } else if (
        parseInt(`${inputs[i]}`) === parseInt(`${example_list[3]["orders"]}`)
      ) {
        console.log(
          `(${example_list[3]["orders"]}) ${example_list[3]["example"]}`
        );
      } else if (
        parseInt(`${inputs[i]}`) === parseInt(`${example_list[4]["orders"]}`)
      ) {
        console.log(
          `(${example_list[4]["orders"]}) ${example_list[4]["example"]}`
        );
      }
    };
    // 매치한 문항 출력
    answer_match(inputs, example_list);
  }
}

// 설문자 선택 문항 답항 출력
printAnswer(questions_list, example_list, inputs);

console.log("이용해주셔서 감사합니다!");
