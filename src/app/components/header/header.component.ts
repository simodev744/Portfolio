import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {DarkModeToggleComponent} from "../dark-mode-toggle/dark-mode-toggle.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
    imports: [
        NgIf,
        DarkModeToggleComponent
    ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  // Toggle Mobile Menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
