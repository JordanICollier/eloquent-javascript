var size = 8;

var chessBoard = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 === 0)
      chessBoard += " ";
    else
      chessBoard += "#";
  }
  chessBoard += "\n";
}

console.log(chessBoard);
