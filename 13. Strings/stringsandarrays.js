let texto = "Estoy aprendiendo javascript con el curso de CodigoFacilito";
//Una vez que la cadena se transforma en arreglo podemo usar todos los metodos que utilizan los arreglos
// let palabras = texto.split(" ");
// console.log(palabras.join(","));

function filtroDeMarcas(str) {
  let marcas = ["CodigoFacilito"];
  let palabrasFiltradas = str.split(" ").map((palabra) => {
    return marcas.includes(palabra) ? "XXX" : palabra;
  });
  return palabrasFiltradas.join(" ");
}
console.log(filtroDeMarcas(texto));
