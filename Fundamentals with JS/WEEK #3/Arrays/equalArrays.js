function equalArrays(array1, array2) {

    let sum = 0

    for(let i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i]);
        array2[i] = Number(array2[i]);

        if(array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        } 
        
        sum += array1[i];
    }

    console.log(`Arrays are identical. Sum: ${sum}`);

}

equalArrays(['10','20','30'], ['10','20','30'])