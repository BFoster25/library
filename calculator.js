const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");

const acButton = document.querySelector("#acButton");
const cButton = document.querySelector("#cButton");
const percentButton = document.querySelector("#percentButton");
const divideButton = document.querySelector("#divideButton");
const sevenButton = document.querySelector("#sevenButton");
const eightButton = document.querySelector("#eightButton");
const nineButton = document.querySelector("#nineButton");
const addButton = document.querySelector("#addButton");
const fourButton = document.querySelector("#fourButton");
const fiveButton = document.querySelector("#fiveButton");
const sixButton = document.querySelector("#sixButton");
const subtractButton = document.querySelector("#subtractButton");
const oneButton = document.querySelector("#oneButton");
const twoButton = document.querySelector("#twoButton");
const threeButton = document.querySelector("#threeButton");
const multiplyButton = document.querySelector("#multiplyButton");
const zeroButton = document.querySelector("#zeroButton");
const decimalButton = document.querySelector("#decimalButton");
const positiveAndNegativeButton = document.querySelector("#positiveAndNegativeButton");
const equalButton = document.querySelector("#equalButton");
const operators = document.querySelectorAll(".operators");

let num1 = 0;
let num2;
let operator;
screen.innerText = displayNumber(num1, operator, num2);


function assignNumber(number) {
    if (number.innerText === 0 && operator === undefined && num2 === undefined) {
        num1 = number.innerText;
        return num1;
    } else if (number.innerText !== 0 && operator === undefined && num2 === undefined && screen.innerText.length < 7) {
        num1 += number.innerText;
        num1 = parseFloat(num1, 10);
        return num1;
    } else if (num1 !== undefined && operator !== undefined && screen.innerText.length < 7) {
        num2 += number.innerText;
        num2 = num2.replace("undefined", "");
        return num2;
    }
}

function addDecimal() {
    if (Number.isInteger(num1) && operator === undefined && num2 === undefined && screen.innerText.length < 6) {
        num1 += ".";
        return num1;
    } else if (num1 !== undefined && operator !== undefined && (num2 === undefined || !num2.includes(".")) && screen.innerText.length < 6) {
        num2 = parseInt(num2);
        num2 += ".";
        num2 = num2.replace("undefined", "");
        return num2;
    }

}

function makePositiveOrNegative() {
    let num1String = num1.toString();

    if (num1String.includes("-") && num1 !== 0 && Number.isFinite(parseInt(num1)) && operator === undefined && num2 === undefined) {
        num1 = num1.replace("-", "");
        return num1;
    } else if (num1 !== 0 && Number.isFinite(parseInt(num1)) && operator === undefined && num2 === undefined) {
        num1 = "-" + num1;
        return num1;
    }

    let num2String = num2.toString();

    if (num2String.includes("-")) {
        num2 = num2.replace("-", "");
        return num2;
    } else if (num2 !== 0 && Number.isFinite(parseInt(num2)) && operator !== undefined && num1 !== undefined) {
        num2 = "-" + num2;
        return num2;
    }
}


function displayNumber() {
    if (num1 === undefined && operator === undefined && num2 === undefined) {
        screen.innerText = "";
    } else if (num1 !== undefined && operator === undefined && num2 === undefined) {
        screen.innerText = num1;
    } else if (num1 !== undefined && operator !== undefined && num2 === undefined) {
        screen.innerText = num1;
    } else if (num1 !== undefined && operator !== undefined && num2 !== undefined) {
        screen.innerText = num2;
    }
    return screen.innerText;
}


function clearEquationOneByOne() {
    let num1String = num1.toString();
    if ((screen.innerText.includes(num2) === true)) {
        num2 = num2.slice(0, -1);
        displayNumber();
        if (num2 === "") {
            num2 = undefined;
        }
    } else if ((screen.innerText.includes(num1String) === true)) {
        num1 = num1String.slice(0, -1);
        displayNumber();
    }
    return screen.innerText;
}

