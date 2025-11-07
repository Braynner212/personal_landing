import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './main-page/home/home.component';
import { AboutComponent } from './main-page/about/about.component';
import { SkillComponent } from './main-page/skills/skills.component';
import { ExperienceComponent } from './main-page/experience/experience.component';
import { SolutionsComponent } from './main-page/solutions/solutions.component';
import { ContactComponent } from './main-page/contact/contact.component';
import { BriefWizardComponent } from './brief-wizard/brief-wizard.component';

export default [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '#home', component: HomeComponent },
      { path: '#about', component: AboutComponent },
      { path: '#solution', component: SolutionsComponent },
      { path: '#skill', component: SkillComponent },
      { path: '#experience', component: ExperienceComponent },
      { path: '#contact', component: ContactComponent },
    ],
  },
  {
    path: 'initial-form',
    component: BriefWizardComponent,
  },
  {
    path: 'initial-form/:id',
    component: BriefWizardComponent,
  },
  { path: '**', redirectTo: '#home', pathMatch: 'full' },

] as Routes;
