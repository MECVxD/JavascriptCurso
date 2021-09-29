function hola(nombre) {
  if (nombre) {
    var saludo = "Hola " + nombre; // Var esta disponible para toda la funcion por tanto su alcance es de funcion
  }
  console.log(saludo);
}

function hola1(nombre) {
  let saludo = "";
  if (nombre) {
    saludo = "Hola " + nombre; //Let y cons tienen alcance de bloque por lo que despues del } ya no estara disponible
  }
  console.log(saludo);
}

hola1("xd");
