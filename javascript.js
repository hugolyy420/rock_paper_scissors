//Add btn elements into variables
const btns = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    return (options[Math.floor(Math.random() * options.length)]);
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
         console.log(`You win! Rock beats scissors. Player's score : ${playerScore} and computer's score : ${computerScore}`)
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++;
        console.log (`You win! Paper beats rock. Player's score : ${playerScore} and computer's score : ${computerScore}`) 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        console.log (`You win! Scissors beats paper. Player's score : ${playerScore} and computer's score : ${computerScore}`)
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        console.log (`You lose! Paper beats rock. Player's score : ${playerScore} and computer's score : ${computerScore}`)   
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore++;
        console.log (`You lose! Scissors beats paper. Player's score : ${playerScore} and computer's score : ${computerScore}`)   
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore++;
        console.log (`You lose! Rock beats scissors. Player's score : ${playerScore} and computer's score : ${computerScore}`)   
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        console.log (`It is a tie! Rock ties with rock. Player's score : ${playerScore} and computer's score : ${computerScore}`)     
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        console.log (`It is a tie! Paper ties with paper. Player's score : ${playerScore} and computer's score : ${computerScore}`)
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        console.log (`It is a tie! Scissors ties with scissors. Player's score : ${playerScore} and computer's score : ${computerScore}`)
    }
}

function game () {
    console.log(playRound (prompt("Rock, Paper or Scissors?"), getComputerChoice()));
} 


function getFinalResult () {
    if (playerScore > computerScore) {
        console.log("You win!")
    } else if (playerScore < computerScore) {
        console.log("The computer wins...")
    } else {
        console.log("It's a tie.")
    }
}

btns.forEach((btn) => {

    btn.addEventListener("click", function(e) {
        playRound(e.target.innerText, getComputerChoice ());
    })
})

// Add event listener to hear the click event and fire off the playRound function
// How to get the choice into the playerSelection argument?

// getFinalResult ();