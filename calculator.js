// this file contains math operator used for the calculator project

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (!b === 0) {
        return a / b;
    } 
};

function operate(operator, a, b) {
    if (operator === "add") {
        add(a, b);
    } else if (operator === "subtract") {
        subtract(a, b);
    } else if (operator === "multiply") {
        multiply(a, b);
    } else if (operator === "divide") {
        divide(a, b);
    }
};