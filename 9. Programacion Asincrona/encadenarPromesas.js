function primerPromesa() {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, 500, "Hola Mundo")
  );
}
function segundaPromesa(r2) {
  console.log(r2);
  return new Promise((resolve, reject) =>
    setTimeout(resolve, 600, "Segundo hola Mundo")
  );
}

function finalizado() {
  console.log("Todo Finalizó");
}
// Promise.all([p1, p2])
//   .then(function (resultado) {
//     console.log(resultado);
//     finalizado();
//   })
//   .catch((err) => console.log(err));
//--------------------------------------------
//Las funciones que hagamos devovleran una promesa
//Se pueden encadenar promesas siempre que las funciones devuelvan un objeto promise
primerPromesa()
  .then(segundaPromesa)
  .then(function (r) {
    console.log(r);
  });
