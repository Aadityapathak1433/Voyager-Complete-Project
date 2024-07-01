import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { contact } from 'src/app/Model/contact';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  http:HttpClient=inject(HttpClient);
  @Output()
  Conatactus:EventEmitter<contact>=new EventEmitter<contact>();

  submitIt(form:NgForm){
    this.Conatactus.emit(form.value);
    console.log(form.value );
    this.http.post("https://finalproj-4eec8-default-rtdb.firebaseio.com/contact.json",form.value).subscribe(()=>{});
  }
}
