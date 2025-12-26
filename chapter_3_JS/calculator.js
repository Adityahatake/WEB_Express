const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let current = '0';
let operator = null;
let operand = null;
let resetNext = false;

function updateDisplay() {
    display.textContent = current;
}

function inputNumber(num) {
    if (resetNext) {
        current = num;
        resetNext = false;
    } else {
        if (current === '0') {
            current = num;
        } else {
            current += num;
        }
    }
}

function inputDot() {
    if (resetNext) {
        current = '0.';
        resetNext = false;
    } else if (!current.includes('.')) {
        current += '.';
    }
}

function clearAll() {
    current = '0';
    operator = null;
    operand = null;
    resetNext = false;
}

function inputOperator(op) {
    if (operator && !resetNext) {
        calculate();
    }
    operand = parseFloat(current);
    operator = op;
    resetNext = true;
}

function calculate() {
    if (operator === null || operand === null) return;
    let num = parseFloat(current);
    let result;
    switch (operator) {
        case '+': result = operand + num; break;
        case '−': result = operand - num; break;
        case '×': result = operand * num; break;
        case '÷': 
            if (num === 0) {
                result = 'Error';
            } else {
                result = operand / num;
            }
            break;
        default: return;
    }
    current = (result === 'Error') ? result : String(+parseFloat(result.toFixed(10)));
    operator = null;
    operand = null;
    resetNext = true;
}

function inputPercent() {
    current = String(parseFloat(current) / 100);
}

function inputPlusMinus() {
    if (current !== '0' && current !== 'Error') {
        current = current.startsWith('-') ? current.slice(1) : '-' + current;
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.textContent;
        if (btn.classList.contains('btn-ac')) {
            clearAll();
        } else if (val >= '0' && val <= '9') {
            inputNumber(val);
        } else if (val === '.') {
            inputDot();
        } else if (btn.classList.contains('btn-operator')) {
            if (val === '=') {
                calculate();
            } else {
                inputOperator(val);
            }
        } else if (val === '%') {
            inputPercent();
        } else if (val === '±') {
            inputPlusMinus();
        }
        updateDisplay();
    });
});

updateDisplay();