// div.inner 태그 내부에 <div>hello</div>를 추가
//프로그래밍 방식 적용
let queryInner = document.querySelector("#container> .inner");

// create Elements
let element = document.createElement("div");
let helloText = document.createTextNode("hello");
element.appendChild(helloText);
queryInner.appendChild(element);

//Inner HTML
let animal = { name: "dog", age: "10" };
let queryApp = document.querySelector("#app");

let item = " <div class='item'> " + animal["name"] + animal["age"] + "</div>";
item = `<div class="item">${animal["name"]} : ${animal["age"]}</div>`;
queryApp.innerHTML = item;

const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 }
];

let queryList = document.querySelector("#list");
let product = "";
productsData.forEach((products, index) => {
  // 이런식으로 넣으면 id가 결론적으로 4개가 된다. 그래서 안됨..!
  //product += `<div id = "list"> ${products["title"]} , ${products["weight"]} </div>`;
  product += `<div id = "item"> ${products["title"]} , ${products["weight"]} </div>`;
});
