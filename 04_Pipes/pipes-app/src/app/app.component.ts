import {Component} from '@angular/core';

import {registerLocaleData} from "@angular/common";
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre      : string    = 'Batman, el caballero de la noche';
  nombre2     : string    = 'gRegOriO adRiAN CobA GOnzAleZ';
  arreglo     : number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI          : number    = Math.PI;
  porcentaje  : number    = 0.23456;
  salario     : number    = 1234.5;
  fecha       : Date      = new Date();
  idioma      : string    = 'es';
  videoUrl    : string    = 'https://www.youtube.com/embed/QWKnSoIheLA';
  mostrarPass : boolean   = true;

  heroe = {
    nombre: 'logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  valorPromesa = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Llegó la data');
    }, 4500);
  });
}
