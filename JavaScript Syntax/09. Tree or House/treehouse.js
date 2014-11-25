function treeHouseCompare(arr){
    var houseParam = arr[0];
    var treeParam = arr[1];
    var houseArea = (houseParam * houseParam) + (houseParam * (houseParam * 2 / 3) / 2);
    var treeArea = treeParam * (treeParam / 3) + Math.PI * Math.pow((treeParam * 2 / 3), 2);
    var result;

    if (houseArea > treeArea){
        result = "house/" + houseArea.toFixed(2);
    } else {
        result = "tree/" + treeArea.toFixed(2);
    }

    return result;
}

console.log(treeHouseCompare([3, 2]));
console.log(treeHouseCompare([3, 3]));
console.log(treeHouseCompare([4, 5]));