import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  private apiUrl = 'http://localhost:3023';

  constructor(private httpClient: HttpClient) {}

  sendData(data: { name_complete: string; mail: string; message: string }, recaptchaToken: string) {
    return this.httpClient.post(`${this.apiUrl}/api/contact-form`, { data, recaptchaToken });
  }
}
