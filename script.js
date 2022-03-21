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

/* Ask for a move */

function playerSelect() {
   let move = prompt("Enter your move:");
   move = capitalize(move);
   /* Check if the move is valid and if it's not valid ask again with the name of the moves */
   move = checkValid(move);
   return move
}

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

function playRound() {
    let computerMove = computerSelect();
    let playerMove = playerSelect();
    let winner = checkWinner(computerMove, playerMove);
    if (winner === "Computer") {
        console.log("You lose!" + computerMove + " beats " + playerMove + "!")
    }
    else if (winner === "Player") {
        console.log("You win!" + playerMove + " beats " + computerMove + "!")
    }
    else {
        console.log("It's a tie!.")
    }
    return winner
}


function capitalize(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return string
}

function checkValid(move) {
    while(moves.includes(move) === false) {
        move = prompt("Please enter a move which can be rock, paper or scissors.")
        move = capitalize(move);
        }
    return move
}

function game() {
    let computerWins = 0;
    let playerWins = 0;
    for(let i = 0; i < 5; i++) {
        winner = playRound()
        if(winner === "Computer") {computerWins++}
        else if(winner === "Player") {playerWins++}
    }
    console.log("Player: " + playerWins)
    console.log("Computer: " + computerWins)
    if (playerWins > computerWins) {console.log("Congratulations! You beat the computer!")}
    else if (playerWins < computerWins) {console.log("That's unlucky, you lost to computer.")}
    else {console.log("It's a tie. You almost made it!")}
}

function playAgain() {
    let answer = prompt("Do you want to play again?");
    answer = capitalize(answer);
    //console.log(answer);
    while (answer !== "Yes" && answer !== "No") {
        answer = prompt("Please enter yes or no.")
    } 
    if (answer === "Yes") { return true}
    else if(answer === "No") {return false}
    
}


game()
while (playAgain()) {
    game()
}



