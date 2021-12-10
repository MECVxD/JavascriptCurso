//Recibe dos argumentos uno que sera el patron a bscar y otro que sera lo que se reemplazará
let texto =
  "codigofacilito es un escuela de programación, codigofacilito es genial";
let nuevoTexto = texto.replace(/codigofacilito/g, "CódigoFacilito"); //se usa el g para cambiar todas las coincidencias
// let nuevoTexto1 = texto.replaceAll("codigofacilito", "CódigoFacilito");
console.log(nuevoTexto);
// console.log(nuevoTexto1);
let texto1 = "1000 numeros disponibles";
// let nuevoTexto2 = texto1.replace(/(\d)(\d{3})/g, "$1,$2");
let nuevoTexto2 = texto1.replace(
  /(\d)(\d{3})/g,
  function (match, g1, g2, offset, cadena) {
    // console.log(match, g1, g2, offset, cadena);
    return g1 + "," + g2;
  }
);
console.log(nuevoTexto2);
