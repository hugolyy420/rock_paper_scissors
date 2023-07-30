//Add btn elements into variables
const btns = document.querySelectorAll("button");
const div = document.createElement("div");
let playerScore = 0;
let computerScore = 0;

let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    return (options[Math.floor(Math.random() * options.length)]);
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
         div.textContent = `You win! Rock beats scissors. Player's score : ${playerScore} and computer's score : ${computerScore}`
         checkResult()
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++;
        div.textContent = `You win! Paper beats rock. Player's score : ${playerScore} and computer's score : ${computerScore}`
        checkResult()
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        div.textContent = `You win! Scissors beats paper. Player's score : ${playerScore} and computer's score : ${computerScore}`
        checkResult()
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        div.textContent = `You lose! Paper beats rock. Player's score : ${playerScore} and computer's score : ${computerScore}`  
        checkResult()
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore++;
        div.textContent = `You lose! Scissors beats paper. Player's score : ${playerScore} and computer's score : ${computerScore}`
        checkResult()
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore++;
        div.textContent = `You lose! Rock beats scissors. Player's score : ${playerScore} and computer's score : ${computerScore}`
        checkResult()
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        div.textContent = `It is a tie! Rock ties with rock. Player's score : ${playerScore} and computer's score : ${computerScore}`
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        div.textContent = `It is a tie! Paper ties with paper. Player's score : ${playerScore} and computer's score : ${computerScore}`
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        div.textContent = `It is a tie! Scissors ties with scissors. Player's score : ${playerScore} and computer's score : ${computerScore}`
    } 
}

function checkResult () {
    if (playerScore === 5 || computerScore === 5) {
        getFinalResult ();
    }
}

function getFinalResult () {
    if (playerScore > computerScore) {
        div.textContent = `You win the game! Player's score : ${playerScore} and computer's score : ${computerScore}`
        btns.forEach(btn => {
            btn.disabled = true;
        });
    } else if (playerScore < computerScore) {
        div.textContent = `The computer wins... Player's score : ${playerScore} and computer's score : ${computerScore}`
        btns.forEach(btn => {
            btn.disabled = true;
        });
    }
}

btns.forEach((btn) => {

    btn.addEventListener("click", function(e) {
        playRound(e.target.innerText, getComputerChoice ());
    })
})

document.body.appendChild(div);


// Add event listener to hear the click event and fire off the playRound function
// How to get the choice into the playerSelection argument?

// getFinalResult ();