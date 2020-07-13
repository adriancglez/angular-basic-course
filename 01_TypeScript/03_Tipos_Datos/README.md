# TIPOS DE DATOS

Para declarar un tipo de dato en TypeScript, se realiza mediante la siguiente sintaxis:
~~~
let variable: type = value;
~~~
Los tipos de datos primitivos en TypeScript son:

* string
* number
* boolean

Ejemplo de declaración de tipo en cada variable:

~~~
let variable: string = "value"; //Variable de tipo cadena.
let variable: number = value;   //Variable de tipo numérica.
let variable: boolean = value;  //Variable de tipo booleana.
~~~

Declarar el tipo de dato en una variable puede ser opcional siempre y cuando se le asigne un valor en el momento en que se declara, ya que en ese preciso momento, TypeScript, le asigna el tipo de dato; pero si la variable, cuando se declara no se le asigna un valor, es recomendable especificarle el tipo de dato.

Una caracteristica interesante de TypeScript, es que una variable puede declarse con varios tipos de datos, utilizando el caracter `|` después del tipo de dato. Por ejemplo una variable que deseamos que sea de tipo `string` y `number`:

~~~
let variable: string | number;
~~~