// let poo = 10;
// let introduccion = 9;
// let estructuras = 8;
// let bases_datos = 7;
// let matematicas = 9;
// let promedio = poo + introduccion + estructuras + bases_datos + matematicas / 5;
// console.log(promedio);
/*
 * Pueden almacenar cualquier tipo de dato de primera clase, funciones, objetos, cadenas booleanos e incluso otros arreglos.
 * Una de las propiedades de los arreglos es su longitud, la longitud es igual a la cantidad de elementos dentro del arreglo.
 * Cada elemento del arreglo ocupa una posicion, y se accede a dicho elemento usando el nombre del arreglo mas la posicion del elemento que
 * Las posiciones de los elementos inican a contar desde 0, de manera que el primer elemento del arreglo tiene como index el 0.
 *La ultima posicion de arreglo es igual a la longitud del arreglo, menos uno, ese menos uno responde al hecho de que la cuenta inicia en cero.
 */
let calificacion = [10, 9, 8, 7, 9]; //Longitud 5
console.log(calificacion[1]); //Imprimira 9 debido a que el arreglo inicia en 0 y la posicion 1 la ocupa el numero 9
//Sntaxis se usan [] para indicar que una variable es de tipo arreglo
let arreglo = ["rails", "laravel", "angular", 1, function () {}, {}, [1, 23]];
console.log(arreglo[0]);
arreglo[0] = "express";
console.log(arreglo[0]);
/*
 * El metodo push() agrega al final del arreglo el elemento que pasamos como parametro, retorna la nueva longitud del arreglo.
 * El metodo push() agrega al final del arreglo el elemento que pasamos como parametro, retorna la nueva longitud del arreglo.
 * El metodo unshift() agrega al principio el elemento que pasamos como parametro,
 * El metodo pop() elimina el elemento que se encuentra en la ultima posicion del arreglo, retorna el elemento que fue eliminado.
 * El metodo shift() elimina el elemento que se encuentra en la primera posicion del arreglo, retorna el elemento que fue eliminado.
 */
