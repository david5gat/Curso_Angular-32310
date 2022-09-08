import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscuelaRoutingModule } from './escuela-routing.module';
import { CursosComponent } from './cursos/cursos.component';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    EscuelaRoutingModule,

  ]
})
export class EscuelaModule { }
