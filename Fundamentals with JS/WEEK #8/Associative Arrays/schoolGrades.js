function schoolGrades(arr) {
    let studentBook = {};

    for (let studentInfo of arr) {
        studentInfo = studentInfo.split(' ');
        let name = studentInfo.shift();
        let grades = studentInfo.map(Number);

        if (!studentBook.hasOwnProperty(name)) {
            studentBook[name] = grades;
        } else {
            studentBook[name] = studentBook[name].concat(grades);
        }
    }

    let sortedNames = Object.keys(studentBook).sort((a, b) => a.localeCompare(b));

    for (const name of sortedNames) {
        let avg = studentBook[name].reduce((sum, grade) => sum + grade, 0) / studentBook[name].length;
        studentBook[name] = avg.toFixed(2);
    }

    let sortedStudents = Object.entries(studentBook).sort((a, b) => a[0].localeCompare(b[0]));

    sortedStudents.forEach(s => console.log(`${s[0]}: ${s[1]}`));
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
