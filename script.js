let array = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;

window.onload=function(){
    const buttons = document.querySelectorAll('#selections > button');
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            playerSelection = button.id;
            computerSelection = array[Math.floor(Math.random() * array.length)];
            playRound(playerSelection, computerSelection);
            });
    });
  }

function playRound(playerSelection, computerSelection) {
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

reset.addEventListener('click', function () {
    location.reload();
});