let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const BASE_URL = "https://rickandmortyapi.com/api"

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