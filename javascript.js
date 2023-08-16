const gridContainer = document.querySelector ('#grid-container');

//Default grid
let columnNumber = 16;
let rowNumber = 16;
createGrid(columnNumber, rowNumber);

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
function deleteGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


const inputButton = document.querySelector('#input-btn');
const resetButton = document.querySelector('#reset-btn');

inputButton.addEventListener('click', function() {
    columnNumber = prompt('Columnas');
    while (isNaN(columnNumber) || columnNumber > 100) {
        columnNumber = prompt('Not a valid number! Enter columns between 1 to 100: ');
    }
    rowNumber = prompt('Filas');
    while (isNaN(rowNumber) || rowNumber > 100) {
        rowNumber = prompt('Not a valid number! Enter rows between 1 to 100: ');
    }

    deleteGrid();
    createGrid(columnNumber,rowNumber);
});

resetButton.addEventListener('click', function() {

    deleteGrid();

    createGrid(columnNumber,rowNumber);

    
});