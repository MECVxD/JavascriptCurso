//Caracteristica que permite que una variable definida como var o una funcion  sean llamadas incluso antes de ser creadas, no permite la asignacion antes, ya que el iterprete envia las funciones al principio de la ejecucion
//No es recomendable
console.log(a);
var a = 10;
console.log(a);
