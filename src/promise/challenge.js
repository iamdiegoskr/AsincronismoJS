const fetchData = require('../utils/fetchData')

const API_URL = 'https://rickandmortyapi.com/api/character/';


fetchData(API_URL)
    .then(allPersonajes => {
        console.log(allPersonajes.info.count);
        return fetchData(`${API_URL}${allPersonajes.results[0].id}`);
    })
    .then(personaje => {
        console.log(personaje.name);
        return fetchData(personaje.origin.url);
    })
    .then(ubicacion => {
        console.log(ubicacion.dimension)
    })
    .catch(error => console.error(error))