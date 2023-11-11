import { Component } from '@angular/core';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent {
  openModalSwithLogin:boolean | undefined;
  
  openModalLogin(){
    this.openModalSwithLogin = true;
  }
}
