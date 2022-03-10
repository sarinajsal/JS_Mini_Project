let currentPlayer = 'x';
let playerName = 'Player 1'
const cellElements = document.querySelectorAll('[data-cell]');
const resultMessage = document.querySelector("#result-message");

const handleClickPlayer = (clickedCellEvent) => {
    const clickedCell = clickedCellEvent.target;
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    clickedCell.innerText = currentPlayer;

    playerName = currentPlayer === 'x' ? 'Player 1' : 'Player 2';
    resultMessage.innerText = `${playerName}, it's your turn!`
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

function winningMethod(currentPlayer) {
    return winningConditions.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer)
        })
    })
}

const handleClickWin = () => {
    if (winningMethod(currentPlayer)) {
        
    }
}
