function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return "rock"
  } else if (randomNum === 2) {
    return "paper"
  } else if (randomNum === 3) {
    return "scissors"
  }
}

function playRound(playerSelection, computerSelection) {
  var winner;
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      winner = "computer";
    } else if (computerSelection === "scissors") {
      winner = "player";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      winner = "computer";
    } else if (computerSelection === "rock") {
      winner = "player";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      winner = "computer";
    } else if (computerSelection === "paper") {
      winner = "player";
    }
  }

  if (winner === "player") {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (winner === "computer") {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  } else if (winner === undefined) {
    return "It's a draw! " + computerSelection + " vs. " + playerSelection;
  }
}

function game() {
  let score = [0, 0]

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper, or Scissors?");
    computerSelection = getComputerChoice();
    roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes("win")) {
      score[0] += 1;
    }
    if (roundResult.includes("lose")) {
      score[1] += 1;
    }
    console.log(roundResult);
  }

  if (score[0] > score[1]) {
    console.log("You win out of 5 rounds!");
  } else if (score[0] < score[1]) {
    console.log("You lost out of 5 rounds!");
  } else if (score[0] === score[1]) {
    console.log("It was a draw out of 5 rounds!");
  }

}

game();
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// alert(playRound(playerSelection, computerSelection));