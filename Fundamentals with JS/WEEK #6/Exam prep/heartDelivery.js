function heartDelivery(arr) {

    let neighbourhood = arr.shift().split('@').map(Number);

    let nextLine = arr.shift();
    let total = 0;

    while(nextLine !== 'Love!') {
        let result = nextLine.split(' ');
        total += Number(result[1]);

        if(total > neighbourhood.length - 1) {
            total = 0;
        }

        if(neighbourhood[total] === 0) {
            console.log(`Place ${total} already had Valentine's day.`);
        } else {
            neighbourhood[total] = neighbourhood[total] - 2;
            if(neighbourhood[total] === 0) {
                console.log(`Place ${total} has Valentine's day.`);                
            }
        }
        nextLine = arr.shift();
    }

    console.log(`Cupid's last position was ${total}.`);

    let resArr = [];
    let flagRes = true;
    
    for(let element of neighbourhood) {
        if(element !== 0) {
            flagRes = false;
            resArr.push(element);
        }
    }

    if(flagRes) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${resArr.length} places.`);
    }

}
heartDelivery(["10@10@10@2",
                "Jump 1",
                "Jump 2",
                "Love!"])
