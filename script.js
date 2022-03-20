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
let computerMove = computerSelect();

/* Ask for a move */

function playerSelect() {
   let move = prompt("Enter your move:");
   move = move.charAt(0).toUpperCase() + move.slice(1).toLowerCase();
   /* Check if the move is valid and if it's not valid ask again with the name of the moves */
   move = checkValid(move)
   return move
}
let playerMove = playerSelect();

/* Compare the user's move with the computer move and return the result */
function checkWinner(computerMove, playerMove) {

    return computerMove === "Rock" && playerMove === "Paper" ? "Player"
         : computerMove === "Rock" && playerMove === "Scissors" ? "Computer"
         : computerMove === "Paper" && playerMove === "Rock" ? "Computer"
         : computerMove === "Paper" && playerMove === "Scissors" ? "Player"
         : computerMove === "Scissors" && playerMove === "Rock" ? "Player"
         : computerMove === "Scissors" && playerMove === "Paper" ? "Computer"
         : "Tie";
     }

let winner = checkWinner(computerMove,playerMove)
console.log(computerMove)
console.log(playerMove)
console.log(winner)

function checkValid(move) {
    while(moves.includes(move) === false) {
        move = prompt("Please enter a move which can be rock, paper or scissors.")
        move = move.charAt(0).toUpperCase() + move.slice(1).toLowerCase();
        }
    return move
}

