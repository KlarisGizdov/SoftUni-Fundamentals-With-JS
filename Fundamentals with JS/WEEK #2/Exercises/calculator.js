function calculator(number1, operator, number2) {

    if(operator === '+') {
        let plus = (number1+number2).toFixed(2);
        console.log(plus);
    } else if (operator === '-') {
        let minus = (number1-number2).toFixed(2);   q
        console.log(minus);
    } else if (operator === '/') {
        let divide = (number1/number2).toFixed(2);
        console.log(divide);
    } else if (operator === '*') {
        let multiply = (number1*number2).toFixed(2);
        console.log(multiply);
    }

}

calculator(5,
    '+',
    10
    )