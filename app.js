let currentPlayer = 'x';
let playerName = 'Player 1'
let gameActive = true;
const cellElements = document.querySelectorAll('[data-cell]');
const resultMessage = document.querySelector("#result-message");
resultMessage.innerText = `${playerName}, it's your turn!`

const handleClickPlayer = (clickedCellEvent) => {

    const clickedCell = clickedCellEvent.target;
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    clickedCell.innerText = currentPlayer;


    playerName = currentPlayer === 'x' ? 'Player 1' : 'Player 2';
    resultMessage.innerText = `${playerName}, it's your turn!`

    winningMethod(currentPlayer);
}

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClickPlayer, {once : true})
})

// reset the page when restart button clicked
const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", restartGame)

function restartGame () {
    cellElements.forEach(cell => {
        resultMessage.innerText = "";
        cell.removeEventListener("click", handleClickPlayer, {once : true})
        cell.innerText = "";
        cell.addEventListener('click', handleClickPlayer, {once : true})
    })
}

// Logic for win and draw
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// let roundDraw = false;
// let emptyArr = [];
// function isDraw() {    
//     for (let i = 0; i < cellElements.length; i++) {
//         emptyArr[i] = cellElements[i].innerText;
//     }
//     console.log(emptyArr);
// }

function winningMethod(currentPlayer) {
    for (let i = 0; i < winningConditions.length; i++) {
        const wc = winningConditions[i];
        let a = cellElements[wc[0]].innerText;
        let b = cellElements[wc[1]].innerText;
        let c = cellElements[wc[2]].innerText;
        if (a === b && b === c && a === currentPlayer) {
            console.log("worked");
            cellElements.forEach(cell => {
                cell.removeEventListener('click', handleClickPlayer, {once : true})
            })
            resultMessage.innerText = `${playerName} has won!`
        }
    }
}