import { Component, OnInit } from '@angular/core';
import { EscuelaService } from '../../escuela_curso_service/escuela_curso.service';
import { EscuelaLoginService } from '../../escuela-login/escuela-login.service';
import { login } from '../../interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  log_A : login[] = []

  iniciar_sesion = false;

  form_login : FormGroup




  constructor(
    public fb : FormBuilder,
    private EscuelaLoginService : EscuelaLoginService
  ) {

   this.form_login = fb.group({
      correo : new FormControl(''),
      contraseña : new FormControl('')
    })




   }




  ngOnInit(): void {


  }





  recibirLogin(){



  }










}
