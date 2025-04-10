import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Form data
  name: string = '';
  email: string = '';
  message: string = '';

  // Validation messages
  successMessage: string = '';
  errorMessage: string = '';

  // Submit function
  submitForm() {
    // Check if the form is valid
    if (this.name && this.email && this.message) {
      this.successMessage = 'Your message has been sent successfully!';
      this.errorMessage = '';
      // Here you could send the form data to a server or email
      // For now, we just reset the form
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      this.errorMessage = 'Please fill out all fields.';
      this.successMessage = '';
    }
  }
}
