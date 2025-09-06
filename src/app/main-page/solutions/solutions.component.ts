import { Component, HostListener, OnInit } from '@angular/core';
import { ISolution } from '../../commons/interfaces/Solution.interface';
import { SolutionComponent } from './solution/solution.component';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../commons/directives/animate-on-scroll.directive';

@Component({
  standalone: true,
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
  imports: [CommonModule, SolutionComponent, AnimateOnScrollDirective],
})
export class SolutionsComponent implements OnInit {
  solutions: ISolution[] = [
    {
      name: 'Diseño UX',
      description:
        'Creamos experiencias digitales centradas en el usuario, claras y fáciles de usar, que impulsan confianza y decisiones rápidas.',
      image: 'assets/images/services/design.png',
      alt: 'Diseño de experiencia',
    },
    {
      name: 'Sitios Web',
      description:
        'Construimos páginas que cuentan una historia, atraen miradas y convierten visitas en oportunidades para tu negocio crecer.',
      image: 'assets/images/services/landing-pages.png',
      alt: 'Páginas efectivas',
    },
    {
      name: 'Software a Medida',
      description:
        'Creamos software y sitios a medida que se ajustan a tus procesos, reducen tareas repetitivas y crecen junto a tu empresa.',
      image: 'assets/images/services/custom-software.png',
      alt: 'Soluciones personalizadas',
    },
    {
      name: 'Automatización con IA',
      description:
        'Implementamos inteligencia artificial en procesos administrativos y operativos para ahorrar tiempo y aumentar eficiencia.',
      image: 'assets/images/services/ai-automation.png',
      alt: 'Automatización inteligente',
    },
  ];

  screenCurrent!: 'laptop' | 'tablet' | 'mobile';
  viewportWidth: number = window.innerWidth;

  chunkedSolutions: ISolution[][] = [];

  ngOnInit() {
    this.chuckedGroupsByViewport();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.viewportWidth = window.innerWidth;
    this.chuckedGroupsByViewport();
  }

  chuckedGroupsByViewport(): void {
    if(this.viewportWidth >= 1024) {
      this.screenCurrent = 'laptop';
      this.chunkedSolutions = this.chunkedElements(this.solutions, 2);
    } else if (this.viewportWidth < 1024 && this.viewportWidth >= 768) {
      this.screenCurrent = 'tablet';
      this.chunkedSolutions = this.chunkedElements(this.solutions, 1);
    } else if (this.viewportWidth < 768) {
      this.screenCurrent = 'mobile';
      this.chunkedSolutions = this.chunkedElements(this.solutions, 1);
    }
  }

  chunkedElements(arrayElements: ISolution[], size: number): ISolution[][] {
    const chunks: ISolution[][] = [];

    for (let i = 0; i < arrayElements.length; i += size) {
      const chunk = arrayElements.slice(i, i + size);
      chunks.push(chunk);
    }

    return chunks;
  }
}
