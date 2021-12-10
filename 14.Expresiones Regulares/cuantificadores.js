//* Hace match del elemento anterior 0 o mas veces
console.log("2222".match(/\d*/)); //console.log("2222".match(/\d{0,}/));
console.log("".match(/\d*/)); //Hace match porque tambien hace match con 0 ocurrencias
//+ al menos un dijito o una ocurrencia
console.log("2222".match(/\d+/)); //console.log("2222".match(/\d{1,}/));
console.log("".match(/\d+/));
//{}dentro de deben poner el numero de ocurrencias que queramos
console.log("2222".match(/\d{3}/));
console.log("2222".match(/\d{2,4}/)); //Se pueden usar rangos
//? que el elemento anterior puede o no estar, opcional
console.log("http://www".match(/https?:\/{2}w{3}/)); //http://wwww
//? cuando aparece despues de otro cuantificador * o +, se comportara de manera lazy, por defecto se comporta de manera gredi(codicioso)
// /<.+>/
console.log("<p> </p>".match(/<.+>/)); //Traera todo lo que encuentre, para cambiarlo se usa el ? para cambiarlo a modo lazy
console.log("<p> </p>".match(/<.+?>/));
