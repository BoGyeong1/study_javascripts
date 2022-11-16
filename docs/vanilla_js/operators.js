const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

//덧셈
let plus = inputs[0] + inputs[1];
//뺄셈
let minus = inputs[0] - inputs[1];
//곱셈
let multiply = inputs[0] * inputs[1];
//나누기
let divide = inputs[0] / inputs[1];
divide = parseInt(divide);
//나머지
let Remainder = inputs[0] % inputs[1];
//출력
console.log(plus);
console.log(minus);
console.log(multiply);
console.log(divide);
console.log(Remainder);
