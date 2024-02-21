function groceryList(arr) {
  let initialList = arr.shift().split("!");

  for (let command of arr) {
    if (command === "Go Shopping!") {
      break;
    }

    let [action, item, newItem] = command.split(" ");

    switch (action) {
      case "Urgent":
        if (!initialList.includes(item)) {
          initialList.unshift(item);
        }
        break;
      case "Unnecessary":
        if (initialList.includes(item)) {
          let index = initialList.indexOf(item);
          initialList.splice(index, 1);
        }
        break;
      case "Correct":
        if (initialList.includes(item)) {
          let index = initialList.indexOf(item);
          initialList[index] = newItem;
        }
        break;
      case "Rearrange":
        if (initialList.includes(item)) {
          initialList = initialList.filter((groceries) => groceries !== item);
          initialList.push(item);
        }
        break;
    }
  }

  console.log(initialList.join(", "));
}

groceryList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
