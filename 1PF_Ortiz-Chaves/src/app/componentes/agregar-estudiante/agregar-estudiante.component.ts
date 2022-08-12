import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { numEstudiantes } from '../tabla/tabla.component';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.scss']
})


export class AgregarEstudianteComponent implements OnInit {

  // formularioNuevoestudiante : FormGroup;

  constructor(){}


  cerrar(){

  }

  agregar(){
    alert('hola mundo')
  }

  ngOnInit(): void {
  }

}
