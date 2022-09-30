
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LoginComponent } from 'src/app/componentes-principales/login/login.component';
import { EscuelaService } from 'src/app/escuela_curso_service/escuela_curso.service';
import { Cursos } from 'src/app/interfaces';
import { EditCursoComponent } from '../edit-curso/edit-curso.component';

const Curso_c : Cursos[] = [];



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {

  @ViewChild(MatTable) tabla! : MatTable<Cursos>

  dataSource: MatTableDataSource<Cursos> = new MatTableDataSource(Curso_c)


  constructor(
    private escuelaService : EscuelaService,
    public dialog : MatDialog
  ) { 
    
  }


  displayedColumns: string[] = ['nombre_profesor', 'apellido_profesor', 'curso', 'comision','editar'];
 

  edit_curso(element : Cursos){
    const dialogRef = this.dialog.open(EditCursoComponent,{
      width: '300px',
      data: element
    });

    dialogRef.afterClosed().subscribe(resultado  =>{
      if(resultado){
        // buscamos la posicion del elemento de la tabla y lo cargamos los nombres tienen que concidir 
        // entre formularios para no tener que crear una nueva constante para hacer concidir los nombres
        // y si no, no nos va a cargar en la tabla y va a aprecer vacia
        const item = this.dataSource.data.find(curso => curso.comision === resultado.comision);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows()
      }
    })
  }


   ngOnInit(): void {

     this.escuelaService.enviarCurso().subscribe((resp)=>{  
       
        if( Curso_c.length > 1 ){
          console.error('el arreglo ya esta cargado')
         }else{
          Curso_c.push(resp)
         }
     })
     console.log(Curso_c);

    }


  }

