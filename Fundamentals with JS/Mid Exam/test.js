function calculateBudget(arr) {
    let budget = parseFloat(arr[0]);
    let students = parseInt(arr[1]);
    let flourPrice = parseFloat(arr[2]);
    let eggPrice = parseFloat(arr[3]);
    let apronPrice = parseFloat(arr[4]);

    let freeFlour = Math.floor(students / 5);
    let calculatePrice = apronPrice * (students + Math.ceil(students * 0.2)) +
                    eggPrice * 10 * students +
                    flourPrice * (students - freeFlour);

    calculatePrice = calculatePrice.toFixed(2);

    if (calculatePrice <= budget) {
        console.log(`Items purchased for ${calculatePrice}$.`);
    } else {
        let neededMoney = (calculatePrice - budget).toFixed(2);
        console.log(`${neededMoney}$ more needed.`);
    }
}

calculateBudget((['946',
'20',
'12.05',
'0.42',
'27.89'])
)