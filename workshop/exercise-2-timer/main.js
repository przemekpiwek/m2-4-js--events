const currentTimeText = document.getElementById("currentTime");
const stopWatchDisplay = document.getElementById("stopWatchDisplay");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const countDownButton = document.querySelector("button");
const countDownTime = document.querySelector(".input");
const countDownText = document.querySelector("#countdowntext");
const timeFromDate = new Date();

currentTimeText.innerHTML = timeFromDate.toLocaleString();

let hundredth = 0;
let tenth = 0;
let ones = 0;
let tens = 0;
let id = 0;

start = () => {
  let temp = setInterval(() => {
    stopWatchDisplay.innerText = `${tens}${ones}:${tenth}${hundredth}`;
    startButton.removeEventListener("click", start);
    hundredth += 1;

    if (hundredth === 10) {
      hundredth = 0;
      tenth += 1;
      if (tenth === 10) {
        ones += 1;
        tenth = 0;
        if (ones === 10) {
          tens += 1;
          ones = 0;
        }
      }
    }
  }, 10);
  id = temp;
};

stop = () => {
  clearInterval(id);
  startButton.addEventListener("click", start);
};

countDownCommence = () => {
  let time = countDownTime.value;
  countDownText.innerText = time;

  let id = setInterval(() => {
    time -= 1;
    if (time < 0) {
      countDownText.innerText = 0;
      window.alert("Your countdown is finished");
      clearInterval(id);
      countDownButton.addEventListener("click", countDownCommence);
    }
    countDownText.innerText = time;
  }, 1000);

  countDownButton.removeEventListener("click", countDownCommence);
};

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
countDownButton.addEventListener("click", countDownCommence);
