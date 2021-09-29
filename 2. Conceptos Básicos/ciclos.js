//Imprimir numeros del 1 al 10
//For
/*
1. Instruccion inicial
2. Condicion
3. Instruccion despues de cada iteracion

for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    continue; //Salta la iteracion
  }
  if (i === 8) {
    break; //Termina el ciclo cuando se cumple la condicion
  }
  console.log(i);
}
*/
//WHILE
//Ejecuta un bloque de codigo si la condicion sea verdadera,
let i = 0;
/*while (i <= 10) {
  console.log(i);
  i++;
}*/

do {
  i++;
} while (i <= 10);
{
  console.log(i);
}
