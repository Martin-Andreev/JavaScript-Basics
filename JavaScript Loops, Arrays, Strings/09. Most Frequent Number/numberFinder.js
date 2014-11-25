function findMostFreqNum(arr) {
    var count = 1;
    var bestCount = 1;
    var mostFreqNum = "";
    var result = "";
    
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]){
                count++;
                
                if (count > bestCount){
                    bestCount = count;
                    mostFreqNum = arr[i];
                }
            }
        }

        count = 1;
    }

    if (bestCount == 1){
        result = arr[0] + " (" + bestCount + " times)";
    } else {
        result += mostFreqNum + " (" + bestCount + " times)";
    }

    return result;
}

console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));