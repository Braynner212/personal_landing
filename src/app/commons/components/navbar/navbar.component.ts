import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PrivacyPolicyService } from '../../services/private-policy.service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  currentMenuItem = 'home';
  menuOptions: { content: string; routerlink: string }[] = [
    { content: 'Inicio', routerlink: '/home' },
    { content: 'Sobre mí', routerlink: '/about' },
    { content: 'Proyectos', routerlink: '/project' },
    { content: 'Habilidades', routerlink: '/skill' },
    { content: 'Experiencia', routerlink: '/experience' },
    { content: 'Convercemos', routerlink: '/contact' },
  ];

  constructor( private privacyPolicyServ: PrivacyPolicyService) {}

  openPrivacyPolicy() {
    this.privacyPolicyServ.open();
  }

  closePrivacyPolicy() {
    this.privacyPolicyServ.close();
  }
}
