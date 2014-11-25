function soothsayer(input){
    var result = "You will work " + input[0][randomNum()] +
                 " years on " + input[1][randomNum()] +
                 ". You will live in " + input[2][randomNum()] +
                 " and drive " + input[3][randomNum()] + ".";

    return result
}

function randomNum (){
    var number = Math.floor(Math.random() * (4 - 0 + 1) + 0);

    return number;
}

console.log(soothsayer([[3, 5, 2, 7, 9],
            ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
            ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
            ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']]));
