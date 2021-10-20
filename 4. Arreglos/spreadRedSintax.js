//Iterable: Cualquier objeto de javascript, que puede ser separado en elementos
// Array, Cadena
//Spread syntax() Expandir
let arreglo = [1, 2, 3];
console.log(arreglo);
console.log(...arreglo);

let nombre = "Mauricio";
console.log(nombre);
console.log(...nombre);

//Rest parameters (...) Unificar
function demo(...arr) {
  console.log(arr);
}

demo(10, 2);

function promedio(nombre, ...calificaciones) {
  console.log(nombre, calificaciones);
}

promedio("Mauricio", 10, 8, 10);
