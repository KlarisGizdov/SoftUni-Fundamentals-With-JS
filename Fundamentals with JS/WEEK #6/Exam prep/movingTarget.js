function movingTarget(arr) {
    
    let targetSequence = arr.shift().split(' ').map(Number);


    for (let command of arr) {
        if (command === "End") {
          break;
        }

        let [action, index, value] = command.split(' ');

        index = Number(index);
        value = Number(value);

        switch(action) {
            case 'Shoot':
                if(index >= 0 && index < targetSequence.length) {
                    targetSequence[index] -= value;
                    if(targetSequence[index] <= 0) {
                        targetSequence.splice(index, 1);
                    }
                }
                break;
            case 'Add':
                if(index >= 0 && index < targetSequence.length) {
                    targetSequence.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case 'Strike':
                if(index - value >= 0 && index + value <= targetSequence.length) {
                    targetSequence.splice(index - value, 2 * value + 1);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
    }

    console.log(targetSequence.join('|'));
}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]);
                