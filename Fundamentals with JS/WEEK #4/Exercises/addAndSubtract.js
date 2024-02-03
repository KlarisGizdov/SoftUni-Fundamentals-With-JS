function addAndSubtract(num1, num2, num3) {

    function sum(first, second) {
        return first + second;
    }

    let sumResult = sum(num1, num2);
    let subtract = sumResult - num3;


    console.log(subtract);
}
addAndSubtract(23,
    6,
    10
    )