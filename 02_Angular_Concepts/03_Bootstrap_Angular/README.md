# BOOTSTRAP EN PROYECTO ANGULAR

Existen diferentes formas de integrar Bootstrap a un proyecto Angular, la forma manual es a través de CDN, integrando las url de stylesheet y script al `index.html`.

> `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">`

> `<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>`

## CREAR COMPONENTES

Existen diferentes formas de crear componentes, pero es una buena práctica, que de hecho el equipo de Angular lo recomienda, es la siguiente:

1. Dentro de la carpeta `src/app`, crear una carpeta llamada `components`.
2. Dentro de la carpeta `components`, crear una carpeta con el nombre del componente.
3. Dentro de esa carpeta crear el archivo que será el componente a crear, se recomienda que al final del nombre contenga `.component.ts`
    > myclass.component.ts

4. En el archivo, crear una clase, por convención la primera letra del nombre de la clase debe ser mayúscula, seguido de la palabra `Component`.
    ~~~
    class MyClassComponent {
        
    }
    ~~~
5. Importar el decorador  `Component`.
    ~~~
    import { Component } from '@angular/core';
    ~~~

    Quedando de esta forma:

    ~~~
    import { Component } from '@angular/core';

    class MyClassComponent {
        
    }
    ~~~

6. Anotar la clase con el decorador `@Component` y asignar las configuraciones necesarias: `selector` y `template` ó `templateUrl`

    ~~~
    @Component({
        selector: app-name,
        template: `<h1>Header Component</h1>`
    })
    ~~~

    Quedando de la siguiente forma:

    ~~~
    import { Component } from '@angular/core';

    @Component({
        selector: app-name,
        template: `<h1>Header Component</h1>`
    })
    class MyClassComponent {
        
    }
    ~~~

    **Nota:** Existen dos formas de insertar contenido `HTML`, ya sea con `template` ó `templateUrl`. `template` inserta directamente el HTML literal, en `templateUrl` se asigna una URL que apunta a un archivo `.html` que contiene el código HTML a mostrar.

7. Definir que la clase será exportada con la palabra reservada `export` en la clase.

    ~~~
    export class MyClassComponent {
        
    }
    ~~~

    Quedando de la siguiente manera:

    ~~~
    import { Component } from '@angular/core';

    @Component({
        selector: app-name,
        template: `<h1>Header Component</h1>`
    })
    export class MyClassComponent {
        
    }
    ~~~

8. En el archivo `app.module.ts`, importar el componente creado

    ~~~
    import { MyClassComponent } from './components/componentname/myclass.component.js';
    ~~~

9. En el array `declarations` declarar el componente importado

    ~~~
    declarations: [
        ...,
        MyClassComponent
    ],
    ~~~

10. Invocar el objeto `selector` del decorador `@Component` en el archivo `.html` donde se desee mostrar la información, mediante:

    ~~~
    <app-name></app-name>
    ~~~