import { Component } from '@angular/core';
import { NavbarComponent } from '../commons/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [NavbarComponent, RouterModule],
})
export class MainPageComponent {}
