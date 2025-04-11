import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // The service will be available globally
})
export class ContactFormService {

  private apiUrl = 'https://script.google.com/macros/s/AKfycbzPe_u1UgZLVPWfgp4CVyJVAThbMFhAyrxfEuMTdNVmiZULngAGzTgHbm7676axMoN5/exec';

  constructor(private http: HttpClient) {}

  // Send form data to Google Apps Script
  sendFormData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), // Set content-type as JSON
      responseType: 'text' // Expecting a plain text response
    });
  }
}
