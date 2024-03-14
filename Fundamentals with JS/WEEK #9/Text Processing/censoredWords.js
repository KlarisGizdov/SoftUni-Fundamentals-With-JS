function censoredWords(sentence, hiddenWord) {

    while(sentence.includes(hiddenWord)) {
        sentence = sentence.replace(hiddenWord, '*'.repeat(hiddenWord.length));
    }

    console.log(sentence);
    
}

censoredWords('A small sentence with some words', 'small')