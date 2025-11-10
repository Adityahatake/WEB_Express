// tempreture_convertor.js
// Simple temperature converter for the provided HTML

(function () {
    const form = document.getElementById('converterForm');
    const input = document.getElementById('value');
    const fromSel = document.getElementById('from');
    const toSel = document.getElementById('to');
    const swapBtn = document.getElementById('swap');
    const clearBtn = document.getElementById('clear');
    const resultEl = document.getElementById('result');

    const SYMBOL = { C: '°C', F: '°F', K: 'K' };

    function formatNumber(n) {
        if (!Number.isFinite(n)) return 'NaN';
        // show up to 2 decimal places, drop trailing zeros
        return +n.toFixed(2).toString();
    }

    function convertValue(value, from, to) {
        if (from === to) return value;
        // convert input to Celsius as an intermediate
        let c;
        if (from === 'C') c = value;
        else if (from === 'F') c = (value - 32) * 5 / 9;
        else if (from === 'K') c = value - 273.15;
        else throw new Error('Unknown unit: ' + from);

        if (to === 'C') return c;
        if (to === 'F') return c * 9 / 5 + 32;
        if (to === 'K') return c + 273.15;
        throw new Error('Unknown unit: ' + to);
    }

    function showMessage(msg, isError = false) {
        resultEl.textContent = msg;
        resultEl.style.color = isError ? 'crimson' : '';
    }

    function handleConvert(e) {
        if (e) e.preventDefault();
        const raw = input.value;
        const from = fromSel.value;
        const to = toSel.value;

        const value = parseFloat(raw);
        if (Number.isNaN(value)) {
            showMessage('Please enter a valid number.', true);
            return;
        }

        // Validate Kelvin input (cannot be negative)
        if (from === 'K' && value < 0) {
            showMessage('Kelvin cannot be negative.', true);
            return;
        }

        const result = convertValue(value, from, to);

        // Validate resulting Kelvin (cannot be negative)
        if (to === 'K' && result < 0) {
            showMessage('Result is below absolute zero (invalid).', true);
            return;
        }

        showMessage(`${formatNumber(value)} ${SYMBOL[from]} = ${formatNumber(result)} ${SYMBOL[to]}`);
    }

    function handleSwap() {
        const a = fromSel.value;
        const b = toSel.value;
        fromSel.value = b;
        toSel.value = a;

        // if there is an input value, re-run conversion
        if (input.value.trim() !== '') {
            handleConvert();
        } else {
            resultEl.textContent = '';
        }
        input.focus();
    }

    function handleClear() {
        input.value = '';
        fromSel.value = 'C';
        toSel.value = 'F';
        resultEl.textContent = '';
        input.focus();
    }

    form.addEventListener('submit', handleConvert);
    swapBtn.addEventListener('click', handleSwap);
    clearBtn.addEventListener('click', handleClear);

    // Optional: convert on Enter in the number input (form submit already does this)
    // Accessibility: keep aria-live updated (the HTML already set aria-live)
})();