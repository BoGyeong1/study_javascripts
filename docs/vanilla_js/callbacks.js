console.log(`first`);
// console.log(`second`);
// setTimeout(functionRef, delay)
// 실행될때 delay 타임만큼 멈추었다가 실행됨 -> 어떤 프로그램이든지 위에서 아래로 실행된다고 생각하지만
// 중간에 늦게 실행되는 프로그램이 있다 까지만 이해할 것
// function(){
// }
setTimeout(function () {
  console.log(`setTimeout : second`);
}, 2000);
console.log(`third`);

// 5 + 6
function plus(first, second) {
  return first + second;
}
// plus(5, 6);

// 5 - 6
function minus(first, second) {
  return first - second;
}
// minus(5, 6);

function callbackFunction(callback, first, second) {
  let result = callback(first, second);
  console.log(`result : ${result}`);
}
// callback => plus
callbackFunction(minus, 5, 6);
