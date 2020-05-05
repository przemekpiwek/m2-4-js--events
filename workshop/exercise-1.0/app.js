// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>
// - By default, the <body> will be 0px tall. You can add a style in the
//   `<style>` tags to fill the viewport height.

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

let body = document.querySelector("body");
body.style.height = 100 + "vh";
body.style.width = 100 + "vw";

let writeSomething = (event) => {
  let text = document.createElement("p");
  text.innerHTML = "You Clicked";
  event.currentTarget.appendChild(text);
};

body.addEventListener("click", writeSomething);
