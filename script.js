
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    let computerSelection = choices[random];
    return computerSelection;
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return "It's a tie! You both chose " + playerSelection + "."
    } else if ( computerSelection == "paper") {
        if (playerSelection == "rock") {
            return "You lose! Paper beats rock."
        } else {
          return "You win! Scissors beats paper."
        }
    } else if (computerSelection =="rock") {
        if (playerSelection == "scissors") {
            return "You lose! Rock beats scissors."
        } else {
            return "You win! Paper beats rock."
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "paper") {
            return "You lose! Scissors beats paper."
        } else {
            return "You win! Rock beats scissors."
    }
    }
}

let playerSelection = "PaPeR";
let computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(computerSelection, playerSelection.toLowerCase()));
