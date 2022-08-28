//welcome screen/start game (main screen, pose question give 2 buttons yes or no)
let startGame = document.getElementById("start");
let noThanks = document.getElementById("noThanks");
let thankYou = document.getElementById("thankYouCard");
let wouldYou = document.getElementById("wouldYou");
let gameCard = document.getElementById("gameCard");
let options = document.getElementById("difficulty");
let difficultyOption = document.getElementById("difficultyOption");
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
};
startGame.addEventListener("click", (event) => {
  startDifficulty()
});
//connect choice to game of choice
options.addEventListener("change", (event) => {
  switch (options.value) {
  case options.value == "easy":
    var rand = Math.floor(Math.random() * 10) + 1;
    alert("Guess A Number From 1-10");
    break;
  case options.value == "Hard":
    var rand = Math.floor(Math.random() * 100) + 1;
    alert("Guess A Number From 1-100");
    break;
  case options.value == "overkill":
    var rand = Math.floor(Math.random() * 1000) + 1;
    alert("Guess A Number From 1-1000");
    break;
  default:
    (`Sorry Your Selection Is Not A Valid Difficulty`);
        break;
}
let guess;
      do {
        guess = parseInt(prompt("Make A Guess!"));
        if (guess < rand) {
          alert(`${guess} is too low`);
        } else if (guess > rand) {
          alert(`${guess} is too high`);
        } else if (isNaN(guess)) {
          alert(`Guess a number please`);
        } else {
          alert(`${guess} IS CORRECT!`);
          console.log(
            `WAY TO GO YOU GUESSED THE NUMBER ${guess} YOU ARE SO SMART!`
          );
        }
      } while (rand != guess);
});
//pop option to play again with yes or no buttons (modal?)
