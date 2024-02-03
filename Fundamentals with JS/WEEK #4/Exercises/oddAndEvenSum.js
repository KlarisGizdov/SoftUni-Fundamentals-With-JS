function oddAndEvenSum(num) {
  let oddSum = 0;
  let evenSum = 0;

  let numStr = num.toString();

  for (let char of numStr) {
    let digit = Number(char);

    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
