function computerPlay() {
    let computerNum = Math.ceil(Math.random() * 3);

    if (computerNum == 1) {
        return "rock";
    } else if (computerNum == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computerScore = 0;
let playerScore = 0;
let plays = 0;
const winnerAlert = document.getElementById("winnerAlert");
document.getElementById("playerScore").innerHTML =
    "Player Score: " + playerScore;

document.getElementById("computerScore").innerHTML =
    "Computer Score: " + computerScore;

function updateScore() {
    document.getElementById("playerScore").innerHTML =
        "Player Score: " + playerScore;

    document.getElementById("computerScore").innerHTML =
        "Computer Score: " + computerScore;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    console.log(playerSelection, computerSelection);

    if (playerSelection == computerSelection) {
        winnerAlert.textContent = "draw, try again";
        return 0;
    }

    if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerScore++;
        plays++;
        winnerAlert.textContent = "Computer Wins Round!";
        updateScore();
        return 1;
    }

    if (
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "paper" && playerSelection == "scissors")
    ) {
        playerScore++;
        plays++;
        updateScore();
        winnerAlert.textContent = "Player Wins Round!";
        return 2;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});
