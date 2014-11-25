function printNumbers(number){
    var result = [];

    if (number > 0){
        for (var i = 0; i <= number; i++) {
            if (i % 4 != 0 && i % 5 != 0){
                result.push(i)
            }
        }

        result = result.join(', ');
    } else {
        result = "no";
    }

    return result;
}

console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));