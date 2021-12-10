//Las propiedades y metodos estaticos pueden usarse sin necesidad de instanciarlo
class Api {
  static ENDPOINT = "localhost:3000";
  static get() {
    console.log("Soy un método estático");
  }
}
Api.get();
console.log(Api.ENDPOINT);
