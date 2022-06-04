let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

generateTarget = () => {
    Math.floor(Math.Random() * 10)
}
compareGuesses = (user, comp, target) => {
    let user_dif = Math.abs(target) - Math.abs(user);
    let comp_dif = Math.abs(target) - Math.abs(comp);

    if (user_dif <= comp_dif) {
        return true;
    }
    return false;
}

updateScore = (score) => {
    if (score == 'human') {
        humanScore++
    } else if (score == 'computer') {
        computerScore++
    }
}

advanceRound = () => {
    currentRoundNumber++
}