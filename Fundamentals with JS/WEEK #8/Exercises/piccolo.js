function parkingLotManagement(logs) {
    let parkingLot = {};

    for (const log of logs) {
        let [direction, carNumber] = log.split(', ');

        if (direction === 'IN') {
            parkingLot[carNumber] = true;
        } else if (direction === 'OUT') {
            delete parkingLot[carNumber];
        }
    }

    let sortedCarNumbers = Object.keys(parkingLot).sort();

    if (sortedCarNumbers.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        sortedCarNumbers.forEach(carNumber => console.log(carNumber));
    }
}
parkingLotManagement(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
