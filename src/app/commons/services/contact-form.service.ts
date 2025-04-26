import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactFormResponse } from '../interfaces/response.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  sendData(data: { name_complete: string; mail: string; message: string }, recaptchaToken: string): Observable<ContactFormResponse> {
    return this.httpClient.post<ContactFormResponse>(`${this.apiUrl}/api/contact-form`, { data, recaptchaToken });
  }
}
