const gridContainer = document.querySelector ('#grid-container');

//Default grid
let columnNumber = 16;
let rowNumber = 16;
createGrid(columnNumber, rowNumber);

function randomRgb () { 
    let r = Math.floor( Math.random() * 256);
    let g = Math.floor( Math.random() * 256);
    let b= Math.floor( Math.random() * 256);
    return ('rgb'+'('+r+','+g+','+b+')');
}

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
                if (!rainbowFlag) {
                currentRow.classList.add('hovered-black');
                currentRow.removeAttribute('style'); 
                //being inline style, it overwrites black, so removing can deal with that
            } else {
                currentRow.setAttribute('style',`background-color: ${randomRgb()}`);
            }
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
const blackButton = document.querySelector('#black-color-btn');
const rainbowButton = document.querySelector('#rainbow-color-btn');
let rainbowFlag = 0;

rainbowButton.addEventListener('click', function() {
    rainbowFlag = 1;
});

blackButton.addEventListener('click', function() {
    rainbowFlag = 0;
})

inputButton.addEventListener('click', function() {
    columnNumber = prompt('Choose number of columns: ');
    while (isNaN(columnNumber) || columnNumber > 100 || columnNumber <= 0) {
        columnNumber = prompt('Not a valid number! Enter columns between 1 to 100: ');
    }
    rowNumber = prompt('Choose number of rows: ');
    while (isNaN(rowNumber) || rowNumber > 100 || columnNumber <= 0) {
        rowNumber = prompt('Not a valid number! Enter rows between 1 to 100: ');
    }

    deleteGrid();
    createGrid(columnNumber,rowNumber);
});

resetButton.addEventListener('click', function() {

    deleteGrid();

    createGrid(columnNumber,rowNumber);

    
});