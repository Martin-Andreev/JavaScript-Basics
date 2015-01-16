function solve(input) {
    var concerts = {};
    for (var i = 0; i < input.length; i++) {
        var line = input[i].split('|');
        var band = line[0].trim();
        var town = line[1].trim();
        var venue = line[3].trim();

        if (!concerts[town]) {
            concerts[town] = {};
        }

        if (!concerts[town][venue]) {
            concerts[town][venue] = [];
        }

        if (concerts[town][venue].indexOf(band) == -1) {
            concerts[town][venue].push(band);
        }

    }

    concerts = sortFunction(concerts);

    for (var town in concerts) {
        concerts[town] = sortFunction(concerts[town]);
        for (var venue in concerts[town]) {
            concerts[town][venue].sort();
        }
    }

    function sortFunction(arr) {
        var outputArray = {};
        var keySorted = Object.keys(arr).sort();

        for (var i = 0; i < keySorted.length; i++) {
            var key = keySorted[i];
            outputArray[key] = arr[key];
        }

        return outputArray;
    }

    console.log(JSON.stringify(concerts));
}