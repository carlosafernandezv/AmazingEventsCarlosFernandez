

const urlBase = "https://aulamindhub.github.io/amazing-api/events.json"

function getData(done) {
    const result = fetch(urlBase);
    result
        .then(response => response.json())
        .then(datos => {
            done(datos)
        });
}

let img = document.getElementById("img")

idDetails = window.location.href
idDetails = new URL(idDetails).searchParams.get("id")
console.log(idDetails);

getData(datos => {
    console.log(datos);
    let events = datos.events
    console.log(events);
    let tarjeta = events.filter(events => events._id == idDetails)
    tarjeta.forEach(events => {
        img.innerHTML = `<img id="img" src="${events.image}" class="img-fluid rounded-start" alt="${events.name}">`
        let name = document.getElementById("name").innerHTML = `${events.name}`
        let description = document.getElementById("description").innerHTML = `${events.description}`
        let date = document.getElementById("date").innerHTML = `${events.date}`
        let category = document.getElementById("category").innerHTML = `${events.category}`
        let place = document.getElementById("place").innerHTML = `${events.place}`
        let capacity = document.getElementById("capacity").innerHTML = `Capacity:<small class="text-body-secondary"> ${events.capacity} </small> `
        let estimate = document.getElementById("estimate")
        let assistance = document.getElementById("assistance")
        let price = document.getElementById("price").innerHTML = `${events.price}`
        if (events.assistance != null || events.assistance != undefined) {

            assistance.innerHTML = `Assistance:<small class="text-body-secondary"> ${events.assistance} </small> `
            estimate.style.display = "none";

        } else {
            estimate.innerHTML = `Estimate:<small class="text-body-secondary"> ${events.estimate} </small> `
            assistance.style.display = "none";

        }
    })

 

    console.log(idDetails);
    console.log(tarjeta);

    
})
