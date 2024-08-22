import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withI18nSupport } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from './core/http-loader';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, inMemoryScrollingFeature),
    provideHttpClient(),
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
