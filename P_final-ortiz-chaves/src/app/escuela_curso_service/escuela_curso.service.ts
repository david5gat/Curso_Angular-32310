import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  cursos: Cursos[] = [
    {nombre_profesor:'david',apellido_profesor:'ortiz',curso:'Angular',comision:2345}
  ];

  enviarCursoObs: Observable<Cursos[]>

  constructor(
  ) {
    this.enviarCursoObs = new Observable<Cursos[]>((d) => {
      d.next(this.cursos)
    })
  }

  enviarCurso(){
    console.log(this.enviarCursoObs.subscribe)
  }

}
