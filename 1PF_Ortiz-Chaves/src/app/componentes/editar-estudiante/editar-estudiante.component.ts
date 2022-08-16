import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { numEstudiantes } from '../tabla/tabla.component';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.scss']
})
export class EditarEstudianteComponent implements OnInit {


  formularioNuevoestudiante : FormGroup;

  constructor(
    private dialogRef_edit_estud : MatDialogRef<EditarEstudianteComponent>,
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

  cerrar(){
    this.dialogRef_edit_estud.close()
  }

  actualizar(){
    this.dialogRef_edit_estud.close(this.formularioNuevoestudiante.value)
  }

  ngOnInit(): void {
  }

}
