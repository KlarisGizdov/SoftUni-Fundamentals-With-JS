function vacation(people, group, day) {

    let price = 0;

    if(group === "Students") {
        switch(day) {
        case "Friday" :
            price = 8.45;
            break;
        case "Saturday" :
            price = 9.80;
            break;
        case "Sunday" :
            price = 10.46;
            break;
        }
    } else if (group === "Business") {
        switch(day) {
        case "Friday" :
            price = 10.90;
            break;
        case "Saturday" :
            price = 15.60;
            break;
        case "Sunday" :
            price = 16;
            break;
        }
    } else if (group === "Regular") {
        switch(day) {
        case "Friday" :
            price = 15;
            break;
        case "Saturday" :
            price = 20;
            break;
        case "Sunday" :
            price = 22.50;
            break;
        }
    }

    let totalPrice = people * price;


    if(group === "Students" && people >= 30) {
        totalPrice *= 0.85;
    } else if (group === "Business" && people >= 100) {
        totalPrice -= price * 10
    } else if (group === "Regular" && (people >= 10 && people <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday")