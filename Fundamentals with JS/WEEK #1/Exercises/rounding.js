function round(number, decimal) {

    if (decimal > 15) {
        decimal = 15;
    }

    let fixedNum = number.toFixed(decimal);

    console.log(parseFloat(fixedNum));
}

round(3.1415926535897932384626433832795, 2)