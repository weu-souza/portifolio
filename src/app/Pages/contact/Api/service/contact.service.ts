import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../../environments/environment';
import { ToastServiceService } from '../../../../shared/utils/service/toast-service.service';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private toast: ToastServiceService) {}

  send(email: Contact) {
    emailjs.init(environment.API_KEY);
    emailjs
      .send(environment.SERVICE_ID, environment.TEMPLATE_ID, {
        from_name: email.from_name,
        message: email.message,
        email: email.email,
      })
      .then((res) => {
        this.toast.success(
          'Email enviado',
          'aguarde alguns dias e eu te retornarei.'
        );
      })
      .catch((err) => {
        this.toast.error('Algo deu errado', "Algo deu errado com o envio do email, entre em contato comigo em outras redes sociais");
      });
  }
}
