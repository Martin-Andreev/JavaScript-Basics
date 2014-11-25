function findLargestBySumOfDigits(arr) {
    var arrNum = arr;
    var bestSum = 0;
    var bestNum = "";

    for (var i = 0; i < arrNum.length; i++) {
        var currNum = arrNum[i].toString().replace('-', '');
        var sum = 0;

        if (isNaN(currNum)) {
            return console.log("undefined");
        } else {
            for (var j = 0; j < currNum.length; j++) {
                if (currNum[j] == "."){
                    return console.log("undefined");
                }
                sum += parseInt(currNum[j]);
            }

            if (sum > bestSum) {
                bestSum = sum;
                bestNum = arrNum[i];
            }
        }
    }

    return console.log(bestNum);
}

findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 20]);
findLargestBySumOfDigits(['hello']);
findLargestBySumOfDigits([5, 3.3]);