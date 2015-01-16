function solve(input) {
    var command = input[0].split("^");
    var result = {};
    var students = [];
    var trainers = [];

    for (var i = 1; i < input.length; i++) {
        var line = JSON.parse(input[i]);

        if (line.role == 'student') {
            students.push(line)

        } else {
            trainers.push(line)
        }
    }

    if (command[0] == 'name') {
        students = students.sort(function (el1, el2) {
            if (el1.firstname == el2.firstname) {
                return el1.lastname.localeCompare(el2.lastname);
            }

            return el1.firstname.localeCompare(el2.firstname);

        });
    } else if (command[0] = 'level') {
        students = students.sort(function (el1, el2) {
            if (el1.level == el2.level) {
                return el1.id - el2.id;
            }

            return el1.level - el2.level;
        });
    }
    trainers.sort(function (el1, el2) {
        var el1Courses = el1.courses.length;
        var el2Courses = el2.courses.length;
        if (el1Courses == el2Courses) {
            return el1.lecturesPerDay - el2.lecturesPerDay;
        }

        return el1Courses - el2Courses;
    });

    var studentResult = [];
    students.forEach(function(el){
        var student = {
            id: el.id,
            firstname: el.firstname,
            lastname: el.lastname,
            averageGrade: avg(el.grades).toFixed(2),
            certificate: el.certificate
        };

        studentResult.push(student);
    });

    var trainersResult = [];
    trainers.forEach(function (el) {
        var trainer = {
            id: el.id,
            firstname: el.firstname,
            lastname: el.lastname,
            courses: el.courses,
            lecturesPerDay: el.lecturesPerDay
        };
        trainersResult.push(trainer);
    });

    function avg(input){
        var sum = 0;

        for(var grade in input){
            sum += parseFloat(input[grade]);
        }

        return sum / input.length;
    }

    result = {
        "students": studentResult,
        "trainers": trainersResult
    };

    console.log(JSON.stringify(result));
}

solve([
    'level^courses',
    '{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}',
    '{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
    '{"id":2,"firstname":"Bobi","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
    '{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
    '{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}'
]);
