import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, AbstractControl } from '@angular/forms';

// Definimos los tipos de logo
interface LogoType {
  name: string;
  description: string;
  exampleImage: string; // Path a la imagen de ejemplo
}

@Component({
  selector: 'app-step-logo-format',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-logo-format.component.html',
  styleUrl: './step-logo-format.component.scss'
})
export class StepLogoFormatComponent {

  // Recibimos el FormGroup 'logoFormat'
  @Input() logoFormatForm!: FormGroup;

  // Definimos las 4 opciones basadas en el brief
  readonly logoTypes: LogoType[] = [
    {
      name: 'Logotipo',
      description: 'La palabra con su tipografía, se identifica por el texto.',
      exampleImage: 'assets/images/initial-form/logo-logotipo.png' // Debes añadir esta imagen
    },
    {
      name: 'Isotipo',
      description: 'El símbolo o dibujo de la marca.',
      exampleImage: 'assets/images/initial-form/logo-isotipo.png' // Debes añadir esta imagen
    },
    {
      name: 'Imagotipo',
      description: 'Se combina el símbolo o dibujo con el texto.',
      exampleImage: 'assets/images/initial-form/logo-imagotipo.png' // Debes añadir esta imagen
    },
    {
      name: 'Isologo',
      description: 'Fusión del símbolo o dibujo con el texto dentro. No pueden dividirse.',
      exampleImage: 'assets/images/initial-form/logo-isologo.png' // Debes añadir esta imagen
    }
  ];

  // Getter para el control
  get tipoControl(): AbstractControl | null {
    return this.logoFormatForm.get('tipo');
  }

  /**
   * Establece el valor del control 'tipo' al hacer clic.
   * A diferencia del Paso 7, esto no es un array, solo establece un valor.
   */
  selectLogoType(typeName: string): void {
    this.tipoControl?.setValue(typeName);
    this.tipoControl?.markAsTouched();
  }

  /**
   * Comprueba si la tarjeta actual es la seleccionada
   */
  isSelected(typeName: string): boolean {
    return this.tipoControl?.value === typeName;
  }
}