import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactFormService } from '../../commons/services/contact-form.service';
import { FixedTextAreaHeightByMessagesErrorsDirective } from '../../commons/directives/fixed-text-area-height-by-messages-errors.directive';
import { RecaptchaService } from '../../commons/services/recaptcha.service';
import { ModalService } from '../../commons/services/modal.service';
import { ContactFormResponse } from '../../commons/interfaces/response.interface';
import { PrivacyPolicyService } from '../../commons/services/private-policy.service';
import { AnimateOnScrollDirective } from '../../commons/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FixedTextAreaHeightByMessagesErrorsDirective,
    AnimateOnScrollDirective
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  socialsMedia: { src: string; alt: string; href: string }[] = [
    {
      src: './assets/icons/whatsapp.png',
      alt: 'Ícono Whatsapp',
      href: 'https://wa.me/573186496090',
    },
    {
      src: './assets/icons/linkedin.png',
      alt: 'Ícono linkedIn',
      href: 'https://linkedin.com/in/braynner-polo',
    },
    {
      src: './assets/icons/github.png',
      alt: 'Ícono Github',
      href: 'https://github.com/braynner212',
    },
    {
      src: './assets/icons/instagram.png',
      alt: 'Ícono Instagram',
      href: 'https://instagram.com/braynner.dev.ai',
    },
  ];

  constructor(
    private formBuild: FormBuilder,
    private contactFormServ: ContactFormService,
    private recaptchaServ: RecaptchaService,
    private modalService: ModalService,
    private privatePolicyServ: PrivacyPolicyService
  ) {}

  ngOnInit(): void {
    this.makeForm();
  }

  ngAfterViewInit(): void {
    this.form
      .get('privacy_policy')
      ?.valueChanges.subscribe((checked: boolean) => {
        if (checked) {
          this.form.get('privacy_policy_timestamp')!.setValue(new Date().toISOString());
        }
      });
  }

  makeForm() {
    this.form = this.formBuild.group({
      name_complete: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/),
        ],
      ],
      mail: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(255),
        ],
      ],
      privacy_policy: [false, [Validators.requiredTrue]],
      privacy_policy_timestamp: ['', [Validators.required]],
    });
  }

  async onSubmit() {
  console.log(this.form.value);
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach((key) => {
        if (this.form.controls[key].invalid) {
          this.form.controls[key].markAsTouched();
        }
      });
    } else {
      try {
        const recaptchaToken = await this.recaptchaServ.executeRecaptcha(
          'submit'
        );

        this.openModal({ message: 'Enviando...', type: 'loading' });

        this.contactFormServ
          .sendData(this.form.value, recaptchaToken)
          .subscribe({
            next: (response: ContactFormResponse) => {
              setTimeout(() => {
                this.closeModal();
                this.openModal({ message: response.message, type: 'success' });
              }, 1500);
            },
            error: (error) => {
              this.closeModal();
              if (
                error.error.message ===
                  'Exceso de solicitudes, debe esperar 1 día para de intentarlo de nuevo.' ||
                error.error.message === 'Verificación reCAPTCHA fallida'
              ) {
                this.openModal({
                  message: error.error.message,
                  type: 'error',
                });
              } else {
                this.openModal({
                  message:
                    'Estamos presentando algunos inconvenientes, si persisten existes otros medios para que conversemos LinkedIn, Whatsapp e Instagram',
                  type: 'error',
                });
              }
            },
            complete: () => {
              this.form.reset();
            },
          });
      } catch {
        this.closeModal();
        this.openModal({
          message:
            'Estamos presentando algunos inconvenientes, si persisten existes otros medios para que conversemos LinkedIn, Whatsapp e Instagram',
          type: 'error',
        });
      }
    }
  }

  openModal(config: {
    message: string;
    type: 'success' | 'error' | 'loading';
  }) {
    this.modalService.open({
      message: config.message,
      type: config.type,
    });
  }

  closeModal() {
    this.modalService.close();
  }

  openPrivacyPolicy() {
    this.privatePolicyServ.open();
  }

  closePrivacyPolicy() {
    this.privatePolicyServ.close();
  }
}
