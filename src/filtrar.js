import borrar from "./borrar.js"
import showAll from "./show.js"
import buttonsEvents from "./buttonsEvents.js"

export default function filtrarPersonajes (array) {


const filtrar = busqueda => {return array.filter(personaje => personaje.race === busqueda)}

//  const todos = () => {
//   const todos = array
//   borrar()
//   showAll(todos)
// }

 const saiyans = () => {
  const saiyans = filtrar("Saiyan")
  borrar()
  showAll(saiyans)
 }

 const namekian = () => {
  const namekian = filtrar("Namekian")
  borrar()
  showAll(namekian)
 }

 const human = () => {
  const human = filtrar("Human")
  borrar()
  showAll(human)
 }

 const majin = () => {
  const majin = filtrar("Majin")
  borrar()
  showAll(majin)
 }

 const friezaRace = () => {
  const friezaRace = filtrar("Frieza Race")
  borrar()
  showAll(friezaRace)
 }

 const android = () => {
  const android = filtrar("Android")
  borrar()
  showAll(android)
 }
 const eliminar = () => {
  const containerApi = document.getElementById("container-api")
  containerApi.innerHTML = ``
 }

 const containerButtons = document.getElementById("container-btn")
 containerButtons.addEventListener("click", (e) => {

  buttonsEvents(e, saiyans, human, namekian, majin, friezaRace, android, eliminar)
})
}