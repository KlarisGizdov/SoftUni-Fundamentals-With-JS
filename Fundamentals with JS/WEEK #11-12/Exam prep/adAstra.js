function adAstra(input) {

    let pattern = /([\|#])(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/gm;
    let exec = pattern.exec(input);
    let totalKcal = 0;
    let productsStore = [];
    let kCalPerDay = 2000;

    while(exec) {
        let name = exec.groups.name;
        let date = exec.groups.date;
        let kcal = exec.groups.kcal;

        totalKcal += Number(kcal);

        let currentProductData = `Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`;

        productsStore.push(currentProductData);

        exec = pattern.exec(input);

    }

    let days = Math.floor(totalKcal / kCalPerDay);

    console.log(`You have food to last you for: ${days} days!`);

    productsStore.forEach(data => console.log(data));

}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )