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
    let padreTarjetas = document.querySelector(".cardPadre")

    let arregloPasados = []
    let arregloFuturos = []

    for (let i = 0; i < events.length; i++) {
        if (datos.currentDate > events[i].date) {
            arregloPasados.push(events[i])

        } else {
            arregloFuturos.push(events[i])
        }
    }

    funciones.pintarTarjetas(arregloFuturos, padreTarjetas)

    let buscar = document.getElementById("search")

    buscar.addEventListener('input', (e) => {

        let chkCheck = document.querySelectorAll("input[type=checkbox]:checked")
        let texto = document.getElementById("search").value

        let tarjetasFiltradas = funciones.filtrarText(texto, arregloFuturos)

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


    let categoria = []

    arregloFuturos.forEach((arregloFuturos, index) => {
        if (!categoria.some(cat => cat.name === arregloFuturos.category)) {
            categoria.push
                ({
                    id: index + 1,
                    name: arregloFuturos.category
                });

        }
    });


    funciones.pintarChk(categoria, padreChk)

    let chk1 = document.getElementById("padreChk")

    chk1.addEventListener('change', (evento) => {
        let eventosFiltrados = arregloFuturos
        let chkCheck = document.querySelectorAll("input[type=checkbox]:checked")

        if (chkCheck.length != 0) {
            eventosFiltrados = funciones.filtrarCheck(chkCheck, arregloFuturos)
        }


        let texto = document.getElementById("search").value
        if (texto != "") {
            eventosFiltrados = funciones.filtrarText(texto, eventosFiltrados)

        }

        funciones.pintarTarjetas(eventosFiltrados, padreTarjetas)

    })








})









