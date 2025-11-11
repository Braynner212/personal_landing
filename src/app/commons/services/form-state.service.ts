// src/app/core/services/form-state.service.ts
import { Injectable, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { debounce, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RecaptchaService } from './recaptcha.service';

// Constante para la clave de localStorage
const DRAFT_ID_KEY = 'atemia_brief_draft_id';

@Injectable({
  providedIn: 'root'
})
export class FormStateService implements OnDestroy {

  // --- Propiedades del Estado ---
  private mainForm: FormGroup;
  private autoSaveSubscription: Subscription | null = null;

  // Sujetos (BehaviorSubject) para que los componentes escuchen los cambios
  private draftIdSubject = new BehaviorSubject<string | null>(null);
  private currentStepSubject = new BehaviorSubject<number>(0);
  private formInitializedSubject = new BehaviorSubject<boolean>(false);

  // --- Observables Públicos ---
  public currentDraftId$ = this.draftIdSubject.asObservable();
  public currentStepIndex$ = this.currentStepSubject.asObservable();
  public formInitialized$ = this.formInitializedSubject.asObservable();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private recaptchaServ: RecaptchaService
  ) {
    // Definimos la estructura completa del formulario aquí, en un solo lugar.
    this.mainForm = this.fb.group({
      // --- PASO 0 (Welcome) ---
      // (clientName se usa para crear el borrador, no se guarda en el form)

      // --- PASO 1 (Contexto) ---
      context: this.fb.group({
        origenMarca: ['', Validators.required],
        problemaResolver: ['', Validators.required]
      }),

      // --- PASO 2 (Valores y Personalidad) ---
      personality: this.fb.group({
        valores: this.fb.array([], [Validators.required, Validators.maxLength(4)]), // Para los 4 valores
        palabrasClave: ['', Validators.required],
        sliderFormal: [50], // 0-100
        sliderExclusivo: [50],
        sliderTecnico: [50]
      }),

      // --- PASO 3 (Propuesta de Valor) ---
      valueProposition: this.fb.group({
        unica: ['', Validators.required],
        beneficioPrincipal: ['', Validators.required]
      }),

      // --- PASO 4 (Público Objetivo) ---
      public: this.fb.group({
        edad: ['', Validators.required],
        genero: ['', Validators.required],
        ubicacion: ['', Validators.required],
        estiloVida: ['', Validators.required], // Usará textarea
        problemasNecesidades: ['', Validators.required] // Usará textarea
      }),

      competition: this.fb.group({
        // FormArray para la lista de competidores
        competitors: this.fb.array(
          [this.createCompetitorGroup()], // Empezamos con un campo de competidor
          [Validators.required, Validators.minLength(1)] 
        ),
        // Campo para el valor agregado/diferenciador
        diferenciador: ['', Validators.required]
      }),

      // --- PASO 6 (Tono de Marca) ---
      tone: this.fb.group({
        // Palabras clave como: formal, amigable, divertida, etc.
        palabrasClave: ['', Validators.required],
        // 3 ejemplos de frases
        frasesEjemplo: ['', Validators.required]
      }),

      // --- PASO 7 (Estilo Visual) ---
      visualStyle: this.fb.group({
        // Almacena los strings de los estilos, ej: ["Minimalista", "Moderno"]
        selectedStyles: this.fb.array(
          [], // Inicia vacío
          // Validadores: Mínimo 1 seleccionado, Máximo 3
          [Validators.required, Validators.minLength(1), Validators.maxLength(3)]
        )
      }),

      // --- PASO 8 (Referencias) ---
      references: this.fb.group({
        // El brief pide 2 referentes, así que creamos 2 grupos por defecto
        files: this.fb.array(
          [
            this.createReferenceGroup(), // Referente #1
            this.createReferenceGroup()  // Referente #2
          ],
          Validators.required
        )
      }),

      // --- PASO 9 (Formato de Logo) ---
      logoFormat: this.fb.group({
        // Almacena el tipo de logo seleccionado, ej: "Imagotipo"
        // Es un campo requerido, por lo que debe seleccionar uno.
        tipo: ['', Validators.required]
      }),

      // (Añadir aquí los FormGroups para los pasos 4 al 11)

      // ...
    });
  }

  /**
   * Inicializa el servicio. Se llama desde el ngOnInit del Wizard.
   * Carga el borrador existente (desde API o localStorage) o se queda en el paso 0.
   */
  public initializeForm(draftIdFromUrl: string | null): void {
    const loadedDraftId: string | null = draftIdFromUrl || localStorage.getItem(DRAFT_ID_KEY);

    if (loadedDraftId) {
      this.loadDraft(loadedDraftId);
    } else {
      // No hay borrador, nos quedamos en el paso 0 (Welcome)
      this.currentStepSubject.next(0);
      this.formInitializedSubject.next(true);
    }
  }

  /**
   * Obtiene el FormGroup principal.
   */
  public getForm(): FormGroup {
    return this.mainForm;
  }

  /**
   * Obtiene el estado actual del índice del paso.
   */
  public getCurrentStep(): number {
    return this.currentStepSubject.value;
  }

  /**
   * Cambia al paso especificado.
   */
  public setStep(stepIndex: number): void {
    this.currentStepSubject.next(stepIndex);

    // Guardamos el paso actual en el borrador
    this.saveDraftToApi();
  }

  /**
   * Crea un nuevo borrador en el backend.
   * Se llama después del Paso 0 (Welcome).
   */
  public async createNewDraft(clientName: string): Promise<void> {

    const recaptchaToken = await this.recaptchaServ.executeRecaptcha(
      'submit'
    );

    // 1. Llama al backend para crear el borrador
    this.http.post<{ draftId: string }>(`${environment.apiUrl}/brief/crear-borrador`, { recaptchaToken, data: { clientName } })
      .subscribe({
        next: (res) => {
          const draftId = res.draftId;

          // 2. Guarda el nuevo ID y actualiza los observables
          localStorage.setItem(DRAFT_ID_KEY, draftId);
          this.draftIdSubject.next(draftId);

          // 3. Inicia el auto-guardado
          this.startAutoSave();

          // 4. Avanza al siguiente paso y actualiza la URL
          this.setStep(1);
          this.router.navigate(['/initial-form', draftId]); // Asumiendo que tu ruta es /brief/:id
        },
        error: (err) => console.error('Error al crear el borrador:', err)
      });
  }

  /**
   * Carga un borrador existente desde el backend.
   */
  private async loadDraft(draftId: string): Promise<void> {

    const recaptchaToken = await this.recaptchaServ.executeRecaptcha(
      'submit'
    );

    const headers = { 'X-Recaptcha-Token': recaptchaToken };


    // 1. Llama al backend para obtener los datos
    this.http.get<any>(`${environment.apiUrl}/brief/${draftId}`, { headers })
      .subscribe({
        next: (draftData) => {
          // 2. Parchea el formulario con los datos guardados
          this.mainForm.patchValue(draftData.formData);

          if (draftData.formData.personality && draftData.formData.personality.valores) {
            const valoresArray = this.mainForm.get('personality.valores') as FormArray;
            valoresArray.clear();

            draftData.formData.personality.valores.forEach((valor: string) => {
              valoresArray.push(this.fb.control(valor));
            });
          }

          if (draftData.formData.visualStyle && draftData.formData.visualStyle.selectedStyles) {
            console.log('Cargando estilos visuales:', draftData.formData.visualStyle.selectedStyles);
            const estilosArray = this.mainForm.get('visualStyle.selectedStyles') as FormArray;
            estilosArray.clear();
            
            draftData.formData.visualStyle.selectedStyles.forEach((valor: string) => {
              estilosArray.push(this.fb.control(valor));
            });
          }


          
            console.log('Borrador cargado:', draftData.formData);
            console.log('MainForm:', this.mainForm);

            // 3. Actualiza los observables
            this.draftIdSubject.next(draftId);
            this.currentStepSubject.next(draftData.lastStep || 1); // Continúa donde lo dejó
            localStorage.setItem(DRAFT_ID_KEY, draftId);

            // 4. Inicia el auto-guardado
            this.startAutoSave();
            this.formInitializedSubject.next(true);
          },
          error: (err) => {
            // Error (ej. 404), el borrador no existe. Reinicia.
            console.error('Error al cargar el borrador:', err);
            localStorage.removeItem(DRAFT_ID_KEY);
            this.draftIdSubject.next(null);
            this.currentStepSubject.next(0); // Vuelve al inicio
            this.formInitializedSubject.next(true);
          }
        });
  }

  /**
   * Inicia la suscripción de auto-guardado (debounced).
   */
  private startAutoSave(): void {
    if (this.autoSaveSubscription) {
      this.autoSaveSubscription.unsubscribe();
    }

    // Se auto-guarda 2 segundos después de que el usuario deja de escribir
    this.autoSaveSubscription = this.mainForm.valueChanges.pipe(
      debounce(() => timer(2000)),
      tap(() => this.saveDraftToApi())
    ).subscribe();
  }

  /**
   * Guarda el estado actual del formulario en el backend.
   */
  private async saveDraftToApi(): Promise<void> {
    const draftId = this.draftIdSubject.value;
    if (!draftId) return; // No se puede guardar si no hay ID

    const recaptchaToken = await this.recaptchaServ.executeRecaptcha(
      'submit'
    );

    const draftData = {
      recaptchaToken, data: {
        formData: this.mainForm.getRawValue(),
        lastStep: this.currentStepSubject.value
      }
    };

    console.log('Guardando borrador...', draftData);

    // Guardamos en localStorage como backup inmediato
    localStorage.setItem(`draft_${draftId}`, JSON.stringify(draftData));

    // Enviamos al backend (usamos sendBeacon como en AnalyticsService)
    const dataBlob = new Blob([JSON.stringify(draftData)], { type: 'application/json' });
    navigator.sendBeacon(`${environment.apiUrl}/brief/${draftId}/guardar`, dataBlob);
  }

  private createCompetitorGroup(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      analisis: ['', Validators.required] // "qué hacen bien y qué haces tú mejor"
    });
  }

  private createReferenceGroup(): FormGroup {
    return this.fb.group({
      // Aquí se guardaría la URL del archivo una vez subido al backend
      fileUrl: ['', Validators.required], 
      description: ['', [Validators.required, Validators.maxLength(280)]]
    });
  }

  ngOnDestroy(): void {
    // Limpia la suscripción al destruir el servicio
    if (this.autoSaveSubscription) {
      this.autoSaveSubscription.unsubscribe();
    }
  }
}