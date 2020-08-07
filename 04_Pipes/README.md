# PIPES

Un `pipe` es un método o función, el cual, reciebe `x` cantidad de argumentos (por lo menos uno), que va a procesar y va a salir cualquier cosa que necesitemos. La salida de ese método/función no muta (altera) al objeto o valor que se recibe como argumento.

## ¿QUÉ APRENDEREMOS EN ESTA SECCIÓN?

 A continuación vamos a entrar a profundidad sobre el tema de los `pipes`, que no es más que una transformación visual de la data.

En detalle veremos:

1. Pipes uppercase y lowercase
2. Pipe Slice
3. Pice Decimal
4. Pipe Percent
5. Pipe Currency
6. Pipe Json
7. Pipe Async
8. Pipe Date
9. Pipes personalizados
    * Capitalizar palabras y nombres
    * Creación de un pipe, que permite cargar recursos externos de forma segura.

Al final de la sección tendremos una tarea para afianzar los conocimientos creando un pipe personalizado que nos permitirá ocultar un texto a voluntad.

## INTRODUCCIÓN A LOS `PIPES`

Los `pipes` sirven para transformar la `data` de manera visual.

Los `pipes` se llaman así porque utilizan el caracter de la tubería para poder trabajar cone llos en el `html`. La sintaxis para invocar un `pipe` en el `html`:

    {{ my_var | pipe }}

### `PIPE` UPPERCASE/LOWERCASE

El `pipe` upperase nos permitirá visualizar en mayúscula el dato que una variable, mientras que el `pipe` lowercase nos permitirá visualizar el texto en minúscula.

Suponiendo que tenemos la expresión `value_expression`, la cual contiene la cadena `'Hola mundo'`, y queremos tranformarla a mayúscula, usamos el `pipe` llamado `uppercase`:

    {{ value_expression | uppercase }}

### `PIPE` SLICE

El `pipe` slice nos permite cortar cosas, ya sea un texto o un arreglo u otras cosas, ya sea a partir de un punto ó entre un rango:

    {{ value_expression | slice : start [ : end ] }}

Algo interesante es que el `pipe` slice también lo podemos aplicar a la directiva `*ngFor` cuando recorramos un arreglo o un objeto

    <li *ngFor="let i of collection | slice:1:3">{{i}}</li>

### `PIPE` DECIMAL

El `pipe` decimal nos permite formatear o redondear los valores numéricos

    {{ value_expression | number [ : digitsInfo [ : locale ] ] }}

### `PIPE` PERCENT

Nos permite trabajar con porcentajes, redondear un valor y convertirlo a porcentaje.

    {{ value_expression | percent [ : digitsInfo [ : locale ] ] }}

### `PIPE` CURRENCY

El `pipe` nos permite aplicar el formato de moneda según el país el que especifiquemos un valor.

    {{ value_expression | currency [ : currencyCode [ : display [ : digitsInfo [ : locale ] ] ] ] }}

### `PIPE` JSON

El `pipe` json nos permite literalmente mostrar el contenido de un objeto JavaScript en la página `html`.

    {{ value_expression | json }}

### `PIPE` ASYNC

El `pipe` nos permite trabajar con promesas, es decir, si pintamos una variable en el `html`, cuyo valor se espera de alguna consulta o petición, la pintará en cuanto se reciba.

    {{ obj_expression | async }}

### `PIPE` DATE

El `pipe` nos permite formatear de muchas formas una fecha, para que sea visualizada según lo deseemos o necesitemos.

    {{ value_expression | date [ : format [ : timezone [ : locale ] ] ] }}

### `PIPE` PERSONALIZADO

Los `pipes` personalizados consiste en crear nuestros propios `pipes` con nuestras reglas para mostrar la información en el `HTML`.

Para crear nuestros propios `pipes`, debemos ejecutar el comando:

    ng g p pipes/my-pipe

Posteriormente, en el archivo `/pipes/my-pipe.ts` en la función `transform` declarar la lógica para mostrar la data, los argumentos de `transform` son `value`, es la data a transformar, mientras que `...Args[]` son los valores o parámetros que puede recibir el `pipe`.

En el `html`, invocar el `pipe` de forma normal, con el `name` que tiene declarado en el decorador `@Pipe`.