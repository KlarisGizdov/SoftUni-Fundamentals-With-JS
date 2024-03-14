function legendaryFarming(input) {

    let arr = input.split(' ');

    let keyMaterialsQtys = { shards: 0, fragments: 0, motes: 0 };
    let junkMaterialsQtys = {};

    let legendaries = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };

    for(let i = 0; i < arr.length; i += 2) {
        let qty = Number(arr[i]);
        let material = arr[i + 1].toLowerCase();

        if(material in keyMaterialsQtys) {
            keyMaterialsQtys[material] += qty;
            if(keyMaterialsQtys[material] >= 250) {
                let legendary = legendaries[material];
                console.log(`${legendary} obtained!`);
                keyMaterialsQtys[material] -= 250;
                break;
            }
        } else {
            if(material in junkMaterialsQtys) {
                junkMaterialsQtys[material] += qty;
            } else {
                junkMaterialsQtys[material] = qty;
            }
        }
    }

    let keyEntries = Object.entries(keyMaterialsQtys).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let junkEntries = Object.entries(junkMaterialsQtys).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [keyMaterial, qty] of keyEntries) {
        console.log(`${keyMaterial}: ${qty}`);
    }

    for (let [junkMaterial, qty] of junkEntries) {
        console.log(`${junkMaterial}: ${qty}`);
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')