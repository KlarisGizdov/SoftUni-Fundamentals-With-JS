function towns(arr) {

    for(let townInfoRow of arr) {
        let [city, cityLatitude, cityLongitude] = townInfoRow.split(' | ');

        let formattedLatitude = Number(cityLatitude).toFixed(2);
        let formattedLongitude = Number(cityLongitude).toFixed(2);

        let townObject = {
            town: city,
            latitude: formattedLatitude,
            longitude: formattedLongitude,            
        };

        console.log(townObject);
    }

}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)