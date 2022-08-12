import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { numEstudiantes } from '../tabla/tabla.component';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.scss']
})
export class EditarEstudianteComponent implements OnInit {


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

}
