import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Importaciones de RxJS
import { Observable, from, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

// Importa tu servicio personalizado
import { RecaptchaService } from './recaptcha.service'; // (Ajusta la ruta si es necesario)
import { environment } from 'src/environments/environment';

// La interfaz de respuesta del backend
interface UploadResponse {
  success: boolean;
  message: string;
  secure_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // Ajusta esto a la URL de tu API
  private apiUrl = environment.apiUrl; 

  constructor(
    private http: HttpClient,
    // 1. Inyectamos tu RecaptchaService personalizado
    private recaptchaService: RecaptchaService 
  ) { }

  /**
   * Sube un archivo (FormData) al backend.
   * 1. Obtiene un token reCAPTCHA v3 usando RecaptchaService.
   * 2. Añade el token al header 'X-Recaptcha-Token'.
   * 3. Envía la petición POST.
   */
  public upload(formData: FormData): Observable<UploadResponse> {
    
    // 2. Usamos 'from' para convertir la Promesa de tu servicio 
    //    en un Observable, que podemos usar en el 'pipe'.
    return from(this.recaptchaService.executeRecaptcha('upload')).pipe(
      
      switchMap(token => {
        // 3. (Igual que antes) Creamos los headers
        const headers = new HttpHeaders({
          'X-Recaptcha-Token': token
        });

        // 4. (Igual que antes) Realizamos la petición POST
        return this.http.post<UploadResponse>(
          `${this.apiUrl}/upload`, 
          formData, 
          { headers: headers }
        );
      }),
      catchError(error => {
        // Manejo de errores (tanto de reCAPTCHA como de HTTP)
        console.error('Error en el servicio de subida:', error);
        return throwError(() => new Error(error.message || 'Error en la subida del archivo')); 
      })
    );
  }
}