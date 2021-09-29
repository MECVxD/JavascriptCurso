Funciones
Bloques de datos que reciben datos y los devuelven ya procesdos

Parametros
Datos requeridos por la funcion para procesarlos

Estructura
Palabra reservada "function" + Nombre de la funcion + parentesis "()" + corchetes "{}"
Declaracion de funcion

```
function saludar() {
  /*Codigo a ejecutar*/
}
```

Exprecion de funcion
El nombre de la funcion es opcional
Tambien se les conoce como funciones anonimas

```
let func = function saluda() {}
```

para llamar a una funcion solo se llama el nombre de la funcion junto con parentesis si tiene parametros se pasan dentro de los parentesis.

```
function cuadrado(numero) {
  return numero \* numero;
}
```

Todas las funciones devuelven undefined pero si requerimos que devuelva un dato en especifico debemos usar la palabra reservada return

Cuando usamos return la ejecucion de la funcion termina

# Las funciones pueden declararse incluso despues de llamarlas, porque el interprete pasara las funciones al principio de la ejecucion siempre y cuando sea por declaracion de funcion

Escope o Alcance
Reglas que definen en que partes del codigo esta disponible una variable

Tipos

Scope Global
El codgio esta disponible para uso en cualquier parte del codigo.
No se recomienda mucho su uso

Scope Local
Variables declaradas dentro de un bloque de codigo como en una funcion, su acceso se limita solamente a la misma funcion y solo esta disponible durante la ejecucion de la funcion

Las variables pueden tener el mismo nombre siempre y cuando esten en scopes distintos

# Si no indicamos tipo de dato la variable se toma en el scope global

Alcance de funcion
var tiene elcance de funcion por lo que esta disponible para toda la funcion

Alcance de Bloque
let y cosnt solo esta disponible para el bloque por lo que se asigna al siguiente bloque como un for, if etc.

Argumento es lo que se le pasa a una funcion
Parametro es la asignacion de un argumento para su uso en la funcion

los parametros pueden tener datos por defecto
