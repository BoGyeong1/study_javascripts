// 화면에서 사라지게하는 display-none 적용시키는 버튼
let queryRemoveBtn = document.querySelector("#removeBtn");
queryRemoveBtn.addEventListener("click", (event) => {
  displayNoneEvent(event);
});
// none 적용 이벤트
let queryDisplayNone = document.querySelector("#displayNone");
function displayNoneEvent() {
  queryDisplayNone.style.display = "none";
}

// 영역 유지, 내용만 삭제하는 hidden 시키는 버튼
let queryHideBtn = document.querySelector("#hideBtn");
queryHideBtn.addEventListener("click", (event) => {
  hiddenEvent(event);
});

// hidden 이벤트
let queryHidden = document.querySelector("#hidden");
function hiddenEvent() {
  queryHidden.style.visibility = "hidden";
}

// 두 가지 모두 원상복구 시키는 reset버튼
let queryResetBtn = document.querySelector("#resetBtn");
queryResetBtn.addEventListener("click", (event) => {
  resetEvent(event);
});

//reset이벤트
function resetEvent() {
  queryDisplayNone.style.display = "flex";
  queryHidden.style.visibility = "visible";
}
