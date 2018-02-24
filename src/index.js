module.exports = function solveSudoku(matrix) {
  // your solution
var step = 0;
  var emptySpot, possible;
  var possArrData;
  var possArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
do{
 
  emptySpot = false;
  possible = false;
  for (var row = 0; row < 9; row++){
    for (var col = 0; col < 9; col++){
      if(matrix[row][col] == 0){
        emptySpot = true;
        var inField;
        inField = [];
        
        
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
          possArr[row][col] = 'erase';
        }
        else if (step > 2) {
          possArr[row][col] =  maybeNum + " ";
          
          possArrData = [];
            for(var h=0; h<9; h++){
              if (h != col){
          possArrData.push(possArr[row][h]);
              }
              if (h != row){
          possArrData.push(possArr[h][col]);
        }
            }
        for(var q=0; q<3; q++){
          for(var w=0; w<3; w++){
          if( (sectRow + q) != row && (sectCol + w) != col){
          possArrData.push(possArr[sectRow + q][sectCol + w])}}
        }
        
        for (var p = 0; p < maybeNum.length; p++){
          var possArrDataStr = possArrData + "";
          var maybeNumStr = maybeNum[p] + "";
          //console.log(row + ' ' + col)
          //console.log(possArrDataStr.indexOf(maybeNumStr))
          
          if (possArrDataStr.indexOf(maybeNumStr) < 0){
            matrix[row][col] = maybeNum[p];
            possArr[row][col] = 'erase';
          possible = true;
          }
        
        }

        }
        
      }
      
      
    }
  }

step = step + 1} while(step < 100);
  
 // console.log(possArr);
  //console.log(matrix);
 return matrix; 
}



