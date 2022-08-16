import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { numEstudiantes, cursoNumestudiantes } from '../tabla/tabla.component';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.scss']
})


export class AgregarEstudianteComponent implements OnInit {



  formularioNuevoestudiante : FormGroup;

  constructor(
    private dialogRefedit_est: MatDialogRef<AgregarEstudianteComponent>,
    private Fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data : numEstudiantes
  ) {
     this.formularioNuevoestudiante = this.Fb.group({
      id : new FormControl(cursoNumestudiantes[cursoNumestudiantes.length -1].id + 1),
      curso: new FormControl(data.curso),
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido)
    })
  }


  cerrar(){
    this.dialogRefedit_est.close();
    alert(cursoNumestudiantes[cursoNumestudiantes.length -1].id + 1 )
  }

  agregar(){
    this.dialogRefedit_est.close(cursoNumestudiantes.push(this.formularioNuevoestudiante.value))
  }

  ngOnInit(): void {
  }

}
