var r1 = 7;
var r2 = 1.5;
var r3 = 20;

function calcArea(r) {
    return Math.PI * Math.pow(r, 2);
}

document.write('r = ' + r1 + '; area = ' + calcArea(r1) + "<br />" +
               'r = ' + r2 + '; area = ' + calcArea(r2) + "<br />" +
               'r = ' + r3 + '; area = ' + calcArea(r3));
