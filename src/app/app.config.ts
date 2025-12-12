import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: 'Aura',                           
      },
    }),
    provideZoneChangeDetection(),
    provideRouter(routes, withHashLocation()),
    provideAnimations(),
  ],
};
