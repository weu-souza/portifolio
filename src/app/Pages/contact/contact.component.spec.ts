import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { LanguageService } from 'app/shared/utils/service/language-service/language-service';
import { ToastServiceService } from '../../shared/utils/service/toast-service.service';
import { ContactService } from './Api/service/contact.service';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let contactServiceMock: jasmine.SpyObj<ContactService>;
  let toastServiceMock: jasmine.SpyObj<ToastServiceService>;

  const languageServiceMock = {
    tFunction: () => () => of('translated text'),
  };

  beforeEach(async () => {
    contactServiceMock = jasmine.createSpyObj<ContactService>('ContactService', ['send']);
    toastServiceMock = jasmine.createSpyObj<ToastServiceService>('ToastServiceService', ['warn']);

    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        { provide: LanguageService, useValue: languageServiceMock },
        { provide: ToastServiceService, useValue: toastServiceMock },
      ],
    })
      .overrideComponent(ContactComponent, {
        set: {
          providers: [{ provide: ContactService, useValue: contactServiceMock }],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the contact form on init', () => {
    expect(component.contact).toBeTruthy();
    expect(component.contact.contains('from_name')).toBeTrue();
    expect(component.contact.contains('email')).toBeTrue();
    expect(component.contact.contains('message')).toBeTrue();
  });

  it('should mark the form as invalid when required fields are empty', () => {
    component.contact.setValue({
      from_name: '',
      email: '',
      message: '',
    });

    expect(component.contact.invalid).toBeTrue();
    expect(component.contact.get('from_name')?.errors?.['required']).toBeTrue();
    expect(component.contact.get('email')?.errors?.['required']).toBeTrue();
    expect(component.contact.get('message')?.errors?.['required']).toBeTrue();
  });

  it('should mark email as invalid when format is incorrect', () => {
    component.contact.patchValue({
      from_name: 'Weuller',
      email: 'email-invalido',
      message: 'Mensagem',
    });

    expect(component.contact.get('email')?.errors?.['email']).toBeTrue();
    expect(component.contact.invalid).toBeTrue();
  });

  it('should send the contact and reset the form when it is dirty and valid', () => {
    const resetSpy = spyOn(component.contact, 'reset').and.callThrough();

    component.contact.setValue({
      from_name: 'Weuller',
      email: 'weuller@example.com',
      message: 'Mensagem de teste',
    });
    component.contact.markAsDirty();

    component.send();

    expect(contactServiceMock.send).toHaveBeenCalledWith({
      from_name: 'Weuller',
      email: 'weuller@example.com',
      message: 'Mensagem de teste',
    });
    expect(resetSpy).toHaveBeenCalled();
    expect(toastServiceMock.warn).not.toHaveBeenCalled();
  });

  it('should warn and not send when the form is invalid', () => {
    component.contact.setValue({
      from_name: '',
      email: 'email-invalido',
      message: '',
    });
    component.contact.markAsDirty();

    component.send();

    expect(contactServiceMock.send).not.toHaveBeenCalled();
    expect(toastServiceMock.warn).toHaveBeenCalledWith('N\u00E3o enviado', 'formulario invalido');
  });
});
