import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, CommonModule, OverlayModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isOpen = false;

}
