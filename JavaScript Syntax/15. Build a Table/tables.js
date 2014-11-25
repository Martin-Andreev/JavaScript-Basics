function solve(arr) {
    var start = parseInt(arr[0]);
    var end = parseInt(arr[1]);

    var result = "";

    var lastNum = 0;
    var nextNum = 1;
    var fibonacci = [];
    var isFibonacci = "";

    for (var k = 0; k < 100; k++) {
        var temp = nextNum;
        nextNum += lastNum;
        fibonacci.push(lastNum);

        lastNum = temp;
    }

    result = "<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n";

    for (var i = start; i <= end; i++) {
        if (fibonacci.indexOf(i) >= 0) {
            isFibonacci = "yes";
        } else {
            isFibonacci = "no";
        }

        result += "<tr><td>" + i + "</td><td>" + (i * i) + "</td><td>" + isFibonacci + "</td></tr>\n";

    }

    result += "</table>";
    return result;
}
