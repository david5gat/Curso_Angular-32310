import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { NombrepropioPipe } from './componentes/nombrepropio.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaComponent,
    NombrepropioPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
