import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent {
  @Output() hideComponent: EventEmitter<void> = new EventEmitter<void>();

  onHideClick() {
    this.hideComponent.emit();
  }
}
