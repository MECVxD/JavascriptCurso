//Await no tiene el metodo catch, se puede manejar con bloques try y catch
// let promesa = await fetch("https://api.github.com/users/MECVxD/repos");
// promesa.then(() => {}).catch(() => {});
//En este caso no es necesario usar varios catch ya que todas las promesas que no se cumplan iran al mismo catch
(async function () {
  try {
    let promesa = await Promise.reject("Error");
    let promesa2 = await Promise.reject("Error");
  } catch (err) {
    console.log(err);
  }
})();
