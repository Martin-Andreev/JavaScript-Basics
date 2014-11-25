function calcCylinderVol(arr) {
    var cylVolume = Math.PI * Math.pow(arr[0], 2) * arr[1];

    return cylVolume.toFixed(3);
}

console.log(calcCylinderVol([2, 4]));
console.log(calcCylinderVol([5, 8]));
console.log(calcCylinderVol([12, 3]));