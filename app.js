let currentNumber = "";
let currentOperation ="";
let secondNumber ="";

function clearScreen(){
    document.getElementById("calScreen").value = "0";
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
    if(currentNumber.length === 0){
        currentNumber = "0";
    }
    currentOperation = op;
}

function letCalculate(){
    if(currentNumber.length === 0){
        currentNumber = "0";
    }
    let num1 = +currentNumber;
    let num2 = +secondNumber;
    let result = 0;
    if(currentOperation === "+"){
        result = num1 + num2;
    }
    document.getElementById("calScreen").value = result;
}