//welcome screen/start game (main screen, pose question give 2 buttons yes or no)
let startGame = document.getElementById("start");
let noThanks = document.getElementById("noThanks");
let thankYou = document.getElementById("thankYouCard");
let wouldYou = document.getElementById("wouldYou");
let gameCard = document.getElementById("gameCard");
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
  startDifficulty();
});
//connect choice to game of choice

//pop option to play again with yes or no buttons (modal?)
