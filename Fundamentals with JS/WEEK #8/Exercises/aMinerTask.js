function aMinerTask(arr) {

    let resourceQty = {};

    for(let i = 0; i < arr.length; i+= 2) {
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        if (resource in resourceQty) {
            resourceQty[resource] += qty;
        } else {
            resourceQty[resource] = qty;
        }
    }

    let entries = Object.entries(resourceQty);
    
    for (const resourceArr of entries) {
        console.log(`${resourceArr[0]} -> ${resourceArr[1]}`);
    }
} 

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]);