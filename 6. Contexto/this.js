//Contexto = Valor de la palabra reservada this
//El objeto que ejecuta la funcion
// function demo() {
//   console.log(this);
// }
// let objeto = {
//   func: demo,
// };
// objeto.func();
// let objeto = {
//   func: function () {
//     console.log(this);
//   },
// };
// let func = objeto.func; //Cuando se asigna a una variable pierde la referencia contexto original
// // func();
// function ejecutor(f) {
//   //Cuando se envia el metodo como argumento pierde la referencia al contexto original
//   f();
// }
// ejecutor(objeto.func);
//--------------------------------
// let objeto = {
//   func: function () {
//     console.log(this);
//   },
// };
// let segundoObjeto = {
//   func: null,
//   ejecutor: function (f) {
//     this.func = f;
//     this.func();
//   },
// };
// segundoObjeto.ejecutor(objeto.func);
//------------------------------------
let estudiante = {
  nombre: "Mauricio",
  saludar: function () {
    console.log("Hola soy " + this.nombre);
  },
};
// estudiante.saludar();
let f = estudiante.saludar; //Si reasignamos la funcion se pierde el contexto por eso marca "Hola soy undefined"
f();
setTimeout(estudiante.saludar, 100); //Lo mismo sucede si enviamos la funcion como argumento
