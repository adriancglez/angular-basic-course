# SINGLE PAGE APPLICATION (SPA)

## TEMARIO DE LA SECCIÓN

En esta sección aprenderemos sobre los siguientes temas:

1. Crearemos una aplicación de una sola página (Single Page Application)
2. Creación de proyectos de Angular usando el CLI
3. Instalando bootstrap o librerías de terceros usando Angular-CLI
4. Creación de rutas de nuestra aplicación
5. Uso de RouterLink y RouterLinkActive para movernos de página y colocar clases a los elementos activos.
6. Uso del modulo Router, que nos permite movernos de página mediante código.
7. Obtención de parámetros vía URL.
8. Configuración de nuestro primer servicio en Angular para el manejo de la data
9. Breve introducción a los Pipes
10. Uso del buscador del navbar para realizar una consulta a nuestro arreglo de héroes.

## INICIO DEL PROYECTO SPA

### CREACIÓN DE UN NUEVO PROYECTO

Para crear un nuevo proyecto, usamos el comando:

> ng new app-name

### CREACIÓN DE COMPONENTES

Dentro de la carpeta `src/app`, crear una carpeta llamada `components`, dentro de ella, crear una carpeta llamada `shared`, que contrendrá los componentes que se utilizarán siempre.

Dentro de la carpeta raíz del proyecto desde CLI, crearemos dos componentes `navbar` y `home` con los comandos:

> ng g c components/shared/navbar

> ng g c components/home

respectivamente.

### INTEGRACIÓN DE BOOTSTRAP

La librería Bootstrap la integraremos vía CLI, con el comando:

> npm install bootstrap --save

Nos pedirá dos librerías adicionales que Bootstrap necesita para funcionar: `jquery.js` y `popper.js`, las instalamos usando los comandos:

> npm install jquery --save

> npm install popper.js --save

respectivamente.

Para indicarle a Angular que haga uso de las librerías Bootstrap, JQuery y Popper, en la página prinipal, debemos declararlas en el archivo `angular.json` en los array `styles` y `scripts`:

    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        ...
    ],
    "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/popper.js/dist/umd/popper.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        ...
    ]

### CONTENIDO EN EL NAVBAR Y HOME

Elegir un navbar de la documentación de Bootstrap e integrarlo en el archivo `html` del componente `NavBar`.

Elegir un jumbotron de la documentación de Bootstrap e integrarlo en el archivo `html` del componente `Home`.

### CREANDO NUEVOS COMPONENTES: ABOUT Y HEROES

Usando el comando CLI para crear componentes, creamos dos componentes con los nombres `about` y `heroes`:

> ng g c components/about

> ng g c components/heroes

respectivamente.