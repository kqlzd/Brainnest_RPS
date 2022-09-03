const choices = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

//it is a random function
const randomChoices = Object.keys(choices);


function computerPlay() {
  let random = Math.floor(Math.random() * randomChoices.length);
  return randomChoices[random];
}


function playRPS(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "its a same choice!";
  }
  if (computerSelection === "rock" && playerSelection === "paper") {
    return "you win the game!";
  }
  if (computerSelection === "rock" && playerSelection === "scissors") {
    return "you lost the game!";
  }
  if (computerSelection === "paper" && playerSelection === "scissors") {
    return "you win game!";
  }
  if (computerSelection === "paper" && playerSelection === "rock") {
    return "you lose game!";
  }
  if (computerSelection === "scissors" && playerSelection === "rock") {
    return "you win game!";
  }
  if (computerSelection === "scissors" && playerSelection === "paper") {
    return "you lose game!";
  }
}

const playerSelection = "rock";
let computerSelection = computerPlay();

console.log(
  "Computer selection is " + computerSelection + "!",playRPS(playerSelection, computerSelection));

function play(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "its a same choice!";
  }
  if (computerSelection === "rock" && playerSelection === "paper") {
    return "you win!";
  }
  if (computerSelection === "rock" && playerSelection === "scissors") {
    return "you lost!";
  }
  if (computerSelection === "paper" && playerSelection === "scissors") {
    return "you win!";
  }
  if (computerSelection === "paper" && playerSelection === "rock") {
    return "you lose!";
  }
  if (computerSelection === "scissors" && playerSelection === "rock") {
    return "you win!";
  }
  if (computerSelection === "scissors" && playerSelection === "paper") {
    return "you lose!";
  }
}

for (let i = 0; i < 5; i++) {
  let player = prompt("Your choice");
  computerSelection = computerPlay();

//   "After loop Computer selection is " + computerSelection + "!",
  console.log(play(player, computerSelection));
}
