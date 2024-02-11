function processOddPositions(arr) {
  
    let numbers = arr.shift().split(' ').map(Number);

    for(let row of arr) {
        let[command, firstNum, secondNum] = row.split(' ');

        switch(command) {
            case 'Add':
                numbers.push(Number(firstNum));
                break;
            case 'Remove':
                numbers = numbers.filter((num) => num != firstNum);
                break;
            case 'RemoveAt':
                numbers.splice(Number(firstNum), 1);
                break;
            case 'Insert':
                numbers.splice(Number(secondNum), 0, Number(firstNum));
                break;
        }
    }
    console.log(numbers.join(' '));
}

processOddPositions([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
