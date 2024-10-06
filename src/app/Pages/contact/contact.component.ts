import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from './Api/model/contact';
import { ToastServiceService } from '../../shared/utils/service/toast-service.service';
import { CommonModule } from '@angular/common';
import { ContactService } from './Api/service/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  providers:[ContactService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  //@ts-ignore
  contact: FormGroup;
  IContact: Contact = new Contact();
  constructor(
    private fb: FormBuilder,
    private toast:ToastServiceService,
    private contactService:ContactService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.contact = this.fb.group({
      from_name: ['', [Validators.required,]],
      email: ['', [Validators.required,Validators.email]],
      message: ['', [Validators.required,]],
    });
  }

  send() {
    if (this.contact.dirty && this.contact.valid) {
      this.IContact = Object.assign({}, this.IContact, this.contact.value);
      this.contactService.send(this.IContact)
      this.contact.reset()
    }
    else{
      this.toast.warn('Não enviado','formulario invalido')
    }
  }
}
