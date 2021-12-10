//Una cadena esta formada por una secuencia ordenada de caracteres, se pueden partir las cadenas o trabajarlas caracter por caracter, de igual manera se pueden recorrer como los arreglos
console.log("Hola"[0]);
//No se recomienda usar el for normal en caso de usar emojis, es mejor utilizar el ciclo forOf
let cadena = "Hola";
for (const caracter of cadena) {
  console.log(caracter);
}
//Substring
//Extraer una porcion de cadena usando la posicion de inicio y la posicion final
let cadenaDos = "Hola Mundo";
console.log(cadena.substring(6, 4)); //Desde la posicion 0 hasta antes de la 4, si el valor es menor que 0 automaticamente lo toma como 0
console.log(cadena.slice(6, 4)); //Si el valor inicial es mayor no lo ejecuta, si se usan negativos iniciara a recorrer la cadena desde el ultimo caracter
//iNVESTIGAR EN STACKOVERFLOW WHAT IS THE DIFFERENCE BETWEEN STRING SLICE AND STRING SUSTRING
