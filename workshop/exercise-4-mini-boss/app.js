const main = document.querySelector(".main");
const vw = window.innerWidth;
const vh = window.innerHeight;
let time = parseInt(1 + Math.random(0, 1) * 5);
const header = document.createElement("h1");
const startButton = document.createElement("button");

startButton.innerText = "Let's Begin!";
startButton.id = "startbutton";
header.style.fontSize = "2em";
header.style.position = "absolute";
header.style.top = "20px";
header.style.left = "20px";
header.style.zIndex = "2";
header.innerText = time;

main.appendChild(header);
main.appendChild(startButton);

function beginGame(event) {
  main.removeChild(event.currentTarget);
  displayButtons();
  displayTime();
}

function displayButtons() {
  for (let i = 0; i < parseInt(1 + Math.random(0, 1) * 9); i++) {
    const button = document.createElement("button");
    button.style.position = "absolute";
    button.style.left = Math.random(0, 1) * vw + "px";
    button.style.top = Math.random(0, 1) * vh + "px";
    button.addEventListener("click", changeColor);
    button.greenState = true;
    main.appendChild(button);
  }
}

function displayTime() {
  const allButtons = document.querySelectorAll("button");
  const allButtonsArr = Array.from(allButtons);
  console.log(allButtonsArr.every((button) => button.greenState === false));
  let id = setInterval(() => {
    time -= 1;
    header.innerText = time;
    if (time > 0) {
      if (allButtonsArr.every((button) => button.greenState === false)) {
        alert("you've won!");
        clearInterval(id);
        endGame();
      }
    } else if (time === 0) {
      header.innerText = "0";
      setTimeout(() => alert("Time ran out!"), 0);
      clearInterval(id);
      endGame();
    }
  }, 1000);
}

function changeColor(event) {
  if (event.currentTarget.greenState === true) {
    event.currentTarget.style.background = "red";
    event.currentTarget.greenState = false;
  } else if (event.currentTarget.greenState === false) {
    event.currentTarget.style.background = "rgb(43, 199, 4)";
    event.currentTarget.greenState = true;
  }
}

function endGame() {
  const button = document.querySelectorAll("button");
  button.forEach((button) => {
    button.removeEventListener("click", changeColor);
  });
}

startButton.addEventListener("click", beginGame);
