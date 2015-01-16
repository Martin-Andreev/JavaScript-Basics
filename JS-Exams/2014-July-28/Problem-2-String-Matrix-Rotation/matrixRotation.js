function matrixRotation(input){
    var rotate = input[0];
    var degrees = Number(rotate.match(/([0-9]+)/g)) % 360;
    var result = [];
    var output = "";

    var length = 0;
    var bestLength = 0;

    for (var i = 1; i < input.length; i++) {
        result[i] = input[i].split('');

        length = input[i].length;

        if (length > bestLength) {
            bestLength = length
        }
    }

    for (var i = 1; i < result.length; i++) {
        for (var j = 0; j < bestLength; j++) {
            if (result[i][j] == undefined) {
                result[i][j] = " ";
            }
        }
    }

    switch (degrees) {
        case 0:
            for (var row = 1; row < result.length; row++) {
                for (var col = 0; col < bestLength; col++) {
                    output += result[row][col];
                }
                output += "\n";
            }
            break;
        case 90:
            for (var row = 0; row < bestLength; row++) {
                for (var col = result.length - 1; col > 0; col--) {
                    output += result[col][row];
                }
                output += "\n";
            }
            break;
        case 180:
            for (var row = result.length - 1; row > 0; row--) {
                for (var col = bestLength - 1; col >= 0; col--) {
                    output += result[row][col];
                }
                output += "\n";
            }
            break;
        case 270:
            for (var row = bestLength - 1; row >= 0; row--) {
                for (var col = 1; col <= result.length - 1; col++) {
                    var a = result[col][row];
                    output += result[col][row];
                }
                output += "\n";
            }
            break;
    }

    console.log(output);
}

//matrixRotation([
//    "Rotate(270)",
//    "hello",
//    "softuni",
//    "exam"
//]);

matrixRotation([
    "Rotate(180)",
    "a",
    "abc",
    "abcdef",
    "fadjkjerjghjhfgfs",
    "gfsjkgfjjgfjgfjgfsjhgjfhsjhkfsd",
    "safsfsfgfffgd",
    "f",
    "afggfagfgfa",
    "fgffgdfgdfsgfgdsgfssfd"
]);