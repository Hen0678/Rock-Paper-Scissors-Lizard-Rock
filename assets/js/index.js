const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const finalResult = document.getElementById("finalResult");
// target the html with a preset of 0
const currentPlayerScore = document.getElementById("currentPlayerScore");
const currentComputerScore = document.getElementById("currentComputerScore");
const currentTieScore = document.getElementById("currentTieScore");
// start of game both player and computer have 0
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

