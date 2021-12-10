//Conjuntos y rangos en una exp regular
// /[abcd]/ /abcd/
// "abcd".match(/[abcd]/)
// "abcd".match(/abcd/);
// "b".match(/[abcd]/);
// "b".match(/abcd/);
// console.log("b".match(/abcd/));
// console.log("a".match(/a|b/));
// let texto = "Hola";
// console.log(texto.match(/H[o-l]a/)); //Hoa, Hla

console.log("b".match(/[a-d]/));
console.log("3".match(/[0-5]/));

console.log("-".match(/[-a]/));

// \d es igual al rango [0-9] es decir, cualquier digito
// \w es igual al rango [a-zA-z0-9_]cualquier digito, letra o guion bajo
//Se puede consultar los demas en la pagina de mozzilla
