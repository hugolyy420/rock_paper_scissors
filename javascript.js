let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    return (options[Math.floor(Math.random() * options.length)]);
}
let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
        return (`You win! Rock beats scissors. Player's score : ${playerScore} and computer's score : ${computerScore}`)
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++;
        return (`You win! Paper beats rock. Player's score : ${playerScore} and computer's score : ${computerScore}`) 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        return (`You win! Scissors beats paper. Player's score : ${playerScore} and computer's score : ${computerScore}`)
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        return (`You lose! Paper beats rock. Player's score : ${playerScore} and computer's score : ${computerScore}`)   
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore++;
        return (`You lose! Scissors beats paper. Player's score : ${playerScore} and computer's score : ${computerScore}`)   
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore++;
        return (`You lose! Rock beats scissors. Player's score : ${playerScore} and computer's score : ${computerScore}`)   
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        return (`It is a tie! Rock ties with rock. Player's score : ${playerScore} and computer's score : ${computerScore}`)     
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        return (`It is a tie! Paper ties with paper. Player's score : ${playerScore} and computer's score : ${computerScore}`)
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        return (`It is a tie! Scissors ties with scissors. Player's score : ${playerScore} and computer's score : ${computerScore}`)
    }
}

function game () {
    console.log(playRound (prompt("Rock, Paper or Scissors?"), getComputerChoice()));
} 

game ();
game ();
game ();
game ();
game ();

function getFinalResult () {
    if (playerScore > computerScore) {
        console.log("You win!")
    } else if (playerScore < computerScore) {
        console.log("The computer wins...")
    } else {
        console.log("It's a tie.")
    }
}

getFinalResult ();