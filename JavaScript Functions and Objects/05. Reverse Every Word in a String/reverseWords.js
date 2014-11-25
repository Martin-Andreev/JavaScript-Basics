function reverseWordsInString(str) {
    var arrStr = str.split(" ");
    var result = "";

    for (var i = 0; i < arrStr.length; i++) {
        var currWord = arrStr[i];

        result += currWord.split("").reverse().join("");

        //Second way
        //for (var j = currWord.length - 1; j >= 0; j--) {
        //    result += currWord[j];
        //}

        result += " ";
    }

    return result;
}

console.log(reverseWordsInString('Hello, how are you.'));
console.log(reverseWordsInString('Life is pretty good, isn’t it?'));