function findMaxSequence(arr) {
    var currNum;
    var previousNum;
    var element;
    var count = 1;
    var maxCount = 1;
    var bestStart = 0;
    var maxSeq = [];
    var result = "";

    for (var i = 1; i < arr.length; i++) {
        currNum = arr[i];
        previousNum = arr[i - 1];

        if ( currNum > previousNum ){
            count++;

            if (count > maxCount){
                maxCount = count;
                bestStart = i - maxCount;
            }
        } else {
            count = 1;
        }
    }

    if (maxCount == 1){
        result = "no";
        return result;
    } else{
        for (var j = bestStart + 1; j <= bestStart + maxCount; j++) {
            element = arr[j];
            maxSeq.push(element);
        }

        return maxSeq;
    }
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));