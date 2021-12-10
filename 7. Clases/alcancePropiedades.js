class Curso {
  #title = "Javascript"; //La propiedad title es privada
  constructor() {
    this.#bienvenida();
  }
  #bienvenida() {
    console.log("Bienvenido al curso " + this.#title);
  }
}
let javascript = new Curso();
// javascript.bienvenida();
