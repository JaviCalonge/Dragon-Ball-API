export default function showAll (array) {

  array.forEach((personaje) => {

    const containerApi = document.getElementById("container-api")

    const div = document.createElement("div")
    div.id = "card"
    const nombre = personaje.name
    const ki = personaje.ki
    const imagen = personaje.image

    div.innerHTML = `<h2>${nombre}</h2>
    <h3>Fuerza de ${ki}</h3>
    <img class="personaje-img" src="${imagen}"/>`
  
    containerApi.append(div)

  })
}