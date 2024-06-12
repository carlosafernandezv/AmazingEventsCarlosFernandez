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


/* tabla2.innerHTML = ''
    for (let categoria in ingresosPorCategoria2, porcentajeAsistenciaPorCategoria ) {

        tabla2.innerHTML +=
            `
        <tr>
            <td>${categoria}</td>
            <td>${ingresosPorCategoria2[categoria]}</td>
            <td>${porcentajeAsistenciaPorCategoria[categoria]}%</td>
        </tr>
        `
    }


    tabla3.innerHTML = ''
    for (let categoria in ingresosPorCategoria) {
        tabla3.innerHTML +=
            `
        <tr>
            <td>${categoria}</td>
            <td>${ingresosPorCategoria[categoria]}</td>
            <td>${ingresosPorCategoria[categoria]}</td>
        </tr>
        `
    } */


  

  
  // Crear una tabla vacía
  let tablaPasados = [];
  
  // Llenar la tabla con los datos de eventos pasados
  arregloPasados.forEach(evento => {
    let ingresos = evento.price * evento.assistance;
    let porcentajeAsistencia = (evento.assistance / evento.capacity) * 100;
  
    tablaPasados.push({
      categories: evento.category,
      revenues: ingresos,
      "percentage of assistance": porcentajeAsistencia.toFixed(2) + "%",
    });
  });
  
  // Imprimir la tabla de eventos pasados (puedes adaptar esto según tu necesidad)
  console.table(tablaPasados);
  
/*   // Supongamos que tienes un array llamado eventosPasados con objetos de eventos

  
  // Creamos un objeto para almacenar las sumas por categoría
  let sumasPorCategoria = {};
  
  // Recorremos los eventos y acumulamos los valores
  arregloPasados.forEach(evento => {
    let { category, price, assistance } = evento;
    if (!sumasPorCategoria[category]) {
      sumasPorCategoria[category] = { totalPrice: 0, totalAssistance: 0 };
    }
    sumasPorCategoria[category].totalPrice += price;
    sumasPorCategoria[category].totalAssistance += assistance;
  });
  


  // Imprimimos los resultados
  for (let category in sumasPorCategoria) {
    let { totalPrice, totalAssistance } = sumasPorCategoria[category];

    console.log(`Categoría: ${category}`);
    console.log(`Total Price: $${totalPrice}`);
    console.log(`Total Assistance: ${totalAssistance}`);
    console.log('---');
    console.log('Categoría: ${category} = $${totalPrice}*${totalAssistance}');
  }
 */
  // Supongamos que tienes el mismo array eventosPasados con objetos de eventos

  
  // Creamos un objeto para almacenar los ingresos por categoría
  const ingresosPorCategoria = {};
  
  // Recorremos los eventos y calculamos los ingresos
  arregloPasados.forEach(evento => {
    const { category, price, assistance } = evento;
    const revenue = price * assistance;
    if (!ingresosPorCategoria[category]) {
      ingresosPorCategoria[category] = 0;
    }
    ingresosPorCategoria[category] += revenue;
  });
  
  // Imprimimos los resultados
  for (const category in ingresosPorCategoria) {
    const totalRevenue = ingresosPorCategoria[category];
    console.log(`Categoría: ${category}`);
    console.log(`Total Revenue: $${totalRevenue}`);
    console.log('---');
  }
  

  
  

})





