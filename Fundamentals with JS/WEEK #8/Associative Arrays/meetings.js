function meetings(arr) {

    let meetings = {};

    arr.forEach(rowInfo => {
            let [dayOfWeek, name] = rowInfo.split(' ');

            if(!meetings.hasOwnProperty(dayOfWeek)) {
                meetings[dayOfWeek] = name;
                console.log(`Scheduled for ${dayOfWeek}`);
            } else {
                console.log(`Conflict on ${dayOfWeek}!`);
            }
    });

    let finalInfo = Object.entries(meetings);
    finalInfo.forEach(dayInfo => console.log(`${dayInfo[0]} -> ${dayInfo[1]}`));

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']

)