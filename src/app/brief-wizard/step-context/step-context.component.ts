import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-context',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-context.component.html',
  styleUrl: './step-context.component.scss'
})
export class StepContextComponent {
  // Recibimos el FormGroup específico ('context') desde el padre
  @Input() contextForm!: FormGroup;

  // Getters para facilitar el acceso a los controles en el HTML
  get origenMarcaControl() {
    return this.contextForm.get('origenMarca');
  }

  get problemaResolverControl() {
    return this.contextForm.get('problemaResolver');
  }
}