import filtrarPersonajes from "./filtrar.js"

const url = "https://dragonball-api.com/api/characters?limit=100"

async function getInfo () {
  const res = await fetch(url)
  const data = await res.json()
  const personajes = data.items
  console.log(personajes);
  
  
  filtrarPersonajes(personajes)
}

getInfo()