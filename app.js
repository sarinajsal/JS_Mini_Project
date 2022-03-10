
        let currentPlayer = 'x';

        const handleClick = (clickedCellEvent) => {
            const clickedCell = clickedCellEvent.target;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            clickedCell.innerText = currentPlayer;
            console.log("clicked")
        }

        const cellElements = document.querySelectorAll('[data-cell]');

        cellElements.forEach(cell => {
            cell.addEventListener('click', handleClick, {once : true})
        })

