import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';


export interface Cursos {
  nombre_profesor: string,
  apellido_profesor: string,
  curso: string,
  comision: number,
  alumnos : number,
  estado:boolean
 }


const curso : Cursos[] = [
  {nombre_profesor : 'david', apellido_profesor: 'ortiz',curso: 'Angular', comision: 1252, alumnos: 23, estado: true},
  {nombre_profesor : 'abner', apellido_profesor: 'garcia',curso: 'Angular', comision: 1252, alumnos: 34, estado: false}
]

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  mandarcurso2(){
    return curso;
  }


  constructor() { }

  mandarCurso(): Observable<Cursos[]>{
    const cursos$ = of (curso);
    return cursos$;
  }


}
