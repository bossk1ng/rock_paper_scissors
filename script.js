function computerPlay() {
    let computerNum = Math.ceil(Math.random() * 3);

    if (computerNum == 1) {
        return "rock";
    } else if (computerNum == 2) {
        return "paper"
    } else {
        return "scissors";
    }
}

let playerSelection = " ";
let computerSelection = " ";
let computerScore = 0;
let playerScore = 0;
let plays = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "draw, try again";
    } 

    if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "paper" && playerSelection == "rock") {
        computerScore++
        plays++
    }

    if (computerSelection == "rock" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "rock" || computerSelection == "paper" && playerSelection == "scissors") {
        playerScore++
        plays++
    }

}

function game() {
    

    while (plays < 5) {
        let playerSelection = prompt("Choice: ").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
    }

    if (computerScore > playerScore) {
        console.log("computer wins")
    } else {
        console.log("player wins")
    } 
    console.log(computerScore, playerScore)
}

game()