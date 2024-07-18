function randomNumber(max){
  return Math.floor(Math.random() * max + 1);
}

function getComputerChoice(){
    let num = randomNumber(3);

    if (num == 1){
        return "Rock";
    }
    else if (num == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice){

    let computerChoice = getComputerChoice();

    if(humanChoice == "Rock" && computerChoice == "Scissors"){
        console.log("You won! Rock beats Scissors");
        humanScore++;
    }
    else if(humanChoice == "Rock" && computerChoice == "Paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(humanChoice == "Paper" && computerChoice == "Scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if(humanChoice == "Paper" && computerChoice == "Rock"){
        console.log("You won! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice == "Scissors" && computerChoice == "Rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log("You won! Scissors beats Paper");
        humanScore++;
    }
    else{
        console.log("It was a draw!")
    }
}

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", function() {playRound("Rock");});
const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", function() {playRound("Paper");});
const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", function() {playRound("Scissors");});

