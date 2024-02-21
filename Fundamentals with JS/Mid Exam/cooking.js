function cooking(arr) {

    let budget = parseFloat(arr[0]);
    let students = parseInt(arr[1]);
    let flourPrice = parseFloat(arr[2]);
    let eggPrice = parseFloat(arr[3]);
    let apronPrice = parseFloat(arr[4]);

    let freeFlour = Math.floor(students / 5);
    
    let calculatePrice = apronPrice * Math.ceil(students * 1.2) + eggPrice * 10 * (students) + flourPrice * (students - freeFlour);

    let notEnough = calculatePrice - budget;

    if(calculatePrice <= budget) {
        console.log(`Items purchased for ${calculatePrice.toFixed(2)}$.`);
    } else {
        console.log(`${notEnough.toFixed(2)}$ more needed.`);
    }

}

cooking(['946',
'20',
'12.05',
'0.42',
'27.89'])
