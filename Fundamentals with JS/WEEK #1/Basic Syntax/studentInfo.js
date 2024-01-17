function studentInfo(name, age, grade) {

   let formattedGrade = grade.toFixed(2);

   console.log(`Name: ${name}, Age: ${age}, Grade: ${formattedGrade}`);
}

const studentName = 'Klaris';
const studentAge = 18;
const studentGrade = 5.6666;

studentInfo(studentName, studentAge, studentGrade)