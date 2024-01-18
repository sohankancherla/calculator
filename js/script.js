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
    currentText.textContent = displayText;
    if (rightNumber !== "0") {
        clear = false;
    }
}

function typedOperator(operatorPressed) {
    operator = operatorPressed
    leftNumber = rightNumber;
    rightNumber = "0";
    topText.textContent = leftNumber + " " + operator;
    currentText.textContent = rightNumber;
    clear = true;
}

function typedEquals() {
    if (operator) {
        result = operate(operator, +leftNumber, +rightNumber);
        topText.textContent = leftNumber + " " + operator + " " + rightNumber;
        rightNumber = result.toString();
        currentText.textContent = rightNumber;
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

let leftNumber = "";
let rightNumber = "0";
let operator = "";
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

document.addEventListener("keydown", event => {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numbers.includes(event.key)){
        typedNumber(clear ? event.key : rightNumber + event.key);
    }
});