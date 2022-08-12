import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppngMaterialModule } from './app.ng-material.module';
import { EditarDialogComponent } from './componentes/editar-dialog/editar-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { EstudiantesComponent } from './componentes/estudiantes/estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    EditarDialogComponent,
    ToolbarComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppngMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
