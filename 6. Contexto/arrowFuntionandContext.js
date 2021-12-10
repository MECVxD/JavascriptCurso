/*
 * -Tienen una sintaxis mas corta que la declaracion con function
 * -Heredan el valor de this del contexto donde fueron creadas, y no se reasigna
 */
// let estudiante = {
//   nombre: "Mauricio",
//   saludar: () => {
//     console.log("Hola yo soy " + this.nombre);
//   },
//   saludarAlt: function () {
//     console.log("Hola yo soy " + this.nombre);
//   },
// };
// estudiante.saludar();
// estudiante.saludarAlt();
//--------------------------------
function Estudiante() {
  this.nombre = "Mauricio";
  this.saludar = () => {
    console.log("Hola " + this.nombre);
  };
}
let e = new Estudiante();
// e.saludar();
setTimeout(e.saludar, 100);
