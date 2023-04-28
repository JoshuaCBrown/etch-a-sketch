let rows = 16;
let columns = 16;

const frame = document.createElement('div');
frame.className = 'frame';
    for (let i = 0; i < rows; ++i) {
        console.log(i);
        let row = document.createElement('div');
        for (let j = 0; j < columns; ++j) {
            let column = document.createElement('div');
            column.className = 'square';
            row.appendChild(column);
        }
        frame.appendChild(row);  
        
    }
document.body.appendChild(frame);
