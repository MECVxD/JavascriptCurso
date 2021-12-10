//Incluso instanciado el objeto se puede seguir modificando el prototipo
//Compartir informacion entre objetos sin necesidad de copiarlos
function Course() {}
Course.prototype.inscribir = function () {
  console.log("Ya llegué");
};
let javascript = new Course();
let ruby = new Course();

Course.prototype.inscribir = function () {
  console.log("Ya llegue v2");
};
Course.prototype.otro = function () {
  console.log("xd");
};
javascript.otro();
ruby.inscribir();
