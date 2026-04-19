import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { LanguageService } from 'app/shared/utils/service/language-service/language-service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const mockLanguageService = {
    tFunction: () => (key: string) => {
      const map: Record<string, string> = {
        'home.ano': '2000',
        'home.mes': '0',
        'home.dia': '1',
        'home.home_title': 'Titulo',
        'home.home_text': 'Texto',
      };

      return of(map[key] ?? '');
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{ provide: LanguageService, useValue: mockLanguageService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('deve carregar ano, mes e dia do servico', () => {
    fixture.detectChanges();

    expect(component.ano).toBe(2000);
    expect(component.mes).toBe(0);
    expect(component.dia).toBe(1);
  });

  it('deve calcular idade corretamente', () => {
    component.ano = 2000;
    component.mes = 0;
    component.dia = 1;

    const idade = component.calculcateAgeWithBirthDate();

    expect(idade).toBeGreaterThan(20);
  });

  it('deve chamar o languageService 3 vezes', () => {
    const spy = spyOn(mockLanguageService, 'tFunction').and.callThrough();

    component.ngOnInit();

    expect(spy).toHaveBeenCalledTimes(3);
  });
});
