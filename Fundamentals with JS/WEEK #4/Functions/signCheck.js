function signCheck(numOne, numTwo, numThree) {
  
function firstAndSecondMultiply(first, second) {
    return first * second;
  }

  let firstAndSecondResult = firstAndSecondMultiply(numOne, numTwo);
  let finalResult = firstAndSecondResult * numThree;

  if (finalResult < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}

signCheck(5, 12, -15);
