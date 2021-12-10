let p1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 500, "Hola Mundo")
);
let p2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 600, "Segundo hola Mundo")
);

function finalizado() {
  console.log("Todo Finalizó");
}
// p1.then(function (resultado) {
//   console.log(resultado);
//   p2.then(function (resultado2) {
//     console.log(resultado2);
//     finalizado();
//   });
// });
//-----------------------------------------------
//Hace lo mismo que la de arriba solo que puede hacer mas de una promesa
//Si una de las promesas falla, en el momento del fallo termina
Promise.all([p1, p2])
  .then(function (resultado) {
    console.log(resultado);
    finalizado();
  })
  .catch((err) => console.log(err));
