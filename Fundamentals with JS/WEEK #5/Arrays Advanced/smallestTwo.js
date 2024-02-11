function smallestTwoNums(arr) {

    let sorted = arr.sort((a, b) => {
        return a - b;
    });

    let finalResult = sorted.slice(0, 2);

    console.log(finalResult.join(' '));
}
smallestTwoNums([30, 15, 50, 5])