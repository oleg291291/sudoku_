module.exports = function solveSudoku(matrix) {
  // your solution
  var emptySpot, possible;
do{
  emptySpot = false;
  possible = false;
  for (var row = 0; row < 9; row++){
    for (var col = 0; col < 9; col++){
      if(matrix[row][col] == 0){
        emptySpot = true;
        var inField = [];
        
        
        for(var i=0; i<9; i++){
          inField.push(matrix[row][i]);
          inField.push(matrix[i][col]);
        }
        //добавить квадрат
        var sectRow = Math.floor(row/3) * 3;
        var sectCol = Math.floor(col/3) * 3;
        
        for(var j=0; j<3; j++){
          inField.push(matrix[sectRow + j][sectCol + 0]);
          inField.push(matrix[sectRow + j][sectCol + 1]);
          inField.push(matrix[sectRow + j][sectCol + 2]);
        }
        //console.log(inField);
        //поиск в массиве поля значимости
        var maybeNum = [];
        for (var k = 1; k < 10; k++){
          if (inField.indexOf(k) < 0)
            maybeNum.push(k);
            
        }
        if (maybeNum.length == 1){
          matrix[row][col] = maybeNum[0];
          possible = true;
          
        }
        
        
      }
      
      
    }
  }} while(emptySpot, possible);
  //console.log(matrix);
 return matrix; 
}


