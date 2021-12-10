//Evita escribir .then y funciones anonimas para el manejo de
//await solo se usa dentro de una funcion asincrona
// (async function () {
//   let promesa = await new Promise((resolve, reject) => {
//     setTimeout(resolve, 400, 5);
//   });
//   let valorDos = await new Promise((resolve, reject) => {
//     setTimeout(resolve, 400, 10);
//   });
//   console.log(promesa + valorDos);
// })();
// promesa.then((resultado)=>{console.log(resultado)})
let fetch = require("node-fetch");
async function showGithubInfo() {
  let response = await fetch("https://api.github.com/users/MECVxD/repos");
  let repos = await response.json();
  console.log(repos);
}
showGithubInfo();
