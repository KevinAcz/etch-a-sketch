const gridContainer = document.querySelector ('#grid-container');

let columnNumber = 16;
let rowNumber = 16;
let i = 0;
let j = 0;

while (i < columnNumber) {
    let currentColumn = document.createElement('div');
    currentColumn.classList.add('column');
    gridContainer.appendChild(currentColumn);
    while (j < rowNumber) {
        let currentRow = document.createElement('div');
        currentRow.classList.add('row');
        currentColumn.appendChild(currentRow);
        j++;
    }
    i++;
    j = 0; 
}
