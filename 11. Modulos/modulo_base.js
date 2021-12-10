// import { name } from "./modulo_dos.mjs";
//Los valores que se importan son readonly es decir que no pueden ser exportados
//Por tanto no puede ser modificada

import def, { name, edad } from "./modulo_dos.mjs";
edad = 50; //Marcara un error porque no pueden modificarse excepto en el modulo donde fue declarada
console.log(def);
