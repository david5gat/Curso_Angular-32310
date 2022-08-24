import { Injectable } from '@angular/core';
import { observable, Observable, of, Subject } from 'rxjs';


export interface cursos {
  profesor : string,
  curso: string,
  comision: number
}


@Injectable({
  providedIn: 'root'
})

export class CursosService {

  cursos : cursos[] = [
    { profesor : 'abner',curso:'Angular',comision: 14234},
    { profesor : 'david',curso:'c++',comision: 34667},
    { profesor : 'juan',curso:'python',comision: 34576},
    { profesor : 'alegandro',curso:'Nest',comision: 34276},
    { profesor : 'daniel',curso:'React',comision: 34378},

   ]

   cursosObserv : Observable<cursos[]>

   cursoSubject: Subject<any>;

  constructor() {
    this.cursosObserv = new Observable<cursos[]>((suscriptor) => {
      suscriptor.next(this.cursos)
    })

    this.cursoSubject = new Subject();
   }


  cursoObservable (){
    return this.cursosObserv;
  }

  // observable <---



  //promesa ---->

  cantidadCursos(){
    return new Promise((resolve,reject)=>{
      if(this.cursos.length > 0){
        resolve({cursos: this.cursos,
                 cantidadCursos: this.cursos.length
        })
      }else{
        reject({
          codigo: 0,
          mensaje:'no existen cursos'
        })
      }
    })
  }

  //promesa <---


  eliminarCurso( ){
    this.cursos.slice(4)
  }

  obtenerObservableCursos(){
    return this.cursoSubject.asObservable();
  }


  filtrarResultado(){
    return of(this.cursos)
  }

}
