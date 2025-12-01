// src/app/features/brief/step-final/step-final.component.ts
import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Application } from '@splinetool/runtime';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

// --- Servicios ---
import { AnalyticsService } from 'src/app/commons/services/analytics.service';
import { FormStateService } from 'src/app/commons/services/form-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-final',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './step-final.component.html',
  styleUrl: './step-final.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class StepFinalComponent implements AfterViewInit, OnDestroy {

  @ViewChild('splineCanvas', { static: true }) splineCanvas!: ElementRef<HTMLCanvasElement>;
  
  feedbackForm: FormGroup;
  formSubmitted = false;
  private draftId: string | null = null;
  private draftIdSubscription: Subscription;
  

  constructor(
    private fb: FormBuilder,
    private analyticsService: AnalyticsService,
    private formStateService: FormStateService,
    private router: Router
  ) {
    this.feedbackForm = this.fb.group({
      // El feedback es opcional, por eso no tiene Validators.required
      feedbackText: ['']
    });

    // Nos suscribimos para obtener el draftId
    this.draftIdSubscription = this.formStateService.currentDraftId$.subscribe(id => {
      this.draftId = id;
    });
  }

  ngAfterViewInit(): void {
    // this.loadSplineScene(); // Descomentado para cargar la escena final
  }

  ngOnDestroy(): void {
    // Limpiamos la suscripción
    if (this.draftIdSubscription) {
      this.draftIdSubscription.unsubscribe();
    }
  }

  /**
   * Carga la escena 3D final de Spline.
   */
  private loadSplineScene(): void {
    const app = new Application(this.splineCanvas.nativeElement);
    // TODO: Reemplaza esta URL por tu escena de Spline "Final"
    app.load('httpsR://prod.spline.design/YOUR_FINAL_SCENE/scene.splinecode');
  }

  /**
   * Se ejecuta al enviar el feedback.
   */
  async onFeedbackSubmit(): Promise<void> {
    if (this.feedbackForm.invalid || !this.draftId || this.formSubmitted) {
      return;
    }

    const feedbackText = this.feedbackForm.get('feedbackText')?.value;

    if (feedbackText && this.draftId) {
      // 1. Enviamos el feedback al servicio (que lo manda al backend y a tu email)
      await this.analyticsService.sendFeedback(feedbackText, this.draftId);
      
      // 2. Disparamos un evento de analítica
      const draftId = this.draftId;
      await this.analyticsService.trackEvent(
        'feedback_showed',
        { feedback_showed: true },
        draftId
      );

      // 3. Mostramos el mensaje de éxito
      this.formSubmitted = true;
      this.feedbackForm.disable(); // Deshabilitamos el form
    }
  }

  async onSkip(): Promise<void> {

    // 2. Disparamos un evento de analítica
    const draftId = this.draftId;
    await this.analyticsService.trackEvent(
        'feedback_showed',
        { feedback_showed: true },
        draftId
      );

    // Redirige a la ruta principal de tu aplicación
    this.router.navigate(['/']); 
  }
}