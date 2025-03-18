import { Component } from '@angular/core';
import { IExperience } from '../commons/interfaces/Experience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {

  experiences: IExperience[] = [
    {
      role: 'Profesional TI Junior (Área de Ciberseguridad)',
      company: 'A-ire Intervenido',
      time: '2024 - 2025',
      functions: [
        'Trabajó en la estandarización de desarrollo seguro usando OWASP TOP 10.',
        'Resolución de casos de soporte a aplicaciones requeridas desde el enfoque de ciberseguridad.',
      ],
    },
    {
      role: 'Desarrollador Fullstack',
      company: 'Orbita Ingenieros SAS',
      time: '2023 - 2024',
      functions: [
        'Desarrolló aplicaciones para control y gestión de información, además de la integración con equipos por protocolos como rstp, mqtt, entre otros y Modbus/TCP a un servidor OPC para almacenar y presentar la información de acuerdo a las necesidades. También se usó despliegue con pm2 y Nginx.',
      ],
    },
    {
      role: 'Desarrollador Fullstack',
      company: 'Desarrollos & Proyectos SAS',
      time: '2021 - 2023',
      functions: [
        'Se desarrollaron módulos en un software, los cuales estaban enfocados a la gestión documental de la empresa. Con desarrollo de formularios dinámicos en Angular, backend en Laravel y estructuración de base de datos con SQL, lo que nos permitió la factibilidad y agilidad para recuperar la información.',
        'Planificación e implementación del análisis de datos en una etapa temprana. Con la herramienta Google Analytics en la página principal.',
      ],
    },
  ];
}
