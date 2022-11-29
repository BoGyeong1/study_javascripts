// -문제 파악
// 1712번 월드전자는 노트북을 제조하고 판매하는 회사이다. 노트북 판매 대수에 상관없이 매년 임대료, 재산세, 보험료, 급여 등
//  A만원의 고정 비용이 들며, 한 대의 노트북을 생산하는 데에는 재료비와 인건비 등 총 B만원의 가변 비용이 든다고 한다.

// 예를 들어 A=1,000, B=70이라고 하자. 이 경우 노트북을 한 대 생산하는 데는 총 1,070만원이 들며, 열 대 생산하는 데는
// 총 1,700만원이 든다.
// 노트북 가격이 C만원으로 책정되었다고 한다. 일반적으로 생산 대수를 늘려 가다 보면 어느 순간
// 총 수입(판매비용)이 총 비용(=고정비용+가변비용)보다 많아지게 된다.
// 최초로 총 수입이 총 비용보다 많아져 이익이 발생하는 지점을 손익분기점(BREAK-EVEN POINT)이라고 한다.
// A, B, C가 주어졌을 때, 손익분기점을 구하는 프로그램을 작성하시오.
// -유추 파악
// 고정비용과 노트북 생산비용을 더한후, 노트북 개수를 곱해서 총 비용을 구한다.
// 노트북 가격과 노트북 갯수를 곱하여 총 수입을 구한다.

// -주요 단어 영문 이름 선정
// 입력 - input
// 출력 - output
// 고정 비용 -fixedCost
// 가변 비용 - variableCost
// 노트북 가격 - price
// 총 비용 -total
// 손익분기점-breakEvenPoint
// -테스트 케이스
// 1000 70 170 -> 11
// 3 2 1 -> -1
// -프로그래밍 순서
// 입력
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ");

// 입력받은 수 각각 담아두기
const fixedCost = inputs[0];
const variableCost = inputs[1];
const price = inputs[2];

// 이익 구하기
// 노트북 가격에서 가변비용을 뺀 값을 고정 비용에서 나누기
// let breakEvenPoint = (fixedCost, price, variableCost) => {
let answer = Math.floor(fixedCost / (price - variableCost)) + 1;
//   return answer;
// };

// 출력
if (price - variableCost <= 0) {
  answer = -1;
} else {
  answer;
}

console.log(answer);

// -try-on
// -실패 시 원인 기록
//function을 쓰면 오류난다..ㅎ; 그냥.. 이문제는 패스..
