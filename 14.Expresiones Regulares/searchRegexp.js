let texto = "Hola, me llamo Mauricio y tengo 26 años";
console.log(texto.search(/Mauricio/));
console.log(texto.search(/\d/));
console.log(texto.match(/\d+/)); //Cuente desde uno a mas digitos
console.log(texto.matchAll(/\d+/g)); //Se debe usar el all y retorna un objeto iterador que puede usarse en un ciclo for
