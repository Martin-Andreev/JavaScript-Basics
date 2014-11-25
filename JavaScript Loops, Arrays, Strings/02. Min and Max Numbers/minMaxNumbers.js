function findMinAndMax(arr){
    var minNum = Number.MAX_VALUE;
    var maxNum = Number.MIN_VALUE;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum){
            maxNum = arr[i];
        }

        if (arr[i] < minNum){
            minNum = arr[i];
        }
    }

    console.log("Min -> " + minNum);
    console.log("Max -> " + maxNum);
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);