function changeText() {
  let queryChangeText = document.querySelector("#changetext");
  queryChangeText.innerHTML = " Change on Me! ";
}

let queryClickalert = document.querySelector("#clickalert");
// element.addEventListener(event, function,useCapture)
queryClickalert.addEventListener("click", clickAlert);
function clickAlert() {
  alert("Click on Me!");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);
// event 꼭 넣는 습관 가지기
function targetText(event) {
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text!";
}
