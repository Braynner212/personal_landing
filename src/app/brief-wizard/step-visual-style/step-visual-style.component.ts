import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ReactiveFormsModule, 
  FormGroup, 
  FormArray, 
  FormBuilder,
  AbstractControl
} from '@angular/forms';

// Definimos la estructura de un estilo
interface StyleCard {
  name: string;
  description: string;
}

@Component({
  selector: 'app-step-visual-style',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-visual-style.component.html',
  styleUrl: './step-visual-style.component.scss'
})
export class StepVisualStyleComponent {
  
  // Recibimos el FormGroup 'visualStyle'
  @Input() visualStyleForm!: FormGroup;

  // Lista completa de los 20 estilos del brief
  readonly allStyles: StyleCard[] = [
    { name: "Minimalista", description: "y sofisticada" },
    { name: "Clásica", description: "y elegante" },
    { name: "Moderna", description: "y vanguardista" },
    { name: "Rústica", description: "y artesanal" },
    { name: "Divertida", description: "y juvenil" },
    { name: "Exclusiva", description: "y de lujo" },
    { name: "Futurista", description: "y disruptiva" },
    { name: "Ecológica", description: "y natural" },
    { name: "Tecnológica", description: "e innovadora" },
    { name: "Corporativa", description: "y profesional" },
    { name: "Formal", description: "y sobria" },
    { name: "Dinámica", description: "y energética" },
    { name: "Amigable", description: "y accesible" },
    { name: "Cultural", description: "y artística" },
    { name: "Vintage", description: "y nostálgica" },
    { name: "Orgánica", description: "y fluida" },
    { name: "Misteriosa", description: "y enigmática" },
    { name: "Industrial", description: "y funcional" },
    { name: "Bohemia", description: "y relajada" },
    { name: "Experimental", description: "y audaz" }
  ];

  constructor(private fb: FormBuilder) { }

  // Getter para el FormArray
  get selectedStylesArray(): FormArray {
    return this.visualStyleForm.get('selectedStyles') as FormArray;
  }

  // --- Lógica de Selección (Click) ---

  toggleStyle(styleName: string): void {
    const array = this.selectedStylesArray;
    const index = this.findStyleIndex(styleName);

    if (index > -1) {
      // Ya está seleccionado, así que lo quitamos
      array.removeAt(index);
    } else if (array.length < 3) {
      // No está seleccionado y hay espacio, así que lo añadimos
      array.push(this.fb.control(styleName));
    } else {
      // Límite alcanzado, podríamos mostrar un feedback
      console.warn('Límite de 3 estilos alcanzado');
    }
  }

  isSelected(styleName: string): boolean {
    return this.findStyleIndex(styleName) > -1;
  }

  // Helper para saber si no se pueden seleccionar más (y atenuar las no seleccionadas)
  isSelectionLimited(): boolean {
    return this.selectedStylesArray.length >= 3;
  }

  private findStyleIndex(styleName: string): number {
    return this.selectedStylesArray.controls.findIndex(
      (control: AbstractControl) => control.value === styleName
    );
  }

  // --- Lógica de Micro-interacción (Mouse) ---

  onCardMouseMove(event: MouseEvent, card: HTMLElement): void {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left; // Posición X del mouse dentro de la tarjeta
    const y = event.clientY - rect.top;  // Posición Y del mouse dentro de la tarjeta

    // Calcular rotación para Parallax
    // (Valores de -10 a 10 grados, por ejemplo)
    const rotateX = (rect.height / 2 - y) / (rect.height / 2) * -10;
    const rotateY = (x - rect.width / 2) / (rect.width / 2) * 10;
    
    // Setear variables CSS para SCSS
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--glare-x', `${x}px`);
    card.style.setProperty('--glare-y', `${y}px`);
    card.style.setProperty('--glare-opacity', '0.1');
  }

  onCardMouseLeave(card: HTMLElement): void {
    // Resetear variables CSS al salir
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
    card.style.setProperty('--glare-opacity', '0');
  }
}