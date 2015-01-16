function solve(input){
    var result = {};

    for (var i = 0; i < input.length; i++) {
        var line = input[i].split(/\|/);
        var color = line[0];

        if (!result[color]) {
            result[color] = {
                'rank': 0,
                'wins': 1,
                'losses': 1
            };
            result[color]['opponents'] = [];
        }

        if (line[1] == 'age') {
            var age = line[2];
            result[color]['age'] = age;
        }

        if (line[1] == 'name') {
            var name = line[2];
            result[color]['name'] = name;
        }

        if (line[1] == 'win') {
            var opponent = line[2];
            result[color]['opponents'].push(opponent);
            result[color].wins++;
        }

        if (line[1] == 'loss') {
            var opponent = line[2];
            result[color]['opponents'].push(opponent);
            result[color].losses++;
        }

    }

    result = sortFunction(result);

    for(var color in result){
        result[color]['opponents'].sort();
        result[color] = sortFunction(result[color]);

        result[color].rank = (result[color].wins / result[color].losses).toFixed(2);

        delete result[color].wins;
        delete result[color].losses;

        if (result[color]['name'] == undefined || result[color]['age'] == undefined) {
            delete result[color];
        }

    }

    console.log(JSON.stringify(result));

    function sortFunction(input){
        var output = {};
        var keysSorted = Object.keys(input).sort();

        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            output[key] = input[key];
        }

        return output;
    }
}

solve([
    "red|name|kiko",
    "red|win|Vladko",
    "blue|age|12",
    "green|age|13",
    "green|win|gosho",
    "red|age|12",
    "green|name|Pesho",
    "green|win|ico",
    "green|win|Gosho",
    "green|win|qfkata",
    "green|win|stamat",
    "green|win|petko",
    "green|win|mariya"
])
