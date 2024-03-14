function wordsTracker(arr) {

    let searchedWords = arr.shift().split(' ');
    let wordOcc = {};

    for (const word of searchedWords) {
        wordOcc[word] = 0;
    }

    for (const word of arr) {
        if(word in wordOcc) {
            wordOcc[word]++;
        }
    }

    let entries = Object.entries(wordOcc).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of entries) {
        console.log(`${word} - ${count}`);
    }
}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])