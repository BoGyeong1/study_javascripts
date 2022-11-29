// -문제 파악
//2292
// 위의 그림과 같이 육각형으로 이루어진 벌집이 있다. 그림에서 보는 바와 같이 중앙의 방 1부터 시작해서
// 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다.
// 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때
// 몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오.
//  예를 들면, 13까지는 3개, 58까지는 5개를 지난다.

// -유추 파악
// 0->6->12->18 순서로 증가한다.
//6n을 이용 할것.. 1에서 증가하는 방만큼 계속 누적 시킨다.
// -주요 단어 영문 이름 선정
//입력 -input
// 범위 -range
// 블록 -block
// -테스트 케이스
// 13 -> 3
// -프로그래밍 순서
//입력
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ");

let range = 1;
let block = 1;

function honeycomb(inputs) {
  while (block < inputs) {
    block += 6 * range;
    range++;
  }
  return range;
}

console.log(honeycomb(inputs));
// -try-on
// -실패 시 원인 기록
