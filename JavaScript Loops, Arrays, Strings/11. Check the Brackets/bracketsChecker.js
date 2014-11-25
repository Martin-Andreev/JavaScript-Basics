function checkBrackets(str) {
    var count = 0;
    var isCorrect = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] == ")"){
            count++;
        } else if (str[i] == "(") {
            count--;
        }
    }

    if (count == 0){
        isCorrect = "correct";
    } else {
        isCorrect = "incorrect";
    }

    return isCorrect;
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));