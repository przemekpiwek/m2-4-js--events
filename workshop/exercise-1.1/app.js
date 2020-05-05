// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

let result = document.querySelector("#result");
let restart = document.querySelector("#restart");
let timer = 0;

let id = setInterval(() => {
  timer += 1;
}, 1000);

window.addEventListener("click", youHaveClicked);

function youHaveClicked(event) {
  if (timer < 1) {
    result.innerHTML = "you clicked successfully";
  } else {
    result.innerHTML = "you failed";
  }
  window.removeEventListener("click", youHaveClicked);
}
