function MatrixDeterminant(strArr) {
    var matrix = Matrix(strArr);
    return Det(matrix);
}

function Minor(matrix, index) {
    var minor = [];
    for (var i = 0; i < matrix.length; i++) {
        minor.push(matrix[i].slice(0));
    }
    minor.splice(0, 1)
    for (var i = 0; i < minor.length; i++) {
        minor[i].splice(index, 1);
    }
    return minor
}

function Det(matrix) {
    var det = 0;
    if (matrix.length == 2) {
        return ((matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]));
    }

    var coeff = matrix[0]

    for (var i = 0; i < matrix.length; i++) {
        det += Math.pow(-1, i) * coeff[i] * Det(Minor(matrix, i))
    }
    return det
}

function Matrix(strArr) {
    var arr = [],
        matrix = [];
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] == "<>") {
            matrix.push(arr);
            arr = []
        } else if (strArr[i + 1] == null) {
            arr.push(parseInt(strArr[i]));
            matrix.push(arr)
        } else {
            arr.push(parseInt(strArr[i]))
        }
    }
    return matrix;
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(MatrixDeterminant(
    ["3", "0", "2", "-1", "<>",
        "1", "2", "0", "-2", "<>",
        "4", "0", "6", "-3", "<>",
        "5", "0", "2", "0"
    ]));
    
