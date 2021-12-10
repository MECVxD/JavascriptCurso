//Sintaxis alternativa para declarar funciones sin la palabra reservada funtion
//()=>{} el nombre de la funcion se adopta de la variable a la que fue asignada ejemplo:
// let demo=()=>{console.log('Hola Mundo')}
//Las llaves puede omitirse cuando la funcion es de una sola linea ejemplo
// let demo=()=>console.log('Hola Mundo')
//Una arrowFunction de una sola linea, tiene un retorno implicito sin usar la palabra reservada return
let demo = () => console.log("Hola Mundo");
demo();
let suma = (a, b) => a + b;
console.log(suma(3, 2));
