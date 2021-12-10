let request = require("request-promise");
let promesa = request("https://www.google.com");
// promesa.then(function () {
//   console.log("Terminé la peticion");
// });
// promesa.catch(function (err) {
//   console.log(err);
// });
// promesa.finally(function () {
//   console.log("Finalicé");
// });
promesa
  .then(function () {
    //Puede recibir 2 metodos uno para cuando la promesa se completa y otro para cuando la promesa es rechazada
    console.log("Terminé la peticion");
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    //Proceso de limpieza, se ejecuta siempre
    console.log("Finalicé");
  });
console.log("Yo sucedo después");
