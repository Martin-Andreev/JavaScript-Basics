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
            var right = matrix[row][col + 2];
            var rightDown = matrix[row + 2][col + 2];
            var leftDown = matrix[row + 2][col];
            var center = matrix[row + 1][col + 1];


            if ((currEl == center) && (currEl == leftDown) && (currEl == right) && (currEl == rightDown)) {
                result[row][col] = "";
                result[row][col + 2] = "";
                result[row + 2][col + 2] = "";
                result[row + 2][col] = "";
                result[row + 1][col + 1] = "";
            }
        }
    }

    for (var rows = 0; rows < input.length; rows++) {
        console.log(result[rows].join(''));
    }
}