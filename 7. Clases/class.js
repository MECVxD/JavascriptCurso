//Declaracion de clase
// class Curso{}
//Expresion de clase
// let clase = class{ }
//--------------------------
// class Curso {
//   constructor(titulo) {
//     this.titulo = titulo;
//   }
//   inscribir() {
//     console.log("Inscrito");
//   }
// }
// let javascript = new Curso("Curso Profesional de JavaScript"); //Instancia de la clase curso
// console.log(javascript.titulo);
// javascript.inscribir();
//---------------------------------------
// class Curso {
//   title = "Hola";
//   constructor() {
//     this.inscribir = function (nombre) {
//       this.nombre = nombre;
//     };
//   }
// }
//*********************************
// class Curso {
//   title = "Hola";
//   inscribir = function (nombre) {
//     this.nombre = nombre;
//   };
// }
//*********************************
// class Curso {
//   title = "Hola";
//   inscribir = (nombre) => (this.nombre = nombre);
// }
//*********************************
class Curso {
  title = "Hola";
  inscribir(nombre) {
    this.nombre = nombre;
  }
}
let c = new Curso();
c.inscribir("Mauricio");
console.log(c.nombre);
