function distinctArray(arr){

    let newArr = [];

    for(let element of newArr) {
        if(!newArr.includes(element)) {
            newArr.push(element);
        }
    }

    console.log(newArr);

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])