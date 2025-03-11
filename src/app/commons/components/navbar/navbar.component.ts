import { Component, inject, OnInit } from '@angular/core';
import { MenuItemService } from '../../services/menu-item.service';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { enterElementAnimation } from '../../utils/animations/animate';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class NavbarComponent implements OnInit {
  menuItemService = inject(MenuItemService);
  currentMenuItem: string = 'home';
  menuOptions: { content: string; routerlink: string }[] = [
    { content: 'Inicio', routerlink: '/home' },
    { content: 'Sobre mí', routerlink: '/about' },
    { content: 'Proyectos', routerlink: '/project' },
    { content: 'Habilidades', routerlink: '/skill' },
    { content: 'Experiencia', routerlink: '/experience' },
    { content: 'Convercemos', routerlink: '/contact' },
  ];

  ngOnInit(): void {
    this.menuItemService.currentMenuItem$
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((element) => {
        this.currentMenuItem = element.id;
      });

    this.menuItemService.scrollTo('home');

    this.navbarInit();
  }

  navbarInit() {
    enterElementAnimation('navbar', 'navbar_visible');
  }

  scrollTo(elementId: string) {
    this.menuItemService.scrollTo(elementId);
  }
}
