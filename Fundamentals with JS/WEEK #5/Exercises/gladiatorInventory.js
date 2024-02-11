function gladiatorInventory(arr) {
  let inventory = arr.shift().split(" ");

  for (let command of arr) {
    let [action, item] = command.split(" ");

    if (action === "Buy" && !inventory.includes(item)) {
      inventory.push(item);
    } else if (action === "Trash" && inventory.includes(item)) {
      inventory = inventory.filter((equipment) => equipment !== item);
    } else if (action === "Repair" && inventory.includes(item)) {
      inventory = inventory.filter((equipment) => equipment !== item);
      inventory.push(item);
    } else if (action === "Upgrade") {
      let [equipment, upgrade] = item.split("-");

      let indexOfEquip = inventory.indexOf(equipment);
      if (indexOfEquip !== -1) {
        inventory.splice(indexOfEquip + 1, 0, `${equipment}:${upgrade}`);
      }
    }
  }
  console.log(inventory.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
