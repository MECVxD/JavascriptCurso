//Iterable con Iteradores

// let rango = {
//   min: null,
//   max: null,
//   currentValue: null,
//   [Symbol.iterator]() {
//     //Importante para poder iterar
//     return this;
//   },
//   next() {
//     if (this.currentValue == null) this.currentValue = this.min;
//     let result = {};
//     if (this.currentValue >= this.min && this.currentValue <= this.max) {
//       result = { value: this.currentValue, done: false };
//       this.currentValue += 1;
//     } else {
//       result = { done: true };
//     }
//     return result;
//   },
// };
// rango.min = 5;
// rango.max = 10;

// for (n of rango) {
//   console.log(n);
// }

//Iterable con Generadores
let rango = {
  min: null,
  max: null,
  [Symbol.iterator]() {
    return this.generator();
  },
  generator: function* () {
    for (var i = this.min; i <= this.max; i++) {
      yield i;
    }
  },
};
rango.min = 0;
rango.max = 100;
let numbre = 1;

for (n of rango) {
  console.log(n);
}
