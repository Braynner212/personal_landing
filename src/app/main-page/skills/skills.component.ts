import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { AnimateOnScrollDirective } from '../../commons/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ BaseChartDirective, AnimateOnScrollDirective ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillComponent {
  skills_list: { name: string; scope: number }[] = [
    { name: 'Angular', scope: 8 },
    { name: 'Node', scope: 7 },
    { name: 'Sequelize', scope: 6 },
    { name: 'HTML', scope: 8 },
    { name: 'Bootstrap', scope: 5 },
    { name: 'SCSS', scope: 5 },
    { name: 'Typescript', scope: 7 },
    { name: 'Figma', scope: 4 },
    { name: 'MySQL', scope: 8 },
  ];

  // Create an array scope of skills with 10 elements with value 0 if lenght is 10 and each element if scope is 8  create a array [1,1,1,1,1,1,1,1,0,0]
  createArrayScopeSkill(skill: { name: string; scope: number }) {
    const arraySkill = new Array(10).fill(0, 0, 10);
    arraySkill.fill(1, 0, skill.scope);
    return arraySkill;
  }

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    borderColor: '#0A8D85',
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        pointLabels: {
          display: false,
          font: {
            size: 10, // Reducir tamaño de la fuente
            weight: 'bold',
          },
        },
        min: 0,
        max: 10,
        ticks: {
          backdropColor: 'transparent',
          stepSize: 2,
          color: '#ffffff',
          font: {
            size: 4,
            weight: 'bold',
          },
        },
        grid: {
          color: '#807C7C',
          lineWidth: 2,
        },
        angleLines: {
          color: '#807C7C',
          lineWidth: 2,
        },
      },
    },
  };
  public radarChartLabels: string[] = [
    'Comunicación asertiva',
    'Adaptabilidad y aprendizaje continuo',
    'Atención al detalle',
    'Trabajo en equipo y Colaboración',
    'Resolución de Problemas',
    'Creatividad',
  ];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [9, 8, 8, 8, 7, 9] },
  ];
}
