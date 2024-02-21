function blackFlag(arr) {
    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);

    let totalPlunder = 0;

    for (let day = 1; day <= days; day++) {
        totalPlunder += dailyPlunder;

        if (day % 3 === 0) {
            totalPlunder += (dailyPlunder * 0.5);
        }

        if (day % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let leftPercentage = (totalPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${leftPercentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5", "40", "100"]);
