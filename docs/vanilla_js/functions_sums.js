// 문제
// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
// 유추 파악
// 숫자 n개를 배열에 여러개 입력 했을때 그 모든 값을 더하는 함수 만들기

// 프로그래밍순서
// function 만들기
function sum(number) {
  // Enhanced For문으로 누적합 구하기
  let sum_results = 0;
  for (let numbers of number) {
    sum_results += numbers;
  }
  // 누적합 결과 리턴
  return sum_results;
}

// 테스트 케이스
let number = [1, 2, 3, 4, 5];
let results = sum(number);
// 값 : 15
console.log(results);
