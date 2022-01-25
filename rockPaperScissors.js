const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
//  if (userInput === 'rock' || 'paper' || 'scissors') {
    if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors')) {
    return userInput
  } else {
    console.log('For sure that is not a rock, a paper or some scissors! Please choose wisely!')
  }
};


const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:    
		  console.log('Invalid randomNumber');    
		  break;
  } 
};

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice) {
    return "The game was a tie"
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return "Computer WON"
    } else {
      return "User WON"
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return "Computer WON"
    } else {
      return "User WON"
    } 
  }else if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return "Computer WON"
    } else {
      return "User WON"
   }
  } else {
    return 'Something went wrong'
   }
  };

function playGame() {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(`Player choosed ${userChoice}, computer choosed ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

