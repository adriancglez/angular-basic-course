1. ¿Qué son las directivas estructurales?: `B`

    a) Son instrucciones que pueden modificar la estructura de los archivos de TypeScript

    b) Son instrucciones que agregan, eliminan o reemplazan elementos HTML en el template

    c) Son formas de crear nuevos elementos en los templates

2. ¿Qué es el siguiente código?: `B`

    ~~~
    import { Component, OnInit } from '@angular/core'

    @Component({
        selector: 'app-about,
        templateUrl: './about.component.html'
    })
    export class AboutComponent implements OnInit {
        constructor() { }

        ngOnInit() { }
    }
    ~~~

    a) Es una directiva

    b) Es un componente

    c) Es una directiva estructural

3. Dado el siguiente componente, ¿Cómo podemos insertarlo en otro template?: `A`

    ~~~
    import { Component } from '@angular/core'

    @Component({
        selector: 'app-heroes-about,
        templateUrl: './about.component.html'
    })
    export class AboutComponent {
        
    }
    ~~~

    a) \<app-heroes-about>\</app-heroes-about>

    b) \<heroes-about>\</heroes-about>

    c) \<about-app>\</about-app>

4. ¿Cuál de las siguientes directivas permiten repetir un bloque de código HTML?: `C`

    a) *ngIf

    b) *ngRepeat

    c) *ngFor

    d) *ngWhile

5. ¿Para qué se utiliza la siguiente instucción?: `B`\
`import { Component } from '@angular/core';`

    a) Es para importar los paquetes que existen en angular

    b) Sirve para importar el componente que se utiliza como decorador para que las clases de TypeScript se conviertan en componentes

    c) Sirve para tener en memoria todos los componentes que se encuentran disponibles en Angular

6. En un componente, ¿Qué hace la siguiente instrucción?: `B`\
`selector: app-about`

    a) Nos permite definir el nombre que tendrá el componente

    b) Nos permite definir el nombre con el cual podremos usar el componente en el HTML

    c) Podemos definir el nombre que tendrá la aplicación cuando usamos los componentes

7. ¿Cuál sería el mejor nombre para el nombre de la clase del siguiente componente?: `C`\
"lista-compras"

    a) export class listaCompras

    b) export class listaDeComprasComponent

    c) export class ListaComprasComponent

8. ¿Cuál sería el mejor nombre del archivo del siguiente componente?`C`\
`export class SobrePaginaComponent`

    a) Sobre-Pagina.component.ts

    b) SobrePagina.component.ts

    c) sobre-pagina.component.ts

    d) Sobre-pagina.component.ts

9. ¿Qué error tiene el siguiente código?: `D`

    ~~~
    import { Component, OnInit } from '@angular/core';

    @Component({
        selector: 'app-about',
        template: './about.component.html'
    })
    export class AboutComponent implements OnInit {
        constructor() {

        }

        ngOnInit() {

        }
    }
    ~~~

    a) El decorador no ha sido importado correctamente

    b) El selector está mal definido

    c) El nombre del componente está mal

    d) El template no es válido

10. ¿Qué beneficios tendremos al usar componentes?: `D` 

    a) Permiten la re-utilización del código

    b) Nos ayudan a segmentar nuestro código en archivos más pequeños que son más fáciles de mantener

    c) Nos ayudan a generar rápidamente páginas o secciones de nuestra aplicación

    d) Todas las anteriores.