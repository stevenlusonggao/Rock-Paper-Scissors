let rps = ["rock", "paper", "scissors"]
//let playerSelection = "rock";
//let computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;
let totalRounds = 0;

const buttons = document.querySelectorAll('button');
const op = document.getElementById('out');
const des = document.getElementById('des');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(rps[button.id-1], computerPlay());
        des.textContent += ", you " + result;
        if (result == "win") {
            playerScore++;
        }
        else if (result == "lose") {
            computerScore++;
        }
        totalRounds++;
        op.textContent = "Total Rounds: " + totalRounds + " | Player: " + playerScore + " | Compuer: " + computerScore;
        if (totalRounds == 5) {
            if (computerScore > playerScore) {
                alert('You lose!' + ' The computer won by ' + (computerScore - playerScore));
            }
            else if (computerScore == playerScore) {
                alert('It is a tie!');
            }
            else {
                alert('You win!' + ' You won by ' + (playerScore - computerScore));
            }
            op.textContent = '';
            des.textContent = '';
            computerScore = 0;
            playerScore = 0;
            totalRounds = 0;
        }
    });
  });

function computerPlay() {
    return rps[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
    des.textContent = "You chose " + playerSelection + " vs computer's " + computerSelection;
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
        //alert("You played " + playerSelection +" and the Computer played " + computerSelection + ", you " + result);
    }
}
