function inventory(arr) {

    let heroes = [];

    for(let heroInfo of arr) {
        let [name, level, items] = heroInfo.split(' / ');
        heroLevel = Number(level);

        let heroObject = {
            hero: name,
            level: level,
            items: items
        };

        heroes.push(heroObject);

    }

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for(let heroObj of sortedHeroes) {
        console.log(`Hero: ${heroObj.hero}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items}`);
    }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )