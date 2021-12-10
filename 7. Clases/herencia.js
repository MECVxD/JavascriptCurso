//Se pueden heredar de otros objetos de Javascript, funciones, array, date etc
// class Human {
//   especie = "Humano";
//   respirar() {
//     console.log("Inhala");
//   }
// }
// class Admin extends Human {
//   //Asi se declara una herencia
// }
// let admin = new Admin();
// console.log(admin.especie);
// admin.respirar();
//--------------------------------
class User {
  constructor(name) {
    this.name = name;
  }
  saludar() {
    console.log("Hola soy Usuario");
  }
}
class Admin extends User {
  constructor(name) {
    super(name);
  }
  saludar() {
    super.saludar();
    console.log("Hola soy admin");
  }
}
let admin = new Admin("Mauricio");
admin.saludar();
console.log(admin.name);
