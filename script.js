function getComputerChoice() {
    let random = Math.floor(Math.random() * 100);
    if (random <= 33) return "rock";
    if (random <= 66) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors: ").toLowerCase();
    return choice;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        console.log(`Player selection: ${humanChoice}`);
        console.log(`Computer selection: ${computerChoice}`);
    
        if ((humanChoice == "rock") && (computerChoice == "rock")) {
            console.log("Draw!");
        }
    
        if ((humanChoice == "rock") && (computerChoice == "paper")) {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        }
    
        if ((humanChoice == "rock") && (computerChoice == "scissors")) {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
    
        if ((humanChoice == "paper") && (computerChoice == "rock")) {
            console.log("You win! Paper beats rock.");
            humanScore++;
        }
    
        if ((humanChoice == "paper") && (computerChoice == "paper")) {
            console.log("Draw!");
        }
    
        if ((humanChoice == "paper") && (computerChoice == "scissors")) {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
    
        if ((humanChoice == "scissors") && (computerChoice == "rock")) {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }
    
        if ((humanChoice == "scissors") && (computerChoice == "paper")) {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        }
    
        if ((humanChoice == "scissors") && (computerChoice == "scissors")) {
            console.log("Draw!");
        }
    
        console.log(`Player score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    let humanScore = 0;
    let computerScore = 0;
    
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();