import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {

  private visible = new BehaviorSubject<boolean>(false);
  visibility$ = this.visible.asObservable();

  constructor() {}

  show() {
    this.visible.next(true);
  }

  hide() {
    this.visible.next(false);
  }
}
