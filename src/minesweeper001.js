const generatePlayerBoard = (rows, cols) => {
    let board = [];
    for (i = 0; i < rows.length; i++){
        board[row] = [];
        for (let j = 0; j < cols.length; j++) {
            board[rows].push(' ');           
        }        
    }
    return board;
};

const board = generatePlayerBoard(2, 3);
console.log(board);



