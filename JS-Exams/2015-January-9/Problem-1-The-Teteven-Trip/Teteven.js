function solve(input){
    for (var i = 0; i < input.length; i++) {
        var trip = input[i].split(' ');

        var carModel = trip[0];
        var fuelType = trip[1];
        var route = trip[2];
        var luggageWeight = Number(trip[3]);
        var distance;
        var totalConsumption;
        var routSnowDistance;
        var totalAmount;
        var output = '';

        var correctionCoefficient;

        switch (fuelType) {
            case 'gas':
                correctionCoefficient = 1.2;
                break;
            case 'petrol':
                correctionCoefficient = 1;
                break;
            case 'diesel':
                correctionCoefficient = 0.8;
                break;
        }

        var baseConsumption = correctionCoefficient * 10;

        var extraFuel = (luggageWeight * 0.01) + baseConsumption;

        switch (route) {
            case '1':
                distance = 110;
                routSnowDistance = 10;
                break;
            case '2':
                distance = 95;
                routSnowDistance = 30;
                break
        }

        totalConsumption = distance * (extraFuel / 100);

        var snowConsumption = extraFuel * 0.3;

        snowConsumption = routSnowDistance * (snowConsumption / 100);

        totalAmount = Math.round(snowConsumption + totalConsumption);

        output = carModel + ' ' + fuelType + ' ' + route + ' ' + totalAmount;
        console.log(output);
    }
}

solve([
    'BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54'
]);