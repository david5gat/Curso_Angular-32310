import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-sesion',
  templateUrl: './form-sesion.component.html',
  styleUrls: ['./form-sesion.component.css']
})
export class FormSesionComponent implements OnInit {

  formularioinicio : FormGroup;

  constructor( private fb : FormBuilder ) {
    this.formularioinicio = this.fb.group ({
      nombre: new FormControl('nombre de ejemplo', [Validators.required]),
      apellido: new FormControl('apellido de ejemplo', [Validators.required]),
      correo: new FormControl('correodejeplo@gmail.com',[Validators.required, Validators.email]),
      contraseña: new FormControl('',[Validators.required])
    })
   }


  ngOnInit(): void {
  }


  // formularioinicio : FormGroup = new FormGroup({
  //   nombre: new FormControl('nombre de ejemplo', [Validators.required]),
  //   apellido: new FormControl('apellido de ejemplo', [Validators.required]),
  //   correo: new FormControl('correodejeplo@gmail.com',[Validators.required, Validators.email]),
  //   contraseña: new FormControl('',[Validators.required])
  // })


  enviar_sesion(){
    console.log(this.formularioinicio);

  }
}
