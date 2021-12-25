// This function returns 'Rock', 'Paper', or 'Scissors' equaly likely
function computerPlay() {
  let choice = ["Rock", "Paper", "Scissors"];
  const value = Math.round(Math.random() * 10) % 3;
  return choice[value];
}

function winOrLoseOrTie(playerSelection, computerSelection, win) {
  const span = document.createElement("span");
  const buttonsContainer = document.querySelector("#round-results");
  // win is 1
  if (win === 1) {
    const text = document.createTextNode(
      `You win! ${playerSelection} beats ${computerSelection}`
    );
    span.appendChild(text);
  }
  // lose is 0
  else if (win === 0) {
    const text = document.createTextNode(
      `You lose! ${computerSelection} beats ${playerSelection}`
    );
    span.appendChild(text);
  }
  // tie is -1 (or anything else)
  else {
    const text = document.createTextNode("It's a Tie");
    span.appendChild(text);
  }
  buttonsContainer.appendChild(span);
}

function playRound(playerSelection, computerSelection) {
  // transform both options into lowercase
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      winOrLoseOrTie(playerSelection, computerSelection, 0);
      return "lose";
    } else if (computerSelection === "scissors") {
      winOrLoseOrTie(playerSelection, computerSelection, 1);
      return "win";
    } else {
      winOrLoseOrTie(playerSelection, computerSelection, -1);
      return "tie";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      winOrLoseOrTie(playerSelection, computerSelection, 0);
      return "lose";
    } else if (computerSelection === "rock") {
      winOrLoseOrTie(playerSelection, computerSelection, 1);
      return "win";
    } else {
      winOrLoseOrTie(playerSelection, computerSelection, -1);
      return "tie";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      winOrLoseOrTie(playerSelection, computerSelection, 0);
      return "lose";
    } else if (computerSelection === "paper") {
      winOrLoseOrTie(playerSelection, computerSelection, 1);
      return "win";
    } else {
      winOrLoseOrTie(playerSelection, computerSelection, -1);
      return "tie";
    }
  }
}

// DOM code

const buttons = document.querySelectorAll(".selection");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.getAttribute("id"), computerPlay());
  });
});

function game() {
  let playerScore = 0;
  let computerScore = 0;
  // for (let i = 0; i < 5; i++) {
  //   const roundResult = playRound(getPlayerSelection(), computerPlay());
  //   if (roundResult === "win") {
  //     playerScore++;
  //   } else if (roundResult === "lose") {
  //     computerScore++;
  //   }
  // }
  if (playerScore > computerScore) {
    console.log("You win!");
  } else if (playerScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("It's a tie!");
  }
}

//game();
