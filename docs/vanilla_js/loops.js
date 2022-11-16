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
