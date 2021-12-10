let user = {
  edad: 25,
  nombre: "Mauricio",
};

let esquemaPermisos = { nivel: 2 };

let admin = { ...user, permisos: true, ...esquemaPermisos, nombre: "Cody" }; //Duplicar el objeto
console.log(admin);
//Object.asign y el spread operator(...) son los metodos getter y setter
let copia2 = Object.assign({}, user); //Primer argumento target o fuente y todos los demas se conocen como source
let copia3 = Object.assign(user, { permisos: true }, { nivel: 2 });
let copia4 = Object.assign(user, esquemaPermisos);
console.log(copia4);
