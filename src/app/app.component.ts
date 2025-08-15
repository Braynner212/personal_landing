import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: '<router-outlet/>',
  imports: [RouterOutlet, CommonModule],
  animations: [
  trigger('fadeInOut', [
    state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
    state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('hidden <=> visible', animate('600ms ease-in-out'))
  ])
]

})
export class AppComponent {
  title = 'personal_landing';
}
