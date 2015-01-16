function solve(input) {
    var bladeLengths = input.map(Number);
    var type = "";
    var application = "";

    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');

    for (var i = 0; i < bladeLengths.length; i++) {
        var length = Math.floor(bladeLengths[i]);

        if (length > 10) {
            application = getApplication(length);

            if (length > 40) {
                type = "sword";
            }else{
                type = "dagger";
            }

            console.log('<tr><td>' + length + '</td><td>' + type + '</td><td>' + application + '</td></tr>');
        }

    }

    console.log('</tbody>');
    console.log('</table>');

    function getApplication(length){
        var number = length % 5;
        var application = "";

        switch (number) {
            case 0: application = "*rap-poker";
                break;
            case 1: application = "blade";
                break;
            case 2: application = "quite a blade";
                break;
            case 3: application = "pants-scraper";
                break;
            case 4: application = "frog-butcher";
                break;
        }

        return application;
    }
}

solve([17.8, 19.4, 13, 55.8, 126.96541651, 3]);
