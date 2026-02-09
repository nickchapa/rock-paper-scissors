// track each player's score
// get computer choice
// get human choice
// compare computer choice with human choice
// determine winner of round
// update score
// play five rounds
// determine winner of game

function getComputerChoice(){
    // randomly return rock, paper, or scissors

    // generate a random number between and including 0 and 2
    const computerChoice = Math.floor(Math.random() * 3);
    
    if(computerChoice === 0){
        return "rock";
    }
    else if(computerChoice === 1){
        return "paper";
    }
    else if(computerChoice === 2){
        return "scissors";
    }

}