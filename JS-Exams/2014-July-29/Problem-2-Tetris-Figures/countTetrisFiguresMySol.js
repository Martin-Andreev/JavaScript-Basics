function solve(input){
    var figures = {'I': 0, 'L': 0, 'J': 0, 'O': 0, 'Z': 0, 'S': 0, 'T': 0};
    var keys = Object.keys(figures);

    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            if (input[i][j] == 'o') {
                for (var k = 0; k < keys.length; k++) {
                    checkElemsOfFigures(keys[k], i, j);
                }
            }
        }
    }

    console.log(JSON.stringify(figures));

    function checkElemsOfFigures(elem, row, col){
        switch (elem) {
            case 'I':
                checkElement(elem, row, col, 1, 0, 2, 0, 3, 0);
                break;
            case 'L':
                checkElement(elem, row, col, 1, 0, 2, 0, 2, 1);
                break;
            case 'J':
                checkElement(elem, row, col, 1, 0, 2, 0, 2, -1);
                break;
            case 'O':
                checkElement(elem, row, col, 1, 0, 1, 1, 0, 1);
                break;
            case 'Z':
                checkElement(elem, row, col, 0, 1, 1, 1, 1, 2);
                break;
            case 'S':
                checkElement(elem, row, col, 0, -1, 1, -1, 1, -2);
                break;
            case 'T':
                checkElement(elem, row, col, 0, 1, 1, 1, 0, 2);
                break;
        }
    }

    function checkElement(elem, row, col, firstRowCheck, firstColCheck, secondRowCheck, secondColCheck, thirdRowCheck, thirdColCheck){
        var maxRow = Math.max(firstRowCheck, secondRowCheck, thirdRowCheck);
        var maxCol = Math.max(firstColCheck, secondColCheck, thirdColCheck);
        var minCol = Math.min(firstColCheck, secondColCheck, thirdColCheck);

        if (input[row + maxRow] == undefined ||
            input[row + maxRow][col + maxCol] == undefined ||
            input[row][col + minCol] == undefined) {
            return false;
        }

        if (input[row][col] == input[row + firstRowCheck][col + firstColCheck] &&
            input[row][col] == input[row + secondRowCheck][col + secondColCheck] &&
            input[row][col] == input[row + thirdRowCheck][col + thirdColCheck]) {
            figures[elem]++;
        }
    }
}