function bombNumbers(nums, bomb) {
  let bombNum = bomb.shift();
  let radius = bomb.shift();

  for (let index = 0; index < nums.length; index++) {
      if (nums[index] === bombNum) {
          let startIndex = Math.max(0, index - radius);
          let endIndex = Math.min(nums.length - 1, index + radius);

          nums.splice(startIndex, endIndex - startIndex + 1);

          index = Math.max(0, index - radius - 1); 
      }
  }

  let sum = nums.reduce((acc, current) => acc + current, 0);

  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
