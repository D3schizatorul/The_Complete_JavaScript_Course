"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const wrongGuess = function (lowerHigher) {
  document.querySelector(".message").textContent = lowerHigher;
  score -= 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".score").style.color = "red";
  backToNormal();
};

function backToNormal() {
  setTimeout(function () {
    document.querySelector(".score").style.color = "#eee";
  }, 400);
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "🚨 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🥇 Correct number!";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? wrongGuess("🎈 Number too high!")
        : wrongGuess("🎿 Number too low!");
    } else {
      document.querySelector(".message").textContent = "💣 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = null;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
