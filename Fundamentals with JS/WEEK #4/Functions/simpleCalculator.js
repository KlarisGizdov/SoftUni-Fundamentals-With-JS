function simpleCalc(firstNum, secondNum, operator) {

    switch(operator) {
        case 'multiply':
            let multiply = (a, b) => a * b;
            console.log(multiply(firstNum, secondNum));
            break;
        case 'divide':
            let divide = (a, b) => a / b;
            console.log(divide(firstNum, secondNum));
            break;
        case 'add':
            let add = (a, b) => a + b;
            console.log(add(firstNum, secondNum));
            break;
        case 'subtract':
            let subtract = (a, b) => a - b;
            console.log(subtract(firstNum, secondNum));
            break;
    }

}

simpleCalc(5, 5, "multiply");
