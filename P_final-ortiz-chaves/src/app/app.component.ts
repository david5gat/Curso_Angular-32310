import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'P_final-ortiz-chaves';

  constructor(
    private route : Router
    ){
    
  }

  ngOnInit(){
    setTimeout(() => {
      this.route.navigate(['login'])
    }, 3000)
    
  }
}
