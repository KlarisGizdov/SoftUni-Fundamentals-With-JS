function repeatString(string, repeatCount) {

    let repeatedString = '';

    for(let i = 0; i < repeatCount; i++) {
        repeatedString += string;
    }

    return repeatedString;

}

repeatString('abc', 3)