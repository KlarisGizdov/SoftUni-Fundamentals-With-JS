function countStringOcc(string, searchedWord) {

    let words = string.split(' ');
    let count = 0;

    for(let word of words) {
        if(word === searchedWord) {
            count++;
        }
    }

    console.log(count);

}
countStringOcc('This is a word and it also is a sentence',
'is'
)