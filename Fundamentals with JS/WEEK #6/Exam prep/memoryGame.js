function memoryGame(input) {
  let board = input.shift().split(" ");
  let command = input.shift();
  let turn = 1;

  while (command !== "end" && board.length > 0) {
    let [firstIndx, secondIndx] = command.split(" ").map(Number);
    let checkValid =
      firstIndx < 0 ||
      firstIndx >= board.length ||
      secondIndx < 0 ||
      secondIndx >= board.length ||
      firstIndx === secondIndx;

    if (checkValid) {
      console.log("Invalid input! Adding additional elements to the board");

      let middleIndx = board.length / 2;
      let fill = `-${turn}a `;
      board.splice(middleIndx, 0, fill, fill);
    } else {
      if (board[firstIndx] === board[secondIndx]) {
        let element = board[firstIndx];
        console.log(`Congrats! You have found matching elements - ${element}!`);

        board = board.filter((x) => x !== element);
      } else {
        console.log("Try again!");
      }
    }

    if (board.length === 0 && command !== "end") {
      console.log(`You have won in ${turn} turns!`);
    }

    command = input.shift();
    turn++;
  }

  if (board.length > 0) {
    console.log("Sorry you lose :(");
    console.log(board.join(" "));
  }
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
