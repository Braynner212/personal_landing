import { Component, OnInit } from '@angular/core';
import { IProject } from '../commons/interfaces/Project.interface';
import { MenuItemService } from '../commons/services/menu-item.service';
import { listenToMenuItemForAnimation } from '../commons/utils/animations/animate';
import { IsVisibleForScrollDirective } from '../commons/directives/is-visible-for-scroll.directive';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule, ProjectComponent, IsVisibleForScrollDirective],
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [
    {
      name: 'Gestoring Task',
      description:
        'Es un proyecto en el que implementaron estrategias como Movil First y RxJs para gestión de estados.',
      image: 'assets/images/projects/gestoring-task.png',
      alt: 'f',
      url: 'c',
    },
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

  constructor(private menuItemService: MenuItemService) {}

  ngOnInit(): void {
    listenToMenuItemForAnimation('projects', this.menuItemService);
  }
}
