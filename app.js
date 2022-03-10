//on hover, user can see cross (alternate)
//squares need to have onlclick event 
//onclick, an x needs to be placed on that specific cell
//a function to check whether 3 in a row has been achieved - 
//if win or draw, stop game and show restart button
//if restart button clicked, clear the grid and start game again
//if the game is not won/drawn, alternate player then plays 

// Create 2 classes in css, 1 for X and 1 for O whereby if you make class of a div cell in index.html 'cell x' or 'cell 
// ciricle', it will show the respective shape (the class for which is present in styles.css)

// JS
    // create variables to be able to switch between the X and O classes in css
    // add event listener for each of the 9 div cells (using forEach)
    // in this event listener, one of the arguments will be a handleClick function
        // handleClick: place the mark
        //              switch turns
        //              check for win (check for any 3 in a rows)
        //                  if win, print result and show restart button
        //              check for draw
        //                  if draw, print result and show restart button
 