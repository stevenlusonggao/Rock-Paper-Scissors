let rps = ["rock", "paper", "scissors"]
//let playerSelection = "rock";
//let computerSelection = computerPlay();

function computerPlay() {
    return rps[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection == 'paper') {
            return "lose";
        }
        else if (computerSelection == 'rock') {
            return "draw";
        }
        else {return "win";}
    }
    else if (playerSelection === "paper") {
        if (computerSelection == 'scissors') {
            return "lose";
        }
        else if (computerSelection == 'paper') {
            return "draw";
        }
        else {return "win";}
    }
    else {
        if (computerSelection == 'rock') {
            return "lose";
        }
        else if (computerSelection == 'scissors') {
            return "draw";
        }
        else {return "win";}
    }
  }

  function game() {
    let playerSelection;
    let result;
      for (i=0; i<5; i++) {
        let inputted = false;
        while (inputted == false) {
            playerSelection = prompt("rock paper scissors:").toLowerCase();
            if (rps.includes(playerSelection)) {
                inputted = true;
            } 
        }
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        alert("You played " + playerSelection +" and the Computer played " + computerSelection + ", you " + result);
      }
  }
game();