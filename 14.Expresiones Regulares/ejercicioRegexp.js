// /https?:\/{2}(\S+\.)?\S+(\.\S+)?/
let texto = "visita https://codigofacilito.com";

console.log(
  texto.replace(
    /(https?:\/{2}(\S+\.)?\S+(\.\S+)(\.\S+)?)/,
    "<a href='$1'>$1</a>"
  )
);
