import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withI18nSupport } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { routes } from './app.routes';
import { HttpLoaderFactory } from './core/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
    withPreloading(PreloadAllModules),
    // withDebugTracing(),
  ),
    provideHttpClient(withFetch()),
    provideClientHydration(withI18nSupport()),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'th',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    provideClientHydration(withI18nSupport()), provideAnimationsAsync()]
}
