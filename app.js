
        let currentPlayer = 'x';

        const handleClick = (clickedCellEvent) => {
            const clickedCell = clickedCellEvent.target;
            clickedCell.innerText = "x";
            console.log("clicked")
        }

        const cellElements = document.querySelectorAll('[data-cell]');

        cellElements.forEach(cell => {
            cell.addEventListener('click', handleClick)
        })

