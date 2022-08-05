import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms_Ortiz-chaves';

  form_ceccion = new FormGroup ({
  nombre : new FormControl(''),
  apellido: new FormControl(''),
  corrreo: new FormControl(''),
  contraseña: new FormControl('')
  })
}


