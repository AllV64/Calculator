add = (number1, number2) => number1 + number2;
subtract = (number1, number2) => number1 - number2;
multiply = (number1, number2) => number1 * number2;
devide = (number1, number2) => number1 / number2;

firstNumber = (number1) => number1;
operator = (operator) => operator;
secondNumber = (number2) => number2;

operate = ((number1, operator, number2) => {
    if (operator === "+"){
        return add(number1, number2);
    } else if (operator === "-"){
        return subtract(number1, number2)
    } else if (operator === "*"){
        return multiply(number1, number2)
    } else {
        return devide(number1, number2)
    }
})