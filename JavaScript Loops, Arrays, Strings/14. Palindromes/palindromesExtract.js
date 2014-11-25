function findPalindromes(str) {
    var palindromes = [];
    var result = "";
    var words = str.split(/\W+/i).filter(function (e) {
        return e != "";
    });

    for (var i = 0; i < words.length; i++) {
        var isPal = false;
        if (words[i].length == 1) {
            palindromes.push(words[i]);
            continue;
        }

        for (var l = 0, r = words[i].length - 1; l < (words[i].length - 1 ) / 2; l++, r--) {
            if (words[i][l].toLowerCase() !== words[i][r].toLowerCase()) {
                isPal = false;
                break;
            } else {
                isPal = true;
            }
        }
        if (isPal) {
            palindromes.push(words[i]);
        }
    }

    console.log(palindromes.toString());

    //SECOND WAY
    //for (var i = 0; i < result.length; i++) {
    //    console.log(result[i] + " ");
    //}

    //for (var i = 0; i < words.length; i++) {
    //    var currentWord = words[i].toLowerCase();
    //    var firstHalf = "";
    //    var secondHalf = "";
    //
    //    if (currentWord.length == 1){
    //        result += currentWord + ", ";
    //    } else{
    //        for (var j = 0; j < (currentWord.length - 1) / 2; j++) {
    //            firstHalf += currentWord[j];
    //        }
    //
    //        for (var k = currentWord.length - 1; k >= currentWord.length / 2; k--) {
    //            secondHalf += currentWord[k];
    //        }
    //        if (firstHalf == secondHalf){
    //            result += currentWord + ", ";
    //        }
    //    }
    //}
    //console.log(result.slice(0, result.length - 2));
}

findPalindromes('There is a man, his name was Bob.');