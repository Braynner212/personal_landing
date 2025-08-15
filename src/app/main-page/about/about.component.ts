import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../commons/directives/animate-on-scroll.directive';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [ AnimateOnScrollDirective],
})
export class AboutComponent {}
