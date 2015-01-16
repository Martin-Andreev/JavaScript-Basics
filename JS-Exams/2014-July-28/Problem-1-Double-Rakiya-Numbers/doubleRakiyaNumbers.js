function solve(arr) {
    var start = parseInt(arr[0]);
    var end = parseInt(arr[1]);

    console.log("<ul>");
    for (var i = start; i <= end; i++) {
        var currNum = i;

        if (isDoubleNum(currNum)) {
            console.log("<li><span class='rakiya'>" + currNum + "</span><a href=\"view.php?id=" + currNum + ">View</a></li>");
        }else{
            console.log("<li><span class='num'>" + currNum + "</span></li>");
        }
    }
    console.log("</ul>");

    function isDoubleNum(num){
        var number = '' + num;
        var isDoubleNum = false;

        for (var i = 0; i < number.length - 2; i++) {
            var firstDouble = number[i] + number[i + 1];

            for (var j = i + 2; j < number.length; j++) {
                var secondDouble = number[j] + number[j + 1];

                if (firstDouble == secondDouble) {
                    isDoubleNum = true;
                    return isDoubleNum;
                }
            }
        }

        return isDoubleNum;
    }
}

solve([11210, 11215]);