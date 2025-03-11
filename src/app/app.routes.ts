import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export default [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'project', component: ProjectsComponent },
      { path: 'skill', component: SkillComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'project', pathMatch: 'full' },
    ],
  },
] as Routes;
