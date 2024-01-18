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
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
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
    operator = operatorPressed
    leftNumber = sign + rightNumber;
    rightNumber = "0";
    topText.textContent = leftNumber + " " + operator;
    currentText.textContent = rightNumber;
    clear = true;
    sign = "";
}

function typedEquals() {
    if (operator) {
        rightNumber = sign + rightNumber
        result = operate(operator, +leftNumber, +rightNumber);
        topText.textContent = leftNumber + " " + operator + " " + rightNumber;
        rightNumber = result.toString();
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
    rightNumber = rightNumber.slice(0,-1)
    if (!rightNumber) {
        rightNumber = "0";
        clear = true;
    }
    currentText.textContent = rightNumber;
}

function clearPressed() {
    let leftNumber = "";
    let rightNumber = "0";
    let operator = "";
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

let leftNumber = "";
let rightNumber = "0";
let operator = "";
let sign = "";
let clear = true;

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


document.addEventListener("keydown", event => {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numbers.includes(event.key)){
        typedNumber(clear ? event.key : rightNumber + event.key);
    }
});