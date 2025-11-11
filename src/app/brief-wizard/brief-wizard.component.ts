// src/app/features/brief/brief-wizard.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

// --- Nuestros Servicios ---
import { FormStateService } from 'src/app/commons/services/form-state.service';
import { AnalyticsService } from 'src/app/commons/services/analytics.service';

// --- Los Pasos del Wizard ---
import { StepWelcomeComponent } from './step-welcome/step-welcome.component';
import { StepPersonalityComponent } from "./step-personality/step-personality.component";
import { StepContextComponent } from "./step-context/step-context.component";
import { StepValuePropositionComponent } from "./step-value-proposition/step-value-proposition.component";
import { StepAudienceComponent } from "./step-audience/step-audience.component";
import { StepCompetitionComponent } from "./step-competition/step-competition.component";
import { StepToneComponent } from "./step-tone/step-tone.component";
import { StepVisualStyleComponent } from "./step-visual-style/step-visual-style.component";
import { StepReferencesComponent } from "./step-references/step-references.component";
import { StepLogoFormatComponent } from "./step-logo-format/step-logo-format.component";

@Component({
  selector: 'app-brief-wizard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StepWelcomeComponent,
    StepPersonalityComponent,
    StepContextComponent,
    StepValuePropositionComponent,
    StepAudienceComponent,
    StepCompetitionComponent,
    StepToneComponent,
    StepVisualStyleComponent,
    StepReferencesComponent,
    StepLogoFormatComponent
],
  templateUrl: './brief-wizard.component.html',
  styleUrl: './brief-wizard.component.scss'
})
export class BriefWizardComponent implements OnInit, OnDestroy {

  mainForm!: FormGroup;
  currentStepIndex = 0;
  draftId: string | null = null;
  totalSteps = 12; // 0 (Welcome) + 11 Pasos + 1 (Final)
  formInitialized = false;

  private stepStartTime = 0;
  private subscriptions = new Subscription();

  constructor(
    private formStateService: FormStateService,
    private analyticsService: AnalyticsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 1. Obtenemos el ID del borrador de la URL (ej. /brief/uuid-12345)
    const draftIdFromUrl = this.route.snapshot.paramMap.get('id');
    
    // 2. Inicializamos el servicio de estado
    this.formStateService.initializeForm(draftIdFromUrl);

    // 3. Obtenemos el formulario (creado y gestionado por el servicio)
    this.mainForm = this.formStateService.getForm();
    console.log('Main FormGroup en BriefWizardComponent:', this.mainForm);

    // 4. Nos suscribimos a los cambios de estado del servicio
    this.subscriptions.add(
      this.formStateService.currentStepIndex$.subscribe(step => {
        this.currentStepIndex = step;
        if(step !== 0) {
          this.trackStepView(); // Rastrea la vista del paso
        }
      })
    );
    
    this.subscriptions.add(
      this.formStateService.currentDraftId$.subscribe(id => {
        this.draftId = id;
      })
    );
    
    this.subscriptions.add(
      this.formStateService.formInitialized$.subscribe(init => {
        this.formInitialized = init; // Para no mostrar nada hasta que cargue
      })
    );
  }

  ngOnDestroy(): void {
    // Limpia todas las suscripciones
    this.subscriptions.unsubscribe();
  }

  // --- Manejadores de Eventos ---

  /**
   * Se llama cuando el Paso 0 (Welcome) se completa.
   */
  onWelcomeSubmit(data: { clientName: string }): void {
    // (La analítica 'brief_started' ya se disparó en step-welcome)
    // Le decimos al servicio que cree el borrador.
    // El servicio se encargará de cambiar el paso y la URL.
    this.formStateService.createNewDraft(data.clientName);
  }

  /**
   * Avanza al siguiente paso.
   */
  goToNextStep(): void {
    // (Validación futura: comprobar si el formGroup del paso actual es válido)
    // const currentStepForm = this.mainForm.get('...paso_actual...');
    // if (currentStepForm.invalid) {
    //   currentStepForm.markAllAsTouched();
    //   return;
    // }
    
    this.trackStepCompleted(); // Rastrea la finalización
    this.formStateService.setStep(this.currentStepIndex + 1);
  }

  /**
   * Retrocede al paso anterior.
   */
  goToPreviousStep(): void {
    this.formStateService.setStep(this.currentStepIndex - 1);
  }

  // --- Lógica de Analítica ---

  /**
   * Rastrea la vista de un paso y reinicia el temporizador.
   */
  private trackStepView(): void {
    this.stepStartTime = Date.now();
    this.analyticsService.trackEvent(
      'step_viewed',
      { step_number: this.currentStepIndex, step_name: this.getStepName(this.currentStepIndex) },
      this.draftId
    );
  }

  /**
   * Rastrea la finalización de un paso y el tiempo empleado.
   */
  private trackStepCompleted(): void {
    const timeOnStep = (Date.now() - this.stepStartTime) / 1000; // en segundos
    this.analyticsService.trackEvent(
      'step_completed',
      { 
        step_number: this.currentStepIndex, 
        step_name: this.getStepName(this.currentStepIndex),
        time_on_step_seconds: timeOnStep
      },
      this.draftId
    );
  }

  /**
   * Helper para obtener el nombre del paso para la analítica.
   */
  private getStepName(index: number): string {
    const stepNames = [
      'Welcome', 'Contexto', 'Personalidad', 'PropuestaValor', 
      'Publico', 'Competencia', 'Tono', 'EstiloVisual', 
      'Referentes', 'Logo', 'EstrategiaDigital', 'Aplicaciones', 'Final'
    ];
    return stepNames[index] || 'UnknownStep';
  }

  // --- Helpers para la Plantilla (HTML) ---
  
  /**
   * Devuelve el Form Group anidado para el paso actual.
   * Esto es crucial para pasar el [formGroup] correcto a cada componente hijo.
   */
  get currentStepFormGroup(): FormGroup | null {
    const stepNames = [
      null, 'context', 'personality', 'valueProposition', 'public', 'competition', 'tone', 'visualStyle', 'references', 'logoFormat' // ...y así sucesivamente
    ];
    const formGroupName = stepNames[this.currentStepIndex];
    return formGroupName ? this.mainForm.get(formGroupName) as FormGroup : null;
  }
}