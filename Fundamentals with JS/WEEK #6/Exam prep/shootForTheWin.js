function shootForTheWin(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let count = 0;

    for (let command of arr) {
        if (command === "End") {
            break;
        }

        let indexOfTarget = Number(command);

        if (indexOfTarget >= 0 && indexOfTarget < targets.length && targets[indexOfTarget] !== -1) {
            let curTarget = targets[indexOfTarget];

            for (let i = 0; i < targets.length; i++) {
                if (i !== indexOfTarget && targets[i] !== -1) {
                    if (targets[i] > curTarget) {
                        targets[i] -= curTarget;
                    } else {
                        targets[i] += curTarget;
                    }
                }
            }

            targets[indexOfTarget] = -1;
            count++;
        }
    }
    
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
