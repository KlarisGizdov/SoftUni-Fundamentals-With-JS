function replaceRepeatingChars(str) {

    let result = '';

    for (let idx in str) {
        if(str[idx] != str[idx - 1]) {
            result += str[idx];
        }
    }

    console.log(result);
}
replaceRepeatingChars('qqqqwwweeerttsdaaa')