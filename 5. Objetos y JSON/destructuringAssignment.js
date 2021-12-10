//Permite asignar las propiedades de un objeto a una variable
let user = { name: "Mauricio", edad: 25 };
// let { name } = user; //Del lado izquierdo la variable entre llaves y del derecho la propiedad
// let { name: username, apellido = "Covarrubias", ...sobrantes } = user; //Si queremos guardarlo en una variable de distinto nombre, si la propiedad no existe tomara el valor por defecto
// console.log(apellido);
// console.log(sobrantes);
function saludar({ name }) {
  console.log(name);
}
saludar(user);
//Tambien funciona con arreglos
let calificaciones = [10, 9, 8];
function obtenerCalificaciones() {
  return [10, 9, 8];
}
let [matematicas, programacion, ...sobrantes] = calificaciones;
console.log(sobrantes);
