function softUniReception(input) {

    let employeeOne = Number(input.shift());
    let employeeTwo = Number(input.shift());
    let employeeThree = Number(input.shift());

    let students = Number(input.shift());

    let studentsPerHour = employeeOne + employeeTwo + employeeThree;

    let neededHours = 0;

    while(students > 0) {
        neededHours++
        students -= studentsPerHour;

        if(neededHours % 4 === 0) {
            neededHours++;
        }
    }

    console.log(`Time needed: ${neededHours}h.`);
}

softUniReception(['3','2','5','40'])