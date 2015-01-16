function triangles(input){
    var lines = input.map(String);
    var matrix = [];
    var result = [];
    var output = "";

    for (var i = 0; i < lines.length; i++) {
        matrix[i] = lines[i].split('');
        result[i] = lines[i].split('');
    }

    for (var row = 0; row < matrix.length - 1; row++) {
        currLine = lines[row];

        for (var col = 1; col < currLine.length; col++) {
            var currEl = matrix[row][col];
            var down = matrix[row + 1][col];
            var left = matrix[row + 1][col - 1];
            var right = matrix[row + 1][col + 1];

            if ((currEl == down) && (currEl == left) && (currEl == right)) {
                result[row][col] = "*";
                result[row + 1][col] = "*";
                result[row + 1][col - 1] = "*";
                result[row + 1][col + 1] = "*";
            }
        }
    }

    for (var rows = 0; rows < input.length; rows++) {
        console.log(result[rows].join(''));
    }

}