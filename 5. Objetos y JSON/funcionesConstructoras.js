function Course(title) {
  //Funciona como constructor
  this.title = title;
  this.inscribir = function () {};
}
let objeto = new Course("Curso Profesional de JavaScript"); //Crea un objeto en blanco
let objeto2 = new Course("Curso Profesional de JavaScript");
console.log(objeto, objeto2);
