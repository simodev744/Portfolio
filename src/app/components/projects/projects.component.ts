import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    FontAwesomeModule
  ],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  faGithub = faGithub;

  // Define the projects array with name, description, category, image, and githubLink
  projects = [
    {
      name: 'E-Commerce Platform',
      description: 'A full-featured online shopping solution',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      githubLink: 'https://github.com/simodev744'
    },
    {
      name: 'Fitness Tracker App',
      description: 'Mobile application for health and workout tracking',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      githubLink: 'https://github.com/simodev744'
    },
    {
      name: 'Banking Dashboard',
      description: 'Modern UI/UX design for financial management',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      githubLink: 'https://github.com/simodev744'
    },
    {
      name: 'API Microservices',
      description: 'Scalable backend architecture',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      githubLink: 'https://github.com/simodev744'
    },
    {
      name: 'Travel Booking System',
      description: 'Online platform for hotel and flight reservations',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      githubLink: 'https://github.com/simodev744'
    },
    {
      name: 'Social Media App',
      description: 'iOS/Android application for community building',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      githubLink: 'https://github.com/simodev744'
    },
    {
      name: 'CMS Platform',
      description: 'Responsive content management system',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      githubLink: 'https://github.com/simodev744'
    },
    {
      name: 'Healthcare Portal',
      description: 'Patient-centered interface design',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      githubLink: 'https://github.com/simodev744'
    },
    {
      name: 'Portfolio Website',
      description: 'Custom built personal portfolio',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      githubLink: 'https://github.com/simodev744'
    },
    {
      name: 'Language Learning Game',
      description: 'Educational mobile game for language acquisition',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      githubLink:'https://github.com/simodev744'
    }
  ];


  categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX'];


  selectedCategory: string = 'All';


  getFilteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    } else {
      return this.projects.filter(project => project.category === this.selectedCategory);
    }
  }
}
