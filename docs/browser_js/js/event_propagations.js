// let queryInputAll = document.querySelectorAll("input");
// for (let queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }

//event.target과 같다.
// document.querySelector("#item1");

let newItem = `<li>
             <div>
                <input type="checkbox" name="" id="item3" />
                <label for="item3">item three</label>
                <span>
                <i class="material-icons">delete</i>
                </div>
                </li>
                </span>`;

// //alert이 행동을 안함.. 이것이 새로운 string으로 걍 인식되버리기때문에..이벤트가 사라진다.
let queryItemList = document.querySelector(".item-list");

// //최상위에 이벤트를 주면 하위에 이벤트가 다 걸린다.
queryItemList.addEventListener("click", (event) => {
  if (event.target.id != "" && event.target.id != "undefined") {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
}); //상위 elment에 Event 설정
// queryItemList.innerHTML = queryItemList.innerHTML + newItem;
queryItemList.insertAdjacentHTML("beforeend", newItem);

// // // 다시 처음부터 이벤트를 다시 걸어야함...
// // // let queryInputs = document.querySelectorAll("input");
// // // for (let queryInput of queryInputs) {
// // //   queryInput.addEventListener("click", (event) => {
// // //     alert(`clicked ${event.target.id} : ${event.target.value}`);
// // //   });
// // // }

// let newItem = `<li>
//                 <div>
//                     <input type="checkbox" name="" id="item3">
//                     <label for="item3">item three</label>
//                 </div>
//             </li>`;

// let queryItemList = document.querySelector(".item-list");
queryItemList.addEventListener("click", (event) => {
  if (event.target.id != "" && event.target.id != "undefined") {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.remove();
  }
}); //상위 element에 Event 설정
