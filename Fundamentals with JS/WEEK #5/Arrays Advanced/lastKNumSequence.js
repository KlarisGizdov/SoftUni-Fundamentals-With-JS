function lastKNumSequence(n, k) {
  let sequence = [1];

  for (let i = 1; i < n; i++) {
    let starIndex = Math.max(0, i - k);

    let curEl = 0;

    for (let j = starIndex; j < i; j++) {
      curEl += sequence[j];
    }

    sequence.push(curEl);
  }
  console.log(sequence.join(" "));
}
lastKNumSequence(6, 3);
