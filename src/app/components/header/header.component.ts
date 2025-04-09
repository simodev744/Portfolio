import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT, NgIf } from '@angular/common'; // Import NgIf
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule, // Needed for <fa-icon>
    NgIf              // Needed for *ngIf
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Can be empty
})
export class HeaderComponent {
  // Icons we will use
  faBars = faBars;
  faTimes = faTimes;
  faSun = faSun;
  faMoon = faMoon;

  // State variables
  menuIsOpen = false;
  isDarkMode = false; // Start in light mode

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  // Function to toggle the mobile menu
  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  // Function to toggle dark mode
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      // Add 'dark' class to the main <html> tag (or body)
      this.renderer.addClass(this.document.documentElement, 'dark');
    } else {
      // Remove 'dark' class from the main <html> tag (or body)
      this.renderer.removeClass(this.document.documentElement, 'dark');
    }
  }
}
