import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, AbstractControl } from '@angular/forms';

// Interfaz para la lista de aplicaciones
interface ApplicationFormat {
  id: string; // Coincide con el formControlName
  label: string; // Texto a mostrar
}

@Component({
  selector: 'app-step-formats',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-formats.component.html',
  styleUrl: './step-formats.component.scss'
})
export class StepFormatsComponent {

  // Recibimos el FormGroup 'formats'
  @Input() formatsForm!: FormGroup;

  // Lista de todas las aplicaciones disponibles, basadas en el brief
  readonly applicationList: ApplicationFormat[] = [
    { id: 'logotipo', label: 'Logotipo' },
    { id: 'tarjetaPresentacion', label: 'Tarjeta de presentación' },
    { id: 'hojaMembretada', label: 'Hoja membretada' },
    { id: 'firmaCorreo', label: 'Firma de correo' },
    { id: 'manualMarca', label: 'Manual de marca' },
    { id: 'iconografia', label: 'Iconografía' },
    { id: 'patterns', label: 'Patterns' },
    { id: 'postRedes', label: 'Post para redes sociales' },
    { id: 'historiasRedes', label: 'Historias para redes sociales' },
    { id: 'portadaRedes', label: 'Portada para redes sociales' }
  ];

  /**
   * Getter para acceder fácilmente a un control por su nombre
   */
  getControl(name: string): AbstractControl | null {
    return this.formatsForm.get(name);
  }

  /**
   * Comprueba si el grupo es inválido (ninguno seleccionado) y ha sido "tocado"
   */
  get isGroupInvalid(): boolean {
    return this.formatsForm.invalid && this.formatsForm.touched;
  }
}