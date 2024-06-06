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