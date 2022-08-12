import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { numEstudiantes, Curso } from '../tabla/tabla.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  formularioEst:FormGroup;

  constructor(

    private fbEst:FormBuilder,

    @Inject(MAT_DIALOG_DATA) private data: numEstudiantes

  ) {
    this.formularioEst = this.fbEst.group({
      id: new FormControl(data.id),
      Curso: new FormControl(data.curso),
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido)
    })
  }

  ngOnInit(): void {
  }

}
