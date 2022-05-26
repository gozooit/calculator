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

function plusMinus(value) {
    arr = value.split("");
    if (arr[0] === "-") {
        arr.shift();
    } else {
        arr.unshift("-");
    }
}

function calculator(e) {
    if (e.target.id.match("digit*")) {
        displayValue += e.target.textContent;
        updateDisplay(displayValue);
    } else if (e.target.id === "plusminus") {
        displayValue = plusMinus(displayValue);
        updateDisplay(displayValue);
    } else if (operators.includes(e.target.id)) {
        if (lastValue === "0") {
            lastValue = displayValue;
        } else {
            lastValue = operate(lastOperator, lastValue, displayValue);
        }
        lastOperator = e.target.id;
        updateDisplay(lastValue);
        displayValue = "";
    } else if ((e.target.id === "equal")) {
        console.log(`lastvalue: ${lastValue} `, `lastop: ${lastOperator}`, !lastValue === "0");
        if (!lastOperator || !displayValue) {
            displayValue = lastValue;
        } else {
            displayValue = operate(lastOperator, lastValue, displayValue);
        }
        updateDisplay(displayValue);
        lastOperator = null;
        console.log(`lastvalue: ${lastValue} `, `lastop: ${lastOperator}`, !lastValue === "0");
    } else if (e.target.id === "clear") {
        displayValue = "";
        lastValue = "0";
        lastOperator = null;
        updateDisplay(lastValue);
    }
}

// Initialize var and set display to 0
const operators = ["add", "subtract", "multiply", "divide"];
let displayValue = "";
let lastValue = "0";
let lastOperator = null;
updateDisplay(lastValue);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', calculator));


// function chainOperation(e) {
//     if (e.target.id.match("digit*")) {
//         displayValue += e.target.textContent;
//         updateDisplay(displayValue);
//     } else if (operators.includes(e.target.id)) {
//         chainValue.push(displayValue);
//         chainValue.push(e.target.id);
//         displayValue = "";
//         updateDisplay(displayValue);
//     } else if ((e.target.id === "equal")) {
//         chainValue.push(displayValue);
//         chainValue.push(e.target.id);
//         for (i = 0; i < chainValue.length; i++) {
//             if (operators.includes(chainValue[i])) {
//                 chainValue[i + 1] = operate(chainValue[i], chainValue[i - 1], chainValue[i + 1]);
//             } else if (chainValue[i] === "equal") {
//                 displayValue = chainValue[i - 1];
//                 updateDisplay(displayValue);
//             }
//         }
//     } else if (e.target.id === "clear") {
//         chainValue = [];
//         displayValue = "";
//         updateDisplay(displayValue);
//     }
//     console.log(chainValue);
// }

// function simpleOperation(e) {
//     if (e.target.id.match("digit*")) {
//         displayValue += e.target.textContent;
//         updateDisplay(displayValue);
//     } else if (operators.includes(e.target.id)) {
//         storedValue = displayValue;
//         pendingOperation = e.target.id;
//         displayValue = "";
//         updateDisplay(displayValue);
//     } else if ((e.target.id === "equal") && pendingOperation) {
//         displayValue = operate(pendingOperation, storedValue, displayValue);
//         updateDisplay(displayValue);
//         pendingOperation = null;
//     } else if (e.target.id === "clear") {
//         storedValue = "";
//         displayValue = "";
//         pendingOperation = null;
//         updateDisplay(displayValue);
//     }
// }