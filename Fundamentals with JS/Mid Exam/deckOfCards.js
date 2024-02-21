function cardDeckManager(input) {
    let cards = input.shift().split(", ");
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [command, cardName, value] = input[i].split(", ");
        let index;

        switch (command) {
            case "Add":
                if (!cards.includes(cardName)) {
                    cards.push(cardName);
                    console.log("Card successfully added");
                } else {
                    console.log("Card is already in the deck");
                }
                break;

            case "Remove":
                if (cards.includes(cardName)) {
                    cards = cards.filter(card => card !== cardName);
                    console.log("Card successfully removed");
                } else {
                    console.log("Card not found");
                }
                break;

            case "Remove At":
                index = Number(cardName);
                if (index >= 0 && index < cards.length) {
                    cards.splice(index, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Index out of range");
                }
                break;

            case "Insert":
                index = Number(cardName);
                if (index >= 0 && index < cards.length) {
                    if (!cards.includes(value)) {
                        cards.splice(index, 0, value);
                        console.log("Card successfully added");
                    } else {
                        console.log("Card is already added");
                    }
                } else {
                    console.log("Index out of range");
                }
                break;
        }
    }

    console.log(cards.join(", "));
}

cardDeckManager(["Ace of Diamonds, Queen of Hearts, King of Clubs",
"3",
"Add, King of Diamonds",
"Insert, 2, Jack of Spades",
"Remove, Ace of Diamonds"])




