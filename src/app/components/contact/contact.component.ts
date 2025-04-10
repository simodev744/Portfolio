import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgOptimizedImage
  ],
  styleUrls: ['./contact.component.scss']
})
export class ContactFormComponent {
  // Form data to bind with the form
  formData = {
    name: '',
    email: '',
    message: ''
  };


  successMessage: string | null = null;
  errorMessage: string | null = null;

  // Submit the form
  submitForm(contactForm: NgForm): void {
    if (contactForm.invalid) {
      return;
    }


    this.simulateFormSubmission(contactForm);
  }

  // Simulate form submission logic
  simulateFormSubmission(contactForm: NgForm): void {
    // Clear previous messages
    this.successMessage = null;
    this.errorMessage = null;


    setTimeout(() => {

      const isSuccess = Math.random() > 0.2; // 80% chance of success

      if (isSuccess) {
        this.successMessage = 'Your message has been sent successfully!';
        // Reset form data
        contactForm.resetForm();
      } else {
        this.errorMessage = 'Something went wrong. Please try again later.';
      }
    }, 1000);
  }
}
