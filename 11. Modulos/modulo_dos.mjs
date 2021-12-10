//Un modulo puede terner muchos export con nombre pero solo uno por defecto
//Los valores se exportan como readonly, es decir que los archivos solo podran usarlos pero no exportarlos
export const name = "Mauricio"; //Exportamos el modulo solo con la constante name
export let edad = 25;

let valorPorDefecto = 20;
export default valorPorDefecto;
