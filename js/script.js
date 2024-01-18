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
    document.querySelector("#current-text").textContent = displayText;
    clear = false;
}

function typedOperator(operatorPressed) {
    operator = operatorPressed
    leftNumber = rightNumber;
    rightNumber = "0";
    document.querySelector("#top-text").textContent = leftNumber + " " + operator;
    document.querySelector("#current-text").textContent = rightNumber;
    clear = true;
}

function typedEquals() {
    if (operator) {
        result = operate(operator, +leftNumber, +rightNumber);
        document.querySelector("#top-text").textContent = leftNumber + " " + operator + " " + rightNumber;
        document.querySelector("#current-text").textContent = result;
        operator = "";
        clear = true;
    }
}

let leftNumber = "";
let rightNumber = "0";
let operator = "";
let clear = true;

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

document.addEventListener("keydown", event => {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numbers.includes(event.key)){
        typedNumber(clear ? event.key : rightNumber + event.key);
    }
});