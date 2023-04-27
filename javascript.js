let rows = 16;
let columns = 16;

const frame = document.createElement('div');
frame.className = 'frameC';

for (let i = 0; i < rows; ++i) {
    const row = document.createElement('div');
    row.className = 'rowC';
    for (let j = 0; j < columns; ++i) {
        let col = document.createElement('div');
        col.className = 'colC';
        col.textContent = i + ' - ' + j;
        row.appendChild(col);
    }
    frame.appendChild(row);
}
document.body.appendChild(frame);
