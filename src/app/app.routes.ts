import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './main-page/home/home.component';
import { AboutComponent } from './main-page/about/about.component';
import { SkillComponent } from './main-page/skills/skills.component';
import { ExperienceComponent } from './main-page/experience/experience.component';
import { ProjectsComponent } from './main-page/projects/projects.component';
import { ContactComponent } from './main-page/contact/contact.component';

export default [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '#home', component: HomeComponent },
      { path: '#about', component: AboutComponent },
      { path: '#project', component: ProjectsComponent },
      { path: '#skill', component: SkillComponent },
      { path: '#experience', component: ExperienceComponent },
      { path: '#contact', component: ContactComponent },
      { path: '**', redirectTo: '#home', pathMatch: 'full' },
    ],
  },
] as Routes;
