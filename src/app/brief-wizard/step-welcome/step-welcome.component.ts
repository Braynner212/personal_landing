import { Component, AfterViewInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importación del runtime de Spline
import { Application } from '@splinetool/runtime';

// --- NUEVA IMPORTACIÓN ---
// 1. Importamos el servicio de analítica
import { AnalyticsService } from '../../commons/services/analytics.service'; 
// (Asegúrate de que la ruta 'src/app/core/services/analytics.service' sea correcta)

@Component({
  selector: 'app-step-welcome',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './step-welcome.component.html',
  styleUrl: './step-welcome.component.scss'
})
export class StepWelcomeComponent implements AfterViewInit {

  @Output() formSubmitted = new EventEmitter<{ clientName: string }>();
  @ViewChild('splineCanvas', { static: true }) splineCanvas!: ElementRef<HTMLCanvasElement>;

  welcomeForm: FormGroup;
  formError = false;

  constructor(
    private fb: FormBuilder,
    // --- INYECCIÓN DE DEPENDENCIA ---
    // 2. Inyectamos el servicio en el constructor
    private analyticsService: AnalyticsService 
  ) {
    this.welcomeForm = this.fb.group({
      clientName: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    // this.loadSplineScene();
  }

  private loadSplineScene(): void {
    const app = new Application(this.splineCanvas.nativeElement);
    // TODO: Reemplaza esta URL por la de tu escena de Spline
    app.load('https://prod.spline.design/N-2E0F-i-fA-m1iD/scene.splinecode');
  }

  /**
   * Se ejecuta al presionar "Comenzar".
   * Valida el formulario, envía el evento de analítica y emite el evento.
   */
  onSubmit(): void {
    if (this.welcomeForm.valid) {
      this.formError = false;
      const clientName = this.welcomeForm.get('clientName')?.value;

      // --- LLAMADA AL SERVICIO DE ANALÍTICA ---
      // 3. Llamamos a trackEvent antes de emitir
      this.analyticsService.trackEvent(
        'brief_started',  // Nombre del evento
        { client_name: clientName }, // Datos del evento (type-safe)
        null // draftId (es nulo en este punto, se crea después)
      );
      
      // 4. Emitimos los datos al componente padre (Wizard)
      this.formSubmitted.emit({ clientName: clientName });

    } else {
      this.formError = true;
      this.welcomeForm.markAllAsTouched();
    }
  }
}