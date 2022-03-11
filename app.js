let currentPlayer = 'o';
let playerName = 'Player 1'
let gameActive = true;
const cellElements = document.querySelectorAll('[data-cell]');
const resultMessage = document.querySelector("#result-message");
resultMessage.innerText = `${playerName}, it's your turn!`

const handleClickPlayer = (clickedCellEvent) => {

    const clickedCell = clickedCellEvent.target;
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    clickedCell.innerText = currentPlayer;


    playerName = currentPlayer === 'x' ? 'Player 2' : 'Player 1';
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
        cell.removeEventListener("click", playerComp, {once : true})
        cell.innerText = "";
        currentPlayer = 'o'
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
    for (let i = 0; i < winningConditions.length; i++) {
        const wc = winningConditions[i];
        let a = cellElements[wc[0]].innerText;
        let b = cellElements[wc[1]].innerText;
        let c = cellElements[wc[2]].innerText;
        if (a === b && b === c && a === currentPlayer) {
            // console.log("worked");
            cellElements.forEach(cell => {
                cell.removeEventListener('click', handleClickPlayer, {once : true})
            })
            let winningPlayer = currentPlayer === 'x' ? 'Player 1' : 'Player 2';
            resultMessage.innerText = `${winningPlayer} has won!`
        }
    }
}

// play against a computer
const computerBtn = document.getElementById("computer-button");
computerBtn.addEventListener('click', startComputerMode)

function startComputerMode () {
    cellElements.forEach(cell => {
        resultMessage.innerText = "";
        cell.removeEventListener("click", handleClickPlayer, {once : true})
        cell.innerText = "";
        cell.addEventListener('click', playerComp, {once : true})
    })
}

function playerComp (clickedCellEvent) {
    let player = 'x';
    let computer = 'o';
    let compCheck = false;

    const cellClicked = clickedCellEvent.target;
    cellClicked.innerText = player;

    // check if player has won after player's go
    for (let i = 0; i < winningConditions.length; i++) {
        const wc = winningConditions[i];
        let a = cellElements[wc[0]].innerText;
        let b = cellElements[wc[1]].innerText;
        let c = cellElements[wc[2]].innerText;
        if (a === b && b === c && a === player) {
            cellElements.forEach(cell => {
                console.log('player win being shown');
                cell.removeEventListener('click', playerComp, {once : true})
            })
            resultMessage.innerText = `Player has won!`
        }
    }

    // generating random number and filling in that cell with a 'o'
    while (!compCheck) {
        let compCell = Math.floor(Math.random() * 9);
        if (cellElements[compCell].innerText === "") {
            cellElements[compCell].innerText = computer;
            compCheck = true;
        }
    }

    // check if computer has won after computer's go
    for (let i = 0; i < winningConditions.length; i++) {
        const wc = winningConditions[i];
        let a = cellElements[wc[0]].innerText;
        let b = cellElements[wc[1]].innerText;
        let c = cellElements[wc[2]].innerText;
        if (a === b && b === c && a === computer) {
            cellElements.forEach(cell => {
                cell.removeEventListener('click', playerComp, {once : true})
            })
            resultMessage.innerText = `Computer has won!`
        }
    }
}