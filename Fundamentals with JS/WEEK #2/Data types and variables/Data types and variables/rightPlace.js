function guess(string, character, result) {
    let res = string.replace('_', character);
    let output = res === result? "Matched": "Not Matched";
    console.log(output);
}
guess('Str_ng', 'I', 'Strong')