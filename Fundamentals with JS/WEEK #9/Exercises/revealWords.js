function revealWords(string, template) {

    let words = string.split(', ')

    for(let word of words) {
        let startTemplate = '*'.repeat(word.length);
        template = template.replace(startTemplate, word);
    }

    console.log(template);
}
revealWords('great',
'softuni is a ***** place for learning new programming languages'
)