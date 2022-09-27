//Selectors
let guess;
let rand;
let makeGuess = document.getElementById("makeGuess");
let guessInput = document.getElementById("guessInput");
let gameCardLabel = document.getElementById("gameCardLabel");
let startGame = document.getElementById("start");
let noThanks = document.getElementById("noThanks");
let thankYou = document.getElementById("thankYouCard");
let wouldYou = document.getElementById("wouldYou");
let gameCard = document.getElementById("gameCard");
let difficultyOption = document.getElementById("difficultyOption");
let easy = document.getElementById("easy");
let hard = document.getElementById("hard");
let overkill = document.getElementById("overkill");
let judgement = document.getElementById("judgement");
let judgeLabel = document.getElementById("judgeLabel");
let tryAgain = document.getElementById("tryAgain");
let winner = document.getElementById("winner");
let playAgain = document.getElementById("playAgain");
let winImg = document.getElementById("winGIF");
let winLabel = document.getElementById("winLabel");
let notAgain = document.getElementById("notAgain");
let thanksForPlaying = document.getElementById("thanksForPlaying");

//Event Listeners

noThanks.addEventListener("click", (event) => {
  hideContainers();
});

startGame.addEventListener("click", (event) => {
  event.preventDefault();

  startDifficulty();

  easy.focus();
});

playAgain.addEventListener("click", (event) => {
  event.preventDefault();

  restart();
});

notAgain.addEventListener("click", (event) => {
  imDone();
});

easy.addEventListener("click", (event) => {
  guessInput.value = "";

  playGame();

  playGameEasy();

  guessInput.focus();
});

hard.addEventListener("click", (event) => {
  guessInput.value = "";

  playGame();

  playGameHard();

  guessInput.focus();
});

overkill.addEventListener("click", (event) => {
  guessInput.value = "";

  playGame();

  playGameOverkill();

  guessInput.focus();
});

tryAgain.addEventListener("click", (event) => {
  event.preventDefault();

  guessInput.value = "";

  judge();

  guessInput.focus();
});

//Transitional Functions

function hideContainers() {
  wouldYou.classList.toggle("hide");
  thankYou.classList.toggle("hide");
}

function startDifficulty() {
  wouldYou.classList.toggle("hide");
  difficultyOption.classList.toggle("hide");
}

function wonGame() {
  gameCard.classList.toggle("hide");
  winner.classList.toggle("hide");
  playAgain.focus();
}

function imDone() {
  winner.classList.toggle("hide");
  thanksForPlaying.classList.toggle("hide");
}

function restart() {
  winner.classList.toggle("hide");
  difficultyOption.classList.toggle("hide");
  hard.focus();
}

function playGame() {
  difficultyOption.classList.toggle("hide");
  gameCard.classList.toggle("hide");
}
function judge() {
  gameCard.classList.toggle("hide");
  judgement.classList.toggle("hide");
}

//Game Core Functions

function playGameEasy() {
  rand = Math.floor(Math.random() * 10) + 1;
  gameCardLabel.innerText = `I'm Thinking of a Number from 1 to 10...`;
}
function playGameHard() {
  rand = Math.floor(Math.random() * 100) + 1;
  gameCardLabel.innerText = `I'm Thinking of a Number from 1 to 100...`;
}
function playGameOverkill() {
  rand = Math.floor(Math.random() * 1000) + 1;
  gameCardLabel.innerText = `I'm Thinking of a Number from 1 to 1,000...`;
}

makeGuess.addEventListener("click", (event) => {
  event.preventDefault();
  guess = guessInput.value;
  if (guess < rand) {
    judgeLabel.innerText = `${guess} is too low`;
    judge();
    tryAgain.focus();
  } else if (guess > rand) {
    judgeLabel.innerText = `${guess} is too high`;
    judge();
    tryAgain.focus();
  } else if (isNaN(guess)) {
    judgeLabel.innerText = `Your guess was not a number, try again.`;
    judge();
    tryAgain.focus();
  } else {
    wonGame();
    winLabel.innerText = `You Guessed ${guess}, That Is My Number!`;
    console.log(`WAY TO GO YOU GUESSED THE NUMBER ${guess}, YOU ARE SO SMART!`);
  }
});
