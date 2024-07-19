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
    let roundCount = 1;

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

    const gameResult = document.createElement("p");

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
        roundCount++;
    }
}

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", function() {playRound("Rock");});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", function() {playRound("Paper");});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", function() {playRound("Scissors");});

