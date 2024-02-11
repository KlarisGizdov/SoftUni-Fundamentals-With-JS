function firstAndLastKNum(input) {

    let firstNum = input.shift();
    let firstEl = input.slice(0, firstNum);
    let lastEl = input.slice(-firstNum);

    console.log(firstEl.join(' '));
    console.log(lastEl.join(' '));

}
firstAndLastKNum([2,
                  7, 8, 9]);
