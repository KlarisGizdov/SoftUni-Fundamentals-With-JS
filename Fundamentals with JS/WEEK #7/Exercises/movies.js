function movies(arr) {

    let movies = [];

    for(let commands of arr) {
        if(commands.includes('addMovie')) {
            let tokens = commands.split('addMovie ');
            let movieTitle = tokens[1];

            let movieObject = {
                name: movieTitle
            };
            movies.push(movieObject);
        } else if (commands.includes('directedBy')) {
            let tokens = commands.split(' directedBy ');
            let movieTitle = tokens[0];
            let directorName = tokens[1];

            let movieFound = movies.find(m => m.name === movieTitle);

            if(movieFound) {
                movieFound.director = directorName
            }
        } else if (commands.includes('onDate')) {
            let tokens = commands.split(' onDate ');
            let movieTitle = tokens[0];
            let movieDate  = tokens[1];

            let movieFound = movies.find(m => m.name === movieTitle);

            if(movieFound) {
                movieFound.date = movieDate;
            }
        }
    }

    let fullInfoMovies = movies.filter(m => m.name && m.date && m.director);
    

    for(let fullInfoMovie of fullInfoMovies) {
        console.log(JSON.stringify(fullInfoMovie));
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )