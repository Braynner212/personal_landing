import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

// Interfaz para la lista de campos
interface StrategyField {
  id: string; // Coincide con el formControlName
  label: string;
  placeholder: string;
  type: 'text' | 'url'; // tipo de input
}

@Component({
  selector: 'app-step-digital-strategy',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-digital-strategy.component.html',
  styleUrl: './step-digital-strategy.component.scss'
})
export class StepDigitalStrategyComponent {

  // Recibimos el FormGroup 'digitalStrategy'
  @Input() digitalStrategyForm!: FormGroup;

  // Definimos los campos basados en el brief (Paso 10)
  readonly strategyFields: StrategyField[] = [
    {
      id: 'paginaWeb',
      label: 'Página Web',
      placeholder: 'https://tu-sitio-web.com',
      type: 'url'
    },
    {
      id: 'facebook',
      label: 'Facebook',
      placeholder: '@tuUsuarioDeFacebook',
      type: 'text'
    },
    {
      id: 'instagram',
      label: 'Instagram',
      placeholder: '@tuUsuarioDeInstagram',
      type: 'text'
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      placeholder: '@tuUsuarioDeTikTok',
      type: 'text'
    },
    {
      id: 'otra',
      label: 'Otra (ej. LinkedIn, X)',
      placeholder: '@tuOtraRed',
      type: 'text'
    }
  ];

}