function theLift(input) {

    let passengers = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);

    for(let index in wagons) {
        let curWagon = wagons[index];

        while(curWagon !== 4) {
            curWagon++;
            passengers--;
            if(passengers === 0) {
                break;
            }
        }
        wagons[index] = curWagon;
        if(passengers === 0) {
            break;
        }
    }

    let isFull =  wagons.filter(w => w !== 4);

    if(passengers === 0 && isFull.length === 0) {
        console.log(wagons.join(' '));
    } else if(isFull.length !== 0) {
        console.log("The lift has empty spots!");
        console.log(wagons.join(' '));
    } else {
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
        console.log(wagons.join(' '));
    }
}
theLift([
    "15",
    "0 0 0 0 0"
   ]
   )