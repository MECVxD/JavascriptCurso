//Operacion de reduccion a un alegro, para dejar un solo valor
//Es similar a forEach, map y filter, es decir, ejecuta una funcion por cada elemento del arreglo
let numeros = [1, 2, 3, 4, 5];
// numeros.reduce(function (acc, elemento) {
//   console.log(acc);
//   return 1;
// }, 1);

// let suma = numeros.reduce(function (acc, numero) {
//   return acc + numero;
// }, 0);

// console.log(suma);

let nombres = ["Mauricio", "Cody"];
let html = nombres.reduce(function (acc, nombre) {
  return acc + "<li>" + nombre + "<li>";
}, "");

console.log(html);
