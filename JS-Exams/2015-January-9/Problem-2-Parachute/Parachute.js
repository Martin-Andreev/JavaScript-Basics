function solve(input){
    var matrix = [];
    var wind = 0;
    var yPosition = 0;
    var xPosition = 0;

    for (var i = 0; i < input.length; i++) {
        matrix[i] = input[i].split('');
    }

    for (var z = 0; z < input.length; z++) {
        for (var y = 0; y < matrix[z].length; y++) {
            if (matrix[z][y] == 'o') {
                yPosition = y;
                xPosition = z;
            }
        }
    }

    for (var k = xPosition + 1; k < matrix.length; k++) {
        wind = 0;
        var currLine = matrix[k];

        wind = getWind(currLine);

        yPosition += wind;

        if (currLine[yPosition] == '/' || currLine[yPosition] == '\\' || currLine[yPosition] == '|') {
            console.log('Got smacked on the rock like a dog!');
            console.log(k + ' ' + yPosition);
            return;
        } else if (currLine[yPosition] == '~') {
            console.log('Drowned in the water like a cat!');
            console.log(k + ' ' + yPosition);
            return;
        } else if (currLine[yPosition] == '_') {
            console.log('Landed on the ground like a boss!');
            console.log(k + ' ' + yPosition);
            return;
        }
    }

    function getWind(arr){
        for (var j = 0; j < arr.length; j++) {
            var currEl = arr[j];

            if (currEl == '>') {
                wind++;
            }else if(currEl == '<'){
                wind--;
            }
        }

        return wind;
    }
}

//solve([
//    '-------o-------<<--------',
//    '-------->>>>>------------',
//    '------------>>>>---------',
//    '------------------/\\--<--',
//    '-------------->>-/-<\\----',
//    '>---------/\\----/<-<-\\---',
//    '---------/<-\\--/------\\--',
//    '<-------/----\\/--------\\-',
//    '\\------/--------------<-\\',
//    '-\\___~/------<-----------'
//]);

solve([
    '-\\----/\\------/----\\---/-',
    '--\\--/--\\----/-----/---|-',
    '---\\/----\\--/------\\--/--',
    '----------\\/--------\\/---',
    '------o------------------',
    '-----__-------->---------',
    '---~/>>\\~----------------',
    '--~/>>>>\\~>>>>>/\\--------',
    '-~/------\\~---/>>\\------/',
    '~/--->----\\~~/~~~~\\~~__/-'
]);

//solve([
//    '--------\\---/------<-----',
//    '-->------|o|-------------',
//    '----->---|-|-------<-----',
//    '---------|>|<------------',
//    '->-------/--\\<--->-------',
//    '<---<---/----\\---->----><',
//    '->>>>--/-<--</----<---<-<',
//    '-------\\>>><<\\-----------',
//    '>-------\\----/-->--------',
//    '---------\\__/------------'
//]);
