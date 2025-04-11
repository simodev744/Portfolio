import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  constructor(private http: HttpClient) {}

  onSubmit(formData: any): void {
    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('message', formData.message);

/*    this.sendFormData(formPayload).subscribe(
      response => {
        alert('Message envoyé avec succès !');
        // You can also reset the form or show success messages here
      },
      error => {
        alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
      }
    );*/
  }

  sendFormData(formData: FormData): Observable<any> {
    const url = 'https://script.google.com/macros/s/AKfycbzPe_u1UgZLVPWfgp4CVyJVAThbMFhAyrxfEuMTdNVmiZULngAGzTgHbm7676axMoN5/exec';
    return this.http.post(url, formData, {
      headers: new HttpHeaders(),
      responseType: 'text'
    });
  }
}
