import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { user } from 'src/app/Model/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor() { }
  http:HttpClient=inject(HttpClient);
  @Output()
  UserDetails:EventEmitter<user>=new EventEmitter<user>();

  submitForm(form:NgForm) {
    this.UserDetails.emit(form.value);
    console.log(form.value );
    this.http.post("https://finalproj-4eec8-default-rtdb.firebaseio.com/user.json",form.value).subscribe(()=>{});
  }

}
