import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  showcontact:boolean=false;
  showContactus(){
    if(this.showcontact==false){
      this.showcontact=true;
    }
    else{
  this.showcontact=false;
  }
  }
}
