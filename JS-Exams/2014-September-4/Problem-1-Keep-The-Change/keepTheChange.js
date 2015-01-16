function keepTheChange(input) {
    var bill = input[0];
    var mood = input[1];
    var tip;

    switch (mood) {
        case "happy":
            tip = bill * 0.1;
            break;
        case "married":
            tip = bill * 0.0005;
            break;
        case "drunk":
            var temp = bill * 0.15 + "";
            var n = temp[0];
            tip = Math.pow(parseFloat(temp), parseFloat(n));
            break;
        default:
            tip = bill * 0.05;
    }

    console.log(tip.toFixed(2));
}

keepTheChange([120.44, "happy"]);
keepTheChange([1230.83, "drunk"]);
keepTheChange([716.00, "married"]);