function printAndSum(numStart, numEnd) {

    let sum = 0;
    let allNum = [];

    for(let i = numStart; i <= numEnd; i++) {
        allNum += [i + " "];
        sum += i;
    }

    console.log(allNum);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)