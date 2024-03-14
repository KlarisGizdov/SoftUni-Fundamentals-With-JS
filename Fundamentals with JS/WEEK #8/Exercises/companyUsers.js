function companyUsers(arr) {

    let companyEmployees = {};

    for (const command of arr) {
        let [company, emplyeeId] = command.split(' -> ');

        if(company in companyEmployees) {
            if(!companyEmployees[company].includes(emplyeeId)) {
                companyEmployees[company].push(emplyeeId);
            }
        } else {
            companyEmployees[company] = [emplyeeId];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [company, employees] of entries) {
        console.log(company);
        for(let employeeId of employees) {
            console.log(`-- ${employeeId}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )