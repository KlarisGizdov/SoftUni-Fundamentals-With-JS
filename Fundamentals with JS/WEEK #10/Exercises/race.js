function processRace(input) {
    let participants = {};
    let participantsArr = input.shift().split(', ');

    for(let driver of participantsArr) {
        participants[driver] = 0;
    }

    let pattern = /[^A-Za-z0-9]/g;
    let patternCh = /[A-Za-z]/;

    for(let line of input) {
        if(line === 'end of race') {
            break;
        }

        line = line.replace(pattern, "");
        let name = "";
        let distance = 0;
        line.split('').forEach(x => {
            if(patternCh.test(x)) {
                return name += x;
            }
            distance += Number(x);
        })

        if(participants.hasOwnProperty(name)) {
            participants[name] += distance;
        }
    }
    let sortedArr = Object.entries(participants).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortedArr[0][0]}`);
    console.log(`2nd place: ${sortedArr[1][0]}`);
    console.log(`3rd place: ${sortedArr[2][0]}`);
}
processRace([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);



