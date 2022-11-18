// -문제 파악
// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.
// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.
// -유추 파악
// 수 10개를 입력 받아서 각 42로 나누고 나머지를 배열에 저장한다. 그리고 그 배열의 값을 각각 비교해서 다른 값들이
// 몇개 있는지 찾는다.
// -주요 단어 영문 이름 선정
// 입력 - input
// 출력 - output
// 나누기 - divide
// 나머지 - reminder
// 숫자 - number
// -테스트 케이스
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// -> 10

// -프로그래밍 순서
// 값 입력 받기
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

//배열선언
let inputNumbers = [];

//받은 값을 나머지로 나누어서 같은 값을 비교해서 저장
let reminder_push = (inputs) => {
  inputs.forEach((numbers) => {
    let reminders = numbers % 42;

    if (inputNumbers.indexOf(reminders) === -1) {
      inputNumbers.push(reminders);
    }
  });
  return inputNumbers;
};

//다른 값만 있는 배열의 길이 변수에 저장
let output = reminder_push(inputs).length;

// 값 출력
console.log(output);

// -try-on
// -실패 시 원인 기록
