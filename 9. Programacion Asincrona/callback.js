//Callback funcion que enviamos como argumento que será llamada eventualmente
let request = require("request"); //Sintaxis para llamar paquetes externos
request("https://www.google.com", function () {
  //Recibe una funcion como 2do argumento que funciona como el callback
  console.log("Termine la peticion");
});
console.log("Yo sucedo después"); //Esto se imprime antes de la funcion asincrona
