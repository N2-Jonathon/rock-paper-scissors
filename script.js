function getComputerChoice(){
  randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return "rock"
  }
  else if (randomNum === 2) {
    return "paper"
  }
  else if (randomNum === 3) {
    return "scissors"
  }
}

function playRound(playerSelection, computerSelection) {
    var winner;
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            winner = "computer";
        }
        else if (computerSelection === "scissors") {
            winner = "player";
        }
    }
    else if(playerSelection === "paper") {
        if(computerSelection === "scissors") {
            winner = "computer";
        }
        else if (computerSelection === "rock") {
            winner = "player";
        }
    }
    else if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            winner = "computer";
        }
        else if (computerSelection === "paper") {
            winner = "player";
        }
    }

    if (winner === "player") {
      return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (winner === "computer") {
      return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}