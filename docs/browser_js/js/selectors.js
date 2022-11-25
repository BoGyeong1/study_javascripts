let pByTagName = document.getElementsByTagName("p");
console.log(`${pByTagName}`);
// buttonByTagName.innerHTML = " 클릭하세요! ";
let listByClassName = document.getElementsByClassName("list"); // 엘리먼츠...복수다  클래스는 유니크한것이 아님..!
console.log(`${listByClassName}`); // HTML 콜렉션..으로 뜬다.
let titleById = document.getElementById("title"); // ID는 이페이지 상에서 유니크한것
// titleById.innerHTML = "Title By Id";

let elementById = document.getElementById("selector");
// console.log(`elementById : ${elementById}`);
elementById.innerHTML = "<b>Change selector</b>";

//이 방법을 권하신다고 하신다
let queryTitle = document.querySelector("#title");
// queryTitle.innerHTML = " query Title!";

//복수로 가지고 오고 싶다? 클래스라 .
let queryItems = document.querySelectorAll(".item");

// queryItems.forEach((item, index) => {
//   console.log(item);
// });

let queryLists = document.querySelectorAll(".list"); // 두개 다 나옴
let queryList = document.querySelector(".list"); // 하나만 나옴 (첫번째 만나는 것만 가져온다)

//change properties from querySelector
queryTitle.style.color = "blue";
queryTitle.style.fontSize = "2rem";
queryTitle.style.backgroundColor = "rgba(255,0,0, 0.5)";

let queryContent = document.querySelector("#contentId");
