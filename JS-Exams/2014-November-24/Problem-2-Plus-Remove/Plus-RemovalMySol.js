function solve(input) {
    var lines = input.map(String);
    var result = [];
    var matrix = [];
    var output = "";

    for (var i = 0; i < lines.length; i++) {
        result[i] = lines[i].split('');
        matrix[i] = lines[i].toUpperCase().split('');
    }

    for (var row = 0; row < matrix.length - 2; row++) {
        currLine = lines[row];

        for (var col = 0; col < currLine.length; col++) {
            var currEl = matrix[row][col];
            var center = matrix[row + 1][col];
            var left = matrix[row + 1][col - 1];
            var right = matrix[row + 1][col + 1];
            var down = matrix[row + 2][col];

            if ((currEl == center) && (currEl == left) && (currEl == right) && (currEl == down)) {
                result[row][col] = "";
                result[row + 1][col] = "";
                result[row + 1][col - 1] = "";
                result[row + 1][col + 1] = "";
                result[row + 2][col] = "";
            }
        }
    }

    for (var rows = 0; rows < input.length; rows++) {
        console.log(result[rows].join(''));
    }
}

solve([
    "freee",
    "eeeeeeee",
    "eeeeeeee",
    "yourself",
    "freeeeee",
    "yourselef"
]);