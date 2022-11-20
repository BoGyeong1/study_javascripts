const animals = ["dog", "cat", "bird", "fish", "lizard"]; //for,while문으로 돌릴려면 array타입이어야한다.

//Normal
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

//for iterable
for (let animal of animals) {
  //string 값을 가지고 있음
  console.log(`${animals}`);
}

const animals_obj = [
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

for (let animal of animals_obj) {
  console.log(`${animal["name"]}`, `${animal["species"]}`);
  console.log();
}

const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
}
//car Arrow Function 단순하게 실행되는 거면 애로우펑션을 많이 쓴다.
cars.forEach((car) => console.log(`${car}`));

// forEach 굉장히 많이 씀
const array1 = ["a", "b", "c"];
// i 인덱스
array1.forEach((element, i) => console.log(element));

//Arrow Function 파라메터가 2개이상일때는 괄호를 꼭 해야함. 리턴하는게 하나면 스코프 안써도 됨
let arrowFunction = (element, index) => {
  console.log(`${element}, index ${index}`);
};
array1.forEach(arrowFunction);

// Normal Function
function normalFunction(element) {
  console.log(element);
}
array1.forEach(normalFunction);
