//Variables se pueden declarar como let|var despues del nombre el signo '=' y la asignación.
//El nombre no debe contener espacios, deben iniciar con letra, guion bajo o signo de pesos
//El nombre no puede ser una palabra reservada
let nombre = "Mauricio";
//var nombre = "Mauricio";
//Constantes se pueden declarar con const despues del nombre el signo '=' y la asignación.
const pi = 3.1416;

//Las variables pueden modificar su valor
nombre = 24;

//Para obtener el valor de la variable solo se llama por su nombre
console.log(nombre);

//Los numeros sean enteros o con punto decimal son de tipo number
//Librerias contienen codigo que alguien mas ya creo ejemplo la libreria Math
/*Math.PI
  Math.round()*/

//Datos Primitivos
/*string: cadenas String()
  number: numeros Number()
  boolean: true|false Boolean()
  undefined: ausencia de valor
  symbol: Symbol()
  null:
  BigInt()
*/
//Se puede converir un dato a otro tipo de dato
console.log(Number("20"));
console.log(parseFloat("200.5"));
//Incluso convertir un dato a cadena
console.log(Number("20").toString());

//Cuando se usan dos tipos de datos distintos se genera un Type Coercion
//Los valores son convertidos a un tipo en comun para poder compararlos
console.log("10" == 10);
//Se recomienda que la convercion de tipos se haga de manera explicita

//Tipo Booleano
//Se usan en ciclos o condiciones, pueden servir como banderas o  guardar valores de la configuracion de un usuario
//Los valores que evalua como falsos son undefined, NaN, null, -0, 0, "", false
let resultado = Boolean("false");
console.log(resultado);

//8 operadores de comparacion
/*
== Igual
=== Estrictamente igual

!= Desigual
!== Desigualdad estricta

>= Mayor o igual que
<= Menor o igual que
En cadenas se compara el valor lexicografico y el orden alfabetico de los caracteres en unicode

> Mayor que
< Menor que

*/
