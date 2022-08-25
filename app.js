//welcome screen/start game (main screen, pose question give 2 buttons yes or no)
let startGame = document.getElementById("start");
let noThanks = document.getElementById("noThanks");
let thankYou = document.getElementById("thankYouCard");
let wouldYou = document.getElementById("wouldYou");
let gameCard = document.getElementById("gameCard");

//make no pop to thanks for visiting page
visible = function() {wouldYou.style.display = "none"};

noThanks.onclick = function () {
  wouldYou.classList.toggle(visible);
  gameCard.style.display = "none";
  thankYou.style.display = "flex";
};

//make yes pose difficulty choice with 4 buttons

//connect choice to game of choice

//pop option to play again with yes or no buttons (modal?)
