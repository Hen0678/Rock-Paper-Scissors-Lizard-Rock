const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const playerResult = document.getElementById("player-result");
const computerResult = document.getElementById("computer-result");
const finalResult = document.getElementById("final-result");

// targets the html with a preset value of 0
const overallPlayerTotal = document.getElementById("overall-player-total");
const overallComputerTotal = document.getElementById("overall-computer-total");
const overallTieTotal = document.getElementById("overall-tie-total");

// start of game both player and computer have 0 
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function selectChoice(playerChoice) {
    /** Creates a randon computer choice between 1-5 which correlates to 
     * rock, paper, scissors, Lizard or Spock    
     */
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    // Result of the random computer choice
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    } else {
        // switch can be used instead of multiple if statements
        switch (playerChoice) {
            case "Rock":
                result = (computerChoice == "Scissors" || computerChoice == "Lizard") //
                ? "YOU WIN!" : "YOU LOSE!"
                // break terminates the loop
                break;
            case "Paper":
                result = (computerChoice === "Rock" || computerChoice == "Spock") //
                ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "Scissors":
                result = (computerChoice == "Paper" || computerChoice == "Lizard") //
                ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "Lizard":
                result = (computerChoice == "Paper" || computerChoice == "Spock") //
                ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "Spock":
                result = (computerChoice == "Scissors" || computerChoice == "Rock") //
                ? "YOU WIN!" : "YOU LOSE!"
                break;

        }
    }
    /** This displays the player choice and computer choice
     * and lists the output in a table 
     */
    playerResult.textContent = `${playerChoice}`;
    computerResult.textContent = `${computerChoice}`;
    /** Displays the outcome of both choices
     * which equates to YOU WIN!, YOU LOSE! or IT'S A TIE
     */
    finalResult.textContent = result;
    /** This will remove the green, red or white
     * text when a new guess is selected 
     */
    finalResult.classList.remove("green-text", "red-text", "white-text");

    switch (result) {
        case "YOU WIN!":
            finalResult.classList.add("green-text");
            // Will add 1 to the player score
            playerScore++;
            // Will display the overall player score
            overallPlayerTotal.textContent = playerScore;
            break;
        case "YOU LOSE!":
            finalResult.classList.add("red-text");
            // Will add 1 to the computer score
            computerScore++;
            // Will display the overall computer score
            overallComputerTotal.textContent = computerScore;
            break;
        case "IT'S A TIE":
            finalResult.classList.add("white-text");
            // Will add 1 to the tie score
            tieScore++;
            // Will display the overall tie score
            overallTieTotal.textContent = tieScore;
            break;
    }
}

// restart variable 
//const reset = document.getElementById('reset'); 

// Restart game function
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    overallPlayerTotal.innerHTML = `
    0`
    overallComputerTotal.innerHTML = `
    0`
    overallTieTotal.innerHTML = `
    0`

}

// Restart button to clear game
reset.addEventListener('click', resetGame);