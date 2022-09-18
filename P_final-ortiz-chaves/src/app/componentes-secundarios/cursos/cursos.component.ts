
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EscuelaService } from 'src/app/escuela_curso_service/escuela_curso.service';
import { Cursos } from 'src/app/interfaces';

const Curso_c : Cursos[] = []





@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {

  

  dataSource: Cursos[] = Curso_c


  constructor(
    private escuelaService : EscuelaService
  ) { 
    
  }


  displayedColumns: string[] = ['nombre_profesor', 'apellido_profesor', 'curso', 'comision'];
 


   ngOnInit(): void {
     this.escuelaService.enviarCurso().subscribe((resp)=>{
      Curso_c.push(resp)
     })
     console.log(Curso_c);

    }


  }

