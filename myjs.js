let rows = 16;
let columns = 16;

const frame = document.createElement('div');
frame.className = 'frame';
    for (let i = 0; i < columns; ++i) {
        console.log(i);
        let column = document.createElement('div');
        column.className = 'column';
        for (let j = 0; j < rows; ++j) {
            let row = document.createElement('div');
            row.className = 'row';
            row.textContent = i + ' - ' + j;
            column.appendChild(row);
        }
        frame.appendChild(column);  
    }
document.body.appendChild(frame);







