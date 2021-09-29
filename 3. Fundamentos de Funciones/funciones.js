function saludar() {
  console.log("Hola dev");
}
saludar();

function cuadrado(numero) {
  return numero * numero;
}

let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos);
console.log(cuadrado(3));

function sumarTodos() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  console.log(suma);
}

sumarTodos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
