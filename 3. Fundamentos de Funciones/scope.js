//Scope Global
let nombre = "Mauricio";

function decirHola() {
  console.log("Hola" + nombre);
}

decirHola();

//Scope Local
function decirAdios() {
  let nombre = "cody";
  console.log("Hola" + nombre);
}

decirAdios();
