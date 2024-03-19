function matchPhoneNumbers(input) {
    const regex = /(?:^|\s)\+359(?:-|\s)2(?:-|\s)\d{3}(?:-|\s)\d{4}\b/g;
    const allMatches = [];

    input.forEach(str => {
        const matches = str.match(regex);
        if (matches) {
            allMatches.push(...matches);
        }
    });

    if (allMatches.length > 0) {
        console.log(allMatches.map(match => match.trim()).join(', '));
    }
}

matchPhoneNumbers(['+359 2 222 2222', '359-2-222-2222', '+359/2/222/2222', '+359-2 222 2222', '+359 2-222-2222', '+359-2-222-222', '+359-2-222-22222', '+359-2-222-2222']);
