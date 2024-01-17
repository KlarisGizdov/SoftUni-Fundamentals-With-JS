function login(input) {

    let username = input.shift();
    let pass = '';

    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    }

    let guess = input.shift();
    let wrongGuess = 0;

    while (guess !== pass) {
        wrongGuess++;

        if (wrongGuess === 4) {
            console.log(`Username ${username} blocked`);
            return;
        }

        console.log("Incorrect password. Try again.");
        guess = input.shift();
    }

    console.log(`Username ${username} logged in.`);
}
login (['Acer','login','go','let me in','recA'])