"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayGuessMessage = function (message) {
  document.querySelector(".guess-message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guessingNumber = +document.querySelector(".number-input").value;

  console.log(guessingNumber, typeof guessingNumber);
  //Нет ввода
  if (!guessingNumber) {
    displayGuessMessage("Введите число");
    //Игрок победил
  } else if (guessingNumber === secretNumber) {
    /*  document.querySelector(".guess-message").textContent = "Правильно!"; */
    displayGuessMessage("Правильно!");
    document.querySelector(".question").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(9, 250, 21)";
    document.querySelector(".question").style.width = "50rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //Число из ввода неверное.
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      /*  document.querySelector(".guess-message").textContent =
        guessingNumber > secretNumber ? "Слишком много!" : "Слишком мало!"; */
      displayGuessMessage(
        guessingNumber > secretNumber ? "Слишком много!" : "Слишком мало!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      /*     document.querySelector(".guess-message").textContent = "Игра окончена!"; */
      displayGuessMessage("Игра окончена!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".question").textContent = "???";
  document.querySelector(".question").style.width = "25rem";
  /* document.querySelector(".guess-message").textContent = "Начни угадывать"; */
  displayGuessMessage("Начни угадывать");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-input").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(0,0,0)";
});
