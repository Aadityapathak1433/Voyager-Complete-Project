import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor() { }
  showcrd1:boolean=false;
  showcrd2:boolean=false;
  showcrd3:boolean=false;

  showcards1(){
    if(this.showcrd1==false){
      this.showcrd1=true;
    }
    else{
  this.showcrd1=false;
  }
  }
  showcards2(){
    if(this.showcrd2==false){
      this.showcrd2=true;
    }
    else{
  this.showcrd2=false;
  }
  }
  showcards3(){
    if(this.showcrd3==false){
      this.showcrd3=true;
    }
    else{
  this.showcrd3=false;
  }
  }
}
