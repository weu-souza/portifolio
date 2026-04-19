import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the not found title', () => {
    const title = fixture.nativeElement.querySelector('h1');

    expect(title).not.toBeNull();
    expect(title.textContent?.toLowerCase()).toContain('p');
    expect(title.textContent?.toLowerCase()).toContain('encontrada');
  });

  it('should render the illustration svg', () => {
    const svg = fixture.nativeElement.querySelector('svg');

    expect(svg).not.toBeNull();
  });
});
