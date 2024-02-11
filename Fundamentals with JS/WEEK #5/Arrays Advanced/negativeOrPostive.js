function negativeOrPositive(arr) {

    let numbers = arr.map(Number);
    let newArr = [];

    for(let num of numbers) {
        if(num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }

    for(let num of newArr) {
        console.log(num);
    }
}

negativeOrPositive(['7', '-2', '8', '9']);