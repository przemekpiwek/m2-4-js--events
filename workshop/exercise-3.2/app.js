const numButtons = 20;
const main = document.querySelector(".main");

for (let i = 0; i < numButtons; i++) {
  let button = document.createElement("button");
  button.addEventListener("click", changeColor);
  button.greenState = false;
  main.appendChild(button);
}

function changeColor(event) {
  if (event.currentTarget.greenState === false) {
    event.currentTarget.style.background = "green";
    event.currentTarget.greenState = true;
  } else if (event.currentTarget.greenState === true) {
    event.currentTarget.style.background = "#990000";
    event.currentTarget.greenState = false;
  }
}
