//Recorrer un arreglo con un for clasico
// let arreglo = [1, 2, 3, 4];
// for (let i = 0; i < arreglo.length; i++) {
//   console.log(arreglo[i]);
// }
let lenguajes = ["ruby", "php", "javascript", "python"];
/*Metodo forEach(), 
  * Envia una funcion como argumento puede ser anonima, la funcion se ejectua una vez por cada elemento dentro del arreglo y esa funcion recibe tres parametros
    * Uno que hara referencia al elemento del arreglo. 
    * Tambien recibe un segundo argumento que hace referencia al indice.
    * Finalmente recibe un tercer argumento en el que se encuentra el arreglo completo.
  *A su vez el metodo forEach puede enviar un segundo argumento que se asigna como valor de la propiedad THIS dentro del arreglo

*/
lenguajes.forEach(function (lenguaje, indice, arreglo) {
  console.log(lenguaje, indice, arreglo, this);
}, "Hola");
