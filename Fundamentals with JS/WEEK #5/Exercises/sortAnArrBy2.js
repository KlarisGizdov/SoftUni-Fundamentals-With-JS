function sortAnArrBy2(arr) {

    arr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(arr.join('\n'));
}
sortAnArrBy2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])