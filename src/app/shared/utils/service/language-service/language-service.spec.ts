import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { LanguageService } from './language-service';

describe('LanguageService', () => {
  let service: LanguageService;
  let translateServiceMock: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    translateServiceMock = jasmine.createSpyObj<TranslateService>(
      'TranslateService',
      ['use', 'getCurrentLang', 'stream']
    );

    translateServiceMock.stream.and.returnValue(of('translated value'));
    translateServiceMock.getCurrentLang.and.returnValue('pt');

    TestBed.configureTestingModule({
      providers: [
        LanguageService,
        { provide: TranslateService, useValue: translateServiceMock },
      ],
    });

    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with the language from sessionStorage', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('en');

    service.init();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('lang');
    expect(translateServiceMock.use).toHaveBeenCalledWith('en');
  });

  it('should initialize with pt when sessionStorage has no language', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue(null);

    service.init();

    expect(translateServiceMock.use).toHaveBeenCalledWith('pt');
  });

  it('should persist and apply the selected language', () => {
    spyOn(sessionStorage, 'setItem');

    service.setLanguage('en');

    expect(sessionStorage.setItem).toHaveBeenCalledWith('lang', 'en');
    expect(translateServiceMock.use).toHaveBeenCalledWith('en');
  });

  it('should return the current language from TranslateService', () => {
    translateServiceMock.getCurrentLang.and.returnValue('en');

    const currentLang = service.getCurrentLang();

    expect(currentLang).toBe('en');
    expect(translateServiceMock.getCurrentLang).toHaveBeenCalled();
  });

  it('should return a translation function backed by TranslateService.stream', done => {
    const params = { name: 'Weuller' };

    service.tFunction()('home.title', params).subscribe(value => {
      expect(value).toBe('translated value');
      expect(translateServiceMock.stream).toHaveBeenCalledWith('home.title', params);
      done();
    });
  });
});
