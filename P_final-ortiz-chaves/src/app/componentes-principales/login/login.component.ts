import { Component, OnInit } from '@angular/core';
import { EscuelaService } from '../../escuela_curso_service/escuela_curso.service';
import { EscuelaLoginService } from '../../escuela-login/escuela-login.service';
import { login } from '../../interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  log_A : login[] = []

  iniciar_sesion = false;

  form_login : FormGroup

  says = false;


  constructor(
    public fb : FormBuilder,
    private EscuelaLoginService : EscuelaLoginService,
    private router : Router
  ) {

   this.form_login = fb.group({
      correo : new FormControl(''),
      contraseña : new FormControl('')
    })

    this.EscuelaLoginService.enviarLogin().subscribe((s)=>{ this.log_A[0] = s});

    

   }


  ngOnInit(): void {


  }


  formulario_F1(){
   
  }


  recibirLogin(){
    this.log_A[1] = this.form_login.value

     this.says = this.log_A[0].correo.includes(this.log_A[1].correo)

     
    if( this.log_A[1].correo == '' && this.log_A[1].contraseña == '' ){
      
      console.error('correo o contraseña vacios')

    }else if (this.log_A[0].correo.localeCompare(this.log_A[1].correo) != 1 && this.log_A[0].contraseña.localeCompare(this.log_A[1].contraseña) != 1){
      
      console.log('funciona')
      this.router.navigate(['/cursos/curso'])

    }
    else {
      console.error('la cuenta es incorrecta');
    }
  }



 






}
