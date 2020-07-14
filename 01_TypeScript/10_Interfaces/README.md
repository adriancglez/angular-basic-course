# Interfaces

Las interfaces son formas de definir reglas para que los integrantes de un proyecto las sigan si requieren utilizar o realizar cambios en los objetos.

La sintaxis para declarar una interfaz es la siguiente:

~~~
interface MyClass {
    item1: type,
    item2: type,
    item3?: type,
    ...
}
~~~

**NOTA:** Obsérvese que a la variable `item3` se le puso el signo `?`, esto indica que esa propiedad es opcional.

Para especificar un objeto con un tipo de dato de interfaz, se realiza mediante la siguiente sintaxis:

~~~
const myObject: MyClass = {
    ...
}
~~~

Para especificar el tipo de dato de interfaz de un argumento de una función, se realiza mediante la siguiente sintaxis:

~~~
const myFunction = (myObject: MyClass) => {
    ...
}
~~~