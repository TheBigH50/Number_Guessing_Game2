//welcome screen/start game (main screen, pose question give 2 buttons yes or no)
let startGame = document.getElementById("start");
let noThanks = document.getElementById("noThanks");
let thankYou = document.getElementById("thankYouCard");
let wouldYou = document.getElementById("wouldYou");
let gameCard = document.getElementById("gameCard");

//make no pop to thanks for visiting page
function hideContainers() {
  wouldYou.classList.toggle("notVisible");
}
function showContainers() {
  thankYou.classList.toggle("visible");
}

noThanks.addEventListener("submit", (event) => {
  event.preventDefault();
  hideContainers();
  showContainers();
});

//make yes pose difficulty choice with 4 buttons

//connect choice to game of choice

//pop option to play again with yes or no buttons (modal?)
