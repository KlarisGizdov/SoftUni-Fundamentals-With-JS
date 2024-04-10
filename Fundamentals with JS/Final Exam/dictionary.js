function notebook(input) {
    let [definitionString, testWordsString, command] = input;
    let definitions = definitionString.split(" | ");
    let testWords = testWordsString.split(" | ");
    let words = {};

    // Parse definitions and store in words object
    definitions.forEach(pair => {
        let [word, definition] = pair.split(": ");
        if (!words[word]) {
            words[word] = [];
        }
        words[word].push(definition);
    });

    // Process command
    if (command === "Test") {
        testWords.forEach(word => {
            if (words[word]) {
                console.log(`${word}:`);
                words[word].forEach(definition => {
                    console.log(` -${definition}`);
                });
            }
        });
    } else if (command === "Hand Over") {
        console.log(Object.keys(words).join(" "));
    }
}

// Test cases
notebook([
    "programmer: an animal, which turns coffee into code | developer: a magician",
    "fish | domino",
    "Hand Over"
]);

notebook([
    "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"
]);

notebook([
    "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test"
]);
