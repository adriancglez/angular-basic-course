# IMPORTACIONES

En muchos de los casos, se requiere importar clases o archivos externos o que se encuentren en otros directorios al archivo sobre el cual se está trabajando, ya que será necesario utilizar propiedades, métodos, funciones, etc de esa clase externa.

Para importar archivos o clases externos, en el archivo donde se desea realizar la importación, en la primera línea, se escribe lo siguiente:

~~~
import { object } from './path/file';
~~~

La clase que se está importando, debe exportarse, usando la expresión `export`, quedando de la siguiente manera:

~~~
export class MyClass {
    ...
}
~~~