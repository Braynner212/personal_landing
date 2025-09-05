import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItemService } from '../../services/menu-item.service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class NavbarComponent implements OnInit {
  currentMenuItem = 'home';
  menuOptions: { content: string; name: string, href: string }[] = [
    { content: 'Inicio', name: 'home', href: '#home', },
    { content: 'Nosotros', name: 'about', href: '#about', },
    { content: 'servicios', name: 'solutions', href: '#solution' },
/*     { content: 'Habilidades', name: 'skills', href: '#skills' },
    { content: 'Experiencia', name: 'experience', href: '#experience' }, */
    { content: 'Convercemos', name: 'contact', href: '#contact' },
  ];

  constructor( private menuItemServ: MenuItemService) {}
  
  ngOnInit(): void {
    this.menuItemServ.scrollTo('home');

    this.menuItemServ.currentMenuItem$.subscribe((elementId) => {
      this.currentMenuItem = elementId;
    });
  }

  scrollTo(elementId: string) {
    this.menuItemServ.scrollTo(elementId);
  }

}
