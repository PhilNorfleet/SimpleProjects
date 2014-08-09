function QueenCheck(strArr) {
    var matrix = Matrix(strArr)
        //return matrix
        //return inCheck(matrix)
    var moves = 0;
    var queen = [parseInt(matrix[0][0]),parseInt(matrix[0][1])];
        //return queen
    var king = [parseInt(matrix[1][0]),parseInt(matrix[1][1])];
        //return king
    if (inCheck(matrix)) {
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++){
                if (!inCheck([queen,[king[0]+i,king[1]+j]])) {
                  
                    if ((king[0]+i >= 1 && king[1]+j >= 1)  && (king[0] + i <= 8 && king[1] + j <= 8)) {
                       
                      moves += 1;
                      
                    }
                  
                }
              if ((king[0]+i == queen[0]) && (king[1]+j == queen[1])) {
                    moves += 1
                      
                  }
                
            }

        }
    }
    else{
        return -1
    }

    return moves
}
function inCheck(matrix) {
    if (matrix[0][0] == matrix[1][0] || matrix[0][1] == matrix[1][1]){
        return true
    }
    for (var i = -8; i <= 8 ; i++) {
        if (matrix[1][0] == (matrix[0][0] + i) && matrix[1][1] == (matrix[0][1] + i)){
            return true
        }
        if (matrix[1][0] == (matrix[0][0] - i) && matrix[1][1] == (matrix[0][1] - i)){
            return true
        }
    }
    return false
}
function Matrix(strArr) {
  var matrix = [];
  matrix[0] = [strArr[0][1],strArr[0][3]];
  matrix[1] = [strArr[1][1],strArr[1][3]];
  return matrix
}
   

console.log(QueenCheck([[2,2],[1,1]]))
