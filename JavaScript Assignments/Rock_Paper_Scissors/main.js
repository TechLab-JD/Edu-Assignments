const choices = ['rock', 'paper', 'scissors'];
const prompt = require('prompt-sync')();

humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];    
}

function getUserChoice() {
    let userInput = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    while (!choices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors: ").toLowerCase();
    }
    return userInput;
}

function playRound() {
    console.log("\nNew Round:");

    let computerChoice = getComputerChoice();
    let humanChoice = getUserChoice();

    console.log(`\tComputer chose: ${computerChoice}`);
    console.log(`\tYou chose: ${humanChoice}`);

    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    }
    console.log(`\nScore - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {  
    for (let i = 0; i < 3; i++) {
        playRound();
    }
    console.log("\nFinal Score:");
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();