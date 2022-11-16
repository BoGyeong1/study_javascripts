//let declaration
let myName = "홍길동"; //let : 공간을 어딘가에 할당한다
console.log(myName);
myName = "진보경"; // 값변경
myName = 5;
console.log();

// const declaration
const nickName = "홍길동"; //한번 지정된 변수는 재정의가 불가능
console.log(nickName);
nickName = "진보경"; //Uncaught TypeError TypeError: Assignment to constant variable.
console.log();
