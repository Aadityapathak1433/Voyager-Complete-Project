import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from 'src/app/Model/user';
import { VisibilityService } from 'src/app/VisibilityService';
import { AdminViewService } from 'src/app/admin-view.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  isVisible: boolean = true;
  constructor( private http: HttpClient,private visibilityService: VisibilityService,private adminview:AdminViewService) {
  }
  submitForm(form:NgForm) {
    console.log(form.value );
    const reqBody = {
      "emailId": form.value.userName,
      "password":form.value.password
    }
    this.http.post("http://localhost:8008/api/v1/admin/login",reqBody).subscribe((res)=>{
      console.log(res)
      if(res["emailId"]!=null ){
          this.visibilityService.show();
          this.isVisible = false;   
           }
            
    });
    this.adminview.setCred(reqBody.emailId,reqBody.password);

  }
}