import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes'; // se você tiver rotas, senão pode remover

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),                   // se não tiver rotas, pode remover
    importProvidersFrom(ReactiveFormsModule) // global p/ reactive forms
  ],
};
