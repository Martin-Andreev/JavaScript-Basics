function solve(input) {
    var courses = {};

    for (var i = 0; i < input.length; i++) {
        var currentLine = input[i].split(/[\s]?\|[\s]?/g);
        var name = currentLine[0].trim();
        var course = currentLine[1].trim();
        var grade = Number(currentLine[2].trim());
        var visits = Number(currentLine[3].trim());

        if (!courses[course]) {
            courses[course] = {
                'avgGrade': 0,
                'avgVisits': 0,
                'students': [],
                'countInputs': 0
            };
        }
        courses[course]['avgGrade'] += grade;
        courses[course]['avgVisits'] += visits;

        if (courses[course]['students'].indexOf(name) == -1) {
            courses[course]['students'].push(name);
        }

        courses[course]['countInputs']++;
    }

    var courseKeys = Object.keys(courses);
    courseKeys.sort();

    var outputArray = {};

    for (var j = 0; j < courseKeys.length; j++) {
        var currCourse = courseKeys[j];
        outputArray[currCourse] = courses[currCourse];
        outputArray[currCourse].students.sort();

        outputArray[currCourse].avgGrade = Number((outputArray[currCourse].avgGrade / outputArray[currCourse].countInputs).toFixed(2));
        outputArray[currCourse].avgVisits = Number((outputArray[currCourse].avgVisits / outputArray[currCourse].countInputs).toFixed(2));

        delete outputArray[currCourse].countInputs;
    }

    console.log(JSON.stringify(outputArray));
}