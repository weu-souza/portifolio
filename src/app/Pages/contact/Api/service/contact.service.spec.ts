import { TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import emailjs from '@emailjs/browser';

import { environment } from 'environments/environment';
import { ToastServiceService } from '../../../../shared/utils/service/toast-service.service';
import { Contact } from '../model/contact';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let toastServiceMock: jasmine.SpyObj<ToastServiceService>;

  const contact: Contact = {
    from_name: 'Weuller',
    email: 'weuller@example.com',
    message: 'Ola, tudo bem?',
  };

  beforeEach(() => {
    toastServiceMock = jasmine.createSpyObj<ToastServiceService>(
      'ToastServiceService',
      ['success', 'error']
    );

    TestBed.configureTestingModule({
      providers: [
        ContactService,
        { provide: ToastServiceService, useValue: toastServiceMock },
      ],
    });

    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize emailjs with the API key before sending', fakeAsync(() => {
    const initSpy = spyOn(emailjs, 'init');
    const sendSpy = spyOn(emailjs, 'send').and.returnValue(
      Promise.resolve({ status: 200, text: 'OK' })
    );

    service.send(contact);
    flushMicrotasks();

    expect(initSpy).toHaveBeenCalledWith(environment.API_KEY);
    expect(sendSpy).toHaveBeenCalled();
  }));

  it('should send the email with environment ids and mapped payload', fakeAsync(() => {
    spyOn(emailjs, 'init');
    const sendSpy = spyOn(emailjs, 'send').and.returnValue(
      Promise.resolve({ status: 200, text: 'OK' })
    );

    service.send(contact);
    flushMicrotasks();

    expect(sendSpy).toHaveBeenCalledWith(environment.SERVICE_ID, environment.TEMPLATE_ID, {
      from_name: contact.from_name,
      message: contact.message,
      email: contact.email,
    });
  }));

  it('should show success toast when email sending succeeds', fakeAsync(() => {
    spyOn(emailjs, 'init');
    spyOn(emailjs, 'send').and.returnValue(Promise.resolve({ status: 200, text: 'OK' }));

    service.send(contact);
    flushMicrotasks();

    expect(toastServiceMock.success).toHaveBeenCalledWith(
      'Email enviado',
      'aguarde alguns dias e eu te retornarei.'
    );
    expect(toastServiceMock.error).not.toHaveBeenCalled();
  }));

  it('should show error toast when email sending fails', fakeAsync(() => {
    spyOn(emailjs, 'init');
    spyOn(emailjs, 'send').and.returnValue(Promise.reject(new Error('send failed')));

    service.send(contact);
    flushMicrotasks();

    expect(toastServiceMock.error).toHaveBeenCalledWith(
      'Algo deu errado',
      'Algo deu errado com o envio do email, entre em contato comigo em outras redes sociais'
    );
    expect(toastServiceMock.success).not.toHaveBeenCalled();
  }));
});
