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

    let eventoMaximo = eventoConMayorAsistencia(events);
    console.log(`El evento con el mayor porcentaje de asistencia es: ${eventoMaximo.name} con un ${eventoMaximo.assistance}/${eventoMaximo.capacity} (${calcularPorcentaje(eventoMaximo)}%)`);

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


    const eventoMinimo = eventoConMenorAsistencia(events);
    console.log(`El evento con el menor porcentaje de asistencia es: ${eventoMinimo.name} con un ${eventoMinimo.assistance}/${eventoMinimo.capacity} (${calcularPorcentaje(eventoMinimo)}%)`);
    // Función para encontrar el evento con la mayor capacidad
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

    // Uso de la función
    let eventoMaximo2 = eventoConMayorCapacidad(events);
    console.log(`El evento con la mayor capacidad es: ${eventoMaximo2.name} con una capacidad de ${eventoMaximo2.capacity} personas`);

    



})




