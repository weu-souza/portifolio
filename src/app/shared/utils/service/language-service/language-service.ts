import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {}

  init() {
    const lang = sessionStorage.getItem('lang') || 'pt';
    this.translate.use(lang);
  }

  setLanguage(lang: string) {
    sessionStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

  getCurrentLang() {
    return this.translate.getCurrentLang();
  }
  tFunction() {
    return (key: string, params?: any) => this.translate.stream(key, params);
  }
}
