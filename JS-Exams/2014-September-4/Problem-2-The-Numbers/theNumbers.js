function theNumbers(input) {
    var numbers = input[0].match(/[0-9]+/g);
    var result = "";

    for (var i = 0; i < numbers.length; i++) {
        var currNum = toHex(Number(numbers[i]));

        result += "0x" + currNum + "-";
    }

    console.log(result.substr(0, result.length - 1));

    function toHex(i) {
        return (i+0x10000).toString(16).substr(-4).toUpperCase();
    }
}

theNumbers(["5tffwj(//*7837xzc2---34rlxXP%$”."]);