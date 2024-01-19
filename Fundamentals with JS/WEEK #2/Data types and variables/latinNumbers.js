function letterTriplets(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let v = 0; v < num; v++) {

                let letter1 = String.fromCharCode(97+i);
                let letter2 = String.fromCharCode(97+j);
                let letter3 = String.fromCharCode(97+v);   

                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

letterTriplets(2)