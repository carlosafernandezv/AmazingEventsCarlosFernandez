import * as funciones from "../modules/functions.js";
const urlBase = "https://aulamindhub.github.io/amazing-api/events.json"
function getData(done) {
    const result = fetch(urlBase);
    result
        .then(response => response.json())
        .then(datos => {
            done(datos)

        });

}