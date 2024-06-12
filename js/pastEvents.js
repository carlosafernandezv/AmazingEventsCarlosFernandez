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
    let arregloPasados = []
    let arregloFuturos = []
    let categoria = []

    
for (let i = 0; i < events.length; i++) {
    if (datos.currentDate > events[i].date) {
        arregloPasados.push(events[i])

    } else {
        arregloFuturos.push(events[i])
    }
}
console.log(arregloFuturos);
console.log(arregloPasados);
funciones.pintarTarjetas(arregloPasados, padreTarjetas)
let buscar = document.getElementById("search")

buscar.addEventListener('input', (e) => {

    let chkCheck = document.querySelectorAll("input[type=checkbox]:checked")
    let texto = document.getElementById("search").value

    let tarjetasFiltradas = funciones.filtrarText(texto, arregloPasados)


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

arregloPasados.forEach((arregloPasados, index) => {
    if (!categoria.some(cat => cat.name === arregloPasados.category)) {
        categoria.push
            ({
                id: index + 1,
                name: arregloPasados.category
            });

    }
});

funciones.pintarChk(categoria, padreChk)

chk1.addEventListener('change', (evento) => {

    let eventosFiltrados = arregloPasados

    let chkCheck = document.querySelectorAll("input[type=checkbox]:checked")

    if (chkCheck.length != 0) {
        eventosFiltrados = funciones.filtrarCheck(chkCheck, arregloPasados)
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
let chk1 = document.getElementById("padreChk")
