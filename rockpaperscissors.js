const options = ['Rock', 'Paper', 'Scissors'];

let getComputerChoice = array => array[Math.floor(Math.random() * array.length)];

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return(`You win! Rock beats Scissors!`);
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return(`You lose! Paper beats Rock!`);
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return(`You lose! Scissors beats Paper!`);
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return(`You win! Paper beats Scissors!`);
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return(`You lose! Rock beats Scissors!`);
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return(`You win! Scissors beats Paper!`);
    } else {
        return(`Tie! Both players selected ${computerSelection}`);
    }
}

function playGame(options) {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;
    
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice(options);
        let playerSelection;
        
        do {
            playerSelection = prompt("What's your choice?");
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        }
        while (!options.includes(playerSelection));
        
        let result = (playRound(playerSelection, computerSelection));
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        } else {
            ties++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win! You beat the computer ${playerScore} to ${computerScore} with ${ties} tie(s).`);
    } else if (computerScore > playerScore) {
        console.log(`You lose! The computer beat you ${computerScore} to ${playerScore} with ${ties} tie(s).`);
    } else {
        console.log(`Tie! You both won ${playerScore} rounds each and had ${ties} tie(s).`);
    }
}

playGame(options);