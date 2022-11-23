const questions_list = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 4
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 5
  }
];

const example_list = [
  { example: "전혀 아니다", example_uid: "E1", order: 1 },
  { example: "아니다", example_uid: "E2", order: 2 },
  { example: "보통이다", example_uid: "E3", order: 3 },
  { example: "그렇다", example_uid: "E4", order: 4 },
  { example: "매우 그렇다", example_uid: "E5", order: 5 }
];

const questions_answers = [
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
  { questions_uid: "Q5", example_uid: "E3" }
];

// poll에다 값 담기
let question_compare;
let idx;
let polls = [];
let questions = []; // questions and answers
for (idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (questions.length > 0) {
      polls.push(questions);
      questions = [];
    }
    questions.push(questions_answers[idx]["questions_uid"]);
    questions.push(questions_answers[idx]["example_uid"]);
  } else {
    questions.push(questions_answers[idx]["example_uid"]);

    if (idx + 1 >= questions_answers.length) {
      polls.push(questions);
    }
  }

  question_compare = questions_answers[idx]["questions_uid"];
}

// 셀렉터 설정
let queryQuestions = document.querySelector("#container> .questions");
let queryExamples = document.querySelector("#container> .examples");
let queryNextBtn = document.querySelector("#nextButton");
let queryPrevBtn = document.querySelector("#prevButton");

// 첫페이지
let index = 0;
printSurvey(index);

//버튼설정
queryNextBtn.addEventListener("click", printNext);
queryPrevBtn.addEventListener("click", printPrev);

// 버튼을 누를때 마다 인덱스가 증가
function printNext() {
  if (index == polls.length - 1) {
    alert("마지막 페이지입니다.");
    return;
  } else {
    index++;
    //버튼 누를때마다 문항비우기
    queryExamples.innerHTML = " ";
    printSurvey();
  }
}

// 버튼을 누를때 마다 인덱스가 감소
function printPrev() {
  if (index == 0) {
    alert("첫 페이지 입니다.");
  } else {
    index--;
    //버튼 누를때마다 문항비우기
    queryExamples.innerHTML = " ";
    printSurvey();
  }
}

// poll에서 문항과 답항 출력하기
function printSurvey() {
  if (polls[index][0] === questions_list[index]["questions_uid"]) {
    queryQuestions.innerHTML = `<div id="questions"> ${index + 1}. ${
      questions_list[index]["question"]
    } </div>`;
    for (let i = 1; i < polls[index].length; i++) {
      let radio = `<div id = example><input type="radio" name="examples" id=${questions_list[index]["questions_uid"]}></input>`;
      let label = `<label for="radio">(${i}) ${
        example_list[i - 1]["example"]
      }</label></div>`;
      queryExamples.innerHTML += radio + label;
    }
  }
}
