//Add btn elements into variables
const btns = document.querySelectorAll("button");
const firstResultAnnouncer = document.querySelector("#intro-container").firstElementChild;
const secondResultAnnouncer = document.querySelector("#intro-container").lastElementChild;
const playerScoreAnnouncer = document.querySelector('#player-score');
const computerScoreAnnouncer = document.querySelector('#computer-score');
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const finalResult = document.querySelector(".modal-inner").firstElementChild;

let playerScore = 0;
let computerScore = 0;

let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    return (options[Math.floor(Math.random() * options.length)]);
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
        playerImage.src = "img/rock.png";
        computerImage.src = "img/scissors.png";
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`;
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`;
        firstResultAnnouncer.textContent = "You win!";
        secondResultAnnouncer.textContent = "Rock beats scissors.";
         checkResult();
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++;
        playerImage.src = "img/paper.png";
        computerImage.src = "img/rock.png";
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "You win!"
        secondResultAnnouncer.textContent = "Paper beats rock." 
        checkResult()
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        playerImage.src = "img/scissors.png";
        computerImage.src = "img/paper.png";
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "You win!"
        secondResultAnnouncer.textContent = "Scissors beats paper." 
        checkResult()
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        playerImage.src = "img/rock.png";
        computerImage.src = "img/paper.png";
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "You lose..."
        secondResultAnnouncer.textContent = "Paper beats rock." 
        checkResult()
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore++;
        playerImage.src = "img/paper.png";
        computerImage.src = "img/scissors.png";
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "You lose..."
        secondResultAnnouncer.textContent = "Scissors beats paper." 
        checkResult()
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore++;
        playerImage.src = "img/scissors.png";
        computerImage.src = "img/rock.png";
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "You lose..."
        secondResultAnnouncer.textContent = "Rock beats scissors." 
        checkResult()
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        playerImage.src = "img/rock.png";
        computerImage.src = "img/rock.png";
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "It is a tie!"
        secondResultAnnouncer.textContent = "Rock ties with rock." 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        playerImage.src = "img/paper.png";
        computerImage.src = "img/paper.png";
        playerScoreAnnouncer.textContent = `Player's score : ${playerScore}`
        computerScoreAnnouncer.textContent = `Computer's score : ${computerScore}`
        firstResultAnnouncer.textContent = "It is a tie!"
        secondResultAnnouncer.textContent = "Paper ties with paper." 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        playerImage.src = "img/scissors.png";
        computerImage.src = "img/scissors.png";
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
        modal.classList.add("open");
        finalResult.textContent = "You won!"
        // div.textContent = `You win the game! Player's score : ${playerScore} and computer's score : ${computerScore}`
        // btns.forEach(btn => {
        //     btn.disabled = true;
        // });
    } else if (playerScore < computerScore) {
        modal.classList.add("open");
        finalResult.textContent = "You lose..."
        // div.textContent = `The computer wins... Player's score : ${playerScore} and computer's score : ${computerScore}`
        // btns.forEach(btn => {
        //     btn.disabled = true;
        // });
    }
}

btns.forEach((btn) => {

    btn.addEventListener("click", function(e) {
        playRound(e.target.id, getComputerChoice ());
    })
})

closeBtn.addEventListener("click", () => {
    location.reload();
});