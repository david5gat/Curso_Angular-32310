import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  
  alumnos: string[] = ["david","pedro","jose","manuel","juan","ronaldinho"]

  constructor() { }

  ngOnInit(): void {
  }

}
