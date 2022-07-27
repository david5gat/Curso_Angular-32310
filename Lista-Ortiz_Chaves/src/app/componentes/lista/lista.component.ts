import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {

  mostrar : boolean = false;

  cambiar(){
    this.mostrar = !this.mostrar
  }
  
  alumnos = [{
    nombre: 'johan david',
    apellido: 'ortiz chaves',
    puntaje : 8
  },
  {  
    nombre: 'ann',
    apellido: 'wilson',
    puntaje: 5
  },
  { 
    nombre: 'nancy',
    apellido: 'wilson',
    puntaje : 6
  },
  {
    
    nombre: 'robert',
    apellido: 'plant',
    puntaje : 2
  },
  {
    
    nombre: 'jimmy',
    apellido: 'page',
    puntaje : 4
  },
  {
    
    nombre: 'john',
    apellido: 'bonham',
    puntaje : 8
  },
  {
    
    nombre: 'john paul ',
    apellido: 'jones',
    puntaje : 3
  },
  {
    
    nombre: 'carlos humberto',
    apellido: 'santana barragan',
    puntaje : 9
  },
  {
    nombre: 'Michael James',
    apellido: 'Ness',
    puntaje: 6
  },
  {
    nombre:'George Roger',
    apellido:'Waters',
    puntaje: 5
  },
  {
    nombre:'David Jon',
    apellido:'Gilmour',
    puntaje:9
  },
  {
    nombre:'Roger Keith',
    apellido:'Barrett',
    puntaje: 7
  },
  {
    nombre: 'Richard William',
    apellido: 'Wright',
    puntaje:2
  },
  {
    nombre: 'Janis Lyn',
    apellido: 'Joplin',
    puntaje:4
  }
  ];

  
 
  


  constructor() { }

  ngOnInit(): void {
  }

}
