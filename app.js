//welcome screen/start game (main screen, pose question give 2 buttons yes or no)
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
judgeLabel = document.getElementById("judgeLabel");
let tryAgain = document.getElementById("tryAgain");
//make no pop to thanks for visiting page
function hideContainers() {
  wouldYou.classList.toggle("hide");
  thankYou.classList.toggle("hide");
}

noThanks.addEventListener("click", (event) => {
  hideContainers();
});

//make yes pose difficulty choice with 4 buttons
function startDifficulty() {
  wouldYou.classList.toggle("hide");
  difficultyOption.classList.toggle("hide");
}
startGame.addEventListener("click", (event) => {
  event.preventDefault();
  startDifficulty();
  easy.focus();
});
//connect choice to game of choice

function playGameEasy() {
  var rand = Math.floor(Math.random() * 10) + 1;
  gameCardLabel.innerText = `I'm Thinking of a Number from 1 to 10...`;
  let guess;
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
    } else if (isNaN(guess)) {
      judgeLabel.innerText = `Your guess was not a number, try again.`;
      judge();
    } else {
      judgeLabel.innerText = `${guess} IS CORRECT!`;
      judge();
      console.log(
        `WAY TO GO YOU GUESSED THE NUMBER ${guess} YOU ARE SO SMART!`
      );
    }
  });
}

function playGame() {
  difficultyOption.classList.toggle("hide");
  gameCard.classList.toggle("hide");
}
easy.addEventListener("click", (event) => {
  guessInput.value = "";
  playGame();
  playGameEasy();
  guessInput.focus();
});
function judge() {
  gameCard.classList.toggle("hide");
  judgement.classList.toggle("hide");
}
tryAgain.addEventListener("click", (event) => {
  event.preventDefault();
  guessInput.value = "";
  judge();
});
//pop option to play again with yes or no buttons (modal?)
