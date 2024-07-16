// All code should be written in this file.

const playerOneMoveOneType = undefined
const playerOneMoveTwoType = undefined
const playerOneMoveThreeType = undefined
const playerTwoMoveOneType = undefined
const playerTwoMoveTwoType = undefined
const playerTwoMoveThreeType = undefined
const playerOneMoveOneValue = undefined
const playerOneMoveTwoValue = undefined
const playerOneMoveThreeValue = undefined
const playerTwoMoveOneValue = undefined
const playerTwoMoveTwoValue = undefined
const playerTwoMoveThreeValue = undefined

function setPlayerMoves (player, moveOneType, moveOneValue, moveTwoType, 
    moveTwoValue, moveThreeType, moveThreeValue) {

    if (typeof player === "string" && typeof moveOneType === "string" && typeof moveOneValue === "string" && typeof moveTwoType === "string" && typeof moveTwoValue === "string" && typeof moveThreeType === "string" && typeof moveThreeValue === "string") {

        if (player === 'Player One') {
            playerOneMoveOneType = moveOneType
            playerOneMoveTwoType = moveTwoType
            playerOneMoveThreeType = moveThreeType

            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeValue = moveThreeValue;
        } else if (player === 'Player Two') {
            playerTwoMoveOneType = moveOneType
            playerTwoMoveTwoType = moveTwoType
            playerTwoMoveThreeType = moveThreeType

            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeValue = moveThreeValue;
        }
    }
} 
