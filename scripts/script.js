document.getElementById('addition').addEventListener('click',addition);
document.getElementById('subtraction').addEventListener('click',subtraction);
document.getElementById('multiplication').addEventListener('click',multiplication);
document.getElementById('division').addEventListener('click',division);
document.getElementById('mod').addEventListener('click',mod);

var number1 = 0;
var number2 = 0;
function getValues() {
      number1 = document.getElementById('number1').value;
      number2 = document.getElementById('number2').value; 
}
function print(number1){
    document.getElementById('result').innerHTML = number1;
}
function addition() {
    getValues();
    print(parseInt(number1) + parseInt(number2));
}
function subtraction() {
    getValues();
    print(parseInt(number1) - parseInt(number2));
}
function multiplication() {
    getValues();
    print(parseInt(number1) * parseInt(number2));
}
function division() {
    getValues();
    print(parseInt(number1) / parseInt(number2));
}
function mod() {
    getValues();
    print(parseInt(number1) % parseInt(number2));
}