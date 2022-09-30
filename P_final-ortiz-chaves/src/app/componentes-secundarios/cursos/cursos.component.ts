
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  @ViewChild(MatTable) tabla! : MatTable<Cursos>

  dataSource: MatTableDataSource<Cursos> = new MatTableDataSource(Curso_c)


  constructor(
    private escuelaService : EscuelaService,
    public dialog : MatDialog
  ) { 
    
  }


  displayedColumns: string[] = ['nombre_profesor', 'apellido_profesor', 'curso', 'comision','editar'];
 

  edit_curso(elemnt : Cursos){
    let dialogRef = this.dialog.open(EditCursoComponent,{
      width: '300px',
      data:elemnt
    });

    dialogRef.afterClosed().subscribe(result  =>{
      if(result){
        const item = this.dataSource.data.find(curso => curso.comision === result.comision_C);
        const index = this.dataSource.data.indexOf(item!);
        
        
        this.dataSource.data[index] = result;
        this.tabla.renderRows()
      }else{
        console.log(result);
        
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

