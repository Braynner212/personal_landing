import { Component } from '@angular/core';
import { NavbarComponent } from '../commons/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';


@Component({
  standalone: true,
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SkillComponent,
    ExperienceComponent,
    ContactComponent,
    RouterModule,
  ],
})
export class MainPageComponent {}
