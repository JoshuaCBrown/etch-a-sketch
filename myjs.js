//starting values for 16x16 grid with 800x800 container width,height
//to change container size, adjust these variables accordingly
let defaultRows = 16;
let defaultColumns = defaultRows;
let defaultSqSize = 50;
let defaultContainer = 800;

createEtch(defaultRows, defaultColumns, defaultSqSize);

//creates the etch-a-sketch
function createEtch(rows, columns, sqSize) {
    const frame = document.createElement('div');
    frame.className = 'frame';
        for (let i = 0; i < rows; ++i) {
            console.log(i);
            let row = document.createElement('div');
            for (let j = 0; j < columns; ++j) {
                let column = document.createElement('div');
                column.className = 'square';
                column.style.height = sqSize + 'px';
                column.style.width = sqSize + 'px';
                row.appendChild(column);
            }
            frame.appendChild(row);  
        }
    document.body.appendChild(frame);
    colorCreator();
}

//buton to change grid dimension, calls askUser()
const changeGrid = document.querySelector('#changeGrid');
changeGrid.addEventListener('click', askUser);

//prompt user for new grid size input and 
//check if input is between 1 and 100
function askUser() {
    let gridNum = prompt('Enter new grid length/width (any number between 1 and 100)');
    if (0 < gridNum && gridNum < 101) {
        modifyGrid(gridNum);
    } else {
        alert("Number must be between 1 and 100!");
    }
}

//calculate new individual square size 
//call deleteEtch
function modifyGrid (gridNum) {
    let newSize = (defaultContainer / gridNum);
    deleteEtch(gridNum, newSize);
}

//remove old grid & 
//call original createEtch function with new grid size and dimensions
function deleteEtch(gridNum, newSize) {
    const oldGrid = document.getElementsByClassName('square');
    while (oldGrid[0]) {
        oldGrid[0].parentNode.removeChild(oldGrid[0]);
    }
    createEtch (gridNum, gridNum, newSize);
}

function colorCreator() {
    const menuBoxes = document.getElementsByClassName('square');
    for (var i = 0; i < menuBoxes.length; i++) {
        menuBoxes[i].onmouseover = function(e) {
            let color = '#'+Math.floor(Math.random()*16777215).toString(16);
            let colorString = '0px 0px 30px 0px ' + color;
            this.style['box-shadow'] = colorString;
            this.style['-webkit-box-shadow'] = colorString;
            this.style['-moz-box-shadow'] = colorString;
        }  
    }
}