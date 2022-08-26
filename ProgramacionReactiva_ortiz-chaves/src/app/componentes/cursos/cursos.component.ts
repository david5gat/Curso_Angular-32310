import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { elementAt, filter, map, Observable, observable, Subscription } from 'rxjs';
import { cursos, CursosService } from 'src/app/servicios/cursos.service';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';

 let  dataElement : cursos[] = [];

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit,OnDestroy {


  mostrarColumnas : string[] = ['profesor','curso','comision']

  mostrarCursos$ : Observable<any>


  // este deberia ser el elemento que se envia a la tabla pero no entiendo por que no se renderisa



  cursosSuscripcion : Subscription;

  constructor(
    private cursosService : CursosService
  ) {
    this.cursosService.cursoObservable().subscribe((cursos)=>{
      dataElement = cursos;
    })

    console.log('este es el dataelement',dataElement);

    this.cursosService.cantidadCursos().then((cursos)=>{
      console.log(cursos)
    }).catch((error)=>{
      console.log(error);
    })




 this.cursosSuscripcion =  this.cursosService.obtenerObservableCursos().subscribe((cursos) => {
  this.mostrarCursos$ = cursos;
});


    this.mostrarCursos$ = this.cursosService.cursoObservable()

    console.log(this.mostrarCursos$);

  }




  ngOnInit(): void {

    this.cursosService.filtrarResultado().pipe(
      map( (cursos:any[])=> cursos.filter((curso)=>curso.curso === 'Angular') )
    ).subscribe((curso)=> {console.log('este es el pipe ASYNC',curso)})
  }

  ngOnDestroy(): void {
    this.cursosSuscripcion.unsubscribe()
  }

}
