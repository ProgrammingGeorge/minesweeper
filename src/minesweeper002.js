const generatePlayerBoard = (rows, cols) => {
    let board = [];
    for (i = 0; i < rows.length; i++){
        let row = [];
        for (let j = 0; j < cols.length; j++) {
            row.push(' ');           
        } 
        board.push(row);       
    }
    return board;
};
let board = generatePlayerBoard(2, 3);
console.log(board);



