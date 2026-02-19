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
    const validChoices = ["rock", "paper", "scissors"];
    let humanChoice = prompt("Choose rock, paper, or scissors!");

    if(humanChoice !== null){
        humanChoice = humanChoice.toLowerCase();
        if(!validChoices.includes(humanChoice)){
            console.log("Please select rock, paper, or scissors.")
            getHumanChoice();
        }
    } else {
        return null;
    }
    
    return humanChoice;
}

// round logic
// get comp and human choices
// compare both, determine round winner
// increment winner's score

function playRound(computerChoice, humanChoice){
    
    // compare
    // check for tie first
    if(humanChoice === null){
        return null;
    }
    if(computerChoice === humanChoice){
        return "Tie! No points awarded this round.";
    }

    // check each possible condition
    if(computerChoice === "rock"){
        if(humanChoice === "scissors"){
            console.log("Computer wins round!");
            return computerScore++;
        } else if(humanChoice === "paper"){
            console.log("Human wins round!");
            return humanScore++;
        }
    }

    if(computerChoice === "paper"){
        if(humanChoice === "rock"){
            console.log("Computer wins round!");
            return computerScore++;
        } else if(humanChoice === "scissors"){
            console.log("Human wins round!");
            return humanScore++;
        }
    }

    if(computerChoice === "scissors"){
        if(humanChoice === "paper"){
            console.log("Computer wins round!");
            return computerScore++;
        } else if(humanChoice === "rock"){
            console.log("Human wins round!");
            return humanScore++;
        }
    }
}

// UI Logic
// create buttons

const body = document.querySelector("body");

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

btnRock.textContent = "rock";
btnPaper.textContent = "paper";
btnScissors.textContent = "scissors";

body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);

// when button pressed, call playRound with corresponding humanChoice

btnRock.addEventListener("click", (e) => {
    playRound(getComputerChoice(), "rock");
})

btnPaper.addEventListener("click", (e) => {
    playRound(getComputerChoice(), "paper");
})

btnScissors.addEventListener("click", (e) => {
    playRound(getComputerChoice(), "scissors");
})


// game logic
// new function playGame
// call playRound five times
// each round, the score will increase for the winner
// after five rounds, compare scores, determine game winner
function playGame(){

    for(i = 1; i < 6; i++){
        console.log(`Round ${i}`);
        if(playRound(getComputerChoice(), getHumanChoice()) === null){
            return console.log("Game quit, refresh page to try again.");
            break;
        } else {
            console.log(`Computer Score: ${computerScore}`);
            console.log(`Human Score: ${humanScore}`);
        }
    }

    if(computerScore > humanScore){
        console.log("Computer Wins!");
    } else if(computerScore < humanScore){
        console.log("Human wins!");
    } else if(computerScore === humanScore){
        console.log("Tie!");
    }
}

// playGame();