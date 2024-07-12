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

        if(choice == "ROCK" || choice == "rock"){
            return "Rock"
            i++;
        }
        else if(choice == "PAPER" || choice == "paper"){
            return "Paper"
            i++;
        }
        else if(choice == "SCISSORS" || choice == "scissors"){
            return "Scissors"
            i++;
        }
        else {
            alert("Invalid input. Please enter the input with all lower or upper case.");
        }
    }

    return choice;
}

let humanScore = 0;
let computerScore = 0;