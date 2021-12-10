// <, >, <=, >=, ==
//Compara el valor numerico de ambas cadenas a evaluar
console.log("A" > "B");
console.log("a" > "B");
console.log("a" == "A");
//Local compare
//Si son iguales retorna 0
//Si la cadena base aparece antes que la cadena de comapracion en el orden alfabetico retorna -1, en caso contrario retorna 1
//A, B -1
//B > A 1
console.log("A".localeCompare("z"));
console.log("B".localeCompare("a"));
console.log("B".localeCompare("B"));
//toLowerCase o toUperCase
//Las cadenas son inmutables por lo que no se modifican
let prueba = "Hola";
let segundaPrueba = prueba.toUpperCase();
console.log(prueba);
console.log(segundaPrueba);
