import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminViewService {
  private visibilityState = new BehaviorSubject<boolean>(true);
  
  adminvisibility$ = this.visibilityState.asObservable();

  toggleVisibility() {
    this.visibilityState.next(!this.visibilityState.value);
  }
  
  showComponents() {
    this.visibilityState.next(true);
  }
  
  hideComponents() {
    this.visibilityState.next(false);
  }  
  
  setCred(useEmail: any, userPassword: any) {
    if (userPassword === "admin" && useEmail === "admin@gmail.com") {
      this.hideComponents();
    } else {
      this.showComponents();
    }
  }
}
