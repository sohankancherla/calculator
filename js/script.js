function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return +add(a, b).toFixed(5);
    }
    else if (operator === "-") {
        return +subtract(a, b).toFixed(5);
    }
    else if (operator === "*") {
        return +multiply(a, b).toFixed(5);
    }
    else if (operator === "/") {
        return +divide(a, b).toFixed(5);
    }
    else {
        return "Error";
    }
}

function typedNumber(displayText) {
    rightNumber = displayText;
    currentText.textContent = sign + displayText;
    if (rightNumber !== "0") {
        clear = false;
    }
}

function typedOperator(operatorPressed) {
    rightNumber = sign + rightNumber
    if (leftNumber) {
        result = operate(operator, +leftNumber, +rightNumber)
        leftNumber = result.toString();
    }
    else {
        leftNumber = sign + rightNumber;
    }
    operator = operatorPressed
    rightNumber = "0";
    topText.textContent = leftNumber + " " + operator;
    currentText.textContent = rightNumber;
    clear = true;
    sign = "";
    decimal = false;
}

function typedEquals() {
    if (operator) {
        rightNumber = sign + rightNumber
        result = operate(operator, +leftNumber, +rightNumber);
        topText.textContent = leftNumber + " " + operator + " " + rightNumber;
        rightNumber = result.toString();
        decimal = result % 1 ? true : false;
        if (rightNumber.substring(0,1) === "-") {
            sign = "-";
            rightNumber = rightNumber.slice(1);
        }
        else {
            sign = "";
        }
        currentText.textContent = sign + rightNumber;
        operator = "";
        clear = true;
    }
}

function delPressed() {
    clear = false;
    if (rightNumber.slice(-1) === ".") {
        decimal = false;
    }
    rightNumber = rightNumber.slice(0,-1)
    if (!rightNumber) {
        rightNumber = "0";
        clear = true;
    }
    currentText.textContent = rightNumber;
}

function clearPressed() {
    leftNumber = "";
    rightNumber = "0";
    operator = "";
    sign = "";
    clear = true;
    decimal = false;
    topText.textContent = leftNumber;
    currentText.textContent = rightNumber;
}

function changeSign() {
    if(sign === "-") {
        sign = "";
    }
    else {
        sign = "-";
    }
    currentText.textContent = sign + rightNumber;
}

function addDecimal() {
    if (!decimal) {
        rightNumber += ".";
        currentText.textContent = sign + rightNumber;
        clear = false;
        decimal = true;
    }
}

let leftNumber = "";
let rightNumber = "0";
let operator = "";
let sign = "";
let clear = true;
let decimal = false;

let topText = document.querySelector("#top-text");
let currentText = document.querySelector("#current-text");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
    const number = button.textContent;
        typedNumber(clear ? number : rightNumber + number);
    });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const operatorText = button.textContent;
        typedOperator(operatorText);
    });
});

const equalButton = document.querySelector("#equals");
equalButton.addEventListener("click", () => typedEquals());

const delButton = document.querySelector("#delete");
delButton.addEventListener("click", () => delPressed());

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => clearPressed());

const signButton = document.querySelector("#plus-minus");
signButton.addEventListener("click", () => changeSign());

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => addDecimal());


document.addEventListener("keydown", event => {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let operators = ["+", "-", "*", "/"]
    if (numbers.includes(event.key)){
        typedNumber(clear ? event.key : rightNumber + event.key);
    }
    else if (operators.includes(event.key)) {
        typedOperator(event.key);
    }
    else if (event.key === "=" || event.key === "Enter") {
        event.preventDefault();
        typedEquals();
    }
    else if (event.key === "Backspace" || event.key === "Delete") {
        delPressed();
    }
    else if (event.key === ".") {
        addDecimal();
    }
});