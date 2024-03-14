function oddOccurences(str) {

    let words = str.toLowerCase().split(' ');
    let wordCount = {};

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    let oddOccurrences = [];
    for (const word in wordCount) {
        if (wordCount[word] % 2 !== 0) {
            oddOccurrences.push(word);
        }
    }

    let result = oddOccurrences.join(' ');
    console.log(result);

}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')