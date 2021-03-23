// main.js
// rock-paper-scissors

function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play == 0) {
	return 'Rock'
    } else if (play == 1) {
	return 'Paper'
    } else {
	return 'Scissors'
    }

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
	return 'That\'s a tie!'
    } else if (playerSelection == 'Rock') {
	if (computerSelection == 'Scissors') {
	    return `You Win! ${playerSelection} beats ${computerSelection}`
	} else {
	    return `You Lose! ${computerSelection} beats ${playerSelection}`
	}
    } else if (playerSelection == 'Paper') {
	if (computerSelection == 'Rock') {
	    return `You Win! ${playerSelection} beats ${computerSelection}`
	} else {
	    return `You Lose! ${computerSelection} beats ${playerSelection}`
	} 
    
    } else {
	if (computerSelection == 'Paper') {
	    return `You Win! ${playerSelection} beats ${computerSelection}`
	} else {
	    return `You Lose! ${computerSelection} beats ${playerSelection}`

	}
    }
}

let playerSelection;
let validPlay = false;
while (validPlay == false) {
    playerSelection = prompt('Rock, paper or scissors?');
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors') {
	validPlay = true;
    }
}

const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
