function stringSubstring(word, sentence) {

    let textWords = sentence.toLowerCase().split(' ');
    
    if(textWords.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language'
)