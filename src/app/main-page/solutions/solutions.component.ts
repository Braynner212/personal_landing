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
      name: 'Páginas de Aterrizaje',
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

    /* {
      name: 'Diseño',
      description:
        'Es un proyecto en el que implementaron estrategias como Movil First y RxJs para gestión de estados.',
      image: 'assets/images/projects/gestoring-task.png',
      alt: 'f',
    }, */
    /* {
      name: 'SmartCity',
      description:
        'Este proyecto con fines académicos, es una solución que permite de forma gráfica e intuitiva interactuar con varias soluciones de alta tecnología desde la geolocación de vehículos para el monitarie de tráfico, control de luminarias y control de luces hasta un cubrimiento IoT de la ciudad de forma holística.',
      image: 'assets/images/projects/smartdashboard.JPEG',
      alt: 'f',
      url: 'c',
    }, */
    /*     {
      name: 'Convicción & Coraje',
      description:
        'Esta es una tienda de ropa enfocada netametne a la ropa para cabelleros. \n Es un estilo muy clásico y moderno, hasta un poco atemporal me atrevería a decir. Lo interesante en la dinámica de esta tienda es que es muy innovadora buscaban darle forma la realidad aumentada de la ropa para una experiencia más divertida. \n Es una tienda muy especial y de la mejor calidad.',
      image: 'assets/images/projects/smartdashboard.jpg',
      alt: '<a href="https://www.freepik.com/free-ai-image/black-suit-man-street-photography_93557991.htm#fromView=image_search_similar&page=1&position=0&uuid=e537fc3a-54ad-4a96-b68e-778ff8ac5821">Image by vector_corp on Freepik</a>',
      url: 'https://convicción-coraje.netlify.app/',
    },
    {
      name: 'AI-ARBoard',
      description:
        'Este es un proyecto que tiene como objetivo brindar una herramienta a las mentes con visión futurista y de la mano con ai y AR. \n Esta herramienta le permite a las personas ver de una manera más fluida su espacialidad, permite la capacidad de trabajo en equipo y abre las puertas un nuevo paradigma para la interacción con la simbiosis entre los seres humanos y la tecnología',
      image: 'assets/images/projects/ai-arboard.jpg',
      alt: '<a href="https://www.freepik.com/free-ai-image/beauty-digital-art-through-immersive-experiences_138695766.htm#fromView=search&page=1&position=15&uuid=ef0336da-928a-41fb-a5f1-ba16049a1ce6">Image by freepik</a>',
      url: 'https://ai-arboard.netlify.app/',
    }, */
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
