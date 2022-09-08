import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes-principales/login/login.component';
import { NgmaterialModule } from './ngmaterial/ngmaterial.module';
import { EscuelaService } from './escuela_curso_service/escuela_curso.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgmaterialModule
  ],
  exports:[
    NgmaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
