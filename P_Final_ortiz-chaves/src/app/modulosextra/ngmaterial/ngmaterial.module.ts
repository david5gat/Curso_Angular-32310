import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  exports:[
    MatSliderModule,
    MatTableModule,
    MatIconModule
  ],
  imports: [
    CommonModule
  ]
})
export class NgmaterialModule { }
