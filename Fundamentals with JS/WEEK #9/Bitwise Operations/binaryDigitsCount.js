function countDigits(number, numsIn) {

    let count = 0;
    while(number > 0) {
        let remainder = number % 2;
        if (remainder == numsIn) {
            count ++;
        }
        number = Math.floor(number / 2);
    }

    console.log(count);
} 
countDigits(20, 0)