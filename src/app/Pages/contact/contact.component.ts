import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from './Api/model/contact';
import { ToastServiceService } from '../../shared/utils/service/toast-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  //@ts-ignore
  contact: FormGroup;
  IContact: Contact = new Contact();
  constructor(
    private fb: FormBuilder,
    private toast:ToastServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.contact = this.fb.group({
      name: ['', [Validators.required,]],
      email: ['', [Validators.required,Validators.email]],
      message: ['', [Validators.required,]],
    });
  }

  send() {
    if (this.contact.dirty && this.contact.valid) {
      this.IContact = Object.assign({}, this.IContact, this.contact.value);
      this.toast.success("Email enviado","aguarde alguns dias e eu te retornarei.")
      console.log(this.IContact);
    }
    else{
      this.toast.warn('Não enviado','formulario invalido')
    }
  }
}
