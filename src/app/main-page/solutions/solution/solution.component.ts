import { Component, Input } from '@angular/core';
import { ISolution } from 'src/app/commons/interfaces/Solution.interface';

@Component({
  standalone: true,
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss'],
})
export class SolutionComponent {
  @Input() solution!: ISolution;
}
