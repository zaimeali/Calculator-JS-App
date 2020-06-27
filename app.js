let currentNumber = "";
let currentOperation ="";
let secondNumber ="";
let result = 0;

function clearScreen(){
    document.getElementById("calScreen").value = "0";
    currentNumber = "";
    secondNumber = "";
    currentOperation = "";
    result = "";
}

function getDecimal(){
    if(!currentNumber.includes('.') && currentNumber.length > 0){
        currentNumber += '.';
        document.getElementById('calScreen').value = currentNumber;
    }
    if(!secondNumber.includes('.') && secondNumber.length > 0){
        secondNumber += '.';
        document.getElementById('calScreen').value = secondNumber;
    }
}

function getNumber(num){
    if(currentOperation.length === 0){
        currentNumber += num;
        document.getElementById("calScreen").value = currentNumber;
    }
    else if(currentOperation.length > 0){
        secondNumber += num;
        document.getElementById("calScreen").value = secondNumber;
    }
}

function getOp(op){
    let currentScreenNumber = document.getElementById("calScreen").value;
    if(currentNumber.length === 0){
        currentNumber = "0";
    }
    if(currentScreenNumber !== '0'){
        currentNumber = currentScreenNumber;
        secondNumber = "";
    }
    currentOperation = op;
}

function letCalculate(){
    if(currentNumber.length === 0){
        currentNumber = "0";
    }
    let num1 = +currentNumber;
    let num2 = +secondNumber;
    if(currentOperation === "+"){
        result = num1 + num2;
    }
    else if(currentOperation === "-"){
        result = num1 - num2;
    }
    else if(currentOperation === "/"){
        result = num1 / num2;
    }
    else if(currentOperation === "x"){
        result = num1 * num2;
    }
    document.getElementById("calScreen").value = result;
    currentNumber = result;
    currentOperation = "";
    secondNumber = "";
}

function calculatorKeys(e){
    if(e.keyCode == 13 || e.keyCode == 187){
        letCalculate();
    }
    else if(["+", "-", "*", "/"].includes(String.fromCharCode(e.keyCode))){
        
        currentOperation = String.fromCharCode(e.keyCode);
        if(currentNumber.length > 0){
        }
    }
    else{
        if(currentOperation.length > 0){
            secondNumber += String.fromCharCode(e.keyCode);
            document.getElementById("calScreen").value = secondNumber;
        }
        else{
            currentNumber += String.fromCharCode(e.keyCode);
            document.getElementById("calScreen").value = currentNumber;
        }
    }
}