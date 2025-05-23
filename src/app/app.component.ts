import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {HeroComponent} from './components/hero/hero.component';
import {DarkModeToggleComponent} from './components/dark-mode-toggle/dark-mode-toggle.component';

import {AproposComponent} from './components/apropos/apropos.component';
import {ContactFormComponent} from './components/contact/contact.component';
import {ScrollToTopComponent} from './components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  imports: [AproposComponent, FooterComponent, HeaderComponent, ProjectsComponent, HeroComponent, ContactFormComponent, ScrollToTopComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularApp';
}
