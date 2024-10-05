import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Contact } from './Api/model/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
//@ts-ignore
  contact:FormGroup
  IContact:Contact = new Contact;

  constructor(private fb: FormBuilder){

  }
  
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.contact = this.fb.group({
      name:[''],
      email:[''],
      message:['']
    })
  }

  send(){
    this.IContact = Object.assign({}, this.IContact, this.contact.value);
    console.log(this.IContact)
  }
}
