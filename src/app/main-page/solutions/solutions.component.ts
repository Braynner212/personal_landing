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
        'Creamos experiencias digitales, claras y intuitivas, que impulsan confianza y decisiones rápidas.',
      image: 'assets/images/solutions/design-ux.png',
      alt: 'Diseño de experiencia',
    },
    {
      name: 'Sitios Web',
      description:
        'Construimos páginas que reflejan la identidad de tu negocio y convierten visitas en oportunidades.',
      image: 'assets/images/solutions/websites.png',
      alt: 'Páginas efectivas',
    },
    {
      name: 'Software a Medida',
      description:
        'Creamos software que se ajustan a tus procesos, optimizan tareas y crecen junto a tu empresa.',
      image: 'assets/images/solutions/custom-softwares.png',
      alt: 'Soluciones personalizadas',
    },
    {
      name: 'Automatización - IA',
      description:
        'Automatizamos con inteligencia artificial procesos administrativos y operativos.',
      image: 'assets/images/solutions/ai-automation.png',
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
