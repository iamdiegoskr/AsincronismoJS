let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const BASE_URL = "https://rickandmortyapi.com/api"
const API_CHARACTER = "/character/"

function fetchData(url, callback) {
    let xhttp = new XMLHttpRequest(); //referencia
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function(event) {
        if (this.readyState === 4 && this.status === 200) {
            callback(null, JSON.parse(xhttp.responseText))
        } else {
            return callback(new Error("Error " + url), null);
        }
    }
    xhttp.send();

}


fetchData(`${BASE_URL}${API_CHARACTER}`, function(error1, allCharacters) {

    if (error1) return console.error(error1)

    fetchData(`${BASE_URL}${API_CHARACTER}${allCharacters.results[0].id}`, function(error2, onlyCharacter) {

        if (error2) return console.error(error2)

        fetchData(onlyCharacter.origin.url, function(error3, ubication) {

            if (error3) return console.error(error3)

            console.log(`La serie cuenta con ${allCharacters.info.count} personajes`);
            console.log(`El nombre del personaje es  ${onlyCharacter.name}`)
            console.log(`${onlyCharacter.name} vive en la dimension ${ubication.dimension}`)

        })

    })

});