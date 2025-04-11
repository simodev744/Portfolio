import { Component, HostListener } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {
  isScrolled = false;

  // Listen for scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  // Scroll to the top of the page
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
