// Recordar parte de un patron por separado
// Aplicar cuantificadores a un grupo

// /\d*/ //Cualquier cantidad de digitos a partir de cero
// /(\d-)*/ //Cualquier cantidad de guiones y de digitos desde cero
console.log("123--3-2-".match(/(\d-)+/g)); //Recuerda las agrupaciones
///(\s+)@\s+/;
console.log("texto@dominio".match(/(\S+)@\S+/));
//Costo de rendimiento
console.log("texto@dominio".match(/(?<username>\S+)@\S+/));
console.log("texto@dominio".match(/(?:\S+)@\S+/));
