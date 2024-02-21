function arrayModifier(arr) {

    let numbers = arr.shift().split(' ').map(Number);
    
    for(command of arr) {
        let [action, indxOne, indxTwo] = command.split(' ');

        switch(action) {
            case 'swap':
                let tempIndx = numbers[indxOne];
                numbers[indxOne] = numbers[indxTwo];
                numbers[indxTwo] = tempIndx;
                break;
            case 'multiply':
                let multipliedIndx = numbers[indxOne] * numbers[indxTwo];
                numbers[indxOne] = multipliedIndx;
                break;
            case 'decrease':
                numbers = numbers.map(n => n - 1);
                break;
            case 'end':
                break;
        }
    }

    console.log(numbers.join(', '));

}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])