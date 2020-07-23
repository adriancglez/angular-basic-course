# INTERACCIÓN CON ANGULAR

## CREANDO PRIMER PROYECTO

El equipo de desarrollo de angular, recomienda usar CLI para crear proyectos Angular.

Para crear un proyecto usando CLI:

> ng new app-name

Para levantar el proyecto Angular, escribir el comando:

> ng serve -o

## ESTRUCTURA DEL PROYECTO

Se explican cada uno de las carpetas y archivos que se encuentran dentro de un proyecto de Angular.

### **`e2e`**

La carpeta `e2e` está destinada al manejo de las pruebas de extremo a extremo, es decir para correr pruebas automáticas.

### **`node_modules`**

Es la carpeta que contiene todas las dependencias que se necesitan para desarrollar o para que el proyecto funcione. Las dependencias que se descargan se declaran en el archivo `package.json`.

### **`.editorconfig`**

El archivo `.editorconfig` contiene todas las configuraciones del editor.

### **`angular.json`**

El archivo `angular.json` le indica a Angular cómo es la aplicación y cómo funciona.

### **`package.json`**

El archivo `package.json` define las dependencias que angular va a requerir para su funcionamiento, aquellas dependencias que se necesitan cuando se pase a producción y aquellas que solo se usarán mientras se desarrolla la aplicación.

### **`tsconfig.json`**

El archivo `tsconfig.json` indica el estándar que se trabajará en la aplicación.

### **`tslint.json`**

El archivo `tslint.json` es una configuración definida para trabajar con TypeScript.

### **`src`**

En la carpeta `src` es donde se encuentra la aplicación de Angular, el código fuente; dentro de esa carpeta se tienen las siguientes:

### ***`app`***

En la carpeta `app` se tiene la primera aplicación de Angular.

### ***`assets`***

En la carpeta `assets` se contienen todos los archivos estáticos del proyecto.

### ***`main.ts`***

El archivo `main.ts` es el primer código que Angular va a lanzar para correr la aplicación.