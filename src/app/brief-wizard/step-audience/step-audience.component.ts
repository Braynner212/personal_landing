import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-step-audience',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-audience.component.html',
  styleUrl: './step-audience.component.scss'
})
export class StepAudienceComponent {
  // Recibimos el FormGroup 'audience' desde el padre
  @Input() audienceForm!: FormGroup;

  // Getters para facilitar el acceso en el HTML
  get edadControl(): AbstractControl | null {
    return this.audienceForm.get('edad');
  }
  get generoControl(): AbstractControl | null {
    return this.audienceForm.get('genero');
  }
  get ubicacionControl(): AbstractControl | null {
    return this.audienceForm.get('ubicacion');
  }
  get estiloVidaControl(): AbstractControl | null {
    return this.audienceForm.get('estiloVida');
  }
  get problemasNecesidadesControl(): AbstractControl | null {
    return this.audienceForm.get('problemasNecesidades');
  }
}