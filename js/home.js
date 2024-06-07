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
getData(datos => {
    console.log(datos);
    let events = datos.events
    funciones.pintarTarjetas(events, padreTarjetas)
    buscar.addEventListener('input', (e) => {

        let chkCheck = document.querySelectorAll("input[type=checkbox]:checked")
        let texto = document.getElementById("search").value
    
        let tarjetasFiltradas = funciones.filtrarText(texto, events)
    
        if (chkCheck.length != 0) {
            tarjetasFiltradas = funciones.filtrarCheck(chkCheck, tarjetasFiltradas)
        }
    
        if (e.target.value != "") {
            funciones.pintarTarjetas(tarjetasFiltradas, padreTarjetas)
        }
        else {
            funciones.pintarTarjetas(tarjetasFiltradas, padreTarjetas)
        }
    })
    
    events.forEach((event, index) => {
        if (!categoria.some(cat => cat.name === event.category)) {
            categoria.push
                ({
                    id: index + 1,
                    name: event.category
                });
        }
    });
    
    funciones.pintarChk(categoria, padreChk)
    
    chk1.addEventListener('change', (evento) => {
        let eventosFiltrados = events
        let chkCheck = document.querySelectorAll("input[type=checkbox]:checked")
        if (chkCheck.length != 0) {
            eventosFiltrados = funciones.filtrarCheck(chkCheck, events)
        }
        let texto = document.getElementById("search").value
        if (texto != "") {
            eventosFiltrados = funciones.filtrarText(texto, eventosFiltrados)
    
        }
    
        funciones.pintarTarjetas(eventosFiltrados, padreTarjetas)
    
    })

})


let padreTarjetas = document.querySelector(".cardPadre")
let padreChk = document.querySelector(".padreChk")
let buscar = document.getElementById("search")
let categoria = []
let chk1 = document.getElementById("padreChk")



