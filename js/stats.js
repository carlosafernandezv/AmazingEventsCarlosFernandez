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


/* 


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


  

  



  
  // Función para calcular las ganancias por categoría
  function calcularGananciasPorCategoria(arregloPasados) {
    const gananciasPorCategoria = {};
  
    arregloPasados.forEach((arregloPasados) => {
      const { category, price, assistance } = arregloPasados;
      if (!gananciasPorCategoria[category]) {
        gananciasPorCategoria[category] = 0;
      }
      gananciasPorCategoria[category] += price * assistance;
    });
  
    return gananciasPorCategoria;
  }
  
  // Función para calcular el porcentaje de asistencia por categoría
  function calcularPorcentajeAsistenciaPorCategoria(arregloPasados) {
    const porcentajeAsistenciaPorCategoria = {};
  
    arregloPasados.forEach((arregloPasados) => {
      const { category, capacity, assistance } = arregloPasados;
      const porcentaje = (assistance / capacity) * 100;
      porcentajeAsistenciaPorCategoria[category] = porcentaje.toFixed(2); // Redondeamos a 2 decimales
    });
  
    return porcentajeAsistenciaPorCategoria;
  }
  
  // Llamada a las funciones y obtención de resultados
  const ganancias = calcularGananciasPorCategoria(arregloPasados);
  const porcentajes = calcularPorcentajeAsistenciaPorCategoria(arregloPasados);
  
  // Imprimir resultados
  for (const categoria in ganancias) {
    console.log(`Ganancias en ${categoria}: $${ganancias[categoria]}`);
    console.log(`Porcentaje de asistencia en ${categoria}: ${porcentajes[categoria]}%`);
  }
  


  tabla3.innerHTML = ''

  for (const categoria in ganancias) {
    tabla3.innerHTML +=
            `
        <tr>
            <td>${categoria}</td>
            <td>$${ganancias[categoria]}</td>
            <td>${porcentajes[categoria]}%</td>
        </tr>
        `
    
  }
    

  
  // Función para calcular las ganancias por categoría
  function calcularGananciasPorCategoria2(arregloFuturos) {
    const gananciasPorCategoria2 = {};
  
    arregloFuturos.forEach((arregloFuturos) => {
      const { category, price, estimate } = arregloFuturos;
      if (!gananciasPorCategoria2[category]) {
        gananciasPorCategoria2[category] = 0;
      }
      gananciasPorCategoria2[category] += price * estimate;
    });
  
    return gananciasPorCategoria2;
  }
  
  // Función para calcular el porcentaje de asistencia por categoría
  function calcularPorcentajeAsistenciaPorCategoria2(arregloFuturos) {
    const porcentajeAsistenciaPorCategoria2 = {};
  
    arregloFuturos.forEach((arregloFuturos) => {
      const { category, capacity, estimate } = arregloFuturos;
      const porcentaje1 = (estimate / capacity) * 100;
      porcentajeAsistenciaPorCategoria2[category] = porcentaje1.toFixed(2); // Redondeamos a 2 decimales
    });
  
    return porcentajeAsistenciaPorCategoria2;
  }
  
  // Llamada a las funciones y obtención de resultados
  const ganancias1 = calcularGananciasPorCategoria2(arregloFuturos);
  const porcentajes1 = calcularPorcentajeAsistenciaPorCategoria2(arregloFuturos);
  
  // Imprimir resultados
  for (const categoria1 in ganancias1) {
    console.log(`Ganancias en ${categoria1}: $${ganancias1[categoria1]}`);
    console.log(`Porcentaje de asistencia en ${categoria1}: ${porcentajes1[categoria1]}%`);
  }
  


  tabla2.innerHTML = ''

  for (const categoria1 in ganancias1) {
    tabla2.innerHTML +=
            `
        <tr>
            <td>${categoria1}</td>
            <td>$${ganancias1[categoria1]}</td>
            <td>${porcentajes1[categoria1]}%</td>
        </tr>
        `
    
  }
  

  
  

})





