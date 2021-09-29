/*
Debe ser posible retornarlo
Debe ser posible asignarlo a una variable
Debe ser posible enviarlo como argumento
 */
//return 2;
let number = 2;

function executor(funcion) {
  funcion();
}

function decirHola() {
  console.log("Hola");
}
executor(decirHola);

function sumarTodos() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}

function sumaTodosAlt() {
  return Array.from(arguments).reduce((acc, argument) => argument + acc, 0);
}

console.log(sumaTodosAlt(1, 2, 3, 4));

function build() {
  return function () {
    console.log("Hola");
  };
}
let f = build();
f();
