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

function getHumanChoice(){
    let choice;

    for(let i = 0; i < 1;){
        choice = prompt("Rock, Paper, or Scissors?" ,"ROCK");
        choice = choice.toLowerCase();

        if(choice == "rock"){
            return "Rock"
            i++;
        }
        else if(choice == "paper"){
            return "Paper"
            i++;
        }
        else if(choice == "scissors"){
            return "Scissors"
            i++;
        }
        else {
            alert("ERROR");
        }
    }

    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    if(humanChoice == "Rock" && computerChoice == "Scissors"){
        console.log("You won! Rock beats Scissors")
        humanScore++;
    }
    else if(humanChoice == "Rock" && computerChoice == "Paper"){
        console.log("You lose! Paper beats Rock")
        computerScore++;
    }
    else if(humanChoice == "Paper" && computerChoice == "Scissors"){
        console.log("You lose! Scissors beats Paper")
        computerScore++;
    }
    else if(humanChoice == "Paper" && computerChoice == "Rock"){
        console.log("You won! Paper beats Rock")
        humanScore++;
    }
    else if(humanChoice == "Scissors" && computerChoice == "Rock"){
        console.log("You lose! Rock beats Scissors")
        computerScore++;
    }
    else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log("You won! Scissors beats Paper")
        humanScore++;
    }
    else{
        console.log("It was a draw!")
    }
}

function playGame(){  

    function playRound(humanChoice,computerChoice){
        if(humanChoice == "Rock" && computerChoice == "Scissors"){
            console.log("You won! Rock beats Scissors")
            humanScore++;
        }
        else if(humanChoice == "Rock" && computerChoice == "Paper"){
            console.log("You lose! Paper beats Rock")
            computerScore++;
        }
        else if(humanChoice == "Paper" && computerChoice == "Scissors"){
            console.log("You lose! Scissors beats Paper")
            computerScore++;
        }
        else if(humanChoice == "Paper" && computerChoice == "Rock"){
            console.log("You won! Paper beats Rock")
            humanScore++;
        }
        else if(humanChoice == "Scissors" && computerChoice == "Rock"){
            console.log("You lose! Rock beats Scissors")
            computerScore++;
        }
        else if(humanChoice == "Scissors" && computerChoice == "Paper"){
            console.log("You won! Scissors beats Paper")
            humanScore++;
        }
        else{
            console.log("It was a draw!")
        }
    }

    for(let i = 1; i < 6;){
        playRound(getHumanChoice(),getComputerChoice());
        alert("End of Round " + i + "! " + `Your Score:${humanScore}  Computer Score:${computerScore}`);
        i++;
    }
                
    if(humanScore > computerScore){
        alert("You won with " + `${humanScore} score against ` + `${computerScore}!`);
    }
    else if(humanScore < computerScore){
        alert("You lost with " + `${humanScore} score against ` + `${computerScore}!`);
    }
    else{
        alert("Game ended with DRAW!");
    }
} 