const fetchData = require('../utils/fetchData')
const API_URL = 'https://rickandmortyapi.com/api/character/';


const anotherFunction = async(API) => {

    try {

        const allPersonajes = await fetchData(API);
        const onlyPersonaje = await fetchData(`${API}${allPersonajes.results[0].id}`);
        const ubicacion = await fetchData(onlyPersonaje.origin.url);

        console.log(allPersonajes.info.count);
        console.log(onlyPersonaje.name)
        console.log(ubicacion.dimension);


    } catch (error) {
        console.error(error);
    }

}

console.log("before");
anotherFunction(API_URL);
console.log("after");