function reverseAnArray(number, arrayOfNumbers) {

    let newArray = arrayOfNumbers.slice(0, number);
    let reversedArray = newArray.reverse()
    

    console.log(reversedArray.join(' '));
}
reverseAnArray(3, [10, 20, 30, 40, 50])