let display = document.getElementById('displayBar');

function clearDisplay() {
    display.value = '';
}

function clearLast() {
    display.value = display.value.slice(0, -1);
}

function appendOperator(operator) {
    display.value += operator;
}

function appendDigit(value) {
    display.value += value;
}

function calculate() {

    try {
        let expression = displayBar.value.replace(/%/g, '/100');
        displayBar.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}