let edades = [20];

function modificador(edades) {
  edades[0] = 25; //Pasa como referencia ya que apunta a la misma direccion de memoria
  console.log("Dentro de la funcion " + edades);
}

console.log(edades);
modificador(edades); //Dato se pasa como valor
console.log(edades);
