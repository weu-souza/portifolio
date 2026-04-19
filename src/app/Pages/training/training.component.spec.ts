import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { LanguageService } from 'app/shared/utils/service/language-service/language-service';
import { TrainingClass } from './Api/model/model';
import { TrainingComponent } from './training.component';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;

  const trainingMock: TrainingClass[] = [
    {
      Title: 'Cursos',
      Course: [
        {
          name: 'Angular Avancado',
          Link: 'https://example.com/angular',
          date: 2024,
        },
      ],
    },
  ];

  const certificationMock: TrainingClass[] = [
    {
      Title: 'Certificacoes',
      Course: [
        {
          name: 'AWS Cloud Practitioner',
          Link: 'https://example.com/aws',
          date: 2023,
        },
      ],
    },
  ];

  const englishMock: TrainingClass[] = [
    {
      Title: 'Idiomas',
      Course: [
        {
          name: 'English B2',
          Link: 'https://example.com/english',
          date: 2022,
        },
      ],
    },
  ];

  const languageServiceMock = {
    tFunction: () => (key: string) => {
      const map: Record<string, unknown> = {
        'training.training_title': 'Formacao',
        'training.training_description': 'Cursos, certificacoes e idiomas',
        'training.formation.title_h2': 'Formacao academica',
        'training.formation.title_h3': 'Resumo',
        'training.formation.course': 'Curso',
        'training.formation.year': 'Ano',
        'training.certification_title': 'Certificacoes',
        'training.courses_title': 'Cursos',
        'training.languages_title': 'Idiomas',
        'training.course_card_title': 'Nome',
        'training.course_card_year': 'Ano',
        'training.courses': trainingMock,
        'training.certifications': certificationMock,
        'training.languages': englishMock,
      };

      return of(map[key] ?? '');
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingComponent],
      providers: [{ provide: LanguageService, useValue: languageServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all training sections on init', () => {
    fixture.detectChanges();

    expect(component.training).toEqual(trainingMock);
    expect(component.certification).toEqual(certificationMock);
    expect(component.english).toEqual(englishMock);
  });

  it('should load courses when getItem is called', () => {
    component.getItem();

    expect(component.training).toEqual(trainingMock);
  });

  it('should load certifications when getCertification is called', () => {
    component.getCertification();

    expect(component.certification).toEqual(certificationMock);
  });

  it('should load languages when getEnglish is called', () => {
    component.getEnglish();

    expect(component.english).toEqual(englishMock);
  });

  it('should delegate translations to LanguageService', done => {
    component.t('training.training_title').subscribe((value) => {
      expect(value).toBe('Formacao');
      done();
    });
  });

  it('should render one course card for each loaded section item', () => {
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('app-course-card');

    expect(cards.length).toBe(3);
  });
});
