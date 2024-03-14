function passGen(arr) {

    let concatStr = arr[0] + arr[1];
    let replacementStr = arr[2];

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let idx = 0;

    for(let letter of concatStr) {
        if(vowels.includes(letter)) {
            concatStr = concatStr.replace(letter, replacementStr[idx].toUpperCase());
            idx++;

            if(idx >= replacementStr.length) {
                idx = 0;
            }
        }
    }

    let password = concatStr.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

passGen([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]
    )