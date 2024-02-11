function sumFirstAndLast(input) {

    let sum = 0;
    let numbers = input.map(Number);

    let firstNum = numbers[0];
    let lastNum = numbers[numbers.length - 1];

    sum = firstNum + lastNum;

    console.log(sum);

}
sumFirstAndLast(['20', '30', '40'])