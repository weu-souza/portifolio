import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { LanguageService } from 'app/shared/utils/service/language-service/language-service';
import { Iprojetos } from './Api/model/Projects.model';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  const projectsMock: Iprojetos[] = [
    {
      imagem: 'assets/project-1.png',
      titulo: 'Portfolio',
      descricao: 'Aplicacao Angular para portfolio pessoal',
      link: 'https://github.com/example/portfolio',
      video: 'portfolio-demo',
    },
    {
      imagem: 'assets/project-2.png',
      titulo: 'Dashboard',
      descricao: 'Painel administrativo com graficos',
      link: 'https://github.com/example/dashboard',
      video: 'dashboard-demo',
    },
  ];

  const languageServiceMock = {
    tFunction: () => (key: string) => {
      const map: Record<string, unknown> = {
        'projects.projects_title': 'Projetos',
        'projects.projects_description': 'Lista de projetos desenvolvidos',
        'projects.video_button': 'Video',
        'projects.github_buton': 'Github',
        'projects.projects_card': projectsMock,
      };

      return of(map[key] ?? '');
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [{ provide: LanguageService, useValue: languageServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load projects on init', () => {
    fixture.detectChanges();

    expect(component.projeto).toEqual(projectsMock);
  });

  it('should delegate translations to LanguageService', done => {
    component.t('projects.projects_title').subscribe((value) => {
      expect(value).toBe('Projetos');
      done();
    });
  });

  it('should open the modal with the selected video title', () => {
    component.openModal('portfolio-demo');

    expect(component.videoTitle).toBe('portfolio-demo');
    expect(component.visible).toBeTrue();
  });

  it('should render one card for each project', () => {
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('.cards');

    expect(cards.length).toBe(2);
    expect(cards[0].textContent).toContain('Portfolio');
    expect(cards[1].textContent).toContain('Dashboard');
  });
});
