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
let roundCounter = 1;

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
    winnerDiv.textContent = ``;
    choicesDiv.textContent = `CPU Choice: ${computerChoice} || Human Choice: ${humanChoice}`;
    // compare
    // check for tie first
    if(humanChoice === null){
        return null;
    }
    if(computerChoice === humanChoice){
        return resultsSpan.textContent = "Tie! No points awarded this round.";
    }

    // check each possible condition
    if(computerChoice === "rock"){
        if(humanChoice === "scissors"){
            resultsSpan.textContent = "Computer wins round!";
            computerScore++;
        } else if(humanChoice === "paper"){
            resultsSpan.textContent = "Human wins round!";
            humanScore++;
        }
    } else if(computerChoice === "paper"){
        if(humanChoice === "rock"){
            resultsSpan.textContent = "Computer wins round!";
            computerScore++;
        } else if(humanChoice === "scissors"){
            resultsSpan.textContent = "Human wins round!";
            humanScore++;
        }
    } else if(computerChoice === "scissors"){
        if(humanChoice === "paper"){
            resultsSpan.textContent = "Computer wins round!";
            computerScore++;
        } else if(humanChoice === "rock"){
            resultsSpan.textContent = "Human wins round!";
            humanScore++;
        }
    }
    
    roundCounter++;

    // end of game logic
    
    if(computerScore == 5){
        winnerDiv.textContent = `Computer wins game!`;
    }
    if(humanScore == 5){
        winnerDiv.textContent = `Human wins game!`;
    }
    if(computerScore == 5 || humanScore == 5){
        roundCounter = 1;
        computerScore = 0;
        humanScore = 0;
    }

    roundDiv.textContent = `Round ${roundCounter} Computer Score: ${computerScore} Human Score: ${humanScore}`;
}

// UI Logic
// create buttons

const roundDiv = document.querySelector(".roundDiv");

const btnDiv = document.querySelector(".buttons");

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

btnRock.textContent = "rock";
btnPaper.textContent = "paper";
btnScissors.textContent = "scissors";
roundDiv.textContent = `Round ${roundCounter}`;

btnDiv.appendChild(btnRock);
btnDiv.appendChild(btnPaper);
btnDiv.appendChild(btnScissors);

const choicesDiv = document.querySelector(".choices");
const resultsDiv = document.querySelector(".resultsDiv");
const resultsSpan = document.querySelector(".resultsSpan");
const winnerDiv = document.querySelector(".winnerDiv");

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

/*
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
*/