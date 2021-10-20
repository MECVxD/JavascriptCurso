let arreglo = ["ruby", "python", "java"];
//indexOf() usa triple igual o igualdad estricta ===
//Devuelve el indice/posicion donde encuentra el valor si es que lo encuentra en caso contrario devuelve un -1
console.log(arreglo.indexOf("ruby"));
//includes() usa usa triple igual o igualdad estricta ===
//Devuelve true si el valor se encuentra en el arreglo, en caso contrario devuelve false, puede recibir un argumento para indicar apartir de que elemento realizará la busqueda
console.log(arreglo.includes("ruby", 1));
//find() realiza una prueba y devuelve el elemento encotrado o que fue true
let respuesta = arreglo.find(function (elemento, posicion, arreglo) {
  return elemento === "ruby";
});
console.log(respuesta);
//findIndex() realiza una prueba y retorna el indice/posicion  del elemento que fue true
let respuesta1 = arreglo.findIndex(function (elemento, posicion, arreglo) {
  return elemento === "java";
});
console.log(respuesta1);
//some() realiza una prueba, devuelve true si el elento existe en caso contrario devuelve false
let respuesta2 = arreglo.some(function (elemento, posicion, arreglo) {
  return elemento === "java";
});
console.log(respuesta2);
