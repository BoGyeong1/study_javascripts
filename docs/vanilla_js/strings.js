// operate number type and string
let number_first = 3;
let string_second = "5";

console.log(number_first + string_second);
//recommanded this way
let concate_string = `${number_first}${string_second}`; // + 를 사용하지말고 백틱을 사용하자
console.log(concate_string);

string_second = "A";
console.log(number_first + string_second);

//Strings
let animal = "tiger"; // "" ? ''? 둘다 동일하지만 ""을 사용하는 습관들일것, 추가로 문장을 넣고싶을때 ''를 사용할수있는 기능이있음
console.log(`${animal}`);

// animal.split('g')
// (2) ['ti', 'er']
// animal.replace('ti','TI')
// 'TIger'
// animal
// 'tiger'
// animal.charAt(0)
// 't'
// animal.substring(0,3)
// 'tig'
// animal.toUpperCase()
// 'TIGER'

let sentance = "  5 2 6  ";
let trims = sentance.trim(); //공백제거
let splits = trims.split(" "); // 공백으로 배열만듦
let maps = splits.map(Number); // 각 배열을 String에서 Number로 바꿈
// split
console.log(maps[0] + maps[1] + maps[2]); //합산함

let inputs = sentance.trim().split(" ").map(Number);
console.log(inputs[0] + inputs[1] + inputs[2]);
console.log();
