import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; // Asegúrate que la ruta sea correcta
import { RecaptchaService } from './recaptcha.service';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private backendAnalyticsEndpoint = `${environment.apiUrl}/brief/track-event`;
  private backendFeedbackEndpoint = `${environment.apiUrl}/brief-feedback`;

  constructor(private http: HttpClient, private recaptchaServ: RecaptchaService, ) { }

  public async trackEvent(eventName: string, eventData: GtagEventParams, draftId: string | null) {
    
    try {
      if (typeof gtag === 'function') {
        
        gtag('event', eventName, eventData);

      } else {
        console.warn('gtag() no está disponible. ¿Se cargó el script de GA4?');
      }
    } catch (e) {
      console.error('Error al enviar evento a GA4:', e);
    }

    const recaptchaToken = await this.recaptchaServ.executeRecaptcha(
          'submit'
        );

    const fullEventData = { recaptchaToken, data: {
      
      event_name: eventName,
      timestamp: new Date().toISOString(),
      draft_id: draftId,
      event_data:{
        ...eventData,
      }
    }};

    const dataBlob = new Blob([JSON.stringify(fullEventData)], { type: 'application/json' });

    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(this.backendAnalyticsEndpoint, dataBlob);
      } else {
        this.http.post(this.backendAnalyticsEndpoint, fullEventData).subscribe();
      }
    } catch (e) {
      console.error('Error al intentar enviar el beacon de analítica:', e);
    }
  }

  public sendFeedback(feedback: string, draftId: string): void {
    
    const feedbackData = {
      draft_id: draftId,
      feedback_text: feedback,
    };

    this.http.post(this.backendFeedbackEndpoint, feedbackData)
      .subscribe({
        next: () => { 
          console.log('Feedback enviado con éxito');
          // Emitir un evento para mostrar un "Toast" de éxito
        },
        error: (err) => console.error('Error al enviar feedback:', err)
      });
  }
}