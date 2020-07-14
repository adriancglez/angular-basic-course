# DESESTRUCTURACCIÓN DE OBJETOS Y ARREGLOS

Esto nos permite crear variables para cada item de un objeto o arreglo, de tal modo que accedamos a los valores cada uno de ellos por nombre de variables y no por índice como normalmente se conoce. Este proceso es conocido como la desestructuración.

## Desestructuración de Objetos

Para desestructurar un objeto, dado un objeto con sus items:

~~~
const myObject = {
    item1: 'value',
    item2: 'value',
    ...
}
~~~

Creamos variables con el **mismo nombre de cada item**, usando la siguiente sintaxis:

~~~
const {item1, item2, ...} = myObject;
~~~

Y de esta manera, se accede a los valores de cada item del objeto mediante las variables `item1`, `item2`, `...` declaradas mediante `{ }`.

Para aplicar el mismo procedimiento a una función, declaramos como argumentos las variables; continuando el ejemplo anterior y usando el mismo objeto declarado, se realiza mediante las siguiente sintaxis:

~~~
const myFunction = ({item1, item2, ...}: any) => {
    //Aquí se pueden usar las variables `item1`, `item2`, ...
}
~~~

**NOTA:** En la declaración de las variables de referencia a los items del objeto, no importa el orden de declaración de las mismas.

## Desestructuración de Arreglos

Para desestructurar un arreglo, dato un arreglo:

~~~
const myArray = ['item1', 'item2', ...];
~~~

Se crean variables, las cuales hacen referencia a un item del arreglo, tal como se realiza con los objetos, la sintaxis para una arreglo es:

~~~
const [item1, item2, ...] = myArray;
~~~

Y de esta manera se accede a los valores de cada item del arreglo mediante el nombre de cada variable declarada: `item1`, `item2`, `...` declaradas mediante `[ ]`.

Para aplicar el mismo procedimiento a una función, declaramos como argumentos las variables; continuando el ejemplo anterior y usando el mismo arreglo declarado, se realiza mediante las siguiente sintaxis:

~~~
const myFunction = ([item1, item2, ...]: any) => {
    //Aquí se pueden usar las variables `item1`, `item2`, ...
}
~~~

**NOTA:** En la declaración de variables de referencia a los items de un arreglo, **SI** importa el orden de declaración pero no importa el nombre.