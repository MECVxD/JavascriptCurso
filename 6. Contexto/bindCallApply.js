function Estudiante() {
  this.nombre = "Mauricio";
  this.saludar = function () {
    console.log(this);
  };
  this.saludar = this.saludar.bind(this); //Asegura que el contexto se va a conservar
}
let e = new Estudiante();

// e.saludar();
/*
 * Ejecutan la funcion de manera inmediata call y apply
 * Esperan: bind
 */
// e.saludar.call({}, "1", "2");
// e.saludar.apply({}, ["1", "2"]); //Es similar a call, solo que los argumentos deben enviarse en un arreglo
// let nuevaFuncion = e.saludar.bind({}, "1", "2");//Ejecuta la funcion despues
// nuevaFuncion();
let f = e.saludar;
f();
