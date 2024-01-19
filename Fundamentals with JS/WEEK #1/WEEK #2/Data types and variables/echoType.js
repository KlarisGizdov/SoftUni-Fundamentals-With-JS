function type(input) {

    if(typeof(input) === "object") {
        console.log(typeof(input));
        console.log('Parameter is not suitable for printing');
    } else {
        console.log(typeof(input));
        console.log(input);}

}

type(null)