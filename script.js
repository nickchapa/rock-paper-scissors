let computerScore = 0;
let humanScore = 0;
let roundCounter = 1;

function getComputerChoice(){

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

function playRound(computerChoice, humanChoice){
    winnerDiv.textContent = ``;
    choicesDiv.textContent = `CPU Choice: ${computerChoice} || Human Choice: ${humanChoice}`;

    if(computerChoice === humanChoice){
        return resultsSpan.textContent = "Tie! No points awarded this round.";
    }

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

btnRock.addEventListener("click", (e) => {
    playRound(getComputerChoice(), "rock");
})

btnPaper.addEventListener("click", (e) => {
    playRound(getComputerChoice(), "paper");
})

btnScissors.addEventListener("click", (e) => {
    playRound(getComputerChoice(), "scissors");
})