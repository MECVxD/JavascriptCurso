//Se ejecuta automaticamente cuando instanciamos un nuevo objeto de una clase
//Cuenta con un objeto llamado arguments que almacena los argumentos que le pasemos
class Curso {
  constructor(titulo, color = "Yellow") {
    this.titulo = titulo;
    this.color = color;
    console.log(arguments);
  }
}
new Curso("Curso Profesional de JavaScript", 1, 2, 3, 4, 5, 6);
