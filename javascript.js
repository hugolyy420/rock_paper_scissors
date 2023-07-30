//Add btn elements into variables
const btns = document.querySelectorAll("button");
const firstResultAnnouncer = document.querySelector("#intro-container").firstElementChild;
const secondResultAnnouncer = document.querySelector("#intro-container").lastElementChild;
const playerScoreAnnouncer = document.querySelector('#player-score');
const computerScoreAnnouncer = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;

let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    return (options[Math.floor(Math.random() * options.length)]);
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "You win!"
        secondResultAnnouncer.textContent = "Rock beats scissors." 
         checkResult()
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++;
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "You win!"
        secondResultAnnouncer.textContent = "Paper beats rock." 
        checkResult()
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "You win!"
        secondResultAnnouncer.textContent = "Scissors beats paper." 
        checkResult()
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "You lose..."
        secondResultAnnouncer.textContent = "Paper beats rock." 
        checkResult()
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore++;
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "You lose..."
        secondResultAnnouncer.textContent = "Scissors beats paper." 
        checkResult()
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore++;
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "You lose..."
        secondResultAnnouncer.textContent = "Rock beats scissors." 
        checkResult()
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "It is a tie!"
        secondResultAnnouncer.textContent = "Rock ties with rock." 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "It is a tie!"
        secondResultAnnouncer.textContent = "Paper ties with paper." 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "It is a tie!"
        secondResultAnnouncer.textContent = "Scissors ties with scissors." 
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
        playRound(e.target.id, getComputerChoice ());
    })
})
