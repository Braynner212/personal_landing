import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {
  private siteKey = '6Lce9PoqAAAAAHMF0Gr6rrTV43izKlbSs3adiu2W';

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

}
