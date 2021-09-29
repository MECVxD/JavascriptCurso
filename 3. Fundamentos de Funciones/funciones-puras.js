//Funcion pura no genera efectos secundarios como mutacion, si se pasa un valor como referencia y este se modifica nuestra funcion no es pura
let arreglo = [1, 2, 3];
arreglo[0] = 2; //Mutacion

let valor = 2;
valor += 1; //Mutación

let edades = [20];

function modificador(edades) {
  let copiado = [...arreglo]; //Genero una copia
  copiado[0] = 25; //Modifico la copia y no el valor original
  return copiado; //Para comunicar los cambios con el experior es preferible retornar la copia
}

console.log(edades);
modificador(edades); //Dato se pasa como valor
console.log(edades);
