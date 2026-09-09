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

function capitalize(string) { 
    return string.slice(0, 1).toUpperCase() + string.slice(1); 
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    
    const log = document.querySelector(".log");
    const humanScoreDisplay = document.querySelector('.humanScore');
    const computerScoreDisplay = document.querySelector('.computerScore');

    const playerSelection = document.createElement('p');
    const computerSelection = document.createElement('p');
    const result = document.createElement('p');
    const finalResult = document.createElement('h1');

    log.innerText = '';

    playerSelection.textContent = `Player selection: ${humanChoice}`;
    computerSelection.textContent = `Computer selection: ${computerChoice}`;

    if ((humanChoice == "rock") && (computerChoice == "rock") ||
        (humanChoice == "paper") && (computerChoice == "paper") ||
        (humanChoice == "scissors") && (computerChoice == "scissors")) {
        result.textContent = "Draw!";
    }

    if ((humanChoice == "rock") && (computerChoice == "paper") ||
        (humanChoice == "paper") && (computerChoice == "scissors") ||
        (humanChoice == "scissors") && (computerChoice == "rock")) {
        result.textContent = `You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`;
        computerScore++;
    }

    if ((humanChoice == "rock") && (computerChoice == "scissors") ||
        (humanChoice == "paper") && (computerChoice == "rock") ||
        (humanChoice == "scissors") && (computerChoice == "paper")) {
        result.textContent = `You win! ${capitalize(humanChoice)} beats ${computerChoice}.`;
        humanScore++;
    }

    humanScoreDisplay.textContent = `Human: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;

    log.appendChild(playerSelection);
    log.appendChild(computerSelection);
    log.appendChild(result);

    if (humanScore === 5 || computerScore === 5) {
        buttons.forEach((button) => button.disabled = 1);
        
        const reset = document.createElement("button");
        
        if (humanScore > computerScore) {
            finalResult.textContent = 'Game over! Human wins!';
        } else {
            finalResult.textContent = 'Game over! Computer wins!';
        }
        
        reset.textContent = "New Game";
        
        reset.addEventListener("click", () => {
            log.innerText = '';
            
            humanScore = 0;
            computerScore = 0;

            humanScoreDisplay.textContent = `Human: ${humanScore}`;
            computerScoreDisplay.textContent = `Computer: ${computerScore}`;
            
            buttons.forEach((button) => button.disabled = 0);
        });

        log.appendChild(finalResult);
        log.appendChild(reset);
    }
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e.target.value);
    });
});