import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-additional-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-additional-info.component.html',
  styleUrl: './step-additional-info.component.scss'
})
export class StepAdditionalInfoComponent {

  // Recibimos el FormGroup 'additionalInfo'
  @Input() additionalInfoForm!: FormGroup;

}