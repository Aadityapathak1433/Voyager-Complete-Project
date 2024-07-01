import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Users } from '../../users';
import { user } from 'src/app/Model/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor( private http: HttpClient) {
   }
   show:boolean=true;
  submitForm(form:NgForm) {
    console.log(form.value.password)
    this.http.post("http://localhost:8008/api/v1/admin",form.value).subscribe((res)=>{
      console.log(res);
      
    });

  }
  showsignin(){
    this.show=false;
  }
 
}
