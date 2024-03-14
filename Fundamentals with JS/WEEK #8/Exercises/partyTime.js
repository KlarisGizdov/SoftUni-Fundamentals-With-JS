function partyTime(guests) {
    let vipList = {};
    let regularList = {};
    let partyStarted = false;

    for (const guest of guests) {
        if (guest === 'PARTY') {
            partyStarted = true;
            continue;
        }

        if (!partyStarted) {
            if (guest[0] >= '0' && guest[0] <= '9') {
                vipList[guest] = true;
            } else {
                regularList[guest] = true;
            }
        } else {
            if (guest[0] >= '0' && guest[0] <= '9') {
                vipList[guest] = false;
            } else {
                regularList[guest] = false;
            }
        }
    }

    let notComing = [];

    for (const vipGuest in vipList) {
        if (vipList[vipGuest] === true) {
            notComing.push(vipGuest);
        }
    }

    for (const regularGuest in regularList) {
        if (regularList[regularGuest] === true) {
            notComing.push(regularGuest);
        }
    }

    console.log(notComing.length);
    notComing.forEach(guest => console.log(guest));
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)
