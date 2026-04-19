import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';

import { ToastServiceService } from './toast-service.service';

describe('ToastServiceService', () => {
  let service: ToastServiceService;
  let messageServiceMock: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    messageServiceMock = jasmine.createSpyObj<MessageService>('MessageService', ['add']);

    TestBed.configureTestingModule({
      providers: [
        ToastServiceService,
        { provide: MessageService, useValue: messageServiceMock },
      ],
    });

    service = TestBed.inject(ToastServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a success toast', () => {
    service.success('Sucesso', 'Operacao realizada');

    expect(messageServiceMock.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Operacao realizada',
    });
  });

  it('should send an error toast', () => {
    service.error('Erro', 'Falha ao executar');

    expect(messageServiceMock.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Erro',
      detail: 'Falha ao executar',
    });
  });

  it('should send a warning toast', () => {
    service.warn('Aviso', 'Preencha os campos');

    expect(messageServiceMock.add).toHaveBeenCalledWith({
      severity: 'warn',
      summary: 'Aviso',
      detail: 'Preencha os campos',
    });
  });
});
