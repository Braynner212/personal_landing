import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/commons/interfaces/Project.interface';

@Component({
  standalone: true,
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project!: IProject;
}
