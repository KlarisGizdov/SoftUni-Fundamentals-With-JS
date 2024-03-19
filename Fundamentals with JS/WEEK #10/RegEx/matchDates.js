function matchDates(input) {
    input = String(input);
    const regex = /\b(?<day>\d{2})(?<separator>[-.\/])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4})\b/g;
    const matches = input.matchAll(regex);

    for (const match of matches) {
        const { day, month, year } = match.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])
