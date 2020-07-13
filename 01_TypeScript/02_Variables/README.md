# VARIABLES

Para definir variables, podemos usar cualquiera de estas expresiones:

* var
* let

Es recomendable usar `let` porque con ella, se define un espacio en memoria para almacenar el valor asignado. Otra ventaja es que nos indica un error si intentamos redeclarar la misma variable en el mismo scope.

~~~
let mensaje = "Hola";
~~~

Para el uso de las constantes, es recomendable usar la expresión `const`. Esto nos evitar cambiar el valor a una contante.

~~~
const SALUDO = "Hola";
~~~