// -문제 파악
// 1110번 0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다.
// 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다.
// 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다.
// 다음 예를 보자.
// 26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.
// 위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.
// N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.
// -유추 파악
// 십자리 수와 일의 자리 수를 더해서 한 자리수를 만들고.. 그 수와 일의 자리를 또 더함..
//
// -주요 단어 영문 이름 선정
// 입력 - input
// 출력 - output
// 더하기 - sum

// -테스트 케이스
// 26 -> 4
// 55 -> 3

// -프로그래밍 순서
// 입력
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");
// 인트로 바꿔주고 변수에 저장
let origin = Number(inputs);

//카운트와 합 변수 지정
let count = 0;

function outputPlus(inputs) {
  while (true) {
    // 십의자리 수와 일의자리 수 더함
    let sum = Math.floor((inputs % 10) + inputs / 10);
    inputs = (inputs % 10) * 10 + (sum % 10);
    //카운트 기록
    count++;

    // 더한 수가 같으면 반복문 빠져나옴
    if (origin === inputs) {
      break;
    }
  }
  return count;
}
// 카운트 출력
console.log(outputPlus(inputs));

// -try-on
// -실패 시 원인 기록
//   inputs = (inputs % 10) * 10 + (sum % 10); 수식을 잘못 지정함..
