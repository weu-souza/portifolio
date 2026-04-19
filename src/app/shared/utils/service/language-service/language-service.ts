import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {}

  init() {
    const lang = localStorage.getItem('lang') || 'pt';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  setLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

  getCurrentLang() {
    return this.translate.currentLang;
  }
  tFunction() {
    return (key: string, params?: any) => this.translate.stream(key, params);
  }
}
