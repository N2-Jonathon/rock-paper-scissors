function playRound(playerSelection, computerSelection) {
    var winner;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

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