import * as funciones from "../modules/functions.js";

const urlBase = "https://aulamindhub.github.io/amazing-api/events.json"
let tabla1 = document.getElementById("tabla1")
let tabla2 = document.getElementById("tabla2")
let tabla3 = document.getElementById("tabla3")
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



    function calcularPorcentaje(events) {
        return (events.assistance / events.capacity) * 100;
    }

    function eventoConMayorAsistencia(events) {
        let maxPorcentaje = 0;
        let eventoMaximo = {};

        events.forEach(events => {
            let porcentaje = calcularPorcentaje(events);
            if (porcentaje > maxPorcentaje) {
                maxPorcentaje = porcentaje;
                eventoMaximo = events;
            }
        });

        return eventoMaximo;
    }


    function eventoConMenorAsistencia(events) {
        let minPorcentaje = Infinity;
        let eventoMinimo = {};

        events.forEach(events => {
            let porcentaje = calcularPorcentaje(events);
            if (porcentaje < minPorcentaje) {
                minPorcentaje = porcentaje;
                eventoMinimo = events;
            }
        });

        return eventoMinimo;
    }

    function eventoConMayorCapacidad(events) {
        let maxCapacidad = 0;
        let eventoMaximo = {};

        events.forEach(events => {
            if (events.capacity > maxCapacidad) {
                maxCapacidad = events.capacity;
                eventoMaximo = events;
            }
        });

        return eventoMaximo;
    }

    let eventoMinimo = eventoConMenorAsistencia(events);
    let eventoMaximo = eventoConMayorAsistencia(events);
    let eventoCapacidad = eventoConMayorCapacidad(events)

    tabla1.innerHTML =
        `
        <tr>
            <td> ${eventoMaximo.name} con ${calcularPorcentaje(eventoMaximo)} %</td>
            <td> ${eventoMinimo.name} con ${calcularPorcentaje(eventoMinimo)} %</td>
            <td> ${eventoCapacidad.name} </td>
        </tr>
    `


    let arregloPasados = []
    let arregloFuturos = []

    for (let i = 0; i < events.length; i++) {
        if (datos.currentDate > events[i].date) {
            arregloPasados.push(events[i])

        } else {
            arregloFuturos.push(events[i])
        }
    }



    // Inicializamos un objeto para almacenar los ingresos por categoría
    let ingresosPorCategoria = {};

    // Calculamos los ingresos por evento y los sumamos por categoría
    arregloPasados.forEach(evento => {
        let ingreso = evento.price * evento.assistance;
        if (ingresosPorCategoria[evento.category]) {
            ingresosPorCategoria[evento.category] += ingreso;
        } else {
            ingresosPorCategoria[evento.category] = ingreso;
        }
    });


    // Inicializamos un objeto para almacenar los ingresos estimados por categoría
    let ingresosPorCategoria2 = {};

    // Calculamos los ingresos estimados por evento y los sumamos por categoría
    arregloFuturos.forEach(evento => {
        let ingresoEstimado = evento.price * evento.estimate;
        if (ingresosPorCategoria2[evento.category]) {
            ingresosPorCategoria2[evento.category] += ingresoEstimado;
        } else {
            ingresosPorCategoria2[evento.category] = ingresoEstimado;
        }
    });

    tabla2.innerHTML =''
    for (let categoria in ingresosPorCategoria2) {
        
        
        tabla2.innerHTML += 
        `
        <tr>
            <td>${categoria}</td>
            <td>${ingresosPorCategoria2[categoria]}</td>
            <td>${ingresosPorCategoria2[categoria]}</td>
        </tr>
        `
    }


    tabla3.innerHTML =''
    for (let categoria in ingresosPorCategoria) {
        tabla3.innerHTML += 
        `
        <tr>
            <td>${categoria}</td>
            <td>${ingresosPorCategoria[categoria]}</td>
            <td>${ingresosPorCategoria[categoria]}</td>
        </tr>
        `
    }


    
})





