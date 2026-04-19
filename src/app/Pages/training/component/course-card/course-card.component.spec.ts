import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingClass } from '../../Api/model/model';
import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const courseMock: TrainingClass = {
    Title: 'Formacoes',
    Course: [
      {
        name: 'Angular Avancado',
        Link: 'https://example.com/angular',
        date: 2024,
      },
      {
        name: 'Java Completo',
        Link: 'https://example.com/java',
        date: 2023,
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = courseMock;
    component.name = 'Cursos';
    component.year = 'Ano';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with the card closed', () => {
    expect(component.openCloseCard).toBeFalse();
    expect(component.openCloseArrowChange()).toBe('fa-solid fa-chevron-down');
    expect(fixture.nativeElement.querySelector('.course-bottom')).toBeNull();
  });

  it('should toggle the card state when clicking the button', () => {
    component.openCloseButtonClick();

    expect(component.openCloseCard).toBeTrue();
    expect(component.openCloseArrowChange()).toBe('fa-solid fa-chevron-up');
  });

  it('should render course details when the card is open', () => {
    component.openCloseButtonClick();
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector('.course-top h2');
    const headers = fixture.nativeElement.querySelectorAll('.course-bottom h3');
    const links = fixture.nativeElement.querySelectorAll('.course-name a');
    const years = fixture.nativeElement.querySelectorAll('.course-link p');

    expect(title.textContent).toContain('Formacoes');
    expect(headers[0].textContent).toContain('Cursos');
    expect(headers[1].textContent).toContain('Ano');
    expect(links.length).toBe(2);
    expect(links[0].textContent).toContain('Angular Avancado');
    expect(links[0].getAttribute('href')).toBe('https://example.com/angular');
    expect(years[0].textContent?.trim()).toBe('2024');
    expect(years[1].textContent?.trim()).toBe('2023');
  });

  it('should update the icon class in the template when opened', () => {
    component.openCloseButtonClick();
    fixture.detectChanges();

    const icon = fixture.nativeElement.querySelector('.course-top i');

    expect(icon.className).toContain('fa-chevron-up');
  });
});
