// track each player's score
// get computer choice
// get human choice
// compare computer choice with human choice
// determine winner of round
// update score
// play five rounds
// determine winner of game

// track each player's score
let computerScore = 0;
let humanScore = 0;

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

// get human choice
// prompt user for input
// standardize user input to lowercase
// if user input doesn't match valid options, reprompt
// return user's input
function getHumanChoice(){
    const humanChoice = prompt("Choose rock, paper, or scissors!").toLowerCase();

    const validChoices = ["rock", "paper", "scissors"];

    if(!validChoices.includes(humanChoice)){
        getHumanChoice();
    }

    return humanChoice;

}

// round logic
// get comp and human choices
// compare both, determine round winner
// increment winner's score

// game logic
// play five rounds
// compare scores, determine game winner