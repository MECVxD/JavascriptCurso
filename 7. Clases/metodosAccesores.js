class User {
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    if (typeof nombre !== "string") throw new Error("No es una cadena");
    this._nombre = nombre;
  }
}

let user = new User();
user.nombre = "Cody";
console.log(user.nombre); //Ejecutamos el metodo accesor nombre en este caso el getter
// user.nombre = "Cody"; //Setter asigna el valor, o busca la propiedad nombre o el metodo setter
// user.nombre; //Getter
// user.nombre = "Evil Cody"; //Setter
