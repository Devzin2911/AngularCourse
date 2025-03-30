import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

import { provideImgixLoader, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './interceptor/http.interceptor';
import { provideTranslate } from './app.translate';
import { environment } from 'environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideImgixLoader(environment.img),
    provideTranslate(),
    provideAnimationsAsync(),

    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
};
