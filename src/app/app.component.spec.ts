import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

import { LanguageService } from './shared/utils/service/language-service/language-service';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  template: '',
})
class MockHeaderComponent {}

describe('AppComponent', () => {
  const languageServiceMock = {
    init: () => undefined,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        { provide: LanguageService, useValue: languageServiceMock },
      ],
    })
      .overrideComponent(AppComponent, {
        set: {
          imports: [CommonModule, RouterOutlet, MockHeaderComponent, ToastModule],
          template: `
            <main class="root-app">
              <app-header></app-header>
              <p-toast></p-toast>
              <router-outlet></router-outlet>
            </main>
          `,
        },
      })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`should have the 'Weuller souza' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.title).toEqual('Weuller souza');
  });

  it('should initialize the language service in the constructor', () => {
    const initSpy = spyOn(languageServiceMock, 'init').and.callThrough();

    TestBed.createComponent(AppComponent);

    expect(initSpy).toHaveBeenCalled();
  });

  it('should render the app shell elements', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('main.root-app')).not.toBeNull();
    expect(compiled.querySelector('app-header')).not.toBeNull();
    expect(compiled.querySelector('p-toast')).not.toBeNull();
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});