acButton.addEventListener("click", function () {
    num1 = 0;
    num2 = undefined;
    operator = undefined;
    displayNumber(num1, operator, num2);
});

cButton.addEventListener("click", function () {
    clearEquationOneByOne(num1, num2);
});

percentButton.addEventListener("click", function () {
    getPercent();
    displayNumber(num1, operator, num2);
});

divideButton.addEventListener("click", function () {
    operator = divideButton.innerText;
    displayNumber(num1, operator, num2);
});

sevenButton.addEventListener("click", function () {
    assignNumber(this);
    displayNumber(num1, operator, num2);
});

eightButton.addEventListener("click", function () {
    assignNumber(this);
    displayNumber(num1, operator, num2);
});

nineButton.addEventListener("click", function () {
    assignNumber(this);
    displayNumber(num1, operator, num2);
});

addButton.addEventListener("click", function () {
    operator = addButton.innerText;
    displayNumber(num1, operator, num2);

});

fourButton.addEventListener("click", function () {
    assignNumber(this);
    displayNumber(num1, operator, num2);
});

fiveButton.addEventListener("click", function () {
    assignNumber(this);
    displayNumber(num1, operator, num2);
});

sixButton.addEventListener("click", function () {
    assignNumber(this);
    displayNumber(num1, operator, num2);
});

subtractButton.addEventListener("click", function () {
    operator = subtractButton.innerText;
    displayNumber(num1, operator, num2);
});

oneButton.addEventListener("click", function () {
    assignNumber(this);
    displayNumber(num1, operator, num2);
});

twoButton.addEventListener("click", function () {
    assignNumber(this);
    displayNumber(num1, operator, num2);
});

threeButton.addEventListener("click", function () {
    assignNumber(this);
    displayNumber(num1, operator, num2);
});

multiplyButton.addEventListener("click", function () {
    operator = "*";
    displayNumber(num1, operator, num2);
});

zeroButton.addEventListener("click", function () {
    assignNumber(this);
    displayNumber(num1, operator, num2);
});

decimalButton.addEventListener("click", function () {
    addDecimal();
    displayNumber(num1, operator, num2);

});

positiveAndNegativeButton.addEventListener("click", function () {
    makePositiveOrNegative();
    displayNumber(num1, operator, num2);

});

equalButton.addEventListener("click", function () {
    num1 = operate(num1, num2, operator);
    num2 = undefined;
    operator = undefined;
    displayNumber();
});

function add() {
    let result = parseFloat(num1) + parseFloat(num2);
    return parseFloat(result.toPrecision(5));
}

function subtract() {
    let result = (parseFloat(num1 * 10) - parseFloat(num2 * 10)) / 10;
    return parseFloat(result.toPrecision(5));
}

function multiply() {
    let result = parseFloat(num1) * parseFloat(num2);
    return parseFloat(result.toPrecision(5));
}

function divide() {
    let result = parseFloat(num1) / parseFloat(num2);
    return parseFloat(result.toPrecision(5));
}

function getPercent() {
    if (num1 !== undefined && num2 === undefined) {
        num1 = num1 * .01;
        return num1;
    } else if (num1 !== undefined && num2 !== undefined) {
        num2 = num2 * .01;
        return num2;
    }
}

function operate() {
    if (num1 !== undefined && num2 !== undefined && operator === "+") {
        return add(num1, num2);
    } else if (num1 !== undefined && num2 !== undefined && operator === "-") {
        return subtract(num1, num2);
    } else if (num1 !== undefined && num2 !== undefined && operator === "*") {
        return multiply(num1, num2);
    } else if (num1 !== undefined && num2 !== undefined && operator === "/") {
        return divide(num1, num2);
    } else if (num1 !== undefined && num2 === undefined && operator === undefined) {
        return num1;
    } else {
        return "Math Error";
    }
}