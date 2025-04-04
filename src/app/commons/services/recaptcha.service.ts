import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {
  private siteKey = '6Lce9PoqAAAAAHMF0Gr6rrTV43izKlbSs3adiu2W';
  private apiUrl = 'http://localhost:3023';


  constructor( private http: HttpClient) {}

  async executeRecaptcha(action: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject('reCAPTCHA no está cargado');
        return;
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha!
          .execute(this.siteKey, { action })
          .then((token: string) => resolve(token))
          .catch(reject);
      });
    });
  }

  verifyToken(token: string) {
    return firstValueFrom(
      this.http.post<{ success: boolean }>(`${this.apiUrl}/api/verify-recaptcha`, { token })
    );
  }
}
