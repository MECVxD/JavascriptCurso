//indexOf Indica el lugar donde inicia la ocurrencia en caso de que no exista retornará -1, utiliza un algoritmo de comparacion de igualdades estricto, retorna la primera instancia donde encuentre la cadena, en caso de que requieras el ultimo se usa lastIndexOf, es mas lento ya que recorre toda la cadena
//includes retorna true o false en caso de que la cadena exista o no, utiliza un algoritmo sameValue0, busca un valor falsi
let cadena = "Hola Mauricio";
console.log(cadena.indexOf("Mauricio"));
if (cadena.indexOf("Mauricio") > 0) console.log("Encontrado");
if (cadena.includes("Mauricio")) console.log("Encontrado");
console.log(cadena.lastIndexOf("o"));
let link = "https://codigofacilito.com";
if (link.startsWith("https")) {
  console.log("Es un link seguro");
}
if (link.endsWith(".com")) {
  console.log("Es un link web");
}
