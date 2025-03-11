import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MenuItemService } from '../../services/menu-item.service';

export const scrollYAnimation = trigger('scrollYAnimation', [
  state(
    'hidden',
    style({
      opacity: 0,
      transform: 'translateY(100px)',
    }),
  ),
  state(
    'visible',
    style({
      opacity: 1,
      transform: 'translateY(0)',
    }),
  ),
  transition('hidden => visible', [animate('5s ease-in')]),
]);

export function listenToMenuItemForAnimation(
  sectionId: string,
  menuItemService: MenuItemService,
) {
  menuItemService.currentMenuItem$.subscribe({
    next: async (element) => {
      const elementRef = element.elementRef;
      if (element.id === sectionId) {
        elementRef.classList.add('visible');
      }
    },
  });
}

export function enterElementAnimation(
  classElement: string,
  classToAdd: string,
) {
  document.addEventListener('DOMContentLoaded', () => {
    const elementRef = document.querySelector(`.${classElement}`);
    elementRef!.classList.add(`${classToAdd}`);
  });
}
