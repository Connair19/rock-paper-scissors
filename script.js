/* Create a list of moves and return one randomly */
const moves = ["Rock", "Paper", "Scissors"]

function computerSelect() {
   
    let move = Math.floor(Math.random() * 100);
    while(move === 100 || move === 0) {
        move = Math.floor(Math.random() * 100);
    }

    return move >= 67 ? "Scissors"
          :move <= 33 ? "Rock"
          :"Paper"
}

const result = document.getElementsByClassName("result")[0];
const winCount = document.createElement("div");
const roundResult = document.createElement("div");
let computerWins = 0;
let playerWins = 0;



const buttons = document.querySelectorAll(".movebtn");
buttons.forEach(btn => {
 btn.addEventListener("click", () => {
     play(btn.id);
 });
});

/* Compare the user's move with the computer move and return the result */
function checkWinner(computerMove, playerMove) {
    console.log("Computer chooses:" + computerMove)
    return computerMove === "Rock" && playerMove === "Paper" ? "Player"
         : computerMove === "Rock" && playerMove === "Scissors" ? "Computer"
         : computerMove === "Paper" && playerMove === "Rock" ? "Computer"
         : computerMove === "Paper" && playerMove === "Scissors" ? "Player"
         : computerMove === "Scissors" && playerMove === "Rock" ? "Player"
         : computerMove === "Scissors" && playerMove === "Paper" ? "Computer"
         : "Tie";
     }

function play(clickedButton) {
    let computerMove = computerSelect();
    let playerMove = clickedButton;
    let winner = checkWinner(computerMove, playerMove);
    if (winner === "Computer") {
        computerWins++;
        roundResult.textContent = computerMove + " beats " + playerMove;
        winCount.textContent = "Player " + playerWins + " - " + computerWins + " Computer";
        console.log("winner is computer");
        result.appendChild(roundResult);
        result.appendChild(winCount);
    }
    else if (winner === "Player") {
        playerWins++;
        roundResult.textContent = playerMove + " beats " + computerMove;
        winCount.textContent = "Player " + playerWins + " - " + computerWins + " Computer";
        roundResult.textContent = playerMove + " beats " + computerMove;
        console.log("winner is player");
        result.appendChild(roundResult);
        result.appendChild(winCount);
    }
    else if (winner === "Tie") {
        roundResult.textContent = "It's a tie!";
        winCount.textContent = "Player " + playerWins + " - " + computerWins + " Computer";
        roundResult.textContent = "It's a tie!";
        console.log("winner is tie");
        result.appendChild(roundResult);
        result.appendChild(winCount);
    }

    if (computerWins === 5) {
        disableButtons();
        const finalResult = document.createElement("div");
        const playAgainButton = document.createElement("button");

        playAgainButton.textContent = "Play Again";
        playAgainButton.addEventListener("click", playAgain);
        if (playerWins === 4) {
            finalResult.textContent = "Computer is the winner! You almost made it!";
        }
        else {
            finalResult.textContent = "Computer is the winner! Better luck next time.";
        }

        styleFinalResult(finalResult);
        stylePlayAgain(playAgainButton)
        finalResult.appendChild(playAgainButton);
        result.appendChild(finalResult);
    }
    else if (playerWins === 5) {
        disableButtons();
        const finalResult = document.createElement("div");
        const playAgainButton = document.createElement("button");

        playAgainButton.textContent = "Play Again";
        playAgainButton.addEventListener("click", playAgain);
        finalResult.textContent = "Congratulations you beat the computer!";

        styleFinalResult(finalResult);
        stylePlayAgain(playAgainButton)
        finalResult.appendChild(playAgainButton);
        result.appendChild(finalResult);
    }
}

function disableButtons() {
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
}

function playAgain() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    playerWins = 0;
    computerWins = 0;
    document.getElementById("Rock").disabled = false;
    document.getElementById("Paper").disabled = false;
    document.getElementById("Scissors").disabled = false;

}

function styleFinalResult(finalResult) {
    finalResult.style.display = "flex";
    finalResult.style.minHeight = "80px";
    finalResult.style.flexDirection = "column";
    finalResult.style.justifyContent = "space-around";
}

function stylePlayAgain(button) {
    button.style.alignSelf = "center";
    button.style.width = "90px";
    button.style.height = "40px";
}