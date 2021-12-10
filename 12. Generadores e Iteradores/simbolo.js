let simbolo = Symbol("mi-simbolo");
let simbolo2 = Symbol("mi-simbolo");
console.log(simbolo == simbolo2);
let obj = {};
obj[simbolo] = function () {
  console.log("Mi nombre es un simbolo");
};
obj[simbolo]();
