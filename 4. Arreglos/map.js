/* metodo map
 *Genera un nuevo arreglo luego de aplicar una operacion de modificacion de cada elemento de una coleccion original.
 * Tambien envia dos argumentos, una funcion que recibe 3 parametros y una que hace referencia al elemento this.
 */
//Necesitamos un nuevo arreglo con el cuadrado de los numoeros
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let cuadrados = [];
// for (let i = 0; i < numeros.length; i++) {
//   cuadrados[i] = numeros[i] * numeros[i];
// }
// console.log(cuadrados);

// let cuadrados = numeros.map(function (numero) {
//   return numero * numero;
// });
// console.log(cuadrados);
let numeros = ["1", "2", "3", "4", "5"];
numeros = numeros.map(function (numString, indice, arreglo) {
  console.log(indice, arreglo, this);
  return parseInt(numString);
}, "Hola");
console.log(numeros);
