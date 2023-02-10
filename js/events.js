console.log("This is a separate JS file");

// option 1: directly set on the HTML element

// option 2: add onclick function
// IMPORTANT: We will use this
// <button onclick="makeRed()"> Make Red </button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3:
const makeBlueButton = document.getElementById("make-blue");
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3: another
const makePurpleButton = document.getElementById("make-purple");
// console.log(makePurpleButton);
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option 4:
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option 4: another
const makeGreenButton = document.getElementById("make-green");

pinkButton.addEventListener("click", function makePink() {
  document.body.style.backgroundColor = "green";
});

// option 4: Final
// IMPORTANT
// document.getElementById("make-goldenrod").addEventListener("click", function () {});
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.backgroundColor = "goldenrod";
  });
