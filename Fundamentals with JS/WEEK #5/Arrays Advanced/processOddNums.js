function processOddPositions(arr) {
    
    let resultArr = [];

    for(let i = 1; i < arr.length; i += 2) {
        resultArr.push(arr[i] * 2);
    }

    console.log(resultArr.reverse().join(' '));
}

processOddPositions([10, 15, 20, 25])

