let num1;
let num2;
let temp = [];
let num1Rdy = false;
let num2Rdy = false;
let negateOn = false;
let dotUsed = false;
let operator;
let maxNum = 13; //14

function negate(num) {
    return num * -1;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// reset the calculator
function reset() {
    num1 = undefined;
    num2 = undefined;
    num1Rdy = false;
    num2Rdy = false;
    negateOn = false;
    dotUsed = false;
    temp = [];
    showDisplay('');
}

// num1 = the first number to use with operator
// num2 = the secode number to use with operator
// operator = the operator to calculate the result
function operate(num1, num2, operator) {
    if (num2 === 0 && operator == divide) {
        num1Rdy = false;
        num2Rdy = false;
        return showDisplay(`NO`);
    }
    temp = [];
    let result = operator(num1, num2);
    showDisplay(result);

    num2Rdy = false;
    return result;
}

// display result
// num = text to display (usually it's for number)
function showDisplay(num) {
    const display = document.querySelector('.display');
    // in case there is dot in num, display dot
    if (dotUsed) {
        display.textContent = num;
        return;
    }
    let numToDisplay = toFixed(num, 7);
    // in case num is a "blank" number, display nothing
    if (num === "") {
        display.textContent = ``;
        return;
    }
    // limit number to display
    if (numToDisplay.toString().length > 10) {
        display.textContent = parseFloat(numToDisplay).toExponential(8);
    }
    else {
        display.textContent = numToDisplay;
    }
}

// clear temp for number#2
function rdyForNum2() {
    temp = [];
    num1Rdy = true;
    negateOn = false;
    dotUsed = false;
}

// Get number from buttons
// num = number on the button
function getNum(num) {
    if (temp.length <= maxNum) {
        // preventing the user from entering multiple 0 before decimal
        if (temp[0] != 0 || num != 0 && !dotUsed) {
            temp.push(num);
            let result = parseFloat(temp.join(''));
            if (negateOn) {
                result = negate(result);
                showDisplay(`-${temp.join('')}`);
            }
            else {
                showDisplay(temp.join(''));
            }
            return result;
        }
    }
    else {
        let result = parseFloat(temp.join(''));
        if (negateOn) 
            return negate(result);
        else
            return result;
    }
}

// to fix floating number problem
function toFixed(value, precision) {
    var power = Math.pow(10, precision || 0);
    return String(Math.round(value * power) / power);
}

const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', () => {
    // check if the number#1 and number#2 is ready to calculate then calculate
    if (num1Rdy && num2Rdy) {
        negateOn = false;
        dotUsed = false;
        num1 = operate(num1, num2, operator);
    }
    else
        console.log(`enter num2 first`)
});

const negateBtn = document.querySelector('.negate');
negateBtn.addEventListener('click', () => {
    if (!num1Rdy && num1 != undefined) {
        num1 = negate(num1);
        negateOn = !negateOn;
        showDisplay(num1);
    }
    else if (num1Rdy && !num2Rdy) {
        num1 = negate(num1);
        showDisplay(num1);
    }
    else if (num1Rdy && num2Rdy) {
        num2 = negate(num2);
        negateOn = !negateOn;
        showDisplay(num2);
    }
});

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
    // check if number#1 is not ready then assign operator as add and ready number#1
    if (!num1Rdy && num1 != undefined) {
        rdyForNum2();
        operator = add;
    }
    // check if the number#1 but number#2 is NOT ready then assign operator as add
    // in case the user want to change the operator 
    else if (num1Rdy && !num2Rdy) {
        operator = add;
        dotUsed = false;
    }
    // check if the number#1 and number#2 is ready to calculate then calculate using 
    // the previous operator and assign new operator as add
    else if (num1Rdy && num2Rdy) {
        num1 = operate(num1, num2, operator);
        operator = add;
        dotUsed = false;
    }
}); 

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => {
    // check if number#1 is not ready then assign operator as subtract and ready number#1
    if (!num1Rdy && num1) {
        rdyForNum2();
        operator = subtract;
    }
    // check if the number#1 but number#2 is NOT ready then assign operator as subtract
    // in case the user want to change the operator 
    else if (num1Rdy && !num2Rdy) {
        operator = subtract;
        dotUsed = false;
    }
    // check if the number#1 and number#2 is ready to calculate then calculate using 
    // the previous operator and assign new operator as subtract
    else if (num1Rdy && num2Rdy) {
        num1 = operate(num1, num2, operator);
        operator = subtract;
        dotUsed = false;
    }
});

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', () => {
    // check if number#1 is not ready then assign operator as multiply and ready number#1
    if (!num1Rdy && num1 != undefined) {
        rdyForNum2();
        operator = multiply;
    }
    // check if the number#1 but number#2 is NOT ready then assign operator as multiply
    // in case the user want to change the operator 
    else if (num1Rdy && !num2Rdy) {
        operator = multiply;
        dotUsed = false;
    }
    // check if the number#1 and number#2 is ready to calculate then calculate using 
    // the previous operator and assign new operator as multiply
    else if (num1Rdy && num2Rdy) {
        num1 = operate(num1, num2, operator);
        operator = multiply;
        dotUsed = false;
    }
});

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => {
    // check if number#1 is not ready then assign operator as divide and ready number#1
    if (!num1Rdy && num1 != undefined) {
        rdyForNum2();
        operator = divide;
    }
    // check if the number#1 but number#2 is NOT ready then assign operator as divide
    // in case the user want to change the operator 
    else if (num1Rdy && !num2Rdy) {
        operator = divide;
        dotUsed = false;
    }
    // check if the number#1 and number#2 is ready to calculate then calculate using 
    // the previous operator and assign new operator as divide
    else if (num1Rdy && num2Rdy) {
        num1 = operate(num1, num2, operator);
        operator = divide;
        dotUsed = false;
    }
});

const dotBtn = document.querySelector('.dot');
dotBtn.addEventListener('click', () => {
    if (!dotUsed && temp.length <= maxNum) {
        temp.push(dotBtn.textContent);
        dotUsed = true;
        showDisplay(temp.join(''));
    }
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    // Reset everything
    reset();
});

const backspaceBtn = document.querySelector('.backspace');
backspaceBtn.addEventListener('click', () => {
    // check if number#1 is ready or not
    if (!num1Rdy) {
        if (temp.pop() === '.') {
            dotUsed = false;
        }
        num1 = parseFloat(temp.join(''));
        if (negateOn) {
            num1 = negate(num1);
            showDisplay(`-${temp.join('')}`);
        }
        else {
            showDisplay(temp.join(''));
        }
    }
    // check if number#1 and #2 is ready and has value on num2 
    // then backspace number#2 
    // to prevent user from backspace the result

    // if (num1Rdy && num2Rdy && num2 != undefined) { in case things broke
    if (num1Rdy && temp.length > 0) {
        if (temp.pop() === '.') {
            dotUsed = false;
        }
        num2 = parseFloat(temp.join(''));
        num2Rdy = true;
        if (negateOn) {
            num2 = negate(num2);
            showDisplay(`-${temp.join('')}`);
        }
        else {
            if (!num2) {
                num2Rdy = false;
            }
            showDisplay(temp.join(''));
        }
    }
});

const numbers = document.querySelectorAll('.operand');
for (const number of numbers) {
    number.addEventListener('click', () => {
        // check if number#1 is ready or not
        if (!num1Rdy) {
            num1 = getNum(number.textContent);
        }
        // check if number#1 is ready then assign input into number#2 instead
        if (num1Rdy) {
            num2 = getNum(number.textContent);
            num2Rdy = true;
        }
    });
}
