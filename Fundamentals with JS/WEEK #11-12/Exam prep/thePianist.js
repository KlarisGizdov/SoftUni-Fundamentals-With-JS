function thePiantist(input) {
    let pieces = {};
    let initialPiecesCount = Number(input.shift());

    for(let i = 0; i < initialPiecesCount; i++) {
        let pieceStr = input.shift();
        let [piece, pieceComposer, pieceKey] = pieceStr.split('|');
        pieces[piece] = { composer: pieceComposer, key: pieceKey };
    }

    let command = input.shift();

    while(command !== 'Stop') {
        let tokens = command.split('|');
        let action = tokens.shift();

        if(action === 'Add') {
            let [piece, pieceComposer, pieceKey] = tokens;

            if(piece in pieces) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = { composer: pieceComposer, key: pieceKey };
                console.log(`${piece} by ${pieceComposer} in ${pieceKey} added to the collection!`);
            }
        } else if (action === 'Remove') {
            let piece = tokens.shift();

            if(piece in pieces) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (action === 'ChangeKey') {
            let [piece, newKey] = tokens;

            if(piece in pieces) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        command = input.shift();
    }

    let entries = Object.entries(pieces);

    for(let [pieceName, pieceInfo] of entries) {
        console.log(`${pieceName} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`);
    }
}

thePiantist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
]);
