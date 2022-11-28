let queryRemoveBtn = document.querySelector("#removeBtn");
queryRemoveBtn.addEventListener("click", (event) => {
  displayNoneEvent(event);
});

let queryDisplayNone = document.querySelector("#displayNone");
function displayNoneEvent() {
  queryDisplayNone.style.display = "none";
}

let queryHideBtn = document.querySelector("#hideBtn");
queryHideBtn.addEventListener("click", (event) => {
  hiddenEvent(event);
});

let queryHidden = document.querySelector("#hidden");
function hiddenEvent() {
  queryHidden.style.visibility = "hidden";
}

let queryResetBtn = document.querySelector("#resetBtn");
queryResetBtn.addEventListener("click", (event) => {
  resetEvent(event);
});

function resetEvent() {
  queryDisplayNone.style.display = "flex";
  queryHidden.style.visibility = "visible";
}
