function solve(input){
    var result = {};

    for (var i = 0; i < input.length; i++) {
        var line = input[i].split(/([\_\-\.A-Za-z]+)\s*([\d\.a-z]+)\s([\d\.]+)/).filter(Boolean);
        var file = line[0];
        var extension = line[1];
        var memory = line[2];

        if (!result[extension]) {
            result[extension] = {
                'files': [],
                'memory': 0
            };
        }

        result[extension].files.push(file);
        result[extension].memory += Number(memory);

    }

    result = sortFunction(result);

    for (var extension in result) {
        result[extension].files.sort();
        result[extension].memory = (result[extension].memory).toFixed(2)
    }

    function sortFunction(input){
        var outputArray = {};
        var keysSorted = Object.keys(input).sort();

        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            outputArray[key] = input[key];
        }

        return outputArray;
    }

    console.log(JSON.stringify(result));
}

solve([
    "archive .rar 2342.2MB",
    "myStuff .tar.gz 76.4MB",
    "oldPC .7zip 1100MB",
    "archive .tar.gz 42MB",
    "presentation .pptx 4.9MB",
    "presentation-copy .pptx 4.9MB",
    "archive-copy .tar.gz 43MB"
])