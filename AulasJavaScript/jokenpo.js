function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
      const computerSelection = computerPlay();
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result === "You win!") {
        playerScore++;
      } else if (result === "You lose!") {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (computerScore > playerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  game();