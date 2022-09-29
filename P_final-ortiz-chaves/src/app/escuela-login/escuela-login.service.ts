import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, observable, of, from } from 'rxjs';
import { EscuelaService } from '../escuela_curso_service/escuela_curso.service';
import { login } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class EscuelaLoginService {

   login : login[] = [
    {correo:'david@gmail.com',contraseña:'hola12345'},
   ]

   sesionObservable: BehaviorSubject<login[]>


  constructor(
    
  ) {

    this.sesionObservable = new BehaviorSubject(this.login);

     this.recibir_Login

  }


   recibir_Login(login_Us : login){
    
    
    
   }

  enviarLogin(){

    return from(this.login)

  }


}
