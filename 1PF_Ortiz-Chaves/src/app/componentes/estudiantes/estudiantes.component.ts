import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { numEstudiantes } from '../tabla/tabla.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { cursoNumestudiantes } from '../tabla/tabla.component';
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

  @ViewChild(MatTable) tabla!: MatTable<numEstudiantes>

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
     const agregarRef = this.dialogNuevoest.open(AgregarEstudianteComponent,{
      width: '400px',
      data: this.formularioNuevoestudiante
  })

  agregarRef.afterClosed().subscribe( respuesta => {
    if(respuesta){
      this.tabla.renderRows()
    }
  })
  };

  editarEst( elemnto : numEstudiantes ){
    const editarRef = this.dialogNuevoest.open(EditarEstudianteComponent,{
     width: '400px',
     data: elemnto
    })

    editarRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSourceEst.data.find(numEstudiantes => numEstudiantes.id === resultado.id);
        const index = this.dataSourceEst.data.indexOf(item!);
        this.dataSourceEst.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
 };

}


