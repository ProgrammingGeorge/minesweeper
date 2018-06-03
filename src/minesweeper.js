const generatePlayerBoard = (rows, cols) => Array(rows).fill(Array(cols).fill('  '));
board = generatePlayerBoard(3, 3);
console.log(board);