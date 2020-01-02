const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = getUserNumber();
    const calcDescription = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
}

function subtract() {
    const enteredNumber = getUserNumber();
    const calcDescription = `${currentResult} - ${userInput.value}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = getUserNumber();
    const calcDescription = `${currentResult} * ${userInput.value}`;
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calcDescription);
 }

function divide() {
    const enteredNumber = getUserNumber();
    const calcDescription = `${currentResult} / ${userInput.value}`;
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);

