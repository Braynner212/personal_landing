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
  selector: 'app-step-competition',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-competition.component.html',
  styleUrl: './step-competition.component.scss'
})
export class StepCompetitionComponent implements OnInit {
  
  // Recibimos el FormGroup 'competition'
  @Input() competitionForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Asegura que haya al menos un competidor al cargar
    if (this.competitorsArray.length === 0) {
      this.addCompetitor();
    }
  }

  // --- Getters para el Template ---

  get competitorsArray(): FormArray {
    return this.competitionForm.get('competitors') as FormArray;
  }

  get diferenciadorControl(): AbstractControl | null {
    return this.competitionForm.get('diferenciador');
  }

  // --- Métodos del FormArray ---

  /**
   * Helper para crear un FormGroup para un competidor.
   */
  private createCompetitorGroup(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      analisis: ['', Validators.required]
    });
  }

  /**
   * Añade un nuevo grupo de competidor al FormArray
   */
  addCompetitor(): void {
    this.competitorsArray.push(this.createCompetitorGroup());
  }

  /**
   * Elimina un competidor del FormArray por su índice
   */
  removeCompetitor(index: number): void {
    // Evita que se elimine el último campo
    if (this.competitorsArray.length > 1) {
      this.competitorsArray.removeAt(index);
    }
  }

  /**
   * Helper para castear el control en el template
   */
  getCompetitorGroup(index: number): FormGroup {
    return this.competitorsArray.at(index) as FormGroup;
  }
}