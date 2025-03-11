import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  apiUrl = 'http://localhost:3023/api/contact-form';

  constructor(private httpClient: HttpClient) {}

  createContactForm(data: { name: string; email: string; message: string }) {
    return this.httpClient.post(this.apiUrl, { ...data });
  }
}
