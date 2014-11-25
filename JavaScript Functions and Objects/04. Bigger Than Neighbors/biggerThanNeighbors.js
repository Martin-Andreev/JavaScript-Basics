function biggerThanNeighbors(index,  arr) {
    var arrNum = arr;
    var result = "";

    if ((index == 0) || (index == arrNum.length - 1)) {
        result = "only one neighbor";
    } else if ((index > 0) && (index < arrNum.length)){
        if ((arrNum[index] > arrNum[index-1]) && (arrNum[index] > arrNum[index + 1])){
            result = "bigger";
        } else{
            result = "not bigger";
        }
    } else{
        result = "invalid index";
    }

    return result;
}

console.log(biggerThanNeighbors(2, [1, 2, 3, 3, 5]));
console.log(biggerThanNeighbors(2, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(5, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(0, [1, 2, 5, 3, 4]));