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
    if (b) {
        return a / b;
    } 
};

function operate(operator, a, b) {
    if (typeof(a) !== "number") a = parseInt(a);
    if (typeof(b) !== "number") b = parseInt(b);
    if (operator === "add") {
        res = add(a, b);
    } else if (operator === "subtract") {
        res = subtract(a, b);
    } else if (operator === "multiply") {
        res = multiply(a, b);
    } else if (operator === "divide") {
        res = divide(a, b);
    }
    return res.toString();
};

function updateDisplay(value) {
    const displayContent = document.querySelector('#display p');
    displayContent.textContent = value;
}

function simpleOperation(e) {
    // console.log(e);
    // console.log(e.target.id);
    // console.log(e.target.id.match("digit*"))
    if (e.target.id.match("digit*")) {
        displayValue += e.target.textContent;
        updateDisplay(displayValue);
    } else if (operators.includes(e.target.id)) {
        storedValue = displayValue;
        pendingOperation = e.target.id;
        displayValue = "";
        updateDisplay(displayValue);
    } else if ((e.target.id === "equal") && pendingOperation) {
        displayValue = operate(pendingOperation, storedValue, displayValue);
        updateDisplay(displayValue);
        pendingOperation = null;
    } else if (e.target.id === "clear") {
        storedValue = "";
        displayValue = "";
        pendingOperation = null;
        updateDisplay(displayValue);
    }
    // console.log(`storedValue = ${storedValue}`);
    // console.log(`displayValue = ${displayValue}`);
    // console.log(`pendingOpera = ${pendingOperation}`);
}

let displayValue = "";
let storedValue;
let pendingOperation = null;
const operators = ["add", "subtract", "multiply", "divide"];

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', simpleOperation));