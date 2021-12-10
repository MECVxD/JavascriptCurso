//Necesitamos definir una funcion generadora sintaxis function*
//Siempre retornan generadores de manera implicita
// function* counter() {
//   // console.log("Estoy aqui");
//   // yield 1; //Palabra reservada que se utiliza para pausar una funcion para despues retomarla en ese mismo punto
//   // console.log("Ahora estoy aqui");
//   // yield 2;
//   for (var i = 1; i <= 5; i++) {
//     yield i;
//   }
// }

// let generator = counter();
// // console.log(generator.next());

// function* retornador() {
//   return 3; //Cuando usamos return automaticamente se toma el generador como terminado
// }
// let g = retornador();
// // console.log(g.next());
function* counter() {
  for (var i = 1; i <= 5; i++) {
    yield i;
  }
}

let generator = counter();

function* retornador() {
  yield* counter();
  console.log("Regresé");
  yield 3;
}

let g = retornador();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
