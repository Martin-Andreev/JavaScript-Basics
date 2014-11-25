function checkDigit(number) {
    number /= 100;
    var result = parseInt(number % 10)

    if (result == 3){
        return true;
    } else{
        return false;
    }
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));