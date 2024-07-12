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