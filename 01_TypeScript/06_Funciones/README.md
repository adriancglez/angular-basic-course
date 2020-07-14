# ARGUMENTOS EN FUNCIONES

## Argumentos Obligatorios

Para definir funciones con argumentos se utiliza la sintaxis:

~~~
function name(arg1: type, arg2: type, ...) {
    ...
}
~~~

De esta manera, los argumentos son obligatorios, por lo cual, cuando se invoque a la función `name`, solicitará los valores de todos los argumentos que se hayan declarado.

## Argumentos Opcionales

Son argumentos en los que no es obligatorio asignarle un valor al invocar la función, es decir, puede tener o no un valor definido. Para indicar que un argumento es opcional, se usa la siguiente sintaxis:

~~~
function name(arg1?: type, arg2?: type, ...) {
    ...
}
~~~

**Nota:** Obsérvese que al final de cada identificador de argumento, se le asigna el signo `?`, esto indica que el argumento es opcional, por lo que no es necesario que tenga un valor definido.

## Argumentos con Valor por Default

Son argumentos a los que se les asigna un valor por default, por lo que al invocar la función, no será obligatorio asignarle el valor de ese argumento, ya que tomará el valor que se asigó desde la declaración del argumento, la sintaxis es la siguiente:

~~~
function name(arg1: type = 'value', arg2: type = 'value', ...) {
    ...
}
~~~

**Nota:** Obsérvese que se asigna el valor al final del tipo de dato del argumento con la expresión `= 'value'`.

## Orden de los Tipos de Argumentos

Es recomendable que, si en una función se utilizarán dos o tres tipos de argumentos, el orden de declaración de los mismos sea el siguiente:

1. Obligatorios
2. Opcionales
3. Con Valor por Default