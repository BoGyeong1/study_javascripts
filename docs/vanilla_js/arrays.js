// Array == ArrayList
let fruits = ["apple", "banana", "orange", "mellon"]; // 하나의 데이터타입만 넣는것을 추천
let numbers = [1, 2, 3, 4, 5];
let fruits_init = new Array();
fruits_init = [];

// object == HashMap;
let objects = { name: "Tom", age: 4 };

let mixins_first = [1, 2, 3, "apple", 4, "mellon"];
let mixins_second = [1, 2, 3, "apple", 4, { name: "Tom", age: 4 }];
let mixins_third = [1, 2, 3, "banana", objects];

let mixins_fourth = [fruits, numbers];

const mixins_array = [
  ["apple", "banana"],
  ["orange", "mellon"],
  ["berry", "strawberry"],
];

let first = ["apple", "banana"];
let second = ["orange", "mellon"];
let third = ["berry", "strawberry"];

let mixins_list = [first, second, third];

console.log();

// fruits[0]
// 'apple'
// fruits[3]
// 'mellon'
// fruits.pop()
// 'mellon'
// fruits
// (3) ['apple', 'banana', 'orange']
// fruits.push("grape")
// 4
// fruits_concat.indexOf("berry")
// 4
// fruits
// (4) ['apple', 'banana', 'orange', 'grape']
// fruits.slice(1,2)
// (1) ['banana']
// fruits
// (4) ['apple', 'banana', 'orange', 'grape']
// let fruits_second = ["berry", "strawberry"]
// undefined
// fruits_second = ["berry", "strawberry"]
// (2) ['berry', 'strawberry']
// fruits_second
// (2) ['berry', 'strawberry']
// fruits_concat.join()
// 'apple,banana,orange,grape,berry,strawberry'
// fruits_concat.join(' and ')
// 'apple and banana and orange and grape and berry and strawberry'
// fruits_string = fruits_concat.join()
// 'apple,banana,orange,grape,berry,strawberry'
// fruits_arrays = fruits_string.split()
// (1) ['apple,banana,orange,grape,berry,strawberry']
// fruits_arrays = fruits_string.split(",")
// (6) ['apple', 'banana', 'orange', 'grape', 'berry', 'strawberry']
// fruits_arrays.reverse()
// (6) ['strawberry', 'berry', 'grape', 'orange', 'banana', 'apple']
//indexof
