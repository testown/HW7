let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
let divide = (firstNumber, secondNumber) => firstNumber / secondNumber;
let plus = (firstNumber, secondNumber) => firstNumber + secondNumber;
let minus = (firstNumber, secondNumber) => firstNumber - secondNumber;

const askNumbersOperator = () => {
    const number1 = +prompt('Enter first number:');
    const operation = prompt('Enter operation:');
    const number2 = +prompt('Enter second number:');
    let result;

    if (Number.isInteger(number1) && Number.isInteger(number2) && number2 !== 0) { // делить на ноль нельзя
        if (operation === '+') {
            result = plus(number1, number2);
        } else if (operation === '-') {
            result = minus(number1, number2);
        } else if (operation === '*') {
            result = multiply(number1, number2);
        } else if (operation === '/') {
            result = divide(number1, number2);
        } else {
            result = 'No operation, or operation incorrect!';
        }
        return result;
    } else {
        return 'Number 1 or number 2 is not a number!';
    }
}

alert(askNumbersOperator());
