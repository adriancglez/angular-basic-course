# PROMESAS

Las promesas básicamente sirven para ejecutar un código sin bloquedar el código de la aplicación.

La sintaxis para declarar una Promesa es la siguiente:

~~~
const promise = new Promise();
~~~

**NOTA:** es probable que marque un error la expresión `new Promise()`, esto es porque no se puede traducir directamente a ES5, para ello se debe realizar un cambio en el archivo `tsconfig.json`, en la clave: `"target": "es6"`.

El objeto `Promise()` recibe una función con dos argumentos, los cuales son:

1. resolve: se retorna cuando todo funciona o sucede correctamente.
2. reject: se retorna cuando sucede algún error.
    
Quedando de la siguiente manera:

~~~
const prom1 = new Promise((resolve, reject) => {
    ...
});
~~~

Al invocar a una promesa, existen dos funciones que se pueden llamar, las cuales son:

1. then: es lo que se ejecutará cuando se realice todo exitósamente.
2. catch: es lo que se ejecutará cuando sucede algún error.

Cada función recibe como argumento una función `() => {}` y esta función recibe como argumento una variable `arg` que es la que contendrá el valor recibido por la función `resolve` ó `reject`, la sintaxis para invocar una promesa con resultado exitoso es:

~~~
promise.then(arg => arg);
~~~

Para invocar una promesa, cuyo proceso es probable que genere un error, debe atraparse con la función `catch`, la sintaxis sería la siguiente:

~~~
promise.then(arg => arg).catch(err => err);
~~~

## Tipado de Promesas

Para especificar el tipo de dato que retorna una promesa, se realiza mediante la siguiente sintaxis.

* Para una variable:

~~~
const promise: Promise<type> = new Promise(...
~~~

* Para una función:

~~~
const promise = (arg): Promise<type> => {
    ...
}
~~~

**NOTA:** El tipo de dato a especificar en una promesa debe ser aquél que se va a retornar si la promesa ejecuta correctamente.