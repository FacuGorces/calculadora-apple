'use strict'

var operator = null;
var inputValueDemo = 0;

function getContentClick(event){
    const value = event.target.innerHTML;
    filterAction(value);
}

const filterAction = value => {
    value === "0" ? addNumberInput(0) : null;
    value === "1" ? addNumberInput(1) : null;
    value === "2" ? addNumberInput(2) : null;
    value === "3" ? addNumberInput(3) : null;
    value === "4" ? addNumberInput(4) : null;
    value === "5" ? addNumberInput(5) : null;
    value === "6" ? addNumberInput(6) : null;
    value === "7" ? addNumberInput(7) : null;
    value === "8" ? addNumberInput(8) : null;
    value === "9" ? addNumberInput(9) : null;
    value === "," ? addNumberInput(",") : null;
    
    value === "+" ? setOperation('+') : null;
    value === "-" ? setOperation('-') : null;
    value === "X" ? setOperation('*') : null;
    value === "/" ? setOperation('/') : null;
    value === "%" ? setOperation('%') : null;
    value === "+/-" ? setOperation('+/-') : null;
}

function addNumberInput(value){
    const inputScreen = document.getElementsByClassName('calculator_screen')[0];
    const inputValue = inputScreen.value;

    if(inputValue === "0" && inputValue.length === 1 && value !== ","){
        inputScreen.value = value;
        return;
    }

    inputScreen.value = inputValue + value;
}

function setOperation(operator) {
    const inputScreenValue = document.getElementsByClassName("calculator_screen")[0].value;
    this.operator = operator;

    if (inputScreenValue != 0) {
        calculation();
    }
}

function calculation(){
    const inputScreen = document.getElementsByClassName("caclulator_screen")[0];
    let valueOne = transformCommaToPoint(this.inputValueDemo);
    let valueTwo = transformCommaToPoint(inputScreen.value);
    let total = 0;

    if(this.operator === "+" && inputScreen !== ""){
        total = valueOne + valueTwo;
    }

    this.inputValueDemo = total;
    inputScreen.value = "";
    inputScreen.placeholder = total;

}

function transformCommaToPoint(value){
    if(typeof value !== "number"){
        let resultTransform = value.repalce(',', '.');
        return parseFloat(resultTransform)
    }
    return value;
}