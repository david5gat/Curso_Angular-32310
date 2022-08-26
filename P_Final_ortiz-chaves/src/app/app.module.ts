import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgmaterialModule } from './modulosextra/ngmaterial/ngmaterial.module';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgmaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
