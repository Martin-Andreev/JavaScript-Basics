function findMostFreqWord(str) {
    var count = 1;
    var bestCount = 1;
    var wordsAdded = [];
    var wordsArr = str.split(/[ ,.!?\-'\\(\\);]+/i);

    for (var i = 0; i < wordsArr.length; i++) {
        var currWord = wordsArr[i].toLowerCase();


        for (var j = i + 1; j < wordsArr.length; j++) {
            var nextWord = wordsArr[j].toLowerCase();

            if (currWord == nextWord){
                count++;

                if (count >= bestCount){
                    bestCount = count;
                    wordsAdded.push({name: currWord, count: bestCount});
                }
            }
        }

        count = 1;
    }

    for (var k = 0; k < wordsAdded.length; k++) {
        if (wordsAdded[k].count == bestCount){
            console.log(wordsAdded[k].name + " -> " + bestCount + " times");
        }
    }
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');