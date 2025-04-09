import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css'],
  standalone: true
})
export class DarkModeToggleComponent implements AfterViewInit {
  isDarkMode = false;
  isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        this.document.documentElement.classList.add('dark');
      }
    }
  }

  toggleDarkMode(): void {
    if (!this.isBrowser) return;

    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
