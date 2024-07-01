import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { VisibilityService } from '../VisibilityService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isVisible: boolean=true;
  constructor( private scrollService: ScrollService,private visibilityService: VisibilityService) { }
  ngOnInit() {
    this.visibilityService.visibility$.subscribe(visible => {
      this.isVisible = visible;
    });
  }
  showin:boolean=false;
  showlin:boolean=false;

  showabout:boolean=false;
scrollToSection(sectionId: string): void {
  this.scrollService.scrollToElement(sectionId);
}
showSignin(){
  if(this.showin==false){
    this.showin=true;
  }
  else{
this.showin=false;
}
}


showlogin(){
  if(this.showlin==false){
    this.showlin=true;
  }
  else{
this.showlin=false;
}
}

showAboutUs(){
  if(this.showabout==false){
    this.showabout=true;
  }
  else{
this.showabout=false;
}
}
}