function solve(input){
    var table = [];
    var maxSum = -Infinity;
    var maxSumStr = '';

    for (var i = 2; i < input.length - 1; i++) {
        var nums = input[i].match(/\-?[\d.]+/g);
        var sum = 0;

        if (nums != undefined) {
            for (var j = 0; j < nums.length; j++) {
                sum += Number(nums[j]);
            }

            if (sum > maxSum) {
                maxSum = sum;
                maxSumStr = maxSum + ' = ';

                for (var k = 0; k < nums.length; k++) {
                    maxSumStr += nums[k] + ' + ';
                }
            }
        }
    }

    if (maxSumStr == '') {
        console.log('no data');
    }else{
        console.log(maxSumStr.slice(0, maxSumStr.length - 3));
    }
}