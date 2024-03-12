let score = document.createElement('div');
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let resultText = ' ';
score.innerHTML = "<p>Player Score: " + playerScore + "</p>" +
                  "<p>Computer Score: " + computerScore + "</p>" +
                  "<p>Ties: " + ties + "</p>" +
                  "<p><b>" + resultText + "</b></p>";
document.body.appendChild(score);

let getComputerChoice = array => array[Math.floor(Math.random() * array.length)];

const options = ['Rock', 'Paper', 'Scissors'];
options.forEach((choice) => {
    let b = document.createElement('button');
    b.textContent = `${choice}`;
    b.addEventListener('click', function() {
        let computerSelection = getComputerChoice(options);
        let result = document.createElement('div');
        result.innerText = playRound(choice, computerSelection);
        result.className = 'result';
        if (playerScore + computerScore + ties < 5) {
            document.body.appendChild(result);
            if (result.textContent.includes('win')) {
                playerScore++;
            } else if (result.textContent.includes('lose')) {
                computerScore++;
            } else {
                ties++;
            }
        }
        
        if (playerScore + computerScore + ties === 5) {
            if (playerScore > computerScore) {
                resultText = `You win! You beat the computer ${playerScore} to ${computerScore} with ${ties} tie(s).`;
            } else if (computerScore > playerScore) {
                resultText = `You lose! The computer beat you ${computerScore} to ${playerScore} with ${ties} tie(s).`;
            } else {
                resultText = `Tie! You both won ${playerScore} rounds each and had ${ties} tie(s).`;
            }
        }

        score.innerHTML = "<p>Player Score: " + playerScore + "</p>" +
                          "<p>Computer Score: " + computerScore + "</p>" +
                          "<p>Ties: " + ties + "</p>" +
                          "<p><b>" + resultText + "</b></p>";
    });
    document.body.appendChild(b);
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return(`You win! Rock beats Scissors!`);
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return(`You lose! Paper beats Rock!`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return(`You lose! Scissors beats Paper!`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return(`You win! Paper beats Rock!`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return(`You lose! Rock beats Scissors!`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return(`You win! Scissors beats Paper!`);
    } else {
        return(`Tie! Both players selected ${computerSelection}`);
    }
}

let reset = document.createElement('button');
reset.textContent = 'Reset'
reset.addEventListener('click', function (){
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    resultText = ' ';
    score.innerHTML = "<p>Player Score: " + playerScore + "</p>" +
                      "<p>Computer Score: " + computerScore + "</p>" +
                      "<p>Ties: " + ties + "</p>" +
                      "<p><b>" + resultText + "</b></p>";
    document.querySelectorAll('.result').forEach(el => el.remove());
})
document.body.appendChild(reset);