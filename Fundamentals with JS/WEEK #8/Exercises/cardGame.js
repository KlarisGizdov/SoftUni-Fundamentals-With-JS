function cardGame(input) {
    let players = {};

    for (const line of input) {
        let [name, cards] = line.split(': ');
        cards = cards.split(', ');

        if (!players.hasOwnProperty(name)) {
            players[name] = [];
        }

        players[name] = players[name].concat(cards);
        players[name] = Array.from(new Set(players[name])); 
    }

    for (const player in players) {
        let totalValue = 0;

        for (const card of players[player]) {
            let [power, type] = card.split('');
            let powerValue = 0;

            if (isNaN(power)) {
                switch (power) {
                    case 'J': powerValue = 11; break;
                    case 'Q': powerValue = 12; break;
                    case 'K': powerValue = 13; break;
                    case 'A': powerValue = 14; break;
                }
            } else {
                powerValue = Number(power);
            }

            let typeMultiplier = {
                'S': 4,
                'H': 3,
                'D': 2,
                'C': 1
            };

            totalValue += powerValue * typeMultiplier[type];
        }

        console.log(`${player}: ${totalValue}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )
