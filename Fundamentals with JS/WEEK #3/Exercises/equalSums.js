function equalSums(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += arr[j];

    }
      let rightSum = 0;
      for (let k = i + 1; k < arr.length; k++) {
        rightSum += arr[k];

    }
    if (leftSum === rightSum) {
      console.log(i);
      return;
    }
  }
  console.log("no");
}

equalSums([1, 2, 3, 3]);
