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

function playRock(){
    playRound("Rock");
}

function playPaper(){
    playRound("Paper");
}

function playScissors(){
    playRound("Scissors");
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function playRound(humanChoice){

    let computerChoice = getComputerChoice();

    const gameRight = document.querySelector(".game-right");
    const gameLeft = document.querySelector(".game-left");

    const computerResult = document.createElement("p");
    computerResult.style.color = "red";
    computerResult.style.fontSize = "18px";
    computerResult.style.fontWeight = "600";

    const humanResult = document.createElement("p");
    humanResult.style.color = "blue";
    humanResult.style.fontSize = "18px";
    humanResult.style.fontWeight = "600";

    if(humanChoice == "Rock" && computerChoice == "Scissors"){
        humanResult.textContent = "You selected Rock!";
        computerResult.textContent = "Computer selected Scissors!";

        gameLeft.appendChild(humanResult);
        gameRight.appendChild(computerResult);

        roundCount++;
        humanScore++;
    }
    else if(humanChoice == "Rock" && computerChoice == "Paper"){
        humanResult.textContent = "You selected Rock!";
        computerResult.textContent = "Computer selected Paper!";

        gameLeft.appendChild(humanResult);
        gameRight.appendChild(computerResult);
        roundCount++;
        computerScore++;
    }
    else if(humanChoice == "Paper" && computerChoice == "Scissors"){
        humanResult.textContent = "You selected Paper!";
        computerResult.textContent = "Computer selected Scissors!";

        gameLeft.appendChild(humanResult);
        gameRight.appendChild(computerResult);

        roundCount++;
        computerScore++;
    }
    else if(humanChoice == "Paper" && computerChoice == "Rock"){
        humanResult.textContent = "You selected Paper!";
        computerResult.textContent = "Computer selected Rock!";

        gameLeft.appendChild(humanResult);
        gameRight.appendChild(computerResult);

        roundCount++;
        humanScore++;
    }
    else if(humanChoice == "Scissors" && computerChoice == "Rock"){
        humanResult.textContent = "You selected Scissors!";
        computerResult.textContent = "Computer selected Rock!";

        gameLeft.appendChild(humanResult);
        gameRight.appendChild(computerResult);

        roundCount++;
        computerScore++;
    }
    else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        humanResult.textContent = "You selected Scissors!";
        computerResult.textContent = "Computer selected Paper!";

        gameLeft.appendChild(humanResult);
        gameRight.appendChild(computerResult);

        roundCount++;
        humanScore++;
    }
    else{
        humanResult.textContent = "You selected " + humanChoice + "!";
        computerResult.textContent = "Computer selected " + computerChoice + "!"; 

        gameLeft.appendChild(humanResult);
        gameRight.appendChild(computerResult);

        roundCount++;
    }

    const gameResult = document.querySelector("#game-result-text");

    if(roundCount == 5){
        if(humanScore > computerScore){
            gameResult.textContent = "You Won! with your " + humanScore +" score against their " + computerScore + ".";
            btnRock.removeEventListener("click",playRock);
            btnPaper.removeEventListener("click",playPaper);
            btnScissors.removeEventListener("click",playScissors);
        }
        else if(humanScore < computerScore){
            gameResult.textContent = "You Lost! with your " + humanScore +" score against their " + computerScore + ".";
            btnRock.removeEventListener("click",playRock);
            btnPaper.removeEventListener("click",playPaper);
            btnScissors.removeEventListener("click",playScissors);
        }
        else{
            gameResult.textContent = "It is a Draw! with your " + humanScore +" score against their " + computerScore + ".";
            btnRock.removeEventListener("click",playRock);
            btnPaper.removeEventListener("click",playPaper);
            btnScissors.removeEventListener("click",playScissors);
        }
    }
}

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click",playRock);

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click",playPaper);

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click",playScissors);

