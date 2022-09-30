import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cursos } from 'src/app/interfaces';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.scss']
})
export class EditCursoComponent implements OnInit {

  form_EditCurso: FormGroup;

  
  constructor(
    private dialogRef : MatDialogRef<EditCursoComponent>,
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data : Cursos 
  ) { 
    this.form_EditCurso = fb.group({
      // el formulario tiene que concidir con el nombre de la @Inject(MAT_DIALOG_DATA) public data : Cursos
      // y si no nos va a aparecer un array vacio que no se actualiza en 
      // la tabla  o incertar los diferentes nombres manualmente a la data
      nombre_profesor : new FormControl(data.nombre_profesor),
      apellido_profesor : new FormControl(data.apellido_profesor),
      curso : new FormControl(data.curso),
      comision : new FormControl(data.comision)
    })
  }

  ngOnInit(): void {
  }


  guardar(){
    this.dialogRef.close(this.form_EditCurso.value)
  }

  salir(){
    this.dialogRef.close()
  }

}
