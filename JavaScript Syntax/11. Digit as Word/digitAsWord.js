function convertDigitToWord(value) {
    var numStr;

    switch (value){
        case 1: numStr = "one";
            break;
        case 2: numStr = "two";
            break;
        case 3: numStr = "three";
            break;
        case 4: numStr = "four";
            break;
        case 5: numStr = "five";
            break;
        case 6: numStr = "six";
            break;
        case 7: numStr = "seven";
            break;
        case 8: numStr = "eight";
            break;
        case 9: numStr = "nine";
            break;
    }

    return numStr;
}

console.log(convertDigitToWord(8));
console.log(convertDigitToWord(3));
console.log(convertDigitToWord(5));