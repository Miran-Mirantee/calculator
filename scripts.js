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
    return operator(num1, num2);
}

function showDisplay(num) {
    const display = document.querySelector('.display');
    display.textContent = num;
}


const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', () => {
    if (num1Rdy && num2Rdy) {
        num2 = parseInt(temp.join(''));
        temp = [];
        console.log(`num2: ${num2}`);
        result = operate(num1, num2, operator);
        console.log(result);
        showDisplay(result);
        num1 = result;
        num2Rdy = false;
    }
    else
        console.log(`enter num2 first`)
});

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
    if (!num1Rdy) {
        temp = [];
        // console.log(`num1: ${num1}`);;
        operator = add;
        num1Rdy = true;
    }
    else if (num1Rdy && !num2Rdy) {
        // console.log(`num2: ${num2}`);
        console.log(`something was here`);
        operator = add;
    }
});