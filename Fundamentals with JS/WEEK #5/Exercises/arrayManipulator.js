function arrayManipulator(numArr, commandArr) {
  for (let command of commandArr) {
    let tokens = command.split(" ");
    let action = tokens.shift();

    if (action === "add") {
      let index = Number(tokens.shift());
      let element = Number(tokens.shift());

      numArr.splice(index, 0, element);
    } else if (action === "addMany") {
      let index = Number(tokens.shift());

      for (let element of tokens) {
        element = Number(element);
        numArr.splice(index, 0, element);
        index++;
      }
    } else if (action === "contains") {
      let element = Number(tokens.shift());

      let index = numArr.indexOf(element);
      console.log(index);
    } else if (action === "remove") {
      let index = Number(tokens.shift());
      numArr.splice(index, 1);
    } else if (action === "shift") {
      let rotations = Number(tokens.shift());

      for (let curRotation = 1; curRotation <= rotations; curRotation++) {
        let firstEl = numArr.shift();
        numArr.push(firstEl);
      }
    } else if (action === "sumPairs") {
      let pairedNums = [];

      for (let i = 0; i < numArr.length; i += 2) {
        if (i + 1 < numArr.length) {
          let pairSum = numArr[i] + numArr[i + 1];
          pairedNums.push(pairSum);
        } else {
          pairedNums.push(numArr[i]);
        }
      }

      numArr = pairedNums;
    } else {
      if (action === "print") {
        console.log(`[ ${numArr.join(", ")} ]`);
      }
    }
  }
}
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
