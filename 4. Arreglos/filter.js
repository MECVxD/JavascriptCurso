/**
 * Metodo filter
 * Permite aplicar un filtro o condicion a los elementos de un arreglo utiliza booleanos
 * Es similar a  forEach y a map.
 */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
//Devolver solo los datos pares dentro del arreglo
let nuevoArreglo = numeros.filter(function (numero) {
  return numero % 2 === 0;
});
console.log(nuevoArreglo);
let lenguajes = ["ruby", "php", "javascript"];
//Permite eliminar algun elemento del arreglo
let nuevoArreglo2 = lenguajes.filter(function (lenguaje) {
  return lenguaje != "ruby";
});
console.log(nuevoArreglo2);
