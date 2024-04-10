function examPrep(input) {
  let cities = {};
  let citiesArray = [];

  while (input[0] !== "Sail") {
    let command = input.shift().split("||"); //[Tortuga,345000,1250]
    let city = command[0]; //Tortuga
    let population = Number(command[1]); //345000
    let gold = Number(command[2]); //1250

    let result = citiesArray.find((e) => e.city === city);
    let index = citiesArray.indexOf(result);

    if (result) {
      citiesArray[index].population += population;
      citiesArray[index].gold += gold;
    } else {
      cities = { city, population, gold };
      citiesArray.push(cities);
    }
  }

  while (input[0] !== "End") {
    let commands = input.shift().split("=>"); //Plunder=>Tortuga=>75000=>380
    let currentCommand = commands.shift();

    switch (currentCommand) {
      case "Plunder":
        let cityName = commands[0];
        let people = Number(commands[1]);
        let gold = Number(commands[2]);

        console.log(
          `${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );

        let result = citiesArray.find((e) => e.city === cityName);
        let index = citiesArray.indexOf(result);

        citiesArray[index].population -= people;
        citiesArray[index].gold -= gold;

        if (
          citiesArray[index].population <= 0 ||
          citiesArray[index].gold <= 0
        ) {
          citiesArray.splice(index, 1);
          console.log(`${cityName} has been wiped off the map!`);
        }
        break;

      case "Prosper":
        let town = commands[0];
        let treasure = Number(commands[1]);

        if (treasure < 0) {
          console.log("Gold added cannot be a negative number!");
        } else {
          let result = citiesArray.find((e) => e.city === town);
          let index = citiesArray.indexOf(result);

          citiesArray[index].gold += treasure;
          console.log(
            `${treasure} gold added to the city treasury. ${town} now has ${citiesArray[index].gold} gold.`
          );
        }
        break;
    }
  }

  if (citiesArray.length === 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${citiesArray.length} wealthy settlements to go to:`
    );

    citiesArray.forEach((t) =>
      console.log(
        `${t.city} -> Population: ${t.population} citizens, Gold: ${t.gold} kg`
      )
    );
  }
}
examPrep([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
