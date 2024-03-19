function matchFullNames(names) {
    const regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    
    const matchedNames = names.match(regex);
    
    if (matchedNames) {
        console.log(matchedNames.join(' '));
    } else {
        console.log('No valid full names found.');
    }
}
matchFullNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
