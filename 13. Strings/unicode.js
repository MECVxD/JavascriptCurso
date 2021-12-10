//v13.0 contiene 143,859 caracteres, idioma, simbolos, emoji 1,111,998 tiene unicode
//Cada caracter de texto de cualquier idioma se representa en un rango que va de U+0000 A U+10FFFF
//todos los valores del sistema unicode estan divididos en 17 planos
//cada plano almacena 65536 o elevar 2^16 el plano 0 se conoce como BMP Basic Multilingual Plane, caracteres mas utilizados, se pueden guardar usando 16 bits
//Planos astrales, se guardan los menos utilizados y tambien los emojis, Surrogarte Pair => HighSurrogate Pair y Low Surrogate Pair
//https://stackoverflow.com/a/48010068
function toCodePoint(char) {
  var hex = char.charCodeAt(0).toString(16); //Convierte el caractes a hexadecimal
  return "\\u" + "0000".substring(0, 4 - hex.length) + hex; //Agrega los 0's faltantes al inicio
}

console.log(toCodePoint("a"));
console.log("\u0061");
console.log("🦷".length); //Usa dos unidades de codigo para representar el emoji, pueden ser mas de dos
