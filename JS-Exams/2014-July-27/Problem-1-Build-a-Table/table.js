function solve(arr) {
    var start = parseInt(arr[0]);
    var end = parseInt(arr[1]);

    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');

    for (var i = start; i <= end; i++) {
        if (isFibonacci(i)){
            console.log('<tr><td>' + i + '</td><td>' + i * i + '</td><td>yes</td></tr>');
        }else{
            console.log('<tr><td>' + i + '</td><td>' + i * i + '</td><td>no</td></tr>');
        }

    }
    
    console.log('</table>');

    function isFibonacci(num) {
        var isFib = false;

        var lastNum = 0;
        var nextNum = 1;

        for (var k = 0; k < 100; k++) {
            var temp = nextNum;

            if (temp == num){
                isFib = true;
                return isFib;
            }

            nextNum += lastNum;
            lastNum = temp;

        }

        return isFib;
    }
}