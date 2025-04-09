import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {HeroComponent} from './components/hero/hero.component';
import {DarkModeToggleComponent} from './components/dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, ProjectsComponent, HeroComponent, DarkModeToggleComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularApp';
}
