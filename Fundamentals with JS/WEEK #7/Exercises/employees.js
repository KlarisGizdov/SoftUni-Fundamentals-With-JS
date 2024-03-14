function generateEmployeeList(names) {
  let employeeList = {};

  for (let name of names) {
    let personalNum = name.length;
    employeeList[name] = personalNum;
  }

  for (let [employeeName, personalNum] of Object.entries(employeeList)) {
    console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
  }
}
generateEmployeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
