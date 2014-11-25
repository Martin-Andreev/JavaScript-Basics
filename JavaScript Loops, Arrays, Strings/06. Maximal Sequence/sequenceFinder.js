function findMaxSequence(arr) {
    var count = 1;
    var maxCount = 0;
    var element = "";
    var result = [];
    if (arr.length == 1) {
        element = arr[0];
        result.push(element)
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                count++;
                if (count >= maxCount) {
                    maxCount = count;
                    element = arr[i];
                }
            } else {
                count = 1;
            }
        }

        for (var j = 0; j < maxCount; j++) {
            result.push(element);
        }
    }
    return result;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));