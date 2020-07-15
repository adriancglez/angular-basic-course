# DECORADORES DE CLASES

Un decorador, es algo que se va a colocar antes de la definición de la clase, se utiliza la anotación `@`, sirve para añadir funcionalidades a una clase. En otras palabras, es una función que expande la clase añadiéndole características y funcionalidades propias en un nivel superior.

Para habilitar el uso de decoradores en TypeScript, se debe buscar en el archivo `tsconfig.json` y descomentar la clave `experimentalDecorators`:

~~~
{
    "compilerOptions": {
        ...
        /* Experimental Options */
        "experimentalDecorators": true,
        ...  
    }
}
~~~

La sintaxis básica para crear un decorador de clase es:

1. Crear una función en la parte superior de la declaración de una clase.

    ~~~
    function myFuction(arg: Function) {
        ...
    }
    ~~~
   
2. En la parte superior de la declaración de una clase, llamar a la función anteponiendo la anotación `@`.
    ~~~
    @myFunction
    export class MyClass {
        ...
    }
    ~~~