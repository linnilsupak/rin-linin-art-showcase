import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../../environments/environment';
import { npm_package_version } from '../../environments/.env';


export function HttpLoaderFactory(http: HttpClient) {
  const version = environment.production ? npm_package_version: Date.now();
  return new TranslateHttpLoader(http, './assets/i18n/', '.json?v=' + encodeURIComponent(version));
}
