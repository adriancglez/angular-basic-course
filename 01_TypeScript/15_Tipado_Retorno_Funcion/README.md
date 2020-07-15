# TIPADO DEL RETORNO DE UNA FUNCIÓN

Para definir el tipo de dato del retorno de una función, se realiza al final de los paréntesis donde se definen los argumentos de esa función, quedando de esta manera:

~~~
const myFunction = (arg: type, ...): type => {
    ...
}
~~~

~~~
const myFunction = (): type => {
    ...
}
~~~

Para declarar el tipo de dato de una función que retorna una Promesa, se define del mismo modo pero con el objeto `Promise<type>`, quedando de la siguiente manera:

~~~
const myFunction = (): Promise<type> => {
    return new Promise((resolve, reject) => {
        ...
    });
}
~~~