// -문제파악
// 영수증에 적힌,
// 구매한 각 물건의 가격과 개수
// 구매한 물건들의 총 금액
// 을 보고, 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.
// 첫째 줄에는 영수증에 적힌 총 금액 $X$가 주어진다.
// 둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 $N$이 주어진다.
// 이후 $N$개의 줄에는 각 물건의 가격 $a$와 개수 $b$가 공백을 사이에 두고 주어진다.
// 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하면 Yes를 출력한다. 일치하지 않는다면 No를 출력한다.-문제 파악

// -유추 파악
// 총 합을 입력 받고, 계산할 경우의 수를 입력받은 다음
// 각각 값과 개수를 입력해 곱한 후 더해서 맞는지 확인후 맞으면 yes 틀리면 NO 출력
// -주요 단어 영문 이름 선정
// 입력 : Input
// 출력 : Output
// 합 : sum
// 수 : count
// 총합 = total
// -테스트 케이스
// 260000
// 4
// 20000 5
// 30000 2
// 10000 6
// 5000 8

// =>Yes
// -프로그래밍 순서
//값 입력받기
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

// 변수 지정
let total = parseInt(inputs[0]);
let count = parseInt(inputs[1]);
let sum = 0;

let receipt = (inputs) => {
  for (let i = 2; i < count + 2; i++) {
    // 입력된 수를 다시 쪼개서 배열에 저장
    let newInputs = inputs[i].split(" ").map(Number);
    // 그 수들로 다시 총합 구하기
    sum += newInputs[0] * newInputs[1];
  }
};

receipt(inputs);

// 총합을 비교해서 yes, no 출력
if (total === sum) {
  console.log("Yes");
} else {
  console.log("No");
}

// -try-on
// -실패 시 원인 기록
// count 수를 헷갈려서 디버그 돌려보고 깨달았다...
// parseInt를 꼭 붙여야하더라..
//왜인지 삼항연산자로 서술하면 틀렸다고나옴 ;
