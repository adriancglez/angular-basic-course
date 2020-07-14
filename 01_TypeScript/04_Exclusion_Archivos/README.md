# EXCLUIR ARCHIVOS A TRADUCIR

Existe un detalle al transpilar los archivos TypeScript, ya que, cuando ejecutamos el comando modo observador, transpila todos los archivos ts que se encuentren en el proyecto.

Para seleccionar ciertos archivos a transpilar cuando ejecutamos el modo observador, en el archivo `tsconfig.json`, creamos una nueva clave, del siguiente modo:

~~~
{
    "exclude": ["dirname", ...],
    "compilerOptions": {
        ...
    }
    ...
}
~~~