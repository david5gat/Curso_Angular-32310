import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Curso, numEstudiantes } from '../tabla/tabla.component';
import { EstudiantesComponent } from '../estudiantes/estudiantes.component';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.scss']
})
export class EditarDialogComponent implements OnInit {

  formulario:FormGroup;

  constructor(
    private dialogEst : MatDialog,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Curso
  ) {
    this.formulario = this.fb.group({
      nombre: new FormControl(data.nombre),
      comision: new FormControl(data.comision),
      profesor: new FormControl(data.profesor),
      numeroEstudiantes: new FormControl(data.numeroEstudiantes),
      matriculaAbierta: new FormControl(data.matriculaAbierta)
    })
   }




   ngOnInit(): void {
  }

  actualizar(){
    this.dialogRef.close(this.formulario.value)
  }

  cerrar(){
    this.dialogRef.close()
  }

  verEstudiantes(){
     this.dialogEst.open(EstudiantesComponent,{
      width: '400px',
      data: this.formulario
    })
  }


}
