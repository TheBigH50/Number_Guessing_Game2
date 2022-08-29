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
async function hideContainers() {
  wouldYou.classList.toggle("hide");
  thankYou.classList.toggle("hide");
}

noThanks.addEventListener("click", (event) => {
  hideContainers();
});

//make yes pose difficulty choice with 4 buttons
async function startDifficulty() {
  wouldYou.classList.toggle("hide");
  difficultyOption.classList.toggle("hide");
}
startGame.addEventListener("click", (event) => {
  startDifficulty();
});
//connect choice to game of choice

async function playGameEasy() {
  var rand = Math.floor(Math.random() * 10) + 1;
  gameCardLabel.innerText = `I'm Thinking of a Number from 1 to 10...`;
  let guess;
  makeGuess.addEventListener("click", (event) => {
    guess = guessInput.value;
    
    if (guess < rand) {
      judgeLabel.innerText = `${guess} is too low`;
      judge(); tryAgain.addEventListener("click", (event) => {
        guessInput.value = ""; judge();
      });
    } else if (guess > rand) {
      judgeLabel.innerText = `${guess} is too `;
      judge(); tryAgain.addEventListener("click", (event) => {
        guessInput.value = ""; judge();
      });
    } else if (isNaN(guess)) {
      alert(`Guess a number please`);
    } else {
      alert(`${guess} IS CORRECT!`);
      console.log(
        `WAY TO GO YOU GUESSED THE NUMBER ${guess} YOU ARE SO SMART!`
      );
    }
  });
}
async function playGame() {
  difficultyOption.classList.toggle("hide");
  gameCard.classList.toggle("hide");
}
easy.addEventListener("click", (event) => {
  guessInput.value = "";
  playGame();
  playGameEasy();
});
async function judge() {
  gameCard.classList.toggle("hide");
  judgement.classList.toggle("hide");
}
//pop option to play again with yes or no buttons (modal?)
