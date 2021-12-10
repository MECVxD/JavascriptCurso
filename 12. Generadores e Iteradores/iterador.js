//Un iterador es cualquier elemento que implementa el iterator protocol, cualquier objeto que implemente un metodo next, que retorne un objeto con una propiedad value y una propiedad done, implementa el protocolo
let iterador = {
  currentValue: 1,
  next() {
    let result = {
      value: null,
      done: false,
    };
    if (this.currentValue > 0 && this.currentValue <= 5) {
      result = { value: this.currentValue, done: false };
      this.currentValue += 1;
    } else {
      result = { done: true };
    }
    return result;
    // return {
    //   value: null, //Dato que se usará
    //   done: true, //Indica si el itrador a dejado de producir valores, si es verdadero habra terminado
    // };
  },
};
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// setTimeout(() => console.log(iterador.next()), 5000);
// console.log(iterador.next());
let item = iterador.next();
while (!item.done) {
  console.log(item.value);
  item = iterador.next();
}
