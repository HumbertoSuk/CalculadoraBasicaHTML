const display = document.querySelector(".display");
const operatorDisplay = document.querySelector(".operator-display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let currentOperator = "";
let shouldClearDisplay = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText.match(/[0-9]/)) {
            if (shouldClearDisplay) {
                display.textContent = "";
                shouldClearDisplay = false;
            }
            display.textContent += buttonText;
        } else if (buttonText === ".") {
            // Verificar si el punto decimal ya está en el número
            if (!display.textContent.includes(".")) {
                display.textContent += buttonText;
            }
        } else if (buttonText === "C") {
            display.textContent = "";
            currentInput = "";
            currentOperator = "";
            updateOperatorDisplay("");
        } else if (buttonText === "=") {
            if (currentOperator && currentInput) {
                const result = calculate(parseFloat(currentInput), currentOperator, parseFloat(display.textContent));
                display.textContent = result;
                currentInput = result;
                currentOperator = "";
                shouldClearDisplay = true;
                updateOperatorDisplay("");
            }
        } else {
            currentOperator = buttonText;
            currentInput = display.textContent;
            shouldClearDisplay = true;
            updateOperatorDisplay(currentOperator);
        }
    });
});

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: División por cero";
            }
        default:
            return num2;
    }
}

function updateOperatorDisplay(operator) {
    operatorDisplay.textContent = operator;
}
