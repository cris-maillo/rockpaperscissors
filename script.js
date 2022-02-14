let array = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let winner;
let loser;
let tie;
let playerCounter = 0;
let computerCounter = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Pick").toLowerCase()
    if ((playerSelection == "rock" && computerSelection =="scissors") || (playerSelection == "paper" && computerSelection =="rock") || (playerSelection == "scissors" && computerSelection =="paper")){
        console.log("you win " + playerSelection + " beats " + computerSelection);
        return "winner";
    } else if (playerSelection === computerSelection){
        console.log("it is a tie");
        return "tie";
    }else{
        console.log("you lose! " + computerSelection + " beats " + playerSelection);
        return "loser";
    }
  }

  function game(){
    for (let i = 0; i < 5; i++){
        computerSelection = array[Math.floor(Math.random() * array.length)];
        let roundWinner = playRound(playerSelection, computerSelection);
        if (roundWinner == "loser"){
            computerCounter = computerCounter + 1;
            console.log(computerCounter);
        }else if (roundWinner == "winner"){
            playerCounter = playerCounter + 1;
            console.log("player" + playerCounter);
        }
    }
    if (playerCounter > computerCounter){
        console.log("you win you badass")
    }else {
        console.log("idc anymore tbh")
    }
  }

  console.log(game());
