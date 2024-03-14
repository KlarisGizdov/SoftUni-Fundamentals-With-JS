function wordOccurences(arr) {

    let wordsOcc = {};

    for(const word of arr) {
        if(!wordsOcc.hasOwnProperty(word)) {
            wordsOcc[word] = 1;
        } else {
            wordsOcc[word] += 1;
        }
    }

    let sortedArray = Object.entries(wordsOcc).sort((a, b) => b[1] - a[1]);

    sortedArray.forEach(el => console.log(`${el[0]} -> ${el[1]} times`));
    
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])