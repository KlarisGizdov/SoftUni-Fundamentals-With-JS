function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let shieldBrakes = 0;

    for(let curLostFight = 1; curLostFight <= lostFights; curLostFight++) {

        if(curLostFight % 2 === 0) {
            expenses += helmetPrice;
        }

        if(curLostFight % 3 === 0) {
            expenses += swordPrice;
        }
        
        if(curLostFight % 6 === 0)  {
            expenses += shieldPrice
            shieldBrakes++
        }

        if(shieldBrakes === 2) {
            expenses += armorPrice;
            shieldBrakes = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}
gladiatorExpenses(7, 2, 3, 4, 5)