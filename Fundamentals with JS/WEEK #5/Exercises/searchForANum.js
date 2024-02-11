function searchForANum(arr, commands) {

    let [takeCount, deleteCount, searchNumber] = commands;

    let takenElements = arr.slice(0, takeCount);
    takenElements.splice(0, deleteCount);

    let occurrences = takenElements.filter(num => num === searchNumber).length;

    console.log(`Number ${searchNumber} occurs ${occurrences} times.`);

}
searchForANum(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)