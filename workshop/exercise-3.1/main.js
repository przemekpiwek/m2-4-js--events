const numButtons = 20;
const grid = document.querySelector(".buttonGrid");

for (let i = 0; i < numButtons; i++) {
  let button = document.createElement("button");
  button.addEventListener("click", changeToGreen);
  button.id = i;
  grid.appendChild(button);
}

function changeToGreen(event) {
  event.currentTarget.style.background = "green";
}
