export function pintarTarjetas(arregloAPintar, divPadre) {
    divPadre.innerHTML = ""
    for (let i = 0; i < arregloAPintar.length; i++) {
        crearTarjeta(divPadre, arregloAPintar[i])
    }
}

export function crearTarjeta(divPadre, tarjeta) {
    let nuevaTarjeta = document.createElement("div")
    nuevaTarjeta.classList.add("col")
    nuevaTarjeta.innerHTML = `
    <div class="card shadow-sm">
    <img src=" ${tarjeta.image}" width="100%" height="225" class="object-fit-cover" alt=">${tarjeta.name}">
    <div class="card-body">
        <h5 class="card-title">${tarjeta.name}</h5>
        <p class="card-text h">${tarjeta.description}</p>
        <div class="d-flex justify-content-between align-items-center">
            <small class="text-body-secondary">${tarjeta.price}</small>
            <a href="/details.html?id=${tarjeta._id}" class="btn btn-sm btn-primary">Details</a>
        </div>
    </div>
</div>`
    divPadre.appendChild(nuevaTarjeta)

}

export function crearChk(divPadre, tarjeta) {
    let nuevachk = document.createElement("div")
    nuevachk.classList.add("form-check-inline")
    nuevachk.classList.add("form-check")
    nuevachk.innerHTML =
        `
        <input class="form-check-input" type="checkbox" id="${tarjeta.name}" value="${tarjeta.name}">
        <label class="form-check-label" for="${tarjeta.name}">${tarjeta.name}</label>
   `

    divPadre.appendChild(nuevachk)
}

export function pintarChk(arregloAPintar, divPadre) {
    divPadre.innerHTML = ""
    for (let i = 0; i < arregloAPintar.length; i++) {
        crearChk(divPadre, arregloAPintar[i])
    }
}

export function filtrarCheck(chkCheck, arreglo) {

    chkCheck = Array.from(chkCheck)
    chkCheck = chkCheck.map(chk1 => chk1.value)
    let eventosFiltrados = arreglo.filter(events => chkCheck.includes(events.category))
    return eventosFiltrados
}

export function filtrarText(texto, arreglo) {
    let tarjetasFiltradas = arreglo.filter(events => events.name.toLowerCase().includes(texto.toLowerCase()))
    console.log(tarjetasFiltradas);
    return tarjetasFiltradas
    
    
    
}

export function error() {
    padreTarjetas.innerHTML = `
        <div class="container text-center">
		<div class="brand">
			<span class="glyphicon glyphicon-king" aria-hidden="true"></span>
			<h3 class="text-uppercase">The King Maker</h3>
		</div>
		<h1 class="head"><span>404</span></h1>
		<p>Oops! The Page you requested was not found!</p>
		<a href="#" class="btn-outline"> Back to Home</a>
	</div>
   `

}