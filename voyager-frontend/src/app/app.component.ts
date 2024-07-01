import { Component, OnInit } from '@angular/core';
import { VisibilityService } from './VisibilityService';
import { AdminViewService } from './admin-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isVisible: boolean = false;
  adminVisible: boolean = false;
  defaultLocation = 'New Delhi'; 

  constructor(private visibilityService: VisibilityService, private adminViewService: AdminViewService) {}

  ngOnInit() {
    this.visibilityService.visibility$.subscribe(visible => {
      this.isVisible = visible;
    });
    this.adminViewService.adminvisibility$.subscribe(visible => {
      this.adminVisible = !visible;
    });
  }

  onSearchLocation(location: string): void {
    this.defaultLocation = location; 
  }
}
