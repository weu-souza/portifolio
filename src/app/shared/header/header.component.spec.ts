import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { LanguageService } from '../utils/service/language-service/language-service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let currentLang: string;

  const languageServiceMock = {
    getCurrentLang: () => currentLang,
    setLanguage: (lang: string) => {
      currentLang = lang;
    },
    tFunction: () => (key: string) => {
      const map: Record<string, string> = {
        'header.text.home': 'Home',
        'header.text.experience': 'Experience',
        'header.text.training': 'Training',
        'header.text.projects': 'Projects',
        'header.text.contact': 'Contact',
      };

      return of(map[key] ?? '');
    },
  };

  beforeEach(async () => {
    currentLang = 'pt';

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([]),
        { provide: LanguageService, useValue: languageServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should initialize isEnglish as false when current language is pt', () => {
    fixture.detectChanges();

    expect(component.isEnglish).toBeFalse();
  });

  it('should initialize isEnglish as true when current language is en', () => {
    currentLang = 'en';

    fixture.detectChanges();

    expect(component.isEnglish).toBeTrue();
  });

  it('should delegate translations to LanguageService', done => {
    component.t('header.text.home').subscribe((value) => {
      expect(value).toBe('Home');
      done();
    });
  });

  it('should change the language to en and update isEnglish', () => {
    const setLanguageSpy = spyOn(languageServiceMock, 'setLanguage').and.callThrough();
    const getCurrentLangSpy = spyOn(languageServiceMock, 'getCurrentLang').and.callThrough();

    component.trocarIdioma('en');

    expect(setLanguageSpy).toHaveBeenCalledWith('en');
    expect(getCurrentLangSpy).toHaveBeenCalled();
    expect(component.isEnglish).toBeTrue();
  });

  it('should change the language to pt and update isEnglish', () => {
    currentLang = 'en';
    fixture.detectChanges();

    const setLanguageSpy = spyOn(languageServiceMock, 'setLanguage').and.callThrough();

    component.trocarIdioma('pt');

    expect(setLanguageSpy).toHaveBeenCalledWith('pt');
    expect(component.isEnglish).toBeFalse();
  });
});
