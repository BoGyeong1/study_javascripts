//2480 주사위 세개

// 문제
// 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다.

// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
// 예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

// 3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

//입력
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

//조건문 설정
if (inputs[0] == inputs[1] && inputs[1] == inputs[2]) {
  console.log(10000 + inputs[0] * 1000);
} else if (
  inputs[0] == inputs[1] ||
  inputs[1] == inputs[2] ||
  inputs[2] == inputs[0]
) {
  if (inputs[0] == inputs[1] || inputs[0] == inputs[2]) {
    console.log(1000 + inputs[0] * 100);
  } else if (inputs[1] == inputs[2]) {
    console.log(1000 + inputs[1] * 100);
  }
} else {
  if (inputs[0] > inputs[1] && inputs[0] > inputs[2]) {
    console.log(inputs[0] * 100);
  } else if (inputs[1] > inputs[0] && inputs[1] > inputs[2]) {
    console.log(inputs[1] * 100);
  } else {
    console.log(inputs[2] * 100);
  }
}

//9498 시험성적
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

if (inputs[0] >= 90 && inputs[0] <= 100) {
  console.log("A");
} else if (inputs[0] >= 80 && inputs[0] <= 89) {
  console.log("B");
} else if (inputs[0] >= 70 && inputs[0] <= 79) {
  console.log("C");
} else if (inputs[0] >= 60 && inputs[0] <= 69) {
  console.log("D");
} else {
  console.log("F");
}

//2753 윤년
// 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

// 예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다.
// 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

if ((inputs[0] % 4 === 0 && inputs[0] % 100 != 0) || inputs[0] % 400 === 0) {
  console.log("1");
} else {
  console.log("0");
}
