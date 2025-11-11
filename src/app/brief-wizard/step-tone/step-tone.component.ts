import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-step-tone',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-tone.component.html',
  styleUrl: './step-tone.component.scss'
})
export class StepToneComponent {
  // Recibimos el FormGroup 'tone' desde el padre
  @Input() toneForm!: FormGroup;

  // Getters para el template
  get palabrasClaveControl(): AbstractControl | null {
    return this.toneForm.get('palabrasClave');
  }

  get frasesEjemploControl(): AbstractControl | null {
    return this.toneForm.get('frasesEjemplo');
  }
}