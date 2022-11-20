// -문제 파악
// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
// 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.
// 출력형식과 같게 N*1부터 N*9까지 출력한다.
// -유추 파악
// 입력받은 값을 for문으로 구구단 출력
// -주요 단어 영문 이름 선정
// 입력 - input
// 출력 - output
// 구구단 - Times Table
// -테스트 케이스
// 2

// 예제 출력 1
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// 2 * 6 = 12
// 2 * 7 = 14
// 2 * 8 = 16
// 2 * 9 = 18

// -프로그래밍 순서
// 값 입력받기
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// 입력 받은 값으로 for문 돌리기

let times_table = (inputs) => {
  for (let i = 1; i < 10; i++) {
    console.log(inputs[0] + " * " + i + " = " + inputs[0] * i);
  }
};

times_table(inputs);
