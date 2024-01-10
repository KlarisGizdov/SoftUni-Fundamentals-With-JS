function studentInfo(name, age, grade) {

    const formattedGrade = grade.toFixed(2);

    console.log(`Name: ${name}, Age: ${age}, Grade: ${formattedGrade}`);
}

const studentName = 'Klaris';
const studentAge = 18;
const studentGrade = 6.00;

studentInfo(studentName, studentAge, studentGrade)