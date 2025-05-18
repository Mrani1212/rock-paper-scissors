let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {

    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return 'rock';
    } else if ((randomNumber < 2 /3) && (randomNumber > 1 / 3)) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
function getHumanChoice () {
    const choice = prompt('Please choose (rock, paper, or scissors):');
    return choice.toLowerCase();
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`It's a tie. Both choose ${humanChoice}`);
        return;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else {
        computerScore++;
        console.log(`You loose. ${computerChoice} beats ${humanChoice}.`)
    }
}
// got help to write what below got stuck
function playGame() {
    console.log("Starting Rock-Paper-Scissors! Best of 5 rounds wins!");
    
    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    console.log("\nGame Over!");
    console.log(`Final Score - You: ${humanScore} | Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins! Better luck next time!");
    } else {
        console.log("The game ended in a tie!");
    }
}

// Start the game
playGame();