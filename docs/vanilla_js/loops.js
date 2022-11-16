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
