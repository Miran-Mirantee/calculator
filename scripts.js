let num1;
let num2;
let temp = [];
let num1Rdy = false;
let num2Rdy = false;
let operator;
let result;

const numbers = document.querySelectorAll('.btn.number');
for (const number of numbers) {
    number.addEventListener('click', () => {
        if (!num1Rdy) {
            temp.push(number.textContent);
            num1 = parseInt(temp.join(''));
            showDisplay(parseInt(temp.join('')));
        }
        if (num1Rdy) {
            temp.push(number.textContent);
            num2 = parseInt(temp.join(''));
            num2Rdy = true;
            showDisplay(parseInt(temp.join('')));
        }
    });
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

function operate(num1, num2, operator) {
    num2 = parseInt(temp.join(''));
    temp = [];
    let result = operator(num1, num2);
    showDisplay(result);
    num2Rdy = false;
    return result;
}

function showDisplay(num) {
    const display = document.querySelector('.display');
    display.textContent = num;
}


const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', () => {
    if (num1Rdy && num2Rdy) {
        num1 = operate(num1, num2, operator);
    }
    else
        console.log(`enter num2 first`)
});

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
    if (!num1Rdy) {
        temp = [];
        operator = add;
        num1Rdy = true;
    }
    else if (num1Rdy && !num2Rdy) {
        operator = add;
    }
    else if (num1Rdy && num2Rdy) {
        num1 = operate(num1, num2, operator);
        operator = add;
    }
}); 

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => {
    if (!num1Rdy) {
        temp = [];
        operator = subtract;
        num1Rdy = true;
    }
    else if (num1Rdy && !num2Rdy) {
        operator = subtract;
    }
    else if (num1Rdy && num2Rdy) {
        num1 = operate(num1, num2, operator);
        operator = subtract;
    }
});