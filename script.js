// This function returns 'Rock', 'Paper', or 'Scissors' equaly likely
function computerPlay() {
  let choice = ["Rock", "Paper", "Scissors"];
  const value = Math.round(Math.random() * 10) % 3;
  return choice[value];
}

function winOrLose(playerSelection, computerSelection, win = true) {
  if (win) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  return `You lose! ${computerSelection} beats ${playerSelection}`;
}

// this function gets the player's selection and it loops until it gets a valid one
// function getPlayerSelection() {
//   let playerSelection = prompt(
//     "Choose one of the following: rock, paper, or scissors"
//   );

//   while (
//     playerSelection !== "rock" &&
//     playerSelection !== "paper" &&
//     playerSelection !== "scissors"
//   ) {
//     playerSelection = prompt(
//       "Choose one of the following: rock, paper, or scissors"
//     );
//   }
//   return playerSelection;
// }

function playRound(playerSelection, computerSelection) {
  // transform both options into lowercase
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log(winOrLose(playerSelection, computerSelection, false));
      return "lose";
    } else if (computerSelection === "scissors") {
      console.log(winOrLose(playerSelection, computerSelection));
      return "win";
    } else {
      console.log("Tie");
      return "tie";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log(winOrLose(playerSelection, computerSelection, false));
      return "lose";
    } else if (computerSelection === "rock") {
      console.log(winOrLose(playerSelection, computerSelection));
      return "win";
    } else {
      console.log("Tie");
      return "tie";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log(winOrLose(playerSelection, computerSelection, false));
      return "lose";
    } else if (computerSelection === "paper") {
      console.log(winOrLose(playerSelection, computerSelection));
      return "win";
    } else {
      console.log("Tie");
      return "tie";
    }
  }
}

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

game();
