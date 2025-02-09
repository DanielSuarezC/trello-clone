import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: string = 'primary';

  get colors(){
    return {
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800':this.color === 'success',
      'focus:ring-success-300':this.color === 'success',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800':this.color === 'primary',
      'focus:ring-primary-300':this.color === 'primary '
    };
  }

}
