function changeField(){
    if(isNaN(textField.value)) {
        textField.style.background = 'red';
        textField.disabled = true;
        setTimeout(getPreviousValue, 2000);
    } else {
        previousValue = textField.value;
    }
}

function getPreviousValue(){
    textField.value = previousValue;
    textField.disabled = false;
    textField.style.background = '';
    textField.focus();
}

var textField = document.getElementById('textField'),
    previousValue ='';

textField.addEventListener('input', changeField, false);
