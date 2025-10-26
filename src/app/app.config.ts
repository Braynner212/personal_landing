import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import ROUTES_ROOT from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES_ROOT),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideCharts(withDefaultRegisterables()),
  ],
};
