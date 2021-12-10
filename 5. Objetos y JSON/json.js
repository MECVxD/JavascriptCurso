//Javascript Object Notation -- JSON
let curso = {
  titulo: "Curso Profesional de JavaScript",
  formato: "Video",
  bloques: ["Introducción", "Funciones"],
  inscribir: function () {
    //Se conoce como un metodo
    console.log("Inscrito");
  },
};

console.log(curso.titulo);
console.log(curso["titulo"]);
curso.inscribir();
curso.titulo = "Curso de Ruby";
console.log(curso.titulo);
curso["inscribir"] = function () {
  console.log("Inscribir V2");
};
curso.inscribir();
