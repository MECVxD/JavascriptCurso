// let promesa = new Promise(function (resolve, reject) {
//   resolve(10);
//   reject("Algo salió mal");
// });//Sintaxis para crear un objeto del tipo promise
let request = require("request");
function leerPagina(url) {
  return new Promise(function (resolve, reject) {
    request(url, function (error, response) {
      if (error) return reject(error);
      resolve(response);
    });
  });
}
let promesa = leerPagina("https://www.google.com");
promesa
  .then(() => console.log("Finalice en promesas"))
  .catch((err) => console.log(err));
