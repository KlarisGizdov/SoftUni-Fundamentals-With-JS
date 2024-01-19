function languageSpoken(country) {
    if (country = 'England' || 'USA') {
        console.log('English is spoken in England and USA');
    } else if (country = 'Spain' || 'Argentina' || 'Mexico') {
        console.log('Spanish is spoken in Spain, Argentina and Mexico');
    } else {
        console.log('unknown');
    }
}

languageSpoken('USA')