# FUNCIONES DE FLECHA

La sintaxis para declarar una función anónima de la forma normal es:

~~~
const myFunction = function(arg: type, ...) {
    ...
}
~~~

Una forma de simplificarla, es por medio de la función de flecha, cuya sintaxis es:

~~~
const myFunction = (arg: type, ...) => {
    ...
}
~~~

Si el cuerpo de la función puede resumirse en una sola línea, se pueden omitir las `{ }`, quedando de esta forma:

~~~
const myFunction = (arg: type, ...) => arg;
~~~

Retornando directamente el argumento que se declaró en la función, ó:

~~~
const myFunction = (arg: type, ...) => arg + 123;
~~~

Realizando la suma del valor de `arg` + `123` y posteriormente retorna el resultado.

Un dato interesante de las funciones de flecha, es que no se pierde el contexto del operador `this` cuando se usa en un objeto, en otra función, etc., como se muestra en el ejemplo:

~~~
const hulk = {
    nombre: 'Hulk',
    smash() {
        setTimeout(() => {
            console.log(`${this.nombre} smash!!!`);
        }, 1000);
    }
}
~~~