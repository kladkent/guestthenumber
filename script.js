"use strict";

// Functions
const check = function () {
  // start game by clicking check button
  const userInput = Number(document.querySelector(".guess").value);

  if (score !== 0) {
    if (!userInput) {
      displayMessage("Invalid Input!");
    } else if (userInput > secretNumber) {
      displayMessage("Too High");
      score--;
      displayScore(score);
      checkScore(score);
    } else if (userInput < secretNumber) {
      displayMessage("Too Low");
      score--;
      displayScore(score);
      checkScore(score);
    } else {
      highestScore++;
      reset();
    }
  }
};

const randomizer = function () {
  // Generate Random Numbers 1 - 20
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  //Display Message to Player
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  //Display Current Score
  document.querySelector(".score").textContent = score;
};

const again = function () {
  score = 20;
  displayScore(score);
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
};

const checkScore = function (score) {
  if (score === 0) {
    displayMessage("Game Over!");
  }
};

const reset = function () {
  displayMessage("Correct!");
  document.querySelector("body").style.backgroundColor = "green";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".highscore").textContent = highestScore;
  secretNumber = randomizer();

  setTimeout(() => {
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".number").textContent = "?";
  }, 1000);
};

//Global Variables
let highestScore = 0; //record highest score
let secretNumber = randomizer(); //secret Number
let score = 20; //Player Score

//DOM
document.querySelector(".check").addEventListener("click", check);
document.querySelector(".again").addEventListener("click", again);
