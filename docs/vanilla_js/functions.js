//function name (parameter1, parameter2, parameter3){
//code to be executed
//return (리스트일수도 있고 어레이일수도 있고 클래스도 가능하다. 그래야 재사용의 의미가 있으니까.)
//  }
//param : 2(1, 3 ) , return 1(1+3)

function sum(item_first, item_second) {
  return item_first + item_second;
}
{
  let sum_number = 1 + 3;
  sum_number = 3 + 5;
  sum_number = 6 + 9;
  let sum_function = sum(1, 2); // item_first = 1, item_second = 2
  console.log();
}

// anonymouse Function
let calculateSum = function (item_first, item_second) {
  return item_first + item_second;
};

{
  console.log(`${calculateSum(5, 7)}`);
}

// Arrow Function 제일 많이 쓰는 방법
let calculateSumSecond = (item_first, item_second) => {
  return item_first + item_second;
};

{
  let result = calculateSumSecond(7, calculateSum);
  console.log(`${result}`);
  console.log(`${calculateSumSecond(7, 8)}`);
}

//rest parameters 주로 array가 들어온다.
function printRestParams(...args) {
  let restParam = (arg) => {
    console.log(`arg : ${arg}`);
  };

  args.forEach(restParam);
}

{
  printRestParams(2, 4, 5);
  printRestParams(2, 4, 5, 6, 7);
}
