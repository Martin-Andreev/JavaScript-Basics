function calculate(expression){
    expression = document.getElementById("input").value;
    expression = expression.replace(/[ ]/g, "");
    var result = eval(expression);

    document.getElementById("output").value = result;
}

function clearResult(){
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}