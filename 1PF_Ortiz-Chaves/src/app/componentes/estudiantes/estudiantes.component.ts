import { Component, Inject, OnInit } from '@angular/core';
import { numEstudiantes } from '../tabla/tabla.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { cursoNumestudiantes } from '../tabla/tabla.component';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AgregarEstudianteComponent } from '../agregar-estudiante/agregar-estudiante.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  columnasEst: String[] = ['Id','Curso','Nombre','Apellido','acciones']

  dataSourceEst: MatTableDataSource<numEstudiantes> = new MatTableDataSource(cursoNumestudiantes)

  formularioNuevoestudiante : FormGroup;

  constructor(
    private dialogNuevoest : MatDialog,
    private Fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data : numEstudiantes
  ) {
    this.formularioNuevoestudiante = this.Fb.group({
      id : new FormControl(data.id),
      curso: new FormControl(data.curso),
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido)
    })
  }

  ngOnInit(): void {
  }

  agregarEst(){
     this.dialogNuevoest.open(AgregarEstudianteComponent,{
      width: '400px',
      data: this.formularioNuevoestudiante
  })
  };

  editarEst( elemnto : numEstudiantes ){
    this.dialogNuevoest.open(EditarEstudianteComponent,{
     width: '400px',
     data: elemnto
    })

    console.log('hola mundo',elemnto);

 };

}


