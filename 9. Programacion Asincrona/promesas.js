//Alternativa a la sintaxix de callback
/**
 * Ejemplo Callback Hell
 * getData(function(x){
 *  getMoreData(x, function(y){
 *    getMoreData(y, function(z){
 *  })}
 * )})
 * Las promesas ayudan en estos casos, por la comprension del codigo
 */
// let promesa = require("request-promise");
// promesa("https://www.google.com").then(function () {
//   console.log("Terminé la peticion");
// });
// console.log("Yo sucedo después");
let request = require("request-promise");
let promesa = request("https://www.google.com");
promesa.then(function () {
  console.log("Terminé la peticion");
});
promesa.catch(function (err) {
  console.log("Error!!!");
});
console.log("Yo sucedo después");
/*
 * fullfiles: 0 Completada, significa que la promesa se completó con éxito.
 * rejected: 0 Rechazada, significa que la promesa no se completo con éxito.
 * pending: 0 Pendiente que es el estado de la promesa cuando la operacion no ha terminado, se dice que la promesa no se ha cumplido.
 * settled: 0 Finalizada, cuando la promesa terminó ya sea con éxito o con algun error.
 */
