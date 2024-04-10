function executeCommands(input) {
  let string = input.shift();

  for (let command of input) {
    if (command === "Done") {
      break;
    }

    let parts = command.split(" ");
    let action = parts[0];

    switch (action) {
      case "Change":
        let char = parts[1];
        let replacement = parts[2];
        string = string.split(char).join(replacement);
        console.log(string);
        break;

      case "Includes":
        let substring = parts.slice(1).join(" ");
        console.log(string.includes(substring) ? "True" : "False");
        break;

      case "End":
        let endSubstring = parts.slice(1).join(" ");
        console.log(string.endsWith(endSubstring) ? "True" : "False");
        break;

      case "Uppercase":
        string = string.toUpperCase();
        console.log(string);
        break;

      case "FindIndex":
        let charToFind = parts[1];
        console.log(string.indexOf(charToFind));
        break;

      case "Cut":
        let startIndex = parseInt(parts[1]);
        let count = parseInt(parts[2]);
        console.log(string.substr(startIndex, count));
        break;

      default:
        console.log("Invalid command");
        break;
    }
  }
}

executeCommands([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
