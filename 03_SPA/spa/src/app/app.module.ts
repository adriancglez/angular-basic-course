import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Rutas */
import { APP_ROUTING } from './app.routes';

/* Servicios */

/* Componentes */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeoresComponent } from './components/heores/heores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeoresComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
