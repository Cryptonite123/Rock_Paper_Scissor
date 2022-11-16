const array = ['rock', 'paper', 'scissor'];
// Declare an array with three options- rock, paper, scissor

function computerChoice() {
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
}

// Create a function to Randomly select a value from the array
// Use Console log to check if it's returning the expected output.

// Create a variable to store user input
// Use Console log to check if it's returning the expected output.

const summary = document.getElementById('summary');
const player = document.getElementById('user-choice');
const computer = document.getElementById('computer-choice');
let playerScore = 0;
let computerScore = 0;

console.log(computer);

// Initialize variables for Computer Choice + Player choice + Output Summary.

const playerPoints = document.getElementById('player-points');
const compPoints = document.getElementById('computer-points');

function playRound(playerSelection, computerSelection)
{
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(playerSelection);
  console.log(computerSelection);
  {
    if (playerSelection === computerSelection) {
        summary.textContent = "It's a TIE!";
        player.textContent = `Player Choice: ${playerSelection.toUpperCase()}`;
        computer.textContent = `Computer Choice: ${computerSelection.toUpperCase()}`;
        console.log(computerSelection);
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissor') || 
      (playerSelection === 'scissor' && computerSelection === 'paper') || 
      (playerSelection === 'paper' && computerSelection === 'rock')
      ) {
          playerScore = ++playerScore;
          playerPoints.textContent = playerScore;
          summary.textContent = "CONGRATS you've won this round!";
          player.textContent = `Player Choice: ${playerSelection.toUpperCase()}`;
          computer.textContent = `Computer Choice: ${computerSelection.toUpperCase()}`;
          console.log(computerSelection);
        }
      else {
        computerScore = ++computerScore;
        compPoints.textContent = computerScore;
        summary.textContent = "OOPS you've lost this round!";
        player.textContent = `Player Choice: ${playerSelection.toUpperCase()}`;
        computer.textContent = `Computer Choice: ${computerSelection.toUpperCase()}`;
        console.log(computerSelection);
      }
    if (playerScore == 5) {
      summary.textContent = "CONGRATS YOU'RE THE VICTOR!"
    } else if (computerScore == 5) {
      summary.textContent = "GOODBYE SUCKER!"
    }
  }
}

const computerSelection = computerChoice();
// console.log(playRound(playerSelection, computerSelection));

// Create a function called playRound() that takes two parameters- players' input + computers' input
// Function shouldn't be case sensitive
// Use if...else to check if values are the same
// If Yes then declare a tie.
// Else use the && OR condition to check the round's winner.
// Declare the round's winner after each round
// Display output of computer choice + player choice.
// Use Console log to check if it's returning the expected output.

let btnR = document.getElementById('rock');
let btnP = document.getElementById('paper');
let btnS = document.getElementById('scissor');


// btnP.addEventListener('click', () => {
//   console.log('Button was clicked');
// })

let playerSelection = " ";

function game () {
    for (let i = 0; i < 1; i++) {
      // const playerSelection = prompt('enter your choice', 'rock, paper, or scissor');
      btnR.addEventListener('click', () => {
        playerSelection = 'rock';
        playRound(playerSelection, computerChoice());
      })
      btnS.addEventListener('click', () => {
        playerSelection = 'scissor';
        playRound(playerSelection, computerChoice());
      })
      btnP.addEventListener('click', () => {
        playerSelection = 'paper';
        playRound(playerSelection, computerChoice());
      })
    }
}

game();

// Create a function called game()
// Use a for loop to invoke the function playRound() to a count of 5 points
// Add a counter to keep track of the score.
// Declare the winner after one player scores 5 points.
// Use Console log to check if it's returning the expected output.