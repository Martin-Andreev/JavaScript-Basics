function bitChecker(number) {
    var thirdBit = (number >> 3) & 1;

    if (thirdBit == 1){
        return true;
    } else{
        return false;
    }
}

console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));