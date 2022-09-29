import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Cursos } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  cursos: Cursos[] = [
    {nombre_profesor:'david',apellido_profesor:'ortiz',curso:'Angular',comision:2345},
    {nombre_profesor:'kurt',apellido_profesor:'cobain',curso:'Guitarra',comision:5842}
  ];

  

  constructor(
  ) {
  }

  enviarCurso(){
    return from(this.cursos)
  }

}
