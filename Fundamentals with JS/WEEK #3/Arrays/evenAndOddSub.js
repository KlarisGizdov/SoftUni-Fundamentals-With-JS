function evenAndOddSub(array) {

    let sumEven = 0;
    let sumOdd = 0;
    let difference = 0;

    for (let number of array) {
        number = Number(number);

        if (number % 2 === 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }

    difference = sumEven - sumOdd;
    console.log(difference);
}

evenAndOddSub([1, 2, 3, 4, 5, 6]);
