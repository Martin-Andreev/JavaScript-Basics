function findYoungestPerson(persons) {
    var youngestAge = Number.MAX_VALUE;
    var youngest = "";

    for (var i = 0; i < persons.length; i++) {
        var currAge = persons[i].age;

        if (currAge < youngestAge){
            youngestAge = currAge;
            youngest = "The youngest person is " + persons[i].firstname + " " + persons[i].lastname;
        }
    }

    return console.log(youngest);
}

var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}]
findYoungestPerson(persons);
