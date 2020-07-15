# CLASES

## Definición

Para declarar una clase en TypeScript, se realiza mediante la siguiente sintaxis:

~~~
class MyClass {
    ...
}
~~~

**NOTA:** Una recomendación al declarar identificadores o nombres de una clase, es capitalizar (poner en mayúscula) la primera letra, como se muestra en el fragmento de declaración: `MyClass`.

Cuando se declara una variable y se desee especificar el tipo de dato, y se quiere que este sea una clase, se realiza de la siguiente manera:

~~~
const variable: MyClass;
~~~

Si bien, si se inicializa el valor de una variable al declararla, no será necesario definir su tipo de dato, puesto que internamente lo define al inicializar el valor:

~~~
const variable = new MyClass(); // Internamente realiza la definición del tipo const variable: MyClass.
~~~

## Constructores

Es una función que se ejecuta cuando se crea una nueva instancia de una clase. La sintaxis para definir un constructor es la siguiente:

~~~
constructor() {
    ...
}
~~~

Cuando se declaran propiedades en una clase, forzosamente TypeScript nos obliga a inicializarlas, para ello, ocupamos los constructores de la siguiente manera:

~~~
class MyClass {
    prop1: type;
    ...

    constructor(prop1: type, ...) {
        this.prop1 = prop1;
        ...
    }
}
~~~

Una forma de simplificar el hecho de crear propiedades y luego inicializarlas en el constructor, es usando la expresión `public` en cada argumento del constructor.

~~~
constructor(public prop1: type, ...) {
}
~~~