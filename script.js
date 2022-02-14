let array = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let parentElement = document.getElementById('selections');
let theFirstChild = parentElement.firstChild;
let newElement = document.createElement("p");

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
        newElement.textContent = "you win " + playerSelection + "! beats " + computerSelection;
        console.log("you win " + playerSelection + " beats " + computerSelection);
    } else if (playerSelection === computerSelection){
        newElement.textContent = "it is a tie";
        console.log("it is a tie");
    }else{
        newElement.textContent = "you lose! :( " + computerSelection + " beats " + playerSelection;
        console.log("you lose! " + computerSelection + " beats " + playerSelection);
    }
    parentElement.insertBefore(newElement, theFirstChild);
  }
