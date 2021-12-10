const { reject } = require("async");

//Siempre retornan una promesa
async function suma(valor1, valor2) {
  return valor1 + valor2;
}

async function calcular() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 400, 5);
  });
}
