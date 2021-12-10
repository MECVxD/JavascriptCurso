//Los iterables nos permiten definir el comportamiento de uno de nuestros objetos cuando lo pasamos por un ciclo for of
// function* counter() {
//   for (var i = 1; i <= 5; i++) {
//     yield i;
//   }
// }

// let generator = counter();
// let numeros = [2, 5, 10];
// for (numero of generator) {
//   console.log(numero);
// }

//@@iterator
//Symbol.iterator
let rango = {
  min: null,
  max: null,
  currentValue: null,
  [Symbol.iterator]() {
    //Importante para poder iterar
    return this;
  },
  next() {
    if (this.currentValue == null) this.currentValue = this.min;
    let result = {};
    if (this.currentValue >= this.min && this.currentValue <= this.max) {
      result = { value: this.currentValue, done: false };
      this.currentValue += 1;
    } else {
      result = { done: true };
    }
    return result;
  },
};
rango.min = 5;
rango.max = 10;

for (n of rango) {
  console.log(n);
}
