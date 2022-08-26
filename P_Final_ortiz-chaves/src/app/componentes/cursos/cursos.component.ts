import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { subscribeOn, Subscription } from 'rxjs';
import { AdminService, Cursos } from '../../servicios/admin.service';




@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {


  Cursos: Cursos[] = [ {nombre_profesor : 'david', apellido_profesor: 'ortiz',curso: 'Angular', comision: 1252, alumnos: 23, estado: true} ]


  dataSource : MatTableDataSource<Cursos> = new MatTableDataSource(this.Cursos);

  displayedColumns = ['nombre_profesor', 'apellido_profesor' , 'curso', 'comision', 'alumnos', 'estado']


  @ViewChild(MatTable) tabla!: MatTable<Cursos>


  constructor(
    private AdminService : AdminService
  ) {

    this.Cursos = AdminService.mandarcurso2()


  }


  obtenerCurso(){
    const nuevoProfesor ={
      nombre_profesor : 'david', apellido_profesor: 'ortiz',curso: 'Angular', comision: 1252, alumnos: 23, estado: true
    }
    this.Cursos.push(nuevoProfesor)
    console.log(this.Cursos);

    //  this.AdminService.mandarCurso().subscribe((cursos$)=>{ this.Cursos = cursos$})
  }


  ngOnInit(): void {
    this.obtenerCurso()
    console.log(this.dataSource);

    console.log(this.Cursos);
    console.log(this.AdminService.mandarCurso)
  }

}
