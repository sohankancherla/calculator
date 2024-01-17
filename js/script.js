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

function operate(operator, leftNumber, rightNumber) {
    if (operator === "+") {
        return add(leftNumber, rightNumber);
    }
    else if (operator === "-") {
        return subtract(leftNumber, rightNumber);
    }
    else if (operator === "*") {
        return multiply(leftNumber, rightNumber);
    }
    else if (operator === "/") {
        return divide(leftNumber, rightNumber);
    }
    else {
        return "Error";
    }
}

let leftNumber;
let rightNumber;
let operator;