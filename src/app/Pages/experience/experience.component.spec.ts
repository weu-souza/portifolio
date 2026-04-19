import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { LanguageService } from 'app/shared/utils/service/language-service/language-service';
import { Iexperiencia } from './Api/model/Experience';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  const experienceMock: Iexperiencia[] = [
    {
      titulo: 'Projeto Angular',
      cargo: 'Frontend Developer',
      descricao: 'Desenvolvimento de telas e componentes',
      linguagem: ['Angular', 'TypeScript', 'SCSS'],
      exp_ano: 2024,
    },
    {
      titulo: 'Projeto Java',
      cargo: 'Backend Developer',
      descricao: 'Construção de APIs e integrações',
      linguagem: ['Java', 'Spring Boot'],
      exp_ano: 2023,
    },
  ];

  const languageServiceMock = {
    tFunction: () => (key: string) => {
      const map: Record<string, unknown> = {
        'experience.exp_title': 'Experiencia',
        'experience.exp_description': 'Minha trajetoria profissional',
        'experience.exp_card': experienceMock,
      };

      return of(map[key]);
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [{ provide: LanguageService, useValue: languageServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load experiences on init', () => {
    fixture.detectChanges();

    expect(component.experiencia).toEqual(experienceMock);
  });

  it('should delegate translations to LanguageService', done => {
    component.t('experience.exp_title').subscribe((value) => {
      expect(value).toBe('Experiencia');
      done();
    });
  });

  it('should call languageService once to load the experiences', () => {
    const spy = spyOn(languageServiceMock, 'tFunction').and.callThrough();

    component.ngOnInit();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render one card for each experience item', () => {
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('.cards-container');

    expect(cards.length).toBe(2);
    expect(cards[0].textContent).toContain('Projeto Angular');
    expect(cards[1].textContent).toContain('Projeto Java');
  });
});
