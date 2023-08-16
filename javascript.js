const gridContainer = document.querySelector ('#grid-container');

let columnNumber = 16;
let rowNumber = 16;

function createGrid (columnNumber, rowNumber) {
    let i = 0;
    let j = 0;
    while (i < columnNumber) {
        let currentColumn = document.createElement('div');
        currentColumn.classList.add('column');
        gridContainer.appendChild(currentColumn);
        while (j < rowNumber) {
            let currentRow = document.createElement('div');
            currentRow.addEventListener('mouseover', function() {
                currentRow.classList.add('hovered');
            });
            currentRow.classList.add('row');
            currentColumn.appendChild(currentRow);
            j++;
        }
        i++;
        j = 0; 
    }
}


createGrid(columnNumber, rowNumber)


const resetButton = document.querySelector('#reset-btn');

resetButton.addEventListener('click', function() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    createGrid(columnNumber,rowNumber);

    
})