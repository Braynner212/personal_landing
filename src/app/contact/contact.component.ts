import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactFormService } from '../commons/services/contact-form.service';
import { FixedTextAreaHeightByMessagesErrorsDirective } from '../commons/directives/fixed-text-area-height-by-messages-errors.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FixedTextAreaHeightByMessagesErrorsDirective
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  form!: FormGroup;

  socialsMedia: { src: string; alt: string }[] = [
    { src: './assets/icons/whatsapp.png', alt: 'Ícono Whatsapp' },
    { src: './assets/icons/linkedin.png', alt: 'Ícono linkedIn' },
    { src: './assets/icons/github.png', alt: 'Ícono Github' },
    { src: './assets/icons/instagram.png', alt: 'Ícono Instagram' },
  ];

  constructor(
    private formBuild: FormBuilder,
    private contactFormService: ContactFormService,
  ) {
  }

  ngOnInit(): void {
    this.makeForm();
  }

  makeForm() {
    this.form = this.formBuild.group({
      name_complete: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      mail: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
      message: ['', [Validators.required, Validators.maxLength(1000)]],
    });
  }

  sendMessage() {
    console.log(this.form);

    if (this.form.valid) {
      this.contactFormService
        .createContactForm(this.form.value)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
  
}
