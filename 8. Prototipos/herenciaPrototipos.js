function Course(title) {
  this.title = title;
}

let javaScript = new Course("Curso Profesional de JavaScript");
let ruby = Object.create(javaScript);
console.log(ruby);
