let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


const generateTarget = () => Math.floor(Math.random()*9);

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
  let userDistance = Math.abs(secretTarget - userGuess);
  let computerDistance = Math.abs(secretTarget - computerGuess);
  secretTarget = generateTarget;
  if (userDistance <= computerDistance) {
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  } else {
    return 'Winer must be either human or computer!'
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}

