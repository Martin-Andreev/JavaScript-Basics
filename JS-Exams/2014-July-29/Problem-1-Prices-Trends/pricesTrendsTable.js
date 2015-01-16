function printPricesTrendsTable(input) {
    var trend = "";
    var numbers = [];

    for (var i = 0; i < input.length; i++) {
        numbers[i] = Number(parseFloat(input[i]).toFixed(2));
    }

    console.log("<table>\n<tr><th>Price</th><th>Trend</th></tr>");
    console.log('<tr><td>' + numbers[0].toFixed(2) +'</td><td><img src=\"fixed.png\"/></td></td>');

    for (var i = 1; i < numbers.length; i++) {
        var currNum = (numbers[i]);
        var prevNum = (numbers[i - 1]);

        if (currNum > prevNum){
            trend = "up";
        } else if(currNum < prevNum){
            trend = "down";
        } else{
            trend = "fixed";
        }

        console.log('<tr><td>' + currNum.toFixed(2) + '</td><td><img src=\"' + trend +'.png\"/></td></td>');
    }

    console.log("</table>");
}