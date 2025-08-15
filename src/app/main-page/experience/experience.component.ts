import { Component } from '@angular/core';
import { IExperience } from '../../commons/interfaces/Experience.interface';
import { AnimateOnScrollDirective } from '../../commons/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  imports: [AnimateOnScrollDirective]
})
export class ExperienceComponent {

  experiences: IExperience[] = [
    {
      role: 'Profesional TI (Área de Ciberseguridad)',
      company: 'A-ire Intervenido',
      time: '2024 - 2025',
      functions: [
        'Desarrollo de estándares de seguridad en aplicaciones basados en OWASP TOP 10.',
        'Resolución de incidencias en aplicaciones desde un enfoque de ciberseguridad.',
      ],
    },
    {
      role: 'Desarrollador Fullstack',
      company: 'Orbita Ingenieros SAS',
      time: '2023 - 2024',
      functions: [
        'Desarrollo de aplicaciones para gestión y control de información.',
        'Integración con dispositivos mediante RTSP, MQTT y Modbus/TCP.',
        'Implementación de servidores OPC para almacenamiento y presentación de datos.',
        'Despliegue de aplicaciones con PM2 y Nginx.'
      ],
    },
    {
      role: 'Desarrollador Fullstack',
      company: 'Desarrollos & Proyectos SAS',
      time: '2021 - 2023',
      functions: [
        'Desarrollo de módulos para gestión documental con Angular y Laravel.',
        'Diseño de formularios dinámicos en Angular optimizando la recuperación de datos.',
        'Implementación de Google Analytics para análisis de tráfico web.'
      ],
    },
  ];
}
