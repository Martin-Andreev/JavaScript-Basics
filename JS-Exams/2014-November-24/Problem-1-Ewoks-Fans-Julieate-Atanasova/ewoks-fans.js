function solve(input) {
    var smallestDate = new Date(1900, 01 - 1, 01);
    var biggestDate = new Date(2015, 01 - 1, 01);

    var dateToCheck = new Date(1973, 05 - 1, 25);

    var biggestFanDate = new Date(1973, 05 - 1, 26);
    var biggestHaterDate = new Date(1973, 05 - 1, 25);

    var hasFans = false;
    var hasHaters = false;

    for (var i = 0; i < input.length; i++) {
        var currDate = input[i].split(".");
        var day = parseInt(currDate[0]);
        var month = parseInt(currDate[1]);
        var year = parseInt(currDate[2]);

        var currD = new Date(year, month - 1, day);

        if (currD > dateToCheck && currD < biggestDate && currD > biggestFanDate) {
            biggestFanDate = currD;
            hasFans = true;
        } else if (currD < dateToCheck && currD > smallestDate && currD < biggestHaterDate) {
            biggestHaterDate = currD;
            hasHaters = true;
        }
    }

    if (hasFans && hasHaters) {
        console.log("The biggest fan of ewoks was born on " + biggestFanDate.toDateString());
        console.log("The biggest hater of ewoks was born on " + biggestHaterDate.toDateString());
    } else if (hasFans && !hasHaters) {
        console.log("The biggest fan of ewoks was born on " + biggestFanDate.toDateString());
    } else if (!hasFans && hasHaters) {
        console.log("The biggest hater of ewoks was born on " + biggestHaterDate.toDateString());
    } else {
        console.log("No result");
    }
}

solve(["22.03.2014", "17.05.1933", "10.10.1954"]);