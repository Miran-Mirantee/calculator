let num1;
let num2;
let temp = [];
let num1Rdy = false;
let num2Rdy = false;
let operator;
let result;

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

// num1 = the first number to use with operator
// num2 = the secode number to use with operator
// operator = the operator to calculate the result
function operate(num1, num2, operator) {
    num2 = parseInt(temp.join(''));
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
    display.textContent = num;
}


const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', () => {
    // check if the number#1 and number#2 is ready to calculate then calculate
    if (num1Rdy && num2Rdy) 
        num1 = operate(num1, num2, operator);
    else
        console.log(`enter num2 first`)
});

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
    // check if number#1 is not ready then assign operator as add and ready number#1
    if (!num1Rdy && num1) {
        temp = [];
        operator = add;
        num1Rdy = true;
    }
    // check if the number#1 but number#2 is NOT ready then assign operator as add
    else if (num1Rdy && !num2Rdy) {
        operator = add;
    }
    // check if the number#1 and number#2 is ready to calculate then calculate using 
    // the previous operator and assign new operator as add
    else if (num1Rdy && num2Rdy) {
        num1 = operate(num1, num2, operator);
        operator = add;
    }
}); 

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => {
    // check if number#1 is not ready then assign operator as subtract and ready number#1
    if (!num1Rdy && num1) {
        temp = [];
        operator = subtract;
        num1Rdy = true;
    }
    // check if the number#1 but number#2 is NOT ready then assign operator as subtract
    else if (num1Rdy && !num2Rdy) {
        operator = subtract;
    }
    // check if the number#1 and number#2 is ready to calculate then calculate using 
    // the previous operator and assign new operator as subtract
    else if (num1Rdy && num2Rdy) {
        num1 = operate(num1, num2, operator);
        operator = subtract;
    }
});

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', () => {
    // check if number#1 is not ready then assign operator as multiply and ready number#1
    if (!num1Rdy && num1) {
        temp = [];
        operator = multiply;
        num1Rdy = true;
    }
    // check if the number#1 but number#2 is NOT ready then assign operator as multiply
    else if (num1Rdy && !num2Rdy) {
        operator = multiply;
    }
    // check if the number#1 and number#2 is ready to calculate then calculate using 
    // the previous operator and assign new operator as multiply
    else if (num1Rdy && num2Rdy) {
        num1 = operate(num1, num2, operator);
        operator = multiply;
    }
});

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => {
    // check if number#1 is not ready then assign operator as divide and ready number#1
    if (!num1Rdy && num1) {
        temp = [];
        operator = divide;
        num1Rdy = true;
    }
    // check if the number#1 but number#2 is NOT ready then assign operator as divide
    else if (num1Rdy && !num2Rdy) {
        operator = divide;
    }
    // check if the number#1 and number#2 is ready to calculate then calculate using 
    // the previous operator and assign new operator as divide
    else if (num1Rdy && num2Rdy) {
        num1 = operate(num1, num2, operator);
        operator = divide;
    }
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    // Reset everything
    num1 = undefined;
    num2 = undefined;
    num1Rdy = false;
    num2Rdy = false;
    showDisplay('');
});

const backspaceBtn = document.querySelector('.backspace');
backspaceBtn.addEventListener('click', () => {
    // check if number#1 is ready or not
    if (!num1Rdy) {
        temp.pop();
        num1 = parseInt(temp.join(''));
        if (!num1)
            showDisplay('');
        else
            showDisplay(num1);
    }
    // check if number#1 is ready then backspace number#2 instead
    if (num1Rdy) {
        temp.pop();
        num2 = parseInt(temp.join(''));
        num2Rdy = true;
        if (!num2) {
            showDisplay('');
            num2Rdy = false;
        }
        else
            showDisplay(num2);
    }
});

const numbers = document.querySelectorAll('.number');
for (const number of numbers) {
    number.addEventListener('click', () => {
        // check if number#1 is ready or not
        if (!num1Rdy) {
            temp.push(number.textContent);
            num1 = parseInt(temp.join(''));
            showDisplay(parseInt(temp.join('')));
        }
        // check if number#1 is ready then assign input into number#2 instead
        if (num1Rdy) {
            temp.push(number.textContent);
            num2 = parseInt(temp.join(''));
            num2Rdy = true;
            showDisplay(parseInt(temp.join('')));
        }
    });
}
