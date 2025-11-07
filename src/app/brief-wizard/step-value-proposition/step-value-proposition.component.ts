import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-step-value-proposition',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-value-proposition.component.html',
  styleUrl: './step-value-proposition.component.scss'
})
export class StepValuePropositionComponent {
  @Input() valuePropositionForm!: FormGroup;

  // Getters para facilitar el acceso en el HTML
  get unicaControl(): AbstractControl | null {
    return this.valuePropositionForm.get('unica');
  }

  get beneficioPrincipalControl(): AbstractControl | null {
    return this.valuePropositionForm.get('beneficioPrincipal');
  }
}