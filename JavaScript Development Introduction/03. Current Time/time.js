var date = new Date();
var hours = date.getHours();
var min = date.getMinutes();

if (min < 10) {
    min = "0" + min;
}

console.log(hours + ":" + min);