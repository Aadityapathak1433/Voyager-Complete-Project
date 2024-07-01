import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 
  cityName:string='New Delhi';
  show:boolean=false;
  Shows:boolean=false;
  showing(){
    if(this.Shows==false){
      this.Shows=true;
    }
    else{
  this.Shows=false;
}
  }
  Available(){
    if(this.show==false){
      this.show=true;
    }
    else{
  this.show=false;
}
  }
  SelectCity(event:Event){
    const target = event.target as HTMLInputElement;
    this.cityName = target.value;  }
    hideInProgress() {
      this.Shows = false;
    }
  }
