# TYPESCRIPT

TypeScript trabaja sobre archivos `.ts`.

Para compilar los archivos `.ts` ejecutar el comando en la carpeta donde se encuentra el archivo:

~~~
tsc archivo.ts
~~~

Esto nos genera un archivo `.js`.

Para compilar de una forma interactiva, se deben realizar configuraciones adicionales:

1. Ejecutar el comando que genera un archivo `tsconfig.json`:

    ~~~
    tsc --init
    ~~~

2. Poner TypeScript en modo observador con el comando:

    ~~~
    tsc -w
    ~~~
   
   ó
   
   ~~~
   tsc --watch
   ~~~