"use strict";

// Functions
const check = function () {
  // start game by clicking check button
  const userInput = Number(document.querySelector(".guess").value);
  if (!userInput) {
    displayMessageScore("Invalid Input!", score);
  } else if (userInput > secretNumber) {
    score = checkScore("Too High!", score);
  } else if (userInput < secretNumber) {
    score = checkScore("Too Low!", score);
  } else {
    win(score);
  }
};

const randomizer = function () {
  // Generate Random Numbers 1 - 20
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessageScore = function (message, score) {
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = message;
};

const checkScore = function (message, score) {
  if (score > 1) {
    score--;
    displayMessageScore(message, score);
    return score;
  } else {
    score--;
    displayMessageScore("Game Over!", score);
    return score;
  }
};

const reset = function () {
  score = 20;
  displayMessageScore("Start guessing...", score);
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  secretNumber = randomizer();

  //style to original
  document.querySelector("body").style.backgroundColor = "#222";

  //Enter Player name
  playerName = prompt("Enter Player Name");
};

const win = function (score) {
  if (highestScore < score) {
    highestScore = score;
    topPlayer = playerName;
  }
  displayMessageScore("Correct!", score);
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".highscore").textContent = highestScore;
  document.querySelector(".player").textContent = topPlayer;
};

//Global Variables
let highestScore = 0; //record highest score
let score = 20; //Player Score
let secretNumber = randomizer(); //secret Number
let playerName = "";
let topPlayer = "";

//Enter Player name
playerName = prompt("Enter Player Name");

//DOM
document.querySelector(".check").addEventListener("click", check);
document.querySelector(".again").addEventListener("click", reset);
