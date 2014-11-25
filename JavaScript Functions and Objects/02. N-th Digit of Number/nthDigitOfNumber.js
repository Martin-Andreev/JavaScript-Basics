function findNthDigit(arr) {
    var inputNum = arr[1].toString();
    var number = "";
    var wantedNum;

    for (var i = 0; i < inputNum.length; i++) {
        if (inputNum[i] != '.'){
            number+= inputNum[i];
        }
    }

    if (number.length < arr[0]){
        return console.log("The number doesn't have " + arr[0] + " digits");
    } else {
        return console.log(wantedNum = number.substr(number.length - arr[0], 1));
    }
}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);