const cardsPersonajes = data.reduce((acc , elemento) =>{
    return acc + `
    <div class="card">
        <h3>
            ${elemento.name}
        </h3>
        <div class="container-img">
            <img src="${elemento.image}" alt="${elemento.name}">
        </div>
    </div>
    `
}, "")

const container = document.getElementById("container")

container.innerHTML = cardsPersonajes
