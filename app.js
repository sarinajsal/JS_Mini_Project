let currentPlayer = 'x';
let playerName = 'Player 1'
const cellElements = document.querySelectorAll('[data-cell]');
const resultMessage = document.querySelector("#result-message");

const handleClick = (clickedCellEvent) => {
    const clickedCell = clickedCellEvent.target;
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    clickedCell.innerText = currentPlayer;

    playerName = currentPlayer === 'x' ? 'Player 1' : 'Player 2';
    resultMessage.innerText = `${playerName}, it's your turn!`
}

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once : true})
})

// reset the page when restart button clicked
const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", () => {
    cellElements.forEach(cell => {
        resultMessage.innerText = "";
        cell.removeEventListener("click", handleClick, {once : true})
        cell.innerText = "";
        cell.addEventListener('click', handleClick, {once : true})
    })
})

// Logic for win and draw


