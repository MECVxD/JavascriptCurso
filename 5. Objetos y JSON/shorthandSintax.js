//Sintaxis alternativa para declarar propiedades en los objetos

let nombre = "Mauricio";
let usuario = {
  nombre, //Propiedades con el mismo nombre de la variable shortHand Propierties
  saludar() {
    //Asi se pueden declarar funciones shortHand Sintax
    console.log("Hola");
  },
};
nombre = "Cody";
console.log(usuario.nombre);
console.log(nombre);
usuario.saludar();
