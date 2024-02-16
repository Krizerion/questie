import { ApplicationConfig, importProvidersFrom, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, catchError } from 'rxjs';
import { routes } from './app.routes';

export class LazyTranslateLoader implements TranslateLoader {
  private readonly DEFAULT_LANG = 'en';
  private readonly http = inject(HttpClient);

  getTranslation(lang: string): Observable<object> {
    return this.http.get(`/assets/i18n/${lang}.json`).pipe(
      catchError(() => {
        console.error('The selected language is missing. Defaulting back to English...');
        return this.http.get(`/assets/i18n/${this.DEFAULT_LANG}.json`);
      }),
    );
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom([
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: LazyTranslateLoader,
          deps: [HttpClient],
        },
      }),
    ]),
  ],
};
