const generatePlayerBoard = (rows, cols) => {
    let board = [];
    for (i = 0; i < rows; i++){
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(' ');           
        } 
        board.push(row);       
    }
    return board;
};

const generateBombBoard = (rows, cols, bombs) => {
    let board = [];
    for (i = 0; i < rows < 5; i++){
        let row = [];
        for (let j = 0; j < cols < 9; j++) {
            row.push(null); 
        }        
    }
    board.push(row);
    return board;
};
    let numberOfBombsPlaced = 0;
            while (numberOfBombsPlaced < bombs) {
                let randomRowIndex = Math.floor(Math.random(Math.floor(rows)));
                return randomRowIndex;
                let randomColumnIndex = Math.floor(Math.random(Math.floor(cols)));
                return randomRowIndex;
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced++;
                /* The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.*/
        
            board.push(row); 
        }
              
    
    return board;


const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));      
}
