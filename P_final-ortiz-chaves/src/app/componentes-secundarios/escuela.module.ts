import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscuelaRoutingModule } from './escuela-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AppModule } from '../app.module';
import { NgmaterialModule } from '../ngmaterial/ngmaterial.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CursosComponent
    
  ],
  imports: [
    CommonModule,
    EscuelaRoutingModule,
    NgmaterialModule
  ]


})
export class EscuelaModule { }
