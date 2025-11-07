import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ReactiveFormsModule, 
  FormGroup, 
  FormArray, 
  FormBuilder, 
  Validators, 
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-step-personality',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-personality.component.html',
  styleUrls: ['./step-personality.component.scss']
})
export class StepPersonalityComponent implements OnInit {

  // Recibimos el FormGroup específico de este paso desde el padre (BriefWizard)
  @Input() personalityForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Asegurarnos de que el FormArray tenga al menos un campo al iniciar
    if (this.valoresArray.length === 0) {
      this.addValor();
    }
  }

  // --- Getters para facilitar el acceso en el HTML ---

  get valoresArray(): FormArray {
    return this.personalityForm.get('valores') as FormArray;
  }

  get palabrasClaveControl(): AbstractControl | null {
    return this.personalityForm.get('palabrasClave');
  }

  // --- Métodos para manejar el FormArray de Valores ---

  addValor(): void {
    // Limitamos a 4 valores máximo
    if (this.valoresArray.length < 4) {
      this.valoresArray.push(this.fb.control('', Validators.required));
    }
  }

  removeValor(index: number): void {
    this.valoresArray.removeAt(index);
  }

  // Helper para saber si podemos añadir más
  get canAddMoreValores(): boolean {
    return this.valoresArray.length < 4;
  }

  // Helper para saber si podemos eliminar (mínimo 1)
  get canRemoveValores(): boolean {
    return this.valoresArray.length > 1;
  }
}