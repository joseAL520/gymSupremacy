import { Component } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent {
  openRegistrer:boolean | undefined;
  openListRegistrer: boolean | undefined;


  openModalLogin(){
    this.openRegistrer = true;
    this.openListRegistrer=false;
   
  }
  
  openRegistrerUser(){
    this.openListRegistrer=true;
    this.openRegistrer = false;
   
  }


}
