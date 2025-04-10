import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css'],
  standalone: true,
  imports: [FontAwesomeModule]
})
export class DarkModeToggleComponent implements AfterViewInit {
  isDarkMode = false;

  isBrowser: boolean;
 // Default icon

  faSun = faSun;
  faMoon = faMoon;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      // Check for saved theme preference or system preference
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        this.enableDarkMode();
      }
    }
  }

  toggleDarkMode(): void {
    if (!this.isBrowser) return;

    this.isDarkMode ? this.disableDarkMode() : this.enableDarkMode();
  }

  private enableDarkMode(): void {
    this.isDarkMode = true;
    this.document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  private disableDarkMode(): void {
    this.isDarkMode = false;
    this.document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
