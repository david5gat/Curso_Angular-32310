
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LoginComponent } from 'src/app/componentes-principales/login/login.component';
import { EscuelaService } from 'src/app/escuela_curso_service/escuela_curso.service';
import { Cursos } from 'src/app/interfaces';
import { EditCursoComponent } from '../edit-curso/edit-curso.component';

const Curso_c : Cursos[] = []





@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {

  

  dataSource: Cursos[] = Curso_c;


  constructor(
    private escuelaService : EscuelaService,
    public dialog : MatDialog
  ) { 
    
  }


  displayedColumns: string[] = ['nombre_profesor', 'apellido_profesor', 'curso', 'comision','editar'];
 

  edit_curso(elemnt : Cursos){
    let dialorRef = this.dialog.open(EditCursoComponent,{
      width: '250px',
      data: elemnt
    });
  }

   ngOnInit(): void {

     this.escuelaService.enviarCurso().subscribe((resp)=>{
      Curso_c.push(resp)
     })
     console.log(Curso_c);

    }


  }

