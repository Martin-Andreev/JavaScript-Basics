function sumTwoHugeNumbers(value) {
    var firstNum = value[0];
    var secondNum = value[1];
    var shortestNum;
    var longestNum;
    var sum = 0;
    var result = "";
    var reminder = 0;

    if (firstNum.length == secondNum.length) {
        shortestNum = firstNum;
        longestNum = secondNum;
    } else {
        shortestNum = firstNum.length < secondNum.length ? firstNum : secondNum;
        longestNum = firstNum.length >= secondNum.length ? firstNum : secondNum;

        while(shortestNum.length < longestNum.length){
            shortestNum = '0' + shortestNum;
        }
    }

    for (var i = shortestNum.length - 1; i >= 0; i--) {
        var firstDigit = parseInt(shortestNum[i]);
        var secondDigit = parseInt(longestNum[i]);

        sum = firstDigit + secondDigit + reminder;
        reminder = 0;

        while (sum > 9) {
            sum -= 10;
            reminder++;
        }

        result += sum + "";
    }

    return result.toString().split('').reverse().join('');
}

console.log(sumTwoHugeNumbers(['155', '65']));
console.log(sumTwoHugeNumbers(['123456789', '123456789']));
console.log(sumTwoHugeNumbers(['887987345974539','4582796427862587']));
console.log(sumTwoHugeNumbers(['347135713985789531798031509832579382573195807',
        '817651358763158761358796358971685973163314321']));